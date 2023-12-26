import { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  newStyle?: string;
};

const Container = ({ children, newStyle }: ContainerProps) => {
  return (
    <div className={`w-full max-w-7xl mx-auto px-4 ${newStyle}`}>
      {children}
    </div>
  );
};

export default Container;
