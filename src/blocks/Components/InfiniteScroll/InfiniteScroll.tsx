import React, { useRef, useEffect, ReactNode } from "react";
import { gsap } from "gsap";
import { Observer } from "gsap/Observer";

// Add type for Observer change event
type ObserverChangeEvent = {
  deltaY: number;
  isDragging: boolean;
  event: Event;
};

gsap.registerPlugin(Observer);

interface InfiniteScrollProps {
  // ----- Layout / Style Props -----
  width?: string; // Width of the outer wrapper
  maxHeight?: string; // Max-height of the outer wrapper
  negativeMargin?: string; // Negative margin to reduce spacing between items
  // ----- Items Prop -----
  items?: { content: ReactNode }[]; // Array of items with { content: ... }
  itemMinHeight?: number; // Fixed height for each item
  // ----- Tilt Props -----
  isTilted?: boolean; // Whether the container is in "skewed" perspective
  tiltDirection?: "left" | "right"; // tiltDirection: "left" or "right"
  // ----- Autoplay Props -----
  autoplay?: boolean; // Whether it should automatically scroll
  autoplaySpeed?: number; // Speed (pixels/frame approx.)
  autoplayDirection?: "down" | "up"; // "down" or "up"
  pauseOnHover?: boolean; // Pause autoplay on hover
  isInteractive?: boolean; // Whether the scroll should respond to user input
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({
  width = "30rem",
  maxHeight = "100%",
  negativeMargin = "-0.5em",
  items = [],
  itemMinHeight = 150,
  isTilted = false,
  tiltDirection = "left",
  autoplay = false,
  autoplaySpeed = 0.5,
  autoplayDirection = "down",
  pauseOnHover = false,
  isInteractive = true,
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const getTiltTransform = (): string => {
    if (!isTilted) return "none";
    return tiltDirection === "left"
      ? "rotateX(20deg) rotateZ(-20deg) skewX(20deg)"
      : "rotateX(20deg) rotateZ(20deg) skewX(-20deg)";
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (items.length === 0) return;

    const divItems = gsap.utils.toArray<HTMLElement>(container.children);
    if (!divItems.length) return;

    const firstItem = divItems[0];
    const itemStyle = getComputedStyle(firstItem);
    const itemHeight = firstItem.offsetHeight;
    const itemMarginTop = parseFloat(itemStyle.marginTop) || 0;
    const totalItemHeight = itemHeight + itemMarginTop;
    const totalHeight =
      itemHeight * items.length + itemMarginTop * (items.length - 1);

    const wrapFn = gsap.utils.wrap(-totalHeight, totalHeight);

    divItems.forEach((child, i) => {
      const y = i * totalItemHeight;
      gsap.set(child, { y });
    });

    let observer: Observer | null = null;
    
    // Only prevent wheel events from propagating if interactive
    const preventWheel = (e: WheelEvent) => {
      if (isInteractive) {
        e.preventDefault();
        e.stopPropagation();
      }
    };

    // Always add the wheel listener, but it will only prevent propagation if isInteractive is true
    container.addEventListener('wheel', preventWheel, { passive: false });

    let rafId: number;
    if (autoplay) {
      const directionFactor = autoplayDirection === "down" ? 1 : -1;
      const speedPerFrame = autoplaySpeed * directionFactor;

      const tick = () => {
        divItems.forEach((child) => {
          gsap.set(child, {
            y: `+=${speedPerFrame}`,
            modifiers: {
              y: gsap.utils.unitize(wrapFn),
            },
          });
        });
        rafId = requestAnimationFrame(tick);
      };

      rafId = requestAnimationFrame(tick);

      if (pauseOnHover) {
        const stopTicker = () => rafId && cancelAnimationFrame(rafId);
        const startTicker = () => (rafId = requestAnimationFrame(tick));

        container.addEventListener("mouseenter", stopTicker);
        container.addEventListener("mouseleave", startTicker);

        return () => {
          if (observer) observer.kill();
          stopTicker();
          container.removeEventListener("mouseenter", stopTicker);
          container.removeEventListener("mouseleave", startTicker);
          container.removeEventListener('wheel', preventWheel);
        };
      } else {
        return () => {
          if (observer) observer.kill();
          rafId && cancelAnimationFrame(rafId);
          container.removeEventListener('wheel', preventWheel);
        };
      }
    }

    return () => {
      if (observer) observer.kill();
      if (rafId) cancelAnimationFrame(rafId);
      container.removeEventListener('wheel', preventWheel);
    };
  }, [
    items,
    autoplay,
    autoplaySpeed,
    autoplayDirection,
    pauseOnHover,
    isTilted,
    tiltDirection,
    negativeMargin,
    isInteractive,
  ]);

  return (
    <div
      className="relative flex items-center justify-center w-full overflow-hidden overscroll-none border-t-2 border-b-2 border-t-dotted border-b-dotted border-transparent"
      ref={wrapperRef}
      style={{ maxHeight }}
    >
      {/* Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none"></div>

      {/* Container */}
      <div
        className={`flex flex-col overscroll-contain px-4 ${
          isInteractive ? "" : "pointer-events-none"
        } origin-center`}
        ref={containerRef}
        style={{
          width,
          transform: getTiltTransform(),
        }}
      >
        {items.map((item, i) => (
          <div
            className="flex items-center justify-center p-4 text-xl font-semibold text-center rounded-[15px] select-none box-box relative"
            key={i}
            style={{
              height: `${itemMinHeight}px`,
              marginTop: negativeMargin,
            }}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteScroll;