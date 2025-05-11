import React, { ReactNode, MouseEvent } from 'react';
import cn from 'classnames';
import { useTabsContext } from './Tab';

interface TabButtonProps {
    index: number;
    children: ReactNode;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void; // 사용자 정의 클릭 이벤트
}

export default function TabButton({
    index,
    children,
    onClick,
    ...rest
}: TabButtonProps) {
    const { activeIndex, setActiveIndex, btnType } = useTabsContext();
    // console.log(activeIndex, setActiveIndex, btnType);

    const isActive: boolean = index === activeIndex;

    const handleClick = (event: MouseEvent<HTMLButtonElement>): void => {
        setActiveIndex(index);

        onClick?.(event); // 추가된 사용자 정의 onClick 이벤트 호출
    };

    return (
        <li className="tab__item">
            <button
                {...rest}
                type="button"
                className={cn('tab__button', {
                    'is-active': isActive,
                    [`tab__button--${btnType}`]: btnType,
                })}
                onClick={handleClick}
            >
                {children}
            </button>
        </li>
    );
}
