import React, { ReactNode, useState, createContext, useContext } from 'react';
import cn from 'classnames';

import TabBody from './TabBody';
import TabButton from './TabButton';
import TabHead from './TabHead';
import TabPanel from './TabPanel';

export interface TabContextType {
    activeIndex: number;
    setActiveIndex: (index: number) => void;
    btnType: 'line' | 'round';
}

export const TabsContext = createContext<TabContextType | undefined>(undefined);

export function useTabsContext(): TabContextType {
    const context = useContext(TabsContext);
    if (!context) {
        throw new Error('This component must be used within a Tabs component');
    }
    return context;
}

interface TabProps {
    children: ReactNode;
    defaultActiveIndex?: number;
    btnType?: 'line' | 'round';
    tabScroll?: Boolean;
}

export default function Tab({
    children,
    defaultActiveIndex = 0,
    btnType = 'line',
    tabScroll = false,
}: TabProps) {
    const [activeIndex, setActiveIndex] = useState<number>(defaultActiveIndex);

    return (
        <TabsContext.Provider value={{ activeIndex, setActiveIndex, btnType }}>
            <div
                className={cn('tab', {
                    'tab--round': btnType === 'round',
                    'tab--scroll': tabScroll,
                })}
            >
                {children}
            </div>
        </TabsContext.Provider>
    );
}

Tab.Body = TabBody;
Tab.Button = TabButton;
Tab.Head = TabHead;
Tab.Panel = TabPanel;
