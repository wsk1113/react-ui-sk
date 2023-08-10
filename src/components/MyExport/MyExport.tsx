/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 23:08:37
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-10 08:45:15
 * @FilePath: \react-project\src\components\MyExport\MyExport.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React ,{ ReactNode, useImperativeHandle } from 'react';
import type { Ref } from "react";
import * as XLSX from "xlsx";

interface DataSourceItem {
    [key: string]: string | number;
}

interface ExportColumnItem {
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

const MyExport = React.forwardRef((props: MyExportProps, ref: ExportRefType) => {
    const { dataSource, columns, children,filename='file' } = props;

    useImperativeHandle(ref, () => ({
        exportXlsx: exportXlsx,
    }));
    // 导出为xlsx文件
    const exportXlsx = () => {
        const workbook = XLSX.utils.book_new();
        const data = dataSourceToData(dataSource, columns);
        const worksheet = XLSX.utils.aoa_to_sheet(data);
        XLSX.utils.book_append_sheet(workbook, worksheet, "page1");
        XLSX.writeFile(workbook, `${filename}.xlsx`, { bookType: "xlsx" });
    };
    // 将数据源转换为xlsx包所需的数据格式
    const dataSourceToData = (ds: DataSourceItem[], cols: ExportColumnItem[]) => {
        const columns = cols.map(item => item.key);
        const list: any[] = [];
        const tHead = cols.map(item => item.label);
        list.push(tHead);
        ds.forEach(d => {
            const row: any[] = []
            columns.forEach(c => {
                row.push(d[c])
            })
            list.push(row)
        })

        return list;
    };

    return (
        <>
            {children}
        </>
    );
})
export default MyExport