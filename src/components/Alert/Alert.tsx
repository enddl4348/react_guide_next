import React, {  useState, } from 'react';
import {motion} from "framer-motion";
import cn from 'classnames';
import {Button } from '@/components';


interface AlertProps {
    isOpen?: boolean;
    setOpen: (isOpen: boolean) => void;
    onOpen? : () => void;
    onClose? : () => void;
    className?: string;
    children?: React.ReactNode;
    alertTitle?: boolean;
    alertText?: boolean;
}

export default function Alert({
    isOpen,
    setOpen,
    onOpen,
    onClose,
    className,
    children,
    alertTitle,
    alertText,
}: AlertProps) {
    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
    >
        <div className="flex items-center justify-between">
            <Button size="small" onClick={() => setOpen(false)}>닫기</Button>
            </div>
    </motion.div>
    )
}
