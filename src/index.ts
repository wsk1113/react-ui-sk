/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 21:06:51
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-10 19:49:17
 * @FilePath: \react-project\src\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

import { Ref } from "react";

/* 导出需要打包的组件目录 */
export { default as MyPopup } from "./components/MyPopup/MyPopup";
export { default as MyBadge } from "./components/MyBadge/MyBadge";
export { default as MySwitch } from "./components/MySwitch/MySwitch";
export { default as MySignature } from "./components/MySignature/MySignature";
export { default as MyExport } from "./components/MyExport/MyExport";
export { default as MyImport } from "./components/MyImport/MyImport";
export type ExportRefType = Ref<{ exportXlsx: () => void }>;
export { default as useMessage } from "./components/MyMessage/useMessage";
export { default as MyTable } from "./components/MyTable/MyTable";
export interface TableDataItem {
  id: number;
  [key: string]: string | number | undefined;
}
export { default as MySearchBox } from "./components/MySearchBox/MySearchBox";
export interface InputField {
  key: string;
  placeholder?: string;
  type: "text" | "select" | "datetime-local";
  options?: string[];
  handleChange: (val: string) => void;
}
