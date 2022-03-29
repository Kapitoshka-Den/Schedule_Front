import { request } from "http";
import React, { useEffect, useState } from "react";
import { styles } from "../Comoponents/SelectInfo";

const RequestSubjcet = (props: any) => {
  const [items, setItems] = useState<any[]>([]);
  const [style, setStyle] = useState(styles.optionPlacegolder);

  useEffect(() => {
    async function LoadSubject() {
      let request = await fetch("http://89.108.98.73:82/api/Subjects");
      let response = await request.json();
      setItems(response);
    }
    LoadSubject();
  });

  function onChange(e: any) {
    props.changeRequestParam("subject", e);
  }

  return (
    <select
      onChange={onChange}
      value={props.subjectValue}
      style={
        props.subjectValue === "DEFAULT"
          ? styles.optionPlacegolder
          : styles.option
      }
    >
      <option value="DEFAULT" disabled hidden>
        Выберите предмет...
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.Subject_Name}>
          {item.Subject_Name}
        </option>
      ))}
    </select>
  );
};

export default RequestSubjcet;
