import { useEffect, useRef } from 'react';
import s from './Style/FirstExampleSection.module.css'
import { initializeParallax } from '../../Logic/Parallax';

const FirstExampleSection: React.FC = () => {
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
            <div className={s.main}>
                <div className={s.content} ref={parallaxRef}>
                    <img src="../../public/img-online-banking.png" alt="img-online-banking" className={s.exampleImg} />
                    <h1>Example</h1>
                </div>
            </div>
        </section>
    )
}

export default FirstExampleSection;