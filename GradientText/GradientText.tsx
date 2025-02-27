import React from 'react';

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const GradientText: React.FC<GradientTextProps> = ({
  children,
  className = "",
  colors = ["#ffaa40", "#9c40ff", "#ffaa40"],
  animationSpeed = 8,
  showBorder = false,
  direction = 'right'
}) => {
  const getDirection = () => {
    switch (direction) {
      case 'left': return 'to left';
      case 'top': return 'to top';
      case 'bottom': return 'to bottom';
      default: return 'to right';
    }
  };

  const gradientTextStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(${getDirection()}, ${colors.join(", ")})`,
    backgroundSize: '200% auto',
    animation: `gradient ${animationSpeed}s linear infinite`,
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const borderStyle: React.CSSProperties = showBorder ? {
    border: '2px solid transparent',
    borderRadius: '1.25rem',
    backgroundImage: `linear-gradient(black, black), linear-gradient(${getDirection()}, ${colors.join(", ")})`,
    backgroundOrigin: 'border-box',
    backgroundClip: 'padding-box, border-box',
    backgroundSize: '200% auto',
    animation: `gradient ${animationSpeed}s linear infinite`,
  } : {};

  return (
    <div
      className={`relative mx-auto flex max-w-fit items-center justify-center font-medium ${className}`}
      style={borderStyle}
    >
      <div className="" style={gradientTextStyle}>
        {children}
      </div>
    </div>
  );
};

export default GradientText;