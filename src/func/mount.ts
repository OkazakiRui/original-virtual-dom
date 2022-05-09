import globalState from '../state';

/**
 * 仮想DOMを実際のHTMLにマウントします。
 * マウントに成功した場合はglobalStateのlifecycleStateをafterMountにします。
 * @date 2022-05-09
 * @param { HTMLElement | Text} el
 */
const mount = (el: HTMLElement | Text) => {
  const appElement = document.getElementById('app');
  if (!appElement) throw new Error('#app が存在しません');
  appElement.appendChild(el);
  globalState.lifecycle = 'afterMount';
};
export default mount;
