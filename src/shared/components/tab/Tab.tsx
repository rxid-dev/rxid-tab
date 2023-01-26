import { FunctionComponent } from "react";

export interface TabProps {
  header: string | JSX.Element;
  isActive?: boolean;
}

interface Props extends TabProps {
  children: JSX.Element;
}

export const Tab: FunctionComponent<Props> = ({ children }) => {
  return <div className="tab-content">{children}</div>;
};
