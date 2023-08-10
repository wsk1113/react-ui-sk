/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 22:40:45
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-09 22:40:59
 * @FilePath: \react-project\rollup\types\MySwitch.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { FC, ChangeEvent } from 'react';
interface SwitchProps {
  checked: boolean; //状态
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; //监听状态变化事件
  bgColor?: string; //开关 开启背景色
}
export const MySwitch: React.FC<SwitchProps>
