import React, { useEffect, useRef } from 'react';
import s from './Style/Header.module.css';
import '../../index.css';
import { TopicProps } from '../../Models/interfeces';
import { initializeParallax } from '../../Logic/parallax';

const Topic: React.FC<TopicProps> = ({ text }) => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = parallaxRef.current;

        if (element) {
            initializeParallax({
                element,
                lagAmount: 50,
                maxSpeed: 100,
                frameRate: 20
            });
        }

        return () => {
        };
    }, []);

    return (
        <div className="pin" ref={parallaxRef}>
            <div className={s.main}>
                <h1 className={s.topic}>{ text }</h1>
            </div>
        </div>
    );
};

export default Topic;
