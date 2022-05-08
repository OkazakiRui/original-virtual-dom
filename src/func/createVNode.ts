import { VirtualNode } from '../types/VirtualNode';

/**
 * 仮想Nodeを生成するヘルパー関数です。
 * @date 2022-05-09
 * @param { string } htmlTagName
 * @param { { [key: string]: string; } } props
 * @param { VirtualNode[] | string[] } children
 * @returns { VirtualNode }
 */
const h = (
  htmlTagName: VirtualNode['htmlTagName'],
  props: VirtualNode['props'],
  children: VirtualNode['children']
): VirtualNode => ({
  htmlTagName,
  props,
  children,
});

export default h;
