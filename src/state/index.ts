import createElement from '../func/createElement';
import h from '../func/createVNode';
import { VirtualNode } from '../types/VirtualNode';

const defaultElement = h('div', {}, []);

const globalState: {
  lifecycle: 'beforeMount' | 'afterMount';
  oldVNode: VirtualNode;
  newVNode: VirtualNode;
  viewElement: HTMLElement | Text;
  state: [string, string | number][];
} = {
  lifecycle: 'beforeMount',
  oldVNode: defaultElement,
  newVNode: defaultElement,
  viewElement: createElement(defaultElement),
  state: [],
};

/**
 * newVNodeの値を更新します
 * @date 2022-05-09
 * @param { VirtualNode } initialVNode
 */
export const setVNode = (initialVNode: VirtualNode) =>
  (globalState.newVNode = initialVNode);

/**
 * stateを作成します
 * @date 2022-05-09
 * @param { string } key
 * @param { string | number } value
 */
export const createState = (key: string, value: string | number) => {
  globalState.state.push([key, value]);
};

/**
 * state名を渡すと値を返します。
 * @date 2022-05-09
 * @param { string } key
 * @returns { string | number } value
 */
export const getState = (key: string) =>
  globalState.state[globalState.state.map((s) => s[0]).indexOf(key)][1];

/**
 * stateを更新します。
 * @date 2022-05-09
 * @param { string} key
 * @param { string | number} value
 * @returns { void }
 */
export const setState = (key: string, value: string | number) => {
  globalState.state[globalState.state.map((s) => s[0]).indexOf(key)][1] = value;
};

export default globalState;
