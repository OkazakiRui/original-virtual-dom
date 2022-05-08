export type VirtualNode = {
  htmlElement: string;
  props: {
    [key: string]: string;
  };
  children: VirtualNode[];
};
