const path = require('path')
const rollup = require('rollup');
const svelte = require('rollup-plugin-svelte');
const ts = require('@rollup/plugin-typescript');

function renderComponent(component, filename, props) {
  const t = component.render(props);
  return `<div class="svelte--${(filename.replace('.svelte',''))}" data-props='${JSON.stringify(props || {})}'>${t.html}</div>`
} 

function requireFromString(src, filename) {
  var m = new module.constructor();
  m.paths = module.paths;
  m._compile(src, filename);
  return m.exports;
}

module.exports = async function svelteShortcode(filename, props) {
  // find the component which is requested
  const input = path.join(process.cwd(), 'src', '_includes', 'components', filename);

  // create the rollup ssr build
  const build = await rollup
      .rollup({
        input,
        plugins: [ts(),
          svelte({
           compilerOptions:{ generate: 'ssr',
            hydratable: true},
            emitCss: false,
          }),
        ],
        external: [/^svelte/],
      });

  // generate the bundle
  const bundle = await build.generate({
    format: 'cjs',
    exports: 'named',
  })
  const main = bundle.output[0];
  if (main.facadeModuleId) {
    const Component = requireFromString(main.code, main.facadeModuleId).default;
    const tt = renderComponent(Component, filename, props);

    return tt
  }
}