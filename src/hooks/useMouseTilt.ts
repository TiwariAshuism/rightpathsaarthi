import { useRef, useEffect } from 'react';

export const useMouseTilt = <T extends HTMLElement>(settings = { max: 15, perspective: 1000, scale: 1.05 }) => {
    const ref = useRef<T | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = el.getBoundingClientRect();
            const x = (e.clientX - left) / width;
            const y = (e.clientY - top) / height;

            const tiltX = (settings.max / 2 - x * settings.max).toFixed(2);
            const tiltY = (y * settings.max - settings.max / 2).toFixed(2);

            el.style.transform = `perspective(${settings.perspective}px) rotateX(${tiltY}deg) rotateY(${tiltX}deg) scale3d(${settings.scale}, ${settings.scale}, ${settings.scale})`;
        };

        const handleMouseLeave = () => {
            el.style.transform = `perspective(${settings.perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        };

        el.addEventListener('mousemove', handleMouseMove);
        el.addEventListener('mouseleave', handleMouseLeave);
        el.style.transition = 'transform 0.1s ease-out';

        return () => {
            el.removeEventListener('mousemove', handleMouseMove);
            el.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [settings]);

    return ref;
};
