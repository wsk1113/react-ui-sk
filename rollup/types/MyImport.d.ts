export interface ImportColumnItem {
    [key: string]: string | number | any;
}
interface MyImportProps {
    columns: ImportColumnItem[]// 定义导入列名数组
    importXlsx: (data: Array<object>) => void //调用函数，获取导入的数据
    inputShow?: boolean;//按钮形式：false;上传边框样式：ture
    width?:string;//边框宽度
    height?:string;//边框高度
}

export const MyImport: React.FC<MyImportProps>