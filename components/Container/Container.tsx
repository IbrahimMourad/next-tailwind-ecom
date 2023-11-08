const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`w-full mx-auto px-30px xl:px-[60px] 2xl:px-[90px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Container;
