import { useState } from "react";
import "./styles.css";
import { ChosenPanel, Tabs } from "./Tabs";

export default function App() {
  const [tab, setTab] = useState(0);

  return (
    <div className="App">
      <div className="tabs">
        <Tabs onChange={setTab} value={tab}>
          <button className="btn">1</button>
          <button className="btn">2</button>
        </Tabs>
      </div>
      <ChosenPanel is={tab}>
        <div>TabPanel 1</div>
        <div>TabPanel 2</div>
      </ChosenPanel>
    </div>
  );
}
