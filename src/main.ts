import diff from './func/diff';
import mount from './func/mount';
import globalState from './state';

/**
 * main loopです。30ms毎に実行されます。
 * @date 2022-05-09
 */
const main = () => {
  const { lifecycle, viewElement, oldVNode, newVNode } = globalState;
  if (lifecycle === 'beforeMount') mount(viewElement);
  else diff(viewElement, oldVNode, newVNode);
};

(() => {
  main();
  window.setInterval(() => main(), 30);
})();
