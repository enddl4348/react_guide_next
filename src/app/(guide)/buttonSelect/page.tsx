'use client';

import React from 'react';
import { Guide, GuideMenu, ButtonSelectGuide} from '@/guide';
import Link from 'next/link';

export default function ButtonSelectGuidePage() {
    return (
        <>
            <div className='guide-main'>
                <GuideMenu/>
                <div className='guide-main__content guide-main__content--sub'>
                    <Guide title="ButtonSelect">
                        <ButtonSelectGuide/>
                    </Guide>
                </div>
            </div>
        </>
    );
}
