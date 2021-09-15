import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import logoWhite from '../assets/logo-white.png'
import logoBlack from '../assets/logo-black.png'
import styled from 'styled-components'
import mask from '../assets/mask.png'
import Menu from './Menu'

interface WrapperProps {
    isClicked: boolean
}

const Wrapper = styled.div<WrapperProps>`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 4%;
    transition: .5s cubic-bezier(.3,0,.5,1);
    .me {
        display: flex;
        align-items: center;
        gap: 16px;
        z-index: 10;
        .logo {
            display: flex;
            width: 40px;
            align-items: center;
            #path-fill {
                transition: .5s cubic-bezier(.3,0,.5,1);
            }
        }
        .title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 6px;
        }
        .subtitle {
            font-size: 16px;
            font-weight: 500;
            color: #16D3E4;
        }
    }
    .menu {
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        z-index: 10;
        p {
            font-size: 20px;
        }
        .burger {
            display: flex;
            flex-direction: column;
            gap: 3px;
            transition: all .2s linear;
            .one,
            .two,
            .three {
                width: 22px;
                height: 3px;
                background-color: ${props => props.theme.colors.text};
                border-radius: 1px;
                transition: all .3s linear;
            }
        }
        :hover {
            opacity: 0.8;
        ${({isClicked}) => !isClicked && `
            .burger {
                gap: 6px;
            }
        `}
        }
    }
    ${({isClicked}) => isClicked && `
        .menu {
            .burger {
                .one {
                    transform: translateY(6px) rotate(45deg);
                }
                .two {
                    opacity: 0;
                }
                .three {
                    transform: translateY(-6px) rotate(-45deg);
                }
            }
            :hover {
                .burger {
                    transform: rotate(-90deg);
                }
            }
        }
    `}
`

interface HeaderProps {
  toggleTheme: (event: React.MouseEvent<HTMLDivElement>) => void
}

