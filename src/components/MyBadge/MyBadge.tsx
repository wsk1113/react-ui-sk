import React, { ReactNode } from 'react';
import './style/index.css';

interface BadgeProps {
  count?: number | ReactNode;//如果没有count 则显示点点
  overflowCount?: number;//数字超出范围
  color?: string;//徽标颜色
  children: ReactNode;//插入dom元素
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: Array<number> | any;//[10,10] 修改定位
}

const MyBadge: React.FC<BadgeProps> = ({ count, color, children, offset, overflowCount }) => {
  const over = overflowCount === undefined ? 0 : overflowCount

  const style = {
    backgroundColor: color || 'red',
    bottom: `${28 + (offset === undefined ? 0 : offset[0])}px`,
    left: `${40 + (offset === undefined ? 0 : offset[1])}px`,
  };
  const txetstyle = {
    backgroundColor: color || 'red',
    top: `${-3 + (offset === undefined ? 0 : offset[0])}px`,
    right: `${-4 + (offset === undefined ? 0 : offset[1])}px`,
  };
  return (
    <div className="badge">
      {children}
      {count === undefined ?
        <p className='dian' style={txetstyle}></p>
        : <p className="badge-count" style={style}>
          <span>{(count as number) > over && typeof (count) === "number" ? over + '+' : count}</span>
        </p>}

    </div>
  );
};

export default MyBadge;