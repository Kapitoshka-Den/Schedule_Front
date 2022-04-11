import React, { useEffect, useState } from "react";
import "./App.css";
import SchedulePage from "./Comoponents/SchedulPage";
import SelectInfo from "./Comoponents/SelectInfo";

const App = () => {
  const [apiUrlHead, setApiUrlHead] = useState("");
  const [apiUrlParam, setApiUrlParam] = useState("");
  const [scheduleItems,setScheduleItem] = useState<any[]>([])
  
  function onClick(){
    async function requestSchedule() {
      let request = await fetch(`http://89.108.98.73:82/api/ScheduleWorks?paramHead=${apiUrlHead}&paramValue=${apiUrlParam}`);
      let response = await request.json();
      setScheduleItem(response);
      console.log(`${apiUrlParam}`);
  }
  requestSchedule();
  }
  return (
    <div>
      <header className="headPartPage">
        <img
          className="rtk-logo"
          src="https://spb-rtk.ru/wp-content/themes/spbrtk_f/images/logo.png"
          alt="RTK-LOGO"
        />
        <SelectInfo
          onClick={onClick}
          setApiUrlHead={setApiUrlHead}
          setApiUrlParam={setApiUrlParam}
          className="selecterInfo"
        />
      </header>
      <div className="contentPartPage">
        
        <SchedulePage apiUrlHead={apiUrlHead} apiUrlParam={apiUrlParam} scheduleItems={scheduleItems}/>
      </div>
    </div>
  );
};

export default App;
