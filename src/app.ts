import createElement from './func/createElement';
import h from './func/createVNode';

const main = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw new Error('#app が存在しません');
  appElement.appendChild(
    createElement(h('div', { id: 'new-dom' }, ['Hello World!']))
  );
};
main();
