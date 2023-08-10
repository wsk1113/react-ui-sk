import { ReactNode } from "react";

type ModalProps =  {
  showPopup: boolean;//弹窗状态
  children: ReactNode;//插入dom元素
  toggle: React.Dispatch<React.SetStateAction<boolean>>;//修改弹窗状态
  title: string;//标题
  onConfirm: () => void;//确定事件
}

export const MyPopup: React.FC<ModalProps>