import React from 'react';
import {
    ButtonSelect,
} from '@/components';

export default function ButtonSelectGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">기본 Radio</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">default Radio</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <strong className="guide__item-title">(기본 - 단독)</strong>
                            <ButtonSelect value="radio01" checked={true}>항목별 예산 설정</ButtonSelect>
                        </div>
                    </div>
                </div>
                
                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : ButtonSelect ]</li>
                    </ul>
                </div>
            </div>

        </>
    );
}
