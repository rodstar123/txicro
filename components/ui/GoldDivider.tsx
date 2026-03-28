interface GoldDividerProps {
  width?: 'full' | 'sm' | 'md' | 'lg';
  className?: string;
}

const widthMap = {
  full: 'w-full',
  sm: 'w-16',
  md: 'w-24',
  lg: 'w-48',
};

export default function GoldDivider({ width = 'md', className = '' }: GoldDividerProps) {
  return (
    <div className={`h-0.5 bg-gold mx-auto ${widthMap[width]} ${className}`} />
  );
}
