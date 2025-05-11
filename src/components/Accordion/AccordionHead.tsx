import React, { ReactNode } from 'react';
import { Icon, Accordion } from '@/components';

interface AccordionHeadProsp {
    children: ReactNode;
    btnIndex?: number;
}
export default function AccordionHead({
    children,
    btnIndex,
}: AccordionHeadProsp) {
    return (
        <div className="accordion__head ">
            <div className="accordion__tit-box">
                {children && <span className="accordion__tit">{children}</span>}
            </div>

            {btnIndex !== undefined ? (
                <div className="accordion__arrow">
                    <Accordion.Button index={btnIndex}>
                        <span className="accordion__arrow-icon">
                            <Icon name="arrow_down" />
                        </span>
                    </Accordion.Button>
                </div>
            ) : (
                <div className="accordion__arrow">
                    <span className="accordion__arrow-icon">
                        <Icon name="arrow_down" />
                    </span>
                </div>
            )}
        </div>
    );
}
