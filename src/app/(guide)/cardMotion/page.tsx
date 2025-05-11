import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Link from 'next/link';
import { Guide, GuideMenu, InputGuide, ButtonGuide } from '@/guide';

export default function cardMotion() {
    return (
        <>
            <div className="cardMotion">
                <div className="buttonWrap">
                    <button type="button">Section 01</button>
                    <button type="button">Section 02</button>
                    <button type="button">Section 03</button>
                </div>

                <div className="cardWrap">
                    <div className="section section01">
                        <span className="cardTitle">section 01</span>
                        <ul className="cardList">
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                        </ul>
                    </div>

                    <div className="section section02">
                        <span className="cardTitle">section 01</span>
                        <ul className="cardList">
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                        </ul>
                    </div>

                    <div className="section section03">
                        <span className="cardTitle">section 01</span>
                        <ul className="cardList">
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                            <li className="cardList__item">
                                <div className="card"> card1</div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}
