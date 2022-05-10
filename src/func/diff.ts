import { VirtualNode } from '../types/VirtualNode';
import createElement from './createElement';

/**
 * 差分をチェックし、変更があれば更新する関数
 * @date 2022-05-09
 * @param { HTMLElement | ChildNode } el
 * @param { VirtualNode | string } oldVNode
 * @param { VirtualNode | string } newVNode
 */
const diff = (
  el: HTMLElement | ChildNode,
  oldVNode: VirtualNode | string | undefined,
  newVNode?: VirtualNode | string
) => {
  // 両方の仮想DOMが存在しない場合は処理を終了する
  if (!newVNode && !oldVNode) return;

  // 差分を見る最新の vnode が存在しない場合は el を削除する
  if (!newVNode) return el.remove();

  // 古い vnode が存在しない場合は全てが差分になるので newVNode の要素を作成する
  if (!oldVNode) return el.appendChild(createElement(newVNode));

  const replace = () => el.replaceWith(createElement(newVNode));

  // どちらかが TextNode の場合は判定をせずに要素を置き換える
  if (typeof oldVNode === 'string' || typeof newVNode === 'string') {
    if (oldVNode !== newVNode) return replace();
  } else {
    // htmlの要素名が違う場合
    if (oldVNode.htmlTagName !== newVNode.htmlTagName) return replace();

    // props(属性)が違う場合
    // entriesでオブジェクトを配列に変換し、sortをすることで順序性を保証することにより差分をチェックする
    // '[["id","idTest"],["class","classTest"]]'
    const oldProps = JSON.stringify(Object.entries(oldVNode.props).sort());
    const newProps = JSON.stringify(Object.entries(newVNode.props).sort());
    if (oldProps !== newProps) return replace();

    // childrenが違う場合
    [...el.childNodes].forEach((child, index) => {
      diff(child, oldVNode.children[index], newVNode.children[index]);
    });
  }
};

export default diff;
