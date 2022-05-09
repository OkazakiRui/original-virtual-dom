import createElement from '../func/createElement';
import h from '../func/createVNode';
import { VirtualNode } from '../types/VirtualNode';

const defaultElement = h('div', { class: 'wrap' }, [
  h('h3', {}, ['count: 0']),
  h('button', { type: 'button' }, ['decrement']),
  h('button', { type: 'button' }, ['increment']),
]);

const globalState: {
  lifecycle: 'beforeMount' | 'afterMount';
  oldVNode: VirtualNode;
  newVNode: VirtualNode;
  viewElement: HTMLElement | Text;
  data: { [key: string]: string };
} = {
  lifecycle: 'beforeMount',
  oldVNode: defaultElement,
  newVNode: defaultElement,
  viewElement: createElement(defaultElement),
  data: {},
};

export default globalState;
