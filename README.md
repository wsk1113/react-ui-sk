<!--
 * @Author: 2363430948@qq.com wangshaokang@example.com
 * @Date: 2023-08-09 21:03:16
 * @LastEditors: 2363430948@qq.com wangshaokang@example.com
 * @LastEditTime: 2023-08-10 21:50:27
 * @FilePath: \react-project\rollup\README.md
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

### @安装使用

#### 安装 sk UI

```shell
# 没有安装nrm源管理工具时...
npm i -g nrm

# NPM全局切换到官方源
nrm use npm

# 安装石头UI/React
npm i @wsk1113/react-ui-sk
```

#### 使用 sk 弹窗

```shell
  showPopup: boolean;//弹窗状态
  children: ReactNode;//插入dom元素
  toggle: React.Dispatch<React.SetStateAction<boolean>>;//修改弹窗状态
  title: string;//标题
  onConfirm: () => void;//确定事件
```

```tsx
import React, { useState } from "react";

// 引入sk弹窗
import { MyPopup } from "@wsk1113/react-ui-sk";

export default function PopupDemo() {
  // 用一个state控制要不要显示弹窗
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div>
      <h3>PopupDemo</h3>
      <button
        onClick={() => {
          console.log(111);
          setShowPopup(true);
        }}
      >
        开启弹窗
      </button>
      <MyPopup
        toggle={setShowPopup}
        showPopup={showPopup}
        title="弹窗标题"
        onConfirm={() => console.log("已确定")}
      >
        <p>This is a modal content</p>
      </MyPopup>
    </div>
  );
}
```

#### 使用 sk 徽标数

```shell
  count?: number | ReactNode;//如果没有count 则显示点点
  overflowCount?: number;//数字超出范围
  color?: string;//徽标颜色
  children: ReactNode;//插入dom元素
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: Array<number> | any;//[10,10] 修改定位
```

```tsx
// 引入sk 徽标数
import { MyBadge } from "@wsk1113/react-ui-sk";

export default function Demo() {
  return (
    <div>
      <MyBadge count={1} overflowCount={999} color="#007bff">
        <p style={{ width: "50px", height: "40px", background: "red" }}>Text</p>
      </MyBadge>
    </div>
  );
}
```

#### 使用 sk 开关

```shell
  checked: boolean; //状态
  onChange: (event: ChangeEvent<HTMLInputElement>) => void; //监听状态变化事件
  bgColor?: string; //开关 开启背景色
```

```tsx
// 引入sk 开关
import { MySwitch } from "@wsk1113/react-ui-sk";
import { ChangeEvent, useState } from "react";
export default function Demo() {
  const [isChecked, setIsChecked] = useState(false);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <div>
      <MySwitch checked={isChecked} onChange={handleChange} bgColor="red" />
    </div>
  );
}
```

#### 使用 sk 签名组件

```shell
  width?: number; // 画布宽度 默认：400
  height?: number; // 画布高度 默认：200
  lineWidth?: number; // 线宽 默认：4
  strokeColor?: string; // 线段颜色 默认：'red'
  lineCap?: string; // 设置线条两端圆角 默认：'round'
  lineJoin?: string; // 线条交汇处圆角 默认：'round'
  bgColor?: string; // 画布背景颜色 默认：'transparent'
  showBtn?: boolean; // true 按钮 false 选中框
  onSave?: (blob: Blob) => void; //当保存时的回调, blob为生成的图片
  onClear?: (canvasContext: CanvasRenderingContext2D) => void; //当画布清空时的回调, 参数为画布的上下文对象,可以直接使用canvas的api
  onDrawEnd?: (canvas: HTMLCanvasElement) => void; //当画布结束时的回调
```

```tsx
// 引入sk 签名组件
import { MySignature } from "@wsk1113/react-ui-sk";

export default function Demo() {
  return (
    <div>
      <MySignature width={400} showBtn={true}></MySignature>
    </div>
  );
}
```

### 表格数据和类型定义-参考

