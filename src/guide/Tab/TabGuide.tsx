import React from 'react';

import { Tab } from '@/components';
// console.log('Tab:', Tab);

export default function TabGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">Tab</h2>
                <div className="guide__content">
                    <h3 className="guide__sub-title">Line 탭(default)</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <Tab defaultActiveIndex={0}>
                                <Tab.Head>
                                    <Tab.Button
                                        index={0}
                                        onClick={(event) => {
                                            console.log(event);
                                        }}
                                    >
                                        Tab 1
                                    </Tab.Button>
                                    <Tab.Button index={1}>Tab 2</Tab.Button>
                                    <Tab.Button index={2}>Tab 3</Tab.Button>
                                </Tab.Head>
                                <Tab.Body>
                                    <Tab.Panel index={0}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                height: '150px',
                                                background: 'aliceblue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Content for Tab 1
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel index={1}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                height: '150px',
                                                background: 'aliceblue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Content for Tab 2
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel index={2}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                height: '150px',
                                                background: 'aliceblue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Content for Tab 3
                                        </div>
                                    </Tab.Panel>
                                </Tab.Body>
                            </Tab>
                        </div>
                    </div>

                    <h3 className="guide__sub-title">Round 탭</h3>
                    <div className="guide__group">
                        <div className="guide__item">
                            <Tab defaultActiveIndex={0} btnType="round">
                                <Tab.Head>
                                    <Tab.Button index={0}>Tab 1</Tab.Button>
                                    <Tab.Button index={1}>Tab 2</Tab.Button>
                                    <Tab.Button index={2}>Tab 3</Tab.Button>
                                </Tab.Head>
                                <Tab.Body>
                                    <Tab.Panel index={0}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                height: '150px',
                                                background: 'aliceblue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Content for Tab 1
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel index={1}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                height: '150px',
                                                background: 'aliceblue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Content for Tab 2
                                        </div>
                                    </Tab.Panel>
                                    <Tab.Panel index={2}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                height: '150px',
                                                background: 'aliceblue',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            Content for Tab 3
                                        </div>
                                    </Tab.Panel>
                                </Tab.Body>
                            </Tab>
                        </div>
                    </div>
                </div>

                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">[ 컴포넌트명 : Tab ]</li>
                        {/* <li>Props : className , tagName, buttonType, children , href , type{' '}('line'), size{' '}('small', 'large'), disable{' '}(default는 false) , onClickEvt</li>
                        <li>Props( href ) string 추가시 링크형 "a" 으로 생성</li>
                        <li>Props( disabled ) 추가시 "disabled" 상태로 생성</li>
                        <li>Prop( onClickEvt )으로 이벤트 넘김 시 버튼 클릭시 이벤트를 컴포넌트 밖에서 넘길 수 있음</li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}
