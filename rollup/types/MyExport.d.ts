/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 23:15:05
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-10 08:41:36
 * @FilePath: \react-project\rollup\types\MyExport.d.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { ReactNode } from 'react';
import type { Ref } from "react";

interface DataSourceItem {
    [key: string]: string | number;
}

export interface ExportColumnItem {
    label: string;
    [key: string]: string | number | any;
}
export type ExportRefType = Ref<{ exportXlsx: () => void }>;

interface MyExportProps {
    children: ReactNode;
    dataSource: DataSourceItem[];// 数据源数组
    columns: ExportColumnItem[]// 列定义数组
    filename?:string;//导出的文件名
}
type ExportXlsx = {
    props:MyExportProps,
    ref:ExportRefType
}
export const MyExport: React.FC<ExportXlsx>;