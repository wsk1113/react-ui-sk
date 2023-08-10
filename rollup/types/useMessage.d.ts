
type DialogConfig = {
  title: string; //标题
  duration: number; //延迟时间
  type: string; //类型
};

type UDResult = [JSX.Element, () => void];

export const useMessage:({title,duration,type}: DialogConfig) =>  UDResult;
