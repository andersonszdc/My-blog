import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import Card from './Card'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

interface WrapperProps {
    rightIsActive: boolean,
    leftIsActive: boolean,
}

const Wrapper = styled.div<WrapperProps>`
    padding: 0 4%;
    .projects__title {
        margin-bottom: 45px;
    }
    .projects__cards {
        display: block;
        white-space: nowrap;
        overflow: hidden;
        .projects__slider {
            display: block;
            transition: 0.6s ease-in-out;
        }
        .angles {
            display: flex;
            justify-content: center;
            gap: 12px;
            font-size: 40px;
            margin-top: 24px;
            .angleLeft,
            .angleRight {
                cursor: pointer;
            }
            .angleLeft {
                ${({leftIsActive}) => !leftIsActive && `
                    opacity: 0.2;
                `}
            }
            .angleRight {
                ${({rightIsActive}) => !rightIsActive && `
                    opacity: 0.2;
                `}
            }
        }
    }
`

const Projects: React.FC = () => {

    const [ translate, setTranslate ] = useState(0)
    const [ leftIsActive, setleftIsActive ] = useState(true)
    const [ rightIsActive, setRightIsActive ] = useState(true)
    const [ width, setWidth ] = useState(0)
    const slider = useRef<HTMLDivElement>(null)

    function handleRight() {
        setTranslate(translate - width)
    }

    function handleLeft() {
        setTranslate(translate + width)
    }

    useLayoutEffect(() => {
        if(null !== slider.current) {
            setWidth(slider.current.clientWidth)
            slider.current.style.transform = `translateX(${translate}px)`
        }
        console.log(slider)
    }, [slider, translate])

    useEffect(() => {
        if(width === 0) {
            setleftIsActive(false)
        }
    }, [width])

    return (
        <Wrapper rightIsActive={rightIsActive} leftIsActive={leftIsActive} >
            <h2 className="projects__title">Projetos</h2>
            <div className="projects__cards">
                <div ref={slider} className="projects__slider">
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </div>
                <div className="angles">
                    <FaAngleLeft className="angleLeft" onClick={handleLeft} />
                    <FaAngleRight className="angleRight" onClick={handleRight} />
                </div>
            </div>
        </Wrapper>
    );
}

export default Projects;