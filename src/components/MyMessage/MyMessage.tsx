import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import success from './svg/success.svg'
import tips from './svg/tips.svg'
import error from './svg/error.svg'
import warning from './svg/warning.svg'
type PopupProps = {
  title: string;//标题
  type: string;//类型
};

export const MyMessage: React.FC<PopupProps> = ({
  title, type
}) => {
  const popupRoot = document.getElementById("root");


  return ReactDOM.createPortal(
    // 全局遮罩
    <div className="box">
      {/* 弹窗内容 */}
      <div className="modal">
        {/* 内容区 */}
        <div className="title">
          {type === 'success' ?
            <img src={success} alt="" />
            : type === 'error' ?
              <img src={error} alt="" />
              : type === 'warning' ?
                <img src={warning} alt="" />
                : <img src={tips} alt="" />}
          <span>{title}</span>
        </div>
      </div>
    </div>,

    popupRoot as HTMLElement
  );
};

