import { ReactNode } from "react";

interface BadgeProps {
  count?: number | ReactNode;//如果没有count 则显示点点
  overflowCount?: number;//数字超出范围
  color?: string;//徽标颜色
  children: ReactNode;//插入dom元素
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  offset?: Array<number> | any;//[10,10] 修改定位
}

export const MyBadge: React.FC<BadgeProps>