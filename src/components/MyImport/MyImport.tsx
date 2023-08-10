/*
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 23:08:37
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-09 23:18:40
 * @FilePath: \react-project\src\components\MyImport\MyImport.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useRef } from 'react';
import * as XLSX from "xlsx";
import './style/index.css'
import add from './svg/add.svg'
interface ImportColumnItem {
    [key: string]: string | number | any;
}
interface MyImportProps {
    columns: ImportColumnItem[]// 定义导入列名数组
    importXlsx: (data: Array<object>) => void //调用函数，获取导入的数据
    inputShow?: boolean;//按钮形式：false;上传边框样式：ture
    width?:string;//边框宽度
    height?:string;//边框高度
}
const MyImport: React.FC<MyImportProps> = ({ columns, importXlsx, inputShow = true,width='150px',height='150px' }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [dataSource, setDataSource] = useState<any[]>([]);
    // 获取标题对应的列索引
    const getDataIndexByTitle = (obj: any, columns: ImportColumnItem[]) => {
        //去掉删除字段
        const setColumns = columns.filter(item => item.key !== 'Controls');
        const transformedData = setColumns.reduce((result, map) => {
            const { key, label } = map;
            result[key] = obj[label];
            return result;
        }, {});
        return transformedData
    };
    // 读取文件
    const importXLsx = (file: File) => {
        // 创建一个file读取器
        const fileReader = new FileReader();
        // 文件读取完毕后的回调
        fileReader.onload = (e: ProgressEvent<FileReader>) => {
            const fileReaderResult = e.target?.result;
            const workbook = XLSX.read(fileReaderResult as string, {
                type: "binary",
            });
            const wsname = workbook.SheetNames[0];
            const sheetJson = XLSX.utils.sheet_to_json(workbook.Sheets[wsname]);
            // 将数据转换为Table组件所需格式
            const ds:any = dataToDatasource(sheetJson);
            setDataSource(ds);
        };
        // 以二进制字符串的形式读取本地文件
        fileReader.readAsBinaryString(file);
        // 阻止Upload组件的上传逻辑
        return false;
    };

    // 文件转换
    const dataToDatasource = (data: any[]) => {
        const list: any[] = [];
        data.forEach((row) => {
            const obj: { [key: string]: any } = {};
            Object.entries(row).forEach(([key, value]) => {
                obj[key] = value;
            });
            list.push(getDataIndexByTitle(obj, columns));
        });
        importXlsx(list)
    };
    // 通过ref来引用
    const handleClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };
    return (
        <>
            {inputShow ? <div className='import-file' style={{width,height}}>
                <img src={add} alt="" />
                <input type="file"
                    accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                    onChange={(e) => importXLsx(e.target.files![0])} />
            </div>
                : <>
                    <input type="file"
                        ref={fileInputRef}
                        style={{ display: 'none' }}
                        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel"
                        onChange={(e) => importXLsx(e.target.files![0])} />
                    <button onClick={handleClick}>导入</button>
                </>
            }
        </>
    );
};
export default MyImport;