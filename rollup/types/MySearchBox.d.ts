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

export const MySearchBox: React.FC<SearchBoxProps>