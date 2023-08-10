/*
 * @Author: wangshaokang wangshaokang@example.com
 * @Date: 2023-07-24 08:43:27
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-10 19:48:49
 * @FilePath: \react-project\src\components\MyTable\MyTable.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { ReactNode, useState } from 'react';
import './style/index.css'
interface Column {
  key: string;
  label: string;
  type: 'normal' & 'controls' & 'imges' & 'link' & 'sort' | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?:((_:Array<object> | string, item:TableDataItem) => ReactNode) | any;
  color?:string//行中字体颜色
}

export interface TableDataItem {
  id: number;
  [key: string]: string | number | undefined;
}

interface CustomTableProps {
  columns: Column[];//表头及数据类型
  data: TableDataItem[];//表格数据
  width?: string;//表格的整体宽度
  lineHeight?: string//行高
}

const MyTable: React.FC<CustomTableProps> = ({ columns, data, width, lineHeight }) => {
  const [isSortingAsc, setisSortingAsc] = useState(true)
  // 排序函数
  const setSort = (key: string) => {
    setisSortingAsc(!isSortingAsc)
    if (isSortingAsc === true) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.sort((a: TableDataItem | any, b: TableDataItem | any) => {
        return (b[key] > a[key] ? 1 : -1)
      })
    } else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      data.sort((a: TableDataItem | any, b: TableDataItem | any) => {
        return(a[key] > b[key] ? 1 : -1)
      })
    }
  }
  return (
    <table style={{ width }}>
      <thead>
        <tr style={{ height: lineHeight }}>
          {columns.map((column) => (
            <th key={column.key}>
              {column.type === 'sort' ? (
                <div className="sort" onClick={() => { setSort(column.key) }}>
                  <span>{column.label}</span>
                  <span>
                    {isSortingAsc ? '▲' : '▼'}
                  </span>
                </div>
              ) : (
                <span>{column.label}</span>
              )}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id} style={{ height: lineHeight }}>
            {columns.map((column) => (
              <td key={column.key}>
                {column.type === 'image' ? (
                  <img src={(item[column.key] as string)} alt="" />
                ) : column.type === 'link' ? (
                  <><span className='link' style={{color:column.color}} onClick={() => {
                    column.render(item[column.key], item)
                  }}>{item[column.key]}</span></>
                ) : column.type === 'controls' ? (
                  <>{column.render([], item)}</>
                ) : (
                  <span style={{color:column.color}}>{item[column.key]}</span>
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table >
  )
}

export default MyTable;
