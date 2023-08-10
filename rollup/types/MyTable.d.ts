import { ReactNode } from "react";

interface Column {
  key: string;
  label: string;
  type: ("normal" & "controls" & "imges" & "link" & "sort") | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?: ((_: Array<object> | string, item: TableDataItem) => ReactNode) | any;
  color?: string; //行中字体颜色
}

export interface TableDataItem {
  id: number;
  [key: string]: string | number | undefined;
}

interface CustomTableProps {
  columns: Column[]; //表头及数据类型
  data: TableDataItem[]; //表格数据
  width?: string; //表格的整体宽度
  lineHeight?: string; //行高
}
export const MyTable: React.FC<CustomTableProps>