import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const HorizontalCarousel = () => {
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const [wrapWidth, setWrapWidth] = useState(0);
  const [itemWidth, setItemWidth] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const scrollData = useRef({
    scrollY: 0,
    oldScrollY: 0,
    y: 0,
    isDragging: false,
    touchStart: 0,
    touchX: 0,
  });

  const lerp = (v0, v1, t) => v0 * (1 - t) + v1 * t;

  const dispose = (scroll) => {
    gsap.set(itemsRef.current, {
      x: (i) => i * itemWidth + scroll,
      modifiers: {
        x: (x) => {
          const s = gsap.utils.wrap(-itemWidth, wrapWidth - itemWidth, parseInt(x));
          return `${s}px`;
        }
      }
    });
  };

  const handleWheel = (e) => {
    scrollData.current.scrollY -= e.deltaY * 0.2;
  };

  const handleTouchStart = (e) => {
    scrollData.current.touchStart = e.clientX || e.touches[0].clientX;
    scrollData.current.isDragging = true;
    menuRef.current.classList.add('cursor-grabbing');
  };

  const handleTouchMove = (e) => {
    if (!scrollData.current.isDragging) return;
    scrollData.current.touchX = e.clientX || e.touches[0].clientX;
    scrollData.current.scrollY += (scrollData.current.touchX - scrollData.current.touchStart) * 2.5;
    scrollData.current.touchStart = scrollData.current.touchX;
  };

  const handleTouchEnd = () => {
    scrollData.current.isDragging = false;
    menuRef.current.classList.remove('cursor-grabbing');
  };

  useEffect(() => {
  const menu = menuRef.current;
  if (!menu) return;

  const updateSizes = () => {
    if (itemsRef.current.length > 0) {
      const width = itemsRef.current[0].clientWidth;
      setItemWidth(width);
      setWrapWidth(width * itemsRef.current.length);
    }
  };

  // Initial size update
  updateSizes();

  // Add event listeners
  window.addEventListener('resize', updateSizes);
  menu.addEventListener('wheel', handleWheel);
  menu.addEventListener('touchstart', handleTouchStart);
  menu.addEventListener('touchmove', handleTouchMove);
  menu.addEventListener('touchend', handleTouchEnd);
  menu.addEventListener('mousedown', handleTouchStart);
  menu.addEventListener('mousemove', handleTouchMove);
  menu.addEventListener('mouseleave', handleTouchEnd);
  menu.addEventListener('mouseup', handleTouchEnd);
  menu.addEventListener('selectstart', (e) => e.preventDefault());

  // Delay animation start
  const timeout = setTimeout(() => {
    dispose(0); // initial layout

    const render = () => {
      requestAnimationFrame(render);

      scrollData.current.y = lerp(scrollData.current.y, scrollData.current.scrollY, 0.07);
      dispose(scrollData.current.y);

      const scrollSpeed = scrollData.current.y - scrollData.current.oldScrollY;
      scrollData.current.oldScrollY = scrollData.current.y;

      gsap.to(itemsRef.current, {
        scale: 1 - Math.min(100, Math.abs(scrollSpeed)) * 0.001,
      });
    };

    render();
  }, 500); // 0.5 seconds

  return () => {
    clearTimeout(timeout); // clean up timeout
    window.removeEventListener('resize', updateSizes);
  };
}, [itemWidth, wrapWidth]);

  return (
    <div
      ref={menuRef}
      className="w-full h-[60vh] overflow-hidden relative cursor-grab  flex items-center justify-center"
    >
      <div className="absolute top-0 left-0 w-full h-full flex" style={{ counterReset: 'count' }}>
  {Array.from({ length: 6 }).map((_, i) => {
    return (
      <div
        key={i}
        ref={(el) => (itemsRef.current[i] = el)}
        className="absolute top-0 left-0 px-[1vw] overflow-hidden"
        style={{
          width: '31vw',
          height: '100%',
          counterIncrement: 'count',
        }}
      >
        {/* bg-[#BC301B] */}
        <figure
          className="absolute w-full h-full bg-[#FF6000] pointer-events-none select-none"
          style={{ transformOrigin: 'center' }}
        >
          <div className="w-full h-full p-[1vw]  flex flex-col">
            <h5 className="text-lg font-semibold">infrawave</h5>
            <div className="space_1" />
            <h5 className=" w-[80%] text-sm leading-relaxed">
              Sahil truly elevated our brand with the animated website he built for Infrawave Solutions. Every scroll and interaction feels intentional and polished. He’s not just a developer—he understands user experience and delivers with precision. Highly recommended!
            </h5>
            <div className="mt-auto text-sm  font-medium">
              <h4> — root</h4>
            </div>
          </div>
        </figure>
      </div>
    );
  })}
</div>

    </div>
  );
};

export default HorizontalCarousel;