```js
const columns = [
  { key: "id", label: "ID", type: "sort" },
  { key: "name", label: "缴纳项目", type: "normal" },
  { key: "personage", label: "个人", type: "normal" },
  { key: "firm", label: "企业", type: "sort" },
  { key: "img", label: "照片", type: "image" },
  {
    key: "linkname",
    label: "链接",
    type: "link",
    color: "",
    render: (_label: string, record: object) => {
      getLink(record);
    },
  },
  { key: "total", label: "合计", type: "normal" },
  {
    key: "Controls",
    label: "操作",
    type: "controls",
    render: (_: string, record: object) => (
      <>
        <button onClick={() => handleEdit(record)}>Edit</button>
        <button onClick={() => handleDelete(record)}>Delete</button>
      </>
    ),
  },
];
const [row, setRow] = useState([
  {
    id: 1,
    name: "养老保险",
    personage: 40,
    firm: 35,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 2,
    name: "医疗保险",
    personage: 100,
    firm: 30,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 3,
    name: "失业保险",
    personage: 25,
    firm: 35,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 4,
    name: "养老保险",
    personage: 40,
    firm: 25,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 5,
    name: "医疗保险",
    personage: 100,
    firm: 30,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 6,
    name: "失业保险",
    personage: 25,
    firm: 35,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 7,
    name: "养老保险",
    personage: 40,
    firm: 25,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 8,
    name: "医疗保险",
    personage: 100,
    firm: 30,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 9,
    name: "失业保险",
    personage: 25,
    firm: 35,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
  {
    id: 10,
    name: "养老保险",
    personage: 40,
    firm: 25,
    img: "/public/vite.svg",
    linkname: "百度",
    link: "https://www.baidu.com/",
    total: 1200,
  },
]);
```

#### 使用 sk Export 导出组件

```js
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
```

```tsx
// 引入sk 导出组件
import { MyExport, ExportRefType } from "@wsk1113/react-ui-sk";

export default function Demo() {
  const ExportRef: ExportRefType = useRef(null);
  const exportXlsx = () => {
    if (ExportRef.current) {
      ExportRef.current.exportXlsx();
    }
  };
  return (
    <div>
      <MyExport dataSource={row} columns={columns} ref={ExportRef}>
        <button onClick={exportXlsx}>导出</button>
      </MyExport>
    </div>
  );
}
```

#### 使用 sk 导入组件

```js
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
```

```tsx
// 引入sk 导入组件
import { MyImport } from "@wsk1113/react-ui-sk";

export default function Demo() {
  const importXlsx = (data: Array<any>) => {
    console.log(data);
  };
  return (
    <div>
      <MyImport
        columns={columns}
        importXlsx={importXlsx}
        inputShow={false}
      ></MyImport>
    </div>
  );
}
```

#### 使用 sk 提示组件

```js
title: string; //标题
duration: number; //延迟时间
type: string; //类型 成功success、失败error、警告warning、提示tips
```

```tsx
// 引入sk 提示组件
import { useMessage } from "@wsk1113/react-ui-sk";
export default function Demo() {
  const [MessageJSX, openMessage] = useMessage({
    title: "哥的窗窗",
    duration: 1000,
    type: "tips",
  });
  return (
    <div>
      <button
        onClick={() => {
          openMessage();
        }}
      >
        显示提示
      </button>
      弹窗JSX
      {MessageJSX}
    </div>
  );
}
```

#### 使用 sk 表格组件

```js
interface Column {
  key: string;
  label: string;
  type: ("normal" & "controls" & "imges" & "link" & "sort") | string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  render?:
    | ((_: Array<object> | string, item: TableDataItem) => ReactNode)
    | any;
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
```

```tsx
// 引入sk 表单组件
import { MyTable } from "@wsk1113/react-ui-sk";
export default function Demo() {
  //columns和rows可以看--表格数据和类型定义-参考
  return (
    <div>
      <MyTable columns={columns} data={rows} lineHeight="45px" width="600px" />
    </div>
  );
}
```

#### 使用 sk 搜索筛选组件

```js
export interface InputField {
    key: string;
    placeholder?: string;
    type: 'text' | 'select' | 'datetime-local';
    options?: string[];
    handleChange: (val: string) => void
}
interface SearchBoxProps {
    onSearch: () => void;//搜索
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onReset?: (() => void | undefined) | any;//重置
    inputFields: InputField[];//每个搜索的类型数据
    inputData: { [key: string]: string | number };//搜索框表单数据
}
```

```tsx
// 引入sk 搜索筛选组件
import { MySearchBox,InputField } from "@wsk1113/react-ui-sk";
export default function Demo() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [time, setTime] = useState("");
  const inputFields: Array<InputField> = [
    {
      key: "query",
      placeholder: "Enter Value 1",
      type: "text",
      handleChange: (val: string) => {
        setQuery(val);
      },
    },
    {
      key: "category",
      placeholder: "Enter Value 2",
      type: "select",
      options: ["www", "eee", "rrr"],
      handleChange: (val: string) => {
        setCategory(val);
      },
    },
    {
      key: "time",
      placeholder: "Enter Value 3",
      type: "datetime-local",
      handleChange: (val: string) => {
        setTime(val);
      },
    },
  ];
  const handleSearch = () => {
    // 处理搜索逻辑
    console.log("query:", query, "category:", category, "time:", time);
  };
  const handleReset = () => {
    setQuery("");
    setCategory("");
    setTime("");
  };
  return (
    <div>
      <MySearchBox
        onSearch={handleSearch}
        onReset={handleReset}
        inputFields={inputFields}
        inputData={{ query, category, time }}
      ></MySearchBox>
    </div>
  );
}
```
