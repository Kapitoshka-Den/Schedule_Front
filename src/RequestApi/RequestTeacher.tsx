import React, { useEffect, useState } from "react";
import { styles } from "../Comoponents/SelectInfo";

const RequestTeacher = (props: any) => {
  const [style, setStyle] = useState(styles.optionPlacegolder);
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    //Запрос к API
    async function requestTeacher() {
      let request = await fetch("http://89.108.98.73:82/api/Teachers");
      let response = await request.json();
      setItems(response);
    }
    requestTeacher();
  });

  function onChange(e: any) {
    props.changeRequestParam("teacher", e);
  }

  return (
    <select
      style={
        props.teacherValue === "DEFAULT"
          ? styles.optionPlacegolder
          : styles.option
      }
      onChange={onChange}
      value={props.teacherValue}
    >
      <option value="DEFAULT" hidden disabled>
        Выберите преподавателя...
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.FIO}>
          {item.FIO}
        </option>
      ))}
    </select>
  );
};

export default RequestTeacher;
