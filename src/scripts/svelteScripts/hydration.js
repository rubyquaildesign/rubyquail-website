import Test from '../../_includes/components/test.svelte'
import More from '../../_includes/components/more.svelte'

function registerComponent(component, name) {

  console.log(document.querySelectorAll(`.${name}`));
  document.querySelectorAll(`.${CSS.escape(name)}`).forEach((element) => {
    console.log(component,element);
    const properties = JSON.parse(element.dataset.props);
    new component({
      target: element,
      props: properties,
      hydrate:true
    })
  })
}
console.log('fml');
registerComponent(Test,'svelte--test')
registerComponent(More,'svelte--more')