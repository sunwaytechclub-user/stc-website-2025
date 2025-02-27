"use client";

import {
  CSSProperties,
  ReactElement,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";

import { cn } from "@/lib/utils";

interface NeonColorsProps {
  firstColor: string;
  secondColor: string;
}

interface NeonGradientCardProps {
  as?: ReactElement;
  className?: string;
  children?: ReactNode;
  borderSize?: number;
  borderRadius?: number;
  neonColors?: NeonColorsProps;
  [key: string]: any;
}

export const NeonGradientCard: React.FC<NeonGradientCardProps> = ({
  className,
  children,
  borderSize = 2,
  borderRadius = 20,
  neonColors = {
    firstColor: "#ff00aa",
    secondColor: "#00FFF1",
  },
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        setHeight(containerRef.current.scrollHeight);
      }
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      setHeight(containerRef.current.scrollHeight);
    }
  }, [children]);

  return (
    <div
      ref={containerRef}
      style={
        {
          "--border-size": `${borderSize}px`,
          "--border-radius": `${borderRadius}px`,
          "--neon-first-color": neonColors.firstColor,
          "--neon-second-color": neonColors.secondColor,
          "--card-content-radius": `${borderRadius - borderSize}px`,
          "--pseudo-element-background-image": `linear-gradient(0deg, ${neonColors.firstColor}, ${neonColors.secondColor})`,
          "--pseudo-element-blur": "30px",
        } as CSSProperties
      }
      className={cn(
        "relative z-10 w-full min-h-fit rounded-[var(--border-radius)]",
        className,
      )}
      {...props}
    >
      <div
        className={cn(
          "relative w-full min-h-fit rounded-[var(--card-content-radius)] ",
    // BEFORE: Neon Border Layer
    "before:absolute before:-inset-[var(--border-size)] before:-z-10 before:block",
    "before:h-[calc(100%+2*var(--border-size))] before:w-[calc(100%+2*var(--border-size))]",
    "before:rounded-[var(--border-radius)] before:content-['']",
    "before:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] before:bg-[length:100%_200%]",
    "before:animate-background-position-spin",
    
    // AFTER: Neon Blur Effect
    "after:absolute after:-inset-[var(--border-size)] after:-z-10 after:block",
    "after:h-[calc(100%+2*var(--border-size))] after:w-[calc(100%+2*var(--border-size))]",
    "after:rounded-[var(--border-radius)] after:blur-[var(--pseudo-element-blur)] after:content-['']",
    "after:bg-[linear-gradient(0deg,var(--neon-first-color),var(--neon-second-color))] after:bg-[length:100%_200%] after:opacity-80",
    "after:animate-background-position-spin",
          "dark:bg-neutral-900",
        )}
      >
        {children}
      </div>
    </div>
  );
};
