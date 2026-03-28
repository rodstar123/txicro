interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: 'div' | 'section' | 'main';
}

export default function Container({ children, className = '', as: Component = 'div' }: ContainerProps) {
  return (
    <Component className={`max-w-txicro mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </Component>
  );
}
