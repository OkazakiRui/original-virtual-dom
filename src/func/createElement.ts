import { VirtualNode } from './../types/VirtualNode';

/**
 * 要素を仮想DOMから実際のDOMに変換する処理
 * @date 2022-05-09
 * @param { VirtualNode | string } vnode
 * @returns { HTMLElement | Text }
 */
const createElement = (vnode: VirtualNode | string): HTMLElement | Text => {
  // vnodeは仮想DOM || string なので、stringの場合はTextNodeを返却するようにする
  if (typeof vnode === 'string') return document.createTextNode(vnode);

  const el = document.createElement(vnode.htmlTagName);
  if (vnode.props)
    for (const [key, value] of Object.entries(vnode.props)) {
      // el[key] = value → プロパティがない場合があり、エラーが出る
      el.setAttribute(key, value);
    }

  // children が存在する場合要素がなくなるまで処理を回す
  if (vnode.children)
    for (const child of vnode.children) {
      // child が文字列の場合はTextNodeを生成し、vnode の場合は createElement を呼び再度処理を続ける
      const appendElement =
        typeof child === 'string'
          ? document.createTextNode(child)
          : createElement(child);
      el.appendChild(appendElement);
    }

  return el;
};

export default createElement;
