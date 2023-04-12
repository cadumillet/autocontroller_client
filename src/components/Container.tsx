import clsx from "clsx";
import { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLElement> {}

export const Container = ({ ...props }: ContainerProps): JSX.Element => {
  return (
    <div
      className={clsx(
        "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
        props.className
      )}
      {...props}
    />
  );
};
