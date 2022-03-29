import React, { useEffect, useState } from "react";
import { styles } from "../Comoponents/SelectInfo";

const RequestGroup = (props: any) => {
  const [items, setItems] = useState<Array<any>>([]);
  const [error, setError] = useState<any>(null);
  const [style, setStyle] = useState(styles.optionPlacegolder);

  function onChange(e: any) {
    let styleResult =
      e.target.value === "DEFAULT" ? styles.optionPlacegolder : styles.option;
    props.changeRequestParam("group", e);
    console.log(e.target.value);
    setStyle(styleResult);
  }

  useEffect(() => {
    fetch("http://89.108.98.73:82/api/Groups")
      .then((res) => res.json())
      .then((result) => {
        setItems(result);
      })
      .then((error) => {
        setError(error);
      });
  });

  return (
    <select
      style={
        props.groupValue === "DEFAULT"
          ? styles.optionPlacegolder
          : styles.option
      }
      onChange={onChange}
      value={props.groupValue}
    >
      <option disabled hidden value="DEFAULT">
        Выберите группу...
      </option>
      {items.map((item) => (
        <option key={item.id} value={item.Number}>
          {item.Number}
        </option>
      ))}
    </select>
  );
};

export default RequestGroup;
