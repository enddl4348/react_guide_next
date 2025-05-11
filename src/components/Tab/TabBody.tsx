import React, { ReactNode } from 'react';

interface TabBodyProps {
    children: ReactNode;
}

export default function TabBody({ children }: TabBodyProps) {
    return <div className="tab__body">{children}</div>;
}
