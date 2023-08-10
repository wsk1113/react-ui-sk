import React, { FC, ChangeEvent } from 'react';
import './style/index.css';

interface SwitchProps {
  checked: boolean;//状态
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;//监听状态变化事件
  bgColor?:string //开关 开启背景色
}
const MySwitch: FC<SwitchProps> = ({ checked, onChange,bgColor }) => {
  return (
    <label className="switch" style={{backgroundColor: checked ? (bgColor !== undefined ? bgColor : '#03A9F4') : '#ccc',}}>
      <input
        className="switch-input"
        type="checkbox"
        checked={checked}
        onChange={onChange}
      />
      <span className="switch-slider"></span>
    </label>
  );
};
export default MySwitch;


