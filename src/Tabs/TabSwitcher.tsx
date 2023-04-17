import { createContext, PropsWithChildren, useCallback, useState } from "react";

type TTabsContext = [number, Function];

const TabsContext = createContext<TTabsContext | undefined>(undefined);

const TabSwitcher = (props: PropsWithChildren<any>) => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabIndex = useCallback((index: number) => setTabIndex(index), []);

  return <TabsContext.Provider value={[tabIndex, handleTabIndex]} {...props} />;
};

export default TabSwitcher;
