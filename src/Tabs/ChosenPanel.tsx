import { PropsWithChildren } from "react";

interface ChosenPanelProps {
  is: number;
}

const ChosenPanel = ({ is, children }: PropsWithChildren<ChosenPanelProps>) => {
  if (!children || is === undefined) return null;

  return children[is];
};

export default ChosenPanel;
