import React, { Children, FunctionComponent, useEffect, useState } from "react";

interface Props {
  children: JSX.Element | Array<JSX.Element>;
  isVertical?: boolean;
}

export const Tabs: FunctionComponent<Props> = ({ children, isVertical }) => {
  const [state, setState] = useState<{
    tabs: Array<string>;
    activeTab: number | null;
  }>({
    tabs: [],
    activeTab: null,
  });

  useEffect(() => {
    const childrens = Array.isArray(children) ? children : [children];
    let activeTab = 0;
    const tabs: Array<string> = childrens.map(
      (child: JSX.Element, index: number) => {
        const tab = child.props;
        if (tab.isActive) activeTab = index;
        return tab.header;
      }
    );
    setState((state) => ({
      ...state,
      tabs,
      activeTab,
    }));
  }, []);

  const handleChangeTab = (position: number) => {
    setState((state) => ({
      ...state,
      activeTab: position,
    }));
  };

  return (
    <div className={"rxid-tab " + (isVertical ? "vertical" : "")}>
      <div className="tab-header">
        <nav className="tab-nav">
          <ul className="tabs">
            {state.tabs.map((tab: string, index: number) => (
              <li className="tab-item" key={index}>
                <a
                  href="#"
                  className={
                    "tab-link " + (index === state.activeTab ? "active" : "")
                  }
                  onClick={() => handleChangeTab(index)}
                >
                  {tab}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="tab-body">
        {Children.map(children, (child, index) =>
          state.activeTab === index ? (
            <div key={index}>{React.cloneElement(child)}</div>
          ) : (
            <div key={index}></div>
          )
        )}
      </div>
    </div>
  );
};
