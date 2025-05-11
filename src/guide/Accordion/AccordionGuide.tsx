import React from 'react';
import { Accordion } from '@/components';

export default function AccordionGuide() {
    return (
        <>
            <div className="guide__wrap">
                <h2 className="guide__title">Multi Type</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <Accordion
                                variant="box"
                                type="multiple"
                                defaultActiveIndices={[1]}
                            >
                                <Accordion.Item index={0}>
                                    <Accordion.Button index={0}>
                                        <Accordion.Head>
                                            보안카드란 무엇입니까?
                                        </Accordion.Head>
                                    </Accordion.Button>
                                    <Accordion.Panel index={0}>
                                        <div className="textBox">
                                            <div className="textBox__box">
                                                <span className="textBox__text">
                                                    보안카드는 온라인 뱅킹에서
                                                    사용하는 보안 인증
                                                    수단입니다.
                                                </span>
                                            </div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item index={1}>
                                    <Accordion.Button index={1}>
                                        <Accordion.Head>
                                            보안카드란 무엇입니까?
                                        </Accordion.Head>
                                    </Accordion.Button>
                                    <Accordion.Panel index={1}>
                                        <div className="textBox">
                                            <div className="textBox__box">
                                                <span className="textBox__text">
                                                    보안카드는 온라인 뱅킹에서
                                                    사용하는 보안 인증
                                                    수단입니다.
                                                </span>
                                            </div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

                <h2 className="guide__title">Single Type</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <Accordion variant="box" defaultActiveIndices={[1]}>
                                <Accordion.Item index={0}>
                                    <Accordion.Button index={0}>
                                        <Accordion.Head>
                                            보안카드란 무엇입니까?
                                        </Accordion.Head>
                                    </Accordion.Button>
                                    <Accordion.Panel index={0}>
                                        <div className="textBox">
                                            <div className="textBox__box">
                                                <span className="textBox__text">
                                                    보안카드는 온라인 뱅킹에서
                                                    사용하는 보안 인증
                                                    수단입니다.
                                                </span>
                                            </div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item index={1}>
                                    <Accordion.Button index={1}>
                                        <Accordion.Head>
                                            보안카드란 무엇입니까?
                                        </Accordion.Head>
                                    </Accordion.Button>
                                    <Accordion.Panel index={1}>
                                        <div className="textBox">
                                            <div className="textBox__box">
                                                <span className="textBox__text">
                                                    보안카드는 온라인 뱅킹에서
                                                    사용하는 보안 인증
                                                    수단입니다.
                                                </span>
                                            </div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

                <h2 className="guide__title">Event - onChange</h2>
                <div className="guide__content">
                    <div className="guide__group">
                        <div className="guide__item">
                            <Accordion
                                variant="box"
                                defaultActiveIndices={[1]}
                                onChange={(activeIndices) =>
                                    console.log(activeIndices)
                                }
                            >
                                <Accordion.Item index={0}>
                                    <Accordion.Button index={0}>
                                        <Accordion.Head>
                                            보안카드란 무엇입니까?
                                        </Accordion.Head>
                                    </Accordion.Button>
                                    <Accordion.Panel index={0}>
                                        <div className="textBox">
                                            <div className="textBox__box">
                                                <span className="textBox__text">
                                                    보안카드는 온라인 뱅킹에서
                                                    사용하는 보안 인증
                                                    수단입니다.
                                                </span>
                                            </div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                                <Accordion.Item index={1}>
                                    <Accordion.Button index={1}>
                                        <Accordion.Head>
                                            보안카드란 무엇입니까?
                                        </Accordion.Head>
                                    </Accordion.Button>
                                    <Accordion.Panel index={1}>
                                        <div className="textBox">
                                            <div className="textBox__box">
                                                <span className="textBox__text">
                                                    보안카드는 온라인 뱅킹에서
                                                    사용하는 보안 인증
                                                    수단입니다.
                                                </span>
                                            </div>
                                        </div>
                                    </Accordion.Panel>
                                </Accordion.Item>
                            </Accordion>
                        </div>
                    </div>
                </div>

                <div className="guide__desc">
                    <ul>
                        <li className="imporatant">
                            [ 컴포넌트명 : Accordion ]
                        </li>
                        {/* <li>Props : className , tagName, buttonType, children , href , type{" "}("line"), size{" "}("small", "large"), disable{" "}(default는 false) , onClickEvt</li>
                        <li>Props( href ) string 추가시 링크형 "a" 으로 생성</li>
                        <li>Props( disabled ) 추가시 "disabled" 상태로 생성</li>
                        <li>Prop( onClick )으로 이벤트 넘김 시 버튼 클릭시 이벤트를 컴포넌트 밖에서 넘길 수 있음</li> */}
                    </ul>
                </div>
            </div>
        </>
    );
}
