export type VirtualNode = {
  htmlTagName: string;
  props: {
    [key: string]: string;
  };
  children: (VirtualNode | string)[];
};
