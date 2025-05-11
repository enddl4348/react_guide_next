import React, { ReactNode } from 'react';

interface TabHeadProps {
    children: ReactNode;
}

export default function TabHead({ children }: TabHeadProps) {
    return (
        <div className="tab__head">
            <ul className="tab__buttons">{children}</ul>
        </div>
    );
}
