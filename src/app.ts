import createElement from './func/createElement';
import h from './func/createVNode';
import diff from './func/diff';

const main = () => {
  const appElement = document.getElementById('app');
  if (!appElement) throw new Error('#app が存在しません');

  const oldVNode = h('div', { id: 'new-dom', class: 'test' }, ['Hello World!']);
  const newVNode = h('div', { id: 'new-dom', class: 'test' }, ['Hello Diff!']);

  const el = createElement(oldVNode);
  appElement.appendChild(el);

  diff(el, oldVNode, newVNode);
};
main();
