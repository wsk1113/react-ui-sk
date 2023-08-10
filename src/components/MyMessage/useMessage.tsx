import { useState } from "react";
import {MyMessage} from "./MyMessage";
import {CSSTransition} from 'react-transition-group'
type DialogConfig = {
  title: string;//标题
  duration:number;//延迟时间
  type:string | 'tips';//类型
};

type UDResult = [JSX.Element, () => void];

function useMessage({
  title,duration,type
}: DialogConfig): UDResult {
  const [showMessage, setShowMessage] = useState(false);

  const openMessage = () => {
    setShowMessage(true)
    setTimeout(() => {
      setShowMessage(false);
    }, duration);
  };

  return [
    <>
    <CSSTransition
        in={showMessage}
        timeout={300}
        classNames="message"
        unmountOnExit
      >
        <MyMessage title={title} type={type}></MyMessage>
      </CSSTransition>
    </>,

    openMessage,
  ];
}
export default useMessage;