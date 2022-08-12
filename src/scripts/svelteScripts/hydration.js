import Test from '../../_includes/components/test.svelte';
import More from '../../_includes/components/more.svelte';
/* eslint no-new: "off" */
/* eslint-disable no-undef  */
function registerComponent(Component, name) {
  console.log(document.querySelectorAll(`.${name}`));
  for (const element of document.querySelectorAll(`.${CSS.escape(name)}`)) {
    console.log(Component, element);
    const properties = JSON.parse(element.dataset.props);
    new Component({
      target: element,
      props: properties,
      hydrate: true,
    });
  }
}

console.log('fml');
registerComponent(Test, 'svelte--test');
registerComponent(More, 'svelte--more');
/* eslint-enable no-undef */
