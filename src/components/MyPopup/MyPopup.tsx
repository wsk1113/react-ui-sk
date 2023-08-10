/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 20:17:43
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-09 21:12:04
 * @FilePath: \react-project\src\components\MyPopup\MyPopup.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { ReactNode } from "react";
import ReactDOM from "react-dom";

import "./style/index.scss";

interface ModalProps {
    showPopup: boolean;//弹窗状态
    children: ReactNode;//插入dom元素
    toggle: React.Dispatch<React.SetStateAction<boolean>>;//修改弹窗状态
    title: string;//标题
    onConfirm: () => void;//确定事件
}

const MyPopup: React.FC<ModalProps> = ({
    children,
    toggle,
    title,
    onConfirm,
    showPopup
}) => {
    const modalRoot = document.getElementById("root");

    const hidePopup = () => {
        toggle(false);
    };

    return (showPopup && ReactDOM.createPortal(
        <div className="mask">
            <div className="modal">
                <div className="title">
                    {title}
                    <button className="btnClose" onClick={hidePopup}>
                        X
                    </button>
                </div>

                <div className="content">{children}</div>

                <div className="btns">
                    <button onClick={hidePopup}>取消</button>
                    <button
                        onClick={() => {
                            onConfirm();
                            hidePopup();
                        }}
                    >
                        确定
                    </button>
                </div>
            </div>
        </div>,

        modalRoot as HTMLElement
    ))
};

export default MyPopup;

