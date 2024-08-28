import { useEffect, useRef } from "react";

import s from './Style/AboutSection.module.css'

import { AboutSectionProps } from "../../Models/interfeces";
import { initializeParallax } from "../../Logic/Parallax";

const AboutSection: React.FC<AboutSectionProps> = ({ text }) => {
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
            <div className={ s.main }>
                <div className={ s.content } ref={parallaxRef}>
                    <div className={ s.leftBox }>
                        <h1>{ text }</h1>
                    </div>
                    <div className={ s.rightBox }>
                        <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt perspiciatis, consequuntur exercitationem ullam veniam, similique dolores earum, mollitia veritatis nulla dolorem officiis alias ratione in dicta necessitatibus. Incidunt, id magnam.</h1>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;