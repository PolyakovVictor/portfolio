import { ParallaxEffectProps } from "../Models/interfeces";


export function initializeParallax({
    element,
    lagAmount = 50,
    maxSpeed = 50,
    frameRate = 5
}: ParallaxEffectProps): void {
    let scrollTop = 0;
    let pinTop = 0;
    let lastTime: number | undefined;

    const updatePinPosition = (time: number) => {
        if (!lastTime) lastTime = time;
        let delta = time - lastTime;
        if (delta >= frameRate) {
            scrollTop = window.scrollY;
            const move = (scrollTop - pinTop) * delta / (lagAmount + delta);
            const direction = move === 0 ? 0 : move / Math.abs(move);
            pinTop = pinTop + Math.min(Math.abs(move), maxSpeed) * direction;
            if (element) {
                element.style.transform = `translateY(${-move}px)`;
            }
            lastTime = time;
        }
        requestAnimationFrame(updatePinPosition);
    };

    requestAnimationFrame(updatePinPosition);
}
