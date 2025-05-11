import { ReactNode } from 'react';
import { useAccordion } from './Accordion';
import cn from 'classnames';

interface AccordionItemProps {
    children: ReactNode;
    index: number;
}

function AccordionItem({ children, index }: AccordionItemProps) {
    const { activeIndices } = useAccordion();
    const isOpen: boolean = activeIndices.includes(index);
    return (
        <div
            className={cn('accordion__item', {
                'is-active': isOpen,
            })}
        >
            {children}
        </div>
    );
}

export default AccordionItem;
