'use client';

import React from 'react';
import { Guide, GuideMenu, AccordionGuide } from '@/guide';
import Link from 'next/link';

export default function AccordionGuidePage() {
    return (
        <>
            <div className="guide-main">
                <GuideMenu />
                <div className="guide-main__content guide-main__content--sub">
                    <Guide title="Accordion">
                        <AccordionGuide />
                    </Guide>
                </div>
            </div>
        </>
    );
}
