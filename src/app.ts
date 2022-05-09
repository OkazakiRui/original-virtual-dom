import createElement from './func/createElement';
import h from './func/createVNode';
import diff from './func/diff';
import mount from './func/mount';
import globalState from './state';

const oldVNode = h('div', { id: 'new-dom', class: 'test' }, ['Hello World!']);
const newVNode = h('div', { id: 'new-dom', class: 'test' }, ['Hello Diff!']);
const el = createElement(oldVNode);

/**
 * main loopです。30ms毎に実行されます。
 * @date 2022-05-09
 */
const main = () => {
  if (globalState.lifecycle === 'beforeMount') mount(el);
  else diff(el, oldVNode, newVNode);
};

main();
window.setInterval(() => main(), 30);
