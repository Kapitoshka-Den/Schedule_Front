import React, { useEffect, useState } from "react";
import { styles } from "../Comoponents/SelectInfo";

const RequestAuditory = (props: any) => {
  const [items, setItems] = useState<any[]>([]);
  const [error, setError] = useState<any>(null);
  const [style, setStyle] = useState(styles.optionPlacegolder);

  function onChange(e: any) {
    
    props.changeRequestParam("auditory", e);
  }

  useEffect(() => {
    async function RequestData() {
      let response = await fetch("http://89.108.98.73:82/api/Auditories");
      let result = await response.json();
      if (response.ok) {
        setItems(result);
      } else {
        setError(response.status);
      }
    }
    RequestData();
  });

  return (
    <select
      style={
        props.auditoryValue === "DEFAULT"
          ? styles.optionPlacegolder
          : styles.option
      }
      onChange={onChange}
      name="selectAuditory"
      value={props.auditoryValue}
    >
      <option value="DEFAULT" disabled hidden>
        Выберите аудиторию...
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.Number_Auditory}>
          {item.Number_Auditory}
        </option>
      ))}
    </select>
  );
};

export default RequestAuditory;
