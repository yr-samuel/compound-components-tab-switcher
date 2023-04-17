import React, {
  Children,
  cloneElement,
  PropsWithChildren,
  ReactElement
} from "react";

interface TabsProps {
  onChange: Function;
  value: number;
}

const Tabs = ({ children, onChange, value }: PropsWithChildren<TabsProps>) => {
  const elements = Children.toArray(children);

  return (
    <>
      {elements.map((child, index) => (
        <div
          key={index}
          style={{
            ...(value === index && { borderBottom: "3px solid red" }),
            cursor: "pointer"
          }}
        >
          {cloneElement(child as ReactElement, {
            key: index,
            onClick: () => onChange(index)
          })}
        </div>
      ))}
    </>
  );
};

export default Tabs;
