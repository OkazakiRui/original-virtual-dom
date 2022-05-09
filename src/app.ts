import { createState, getState, setState } from './state/index';
import h from './func/createVNode';
import './main';
import globalState, { setVNode } from './state';

createState('count', 0);
setVNode(
  h('div', { class: 'wrap' }, [
    h('h3', {}, ['カウント: ', h('span', { id: 'count' }, ['0'])]),
    h('button', { type: 'button', id: 'increment' }, ['increment']),
    h('button', { type: 'button', id: 'decrement' }, ['decrement']),
  ])
);

const timer: NodeJS.Timer = setInterval(() => {
  if (globalState.lifecycle === 'beforeMount') return;

  // 処理はこの中に記述する
  /* ===================================================================== */

  const countElement = document.getElementById('count');

  const increment = () => {
    setState('count', Number(getState('count')) + 1);
    if (countElement === null) return;
    countElement.textContent = String(getState('count'));
  };
  const decrement = () => {
    setState('count', Number(getState('count')) - 1);
    if (countElement === null) return;
    countElement.textContent = String(getState('count'));
  };

  const incrementButton = document.getElementById('increment');
  const decrementButton = document.getElementById('decrement');
  incrementButton?.addEventListener('click', () => increment());
  decrementButton?.addEventListener('click', () => decrement());

  /* ===================================================================== */

  clearInterval(timer);
}, 30);
