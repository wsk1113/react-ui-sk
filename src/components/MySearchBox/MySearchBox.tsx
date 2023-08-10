import React, { FormEvent } from 'react';
import './style/index.css'; // 导入样式文件

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

const MySearchBox: React.FC<SearchBoxProps> = ({ onSearch, inputFields, inputData, onReset }) => {
    //提交
    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault();
        onSearch();

    };
    //重置
    const handleFormReset = (event: FormEvent) => {
        event.preventDefault();
        onReset()
    };

    return (
        <form onSubmit={handleFormSubmit} onReset={handleFormReset} className="search-form">
            {inputFields.map((field) => {
                if (field.type === 'text') {
                    return (
                        <input
                            key={field.key}
                            type="text"
                            value={inputData[field.key]}
                            onChange={(e) => field.handleChange(e.target.value)}
                            placeholder={field.placeholder}
                            className="search-input"
                        />
                    );
                } else if (field.type === 'select') {
                    return (
                        <select
                            key={field.key}
                            value={inputData[field.key]}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="search-input"
                        >
                            <option value="">全部</option>
                            {field.options &&
                                field.options.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                        </select>
                    );
                } else if (field.type === 'datetime-local') {
                    return (
                        <input
                            key={field.key}
                            type="datetime-local"
                            value={inputData[field.key]}
                            onChange={(e) => field.handleChange(e.target.value)}
                            className="search-input"
                            placeholder={field.placeholder}
                        />
                    );
                }
            })}
            <button type="submit" className="search-button">搜索</button>
            <button type="reset" className="reset-button">重置</button>
        </form>
    );
};
export default MySearchBox;