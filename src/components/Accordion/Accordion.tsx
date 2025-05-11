import { createContext, useContext, useState } from 'react';
import cn from 'classnames';

import AccordionItem from './AccordionItem';
import AccordionButton from './AccordionButton';
import AccordionPanel from './AccordionPanel';
import AccordionHead from './AccordionHead';

interface AccordionContextType {
    activeIndices: number[];
    toggleAccordion: (targerIndex: number) => void;
    animationMode?: boolean;
}

const AccordionContext = createContext<AccordionContextType | undefined>(
    undefined,
);

export function useAccordion() {
    const context = useContext(AccordionContext);
    if (!context) {
        throw new Error(
            'useAccordion must be used within an AccordionProvider',
        );
    }
    return context;
}

interface Accordion {
    children: React.ReactNode;
    type?: 'single' | 'multiple';
    defaultActiveIndices?: number[];
    animationMode?: boolean;
    variant?: 'box';
    splitMode?: boolean;
    onChange?: (activeIndices: number[]) => void;
}

export default function Accordion({
    children,
    type = 'single',
    defaultActiveIndices = [],
    animationMode = false,
    variant,
    splitMode = false,
    onChange,
}: Accordion) {
    const [activeIndices, setActiveIndices] =
        useState<number[]>(defaultActiveIndices);

    const toggleAccordion = (targetIndex: number): void => {
        const isActive: boolean = activeIndices.includes(targetIndex);
        let newActiveIndices: number[];

        if (type === 'single') {
            newActiveIndices = isActive ? [] : [targetIndex];
        } else {
            newActiveIndices = isActive
                ? activeIndices.filter((index) => index !== targetIndex)
                : [...activeIndices, targetIndex];
        }

        setActiveIndices(newActiveIndices);
        onChange?.(newActiveIndices);
    };

    return (
        <AccordionContext.Provider
            value={{ activeIndices, toggleAccordion, animationMode }}
        >
            <div
                className={cn('accordion', {
                    'accordion--box': variant === 'box',
                    'accordion--split': splitMode,
                })}
            >
                {children}
            </div>
        </AccordionContext.Provider>
    );
}

Accordion.Item = AccordionItem;
Accordion.Button = AccordionButton;
Accordion.Panel = AccordionPanel;
Accordion.Head = AccordionHead;
