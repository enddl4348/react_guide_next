import { ReactNode } from 'react';
import { useAccordion } from './Accordion';

interface AccordionButtonProps {
    children: ReactNode;
    index: number;
}

function AccordionButton({ children, index }: AccordionButtonProps) {
    const { toggleAccordion } = useAccordion();
    return (
        <button
            className="accordion__btn"
            onClick={() => toggleAccordion(index)}
        >
            {children}
        </button>
    );
}

export default AccordionButton;
