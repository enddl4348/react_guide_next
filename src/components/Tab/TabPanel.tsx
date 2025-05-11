import React, { ReactNode } from 'react';
import { useTabsContext } from './Tab';

interface TabPanelProps {
    index: number;
    children: ReactNode;
}

export default function TabPanel({ index, children }: TabPanelProps) {
    const { activeIndex } = useTabsContext();

    const isShow: boolean = index === activeIndex;

    return isShow ? <div className="tab__panel">{children}</div> : null;
}