const Header = ({ toggleTheme }: HeaderProps) => {

    const [ isClicked, setIsClicked ] = useState(false)
    const [ color, setColor ] = useState('#FAF8F8')

    function handleClick() {
        setIsClicked( isClicked? false : true)
        setColor( color === '#FAF8F8'? '#2B2323' : '#FAF8F8')
    }

    return (
        <>
            <Wrapper isClicked={isClicked}>
                <div className="me">
                    {/* <div className="logo">
                        <Image src={isClicked? logoBlack : logoWhite} alt="logo-anderson" />
                    </div> */}
                    <div className="logo">
                        <svg viewBox="0 0 918 1150" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <mask id="mask0" style={{maskType:'alpha'}} maskUnits="userSpaceOnUse" x="392" y="50" width="467" height="1040">
                                <path d="M857.933 1070.28L533.965 63.8716C531.304 55.6047 523.612 50 514.927 50H402.244C395.456 50 390.64 56.6185 392.729 63.0771L705.548 1030.37C707.414 1036.14 711.798 1040.75 717.465 1042.91L838.321 1088.9C850.078 1093.37 861.788 1082.26 857.933 1070.28Z" fill="#16D3E4"/>
                            </mask>
                            <g mask="url(#mask0)">
                                <path d="M715 627.242H705.282V590.598M671.5 496.82H654.453M654.453 496.82H591.803M654.453 496.82V395.555H502.5M749.5 751.361H689.127V641.821H630.023M630.023 641.821H580M630.023 641.821V590.598M630.023 641.821V736.782H611.5M485.5 348.272H543.337M543.337 348.272V296.261L526 280.106M543.337 348.272H624.31M689.127 985.018H714.739M714.739 985.018H779.753V941.281M714.739 985.018V1038M714.739 985.018V964.529M779.753 941.281V856.172H788M779.753 941.281H815.5M779.753 941.281H708.434V778.942H623M560.5 154.805H549.642V179.235L523.636 181.205V200.512M467 187.904L497.236 187.903V255.676H597.5" stroke="#16D3E4" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M464.5 250.159H478.323V236.762H561.463V177.659H577.618V236.762H586.5M609.14 304.141V416.833H510M514.94 91L532.699 73.2417M486.204 225.73V181.008M536.99 85.4999L509 113M500.389 163.08H524.03V138.256H555.5M572.101 348.666V315.962L589.438 304.141V274.983M558.704 393.191V376.248L544.913 369.944M538.215 393.191V376.248L525.606 369.944M575.253 393.191V376.248L565.009 369.944M593.379 393.191V376.248L582.74 369.944M524.5 463.328H593.379M588.256 499.972L544.913 531.5M589.438 669.5V629.607H659.969V706.836H712.769M680 523.614H609.14M609.14 523.614L555.5 560.652M609.14 523.614L649.33 577.989H697.5M563.5 583.5L598.501 560.652H692M712.769 706.836V689.105L704.494 682.8M712.769 706.836H726.559M726.559 706.836V687.528L719.467 681.618M726.559 706.836H738.5M770 801.796H709.222M654.847 795.098V865.5M706 1024.81H842M766.5 1059.88H793.15M756.899 1033.88H810.881L836.493 1067.37H855.5" stroke="#16D3E4" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
                                <circle cx="523.636" cy="202.088" r="9.45662" fill="#16D3E4"/>
                                <circle cx="589.439" cy="275.771" r="8.27455" fill="#16D3E4"/>
                                <circle cx="593.379" cy="454.659" r="7.48649" fill="#16D3E4"/>
                                <circle cx="592.197" cy="455.053" r="43.9951" stroke="#16D3E4" strokeWidth="5"/>
                                <circle cx="567.767" cy="566.168" r="6.30442" fill="#16D3E4"/>
                                <circle cx="582.74" cy="555.924" r="6.30442" fill="#16D3E4"/>
                                <circle cx="785.269" cy="774.214" r="44.0548" stroke="#16D3E4" strokeWidth="3"/>
                                <circle cx="754.929" cy="1033.88" r="7.48649" fill="#16D3E4"/>
                                <circle cx="782.117" cy="986.988" r="8.66857" fill="#16D3E4"/>
                                <circle cx="687.551" cy="907.395" r="8.66857" fill="#16D3E4"/>
                                <circle cx="687.551" cy="879.025" r="8.66857" fill="#16D3E4"/>
                                <circle cx="687.551" cy="850.655" r="8.66857" fill="#16D3E4"/>
                                <circle cx="687.551" cy="822.285" r="8.66857" fill="#16D3E4"/>
                            </g>
                            <path d="M855.554 1071.05L531.586 64.6377C529.257 57.4041 522.526 52.5 514.927 52.5H402.244C397.153 52.5 393.541 57.4639 395.108 62.3078L707.927 1029.6C709.56 1034.65 713.395 1038.69 718.354 1040.57L839.21 1086.56C849.007 1090.29 858.766 1081.03 855.554 1071.05Z" stroke="#16D3E4" strokeWidth="5"/>
                            <path id="path-fill" d="M59.5665 1070.28L383.535 63.8716C386.196 55.6047 393.888 50 402.573 50H515.261C522.047 50 526.863 56.616 524.777 63.074L335.5 649H584.5L627.5 782H292.5L211.956 1030.38C210.087 1036.15 205.706 1040.75 200.044 1042.91L79.1794 1088.9C67.4223 1093.37 55.7119 1082.26 59.5665 1070.28Z" fill={color} stroke="#16D3E4" strokeWidth="5"/>
                        </svg>
                        
                    </div>
                    <div>
                        <h1 className="title">Anderson Souza</h1>
                        <h2 className="subtitle">Front End & UI Designer</h2>
                    </div>
                </div>
                <div onClick={handleClick} onClickCapture={toggleTheme} className="menu">
                    <p>menu</p>
                    <div className="burger">
                        <span className='one'/>
                        <span className='two'/>
                        <span className='three'/>
                    </div>
                </div>
            </Wrapper>
            <Menu isClicked={isClicked} />
        </>
    );
}

export default Header