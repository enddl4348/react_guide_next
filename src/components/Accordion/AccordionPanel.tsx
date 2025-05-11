import { ReactNode } from 'react';
import { useAccordion } from './Accordion';
import { AnimatePresence, motion } from 'framer-motion';

interface AccordionPanelProps {
    children: ReactNode;
    index: number;
}

function AccordionPanel({ children, index }: AccordionPanelProps) {
    const { activeIndices, animationMode } = useAccordion();
    const isOpen: boolean = activeIndices.includes(index);

    return animationMode ? (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="accordion__panel"
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    style={{ overflow: 'hidden' }}
                >
                    <div className="accordion__panel-box">{children}</div>
                </motion.div>
            )}
        </AnimatePresence>
    ) : (
        isOpen && (
            <div className="accordion__panel">
                <div className="accordion__panel-box">{children}</div>
            </div>
        )
    );
}

export default AccordionPanel;
