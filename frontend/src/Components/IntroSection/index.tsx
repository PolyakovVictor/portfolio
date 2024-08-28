import React, { useEffect, useRef } from 'react';
import s from './Style/Header.module.css';
import '../../index.css';
import { IntroSectionProps } from '../../Models/interfeces';
import { initializeParallax } from '../../Logic/Parallax';

const IntroSection: React.FC<IntroSectionProps> = ({ text }) => {
    const parallaxRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const element = parallaxRef.current;

        if (element) {
            initializeParallax({element});
        }

        return () => {
        };
    }, []);

    return (
        <section>
            <div className="pin">
                <div className={s.main}>
                    <h1 className={s.topic} ref={parallaxRef}>{ text }</h1>
                </div>
            </div>
        </section>
    );
};

export default IntroSection;
