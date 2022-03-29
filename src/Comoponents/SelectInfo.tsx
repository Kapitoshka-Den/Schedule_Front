import React, { useState } from "react";
import RequestGroup from "../RequestApi/RequestGroup";
import RequestAuditory from "../RequestApi/RequestAuditory";
import "./SelectInfo.css";
import RequestSubjcet from "../RequestApi/RequestSubjcet";
import RequestTeacher from "../RequestApi/RequestTeacher";

export const styles = {
  optionPlacegolder: {
    color: "gray",
    width: "200px",
  },
  option: {
    color: "black",
    width: "200px",
  },
};


const SelectInfo = (props: any) => {
  const [groupValue, setGroup] = useState("DEFAULT");
  const [teacherValue, setTeacher] = useState("DEFAULT");
  const [auditoryValue, setAuditory] = useState("DEFAULT");
  const [subjectValue, setSubject] = useState("DEFAULT");

  function changeRequestParam(requestParam: string, e: any) {
    switch (requestParam) {
      case "auditory":
        setAuditory(e.target.value);
        props.setApiUrlHead(`${requestParam}`);
        props.setApiUrlParam(`${e.target.value}`);
        setGroup("DEFAULT");
        setSubject("DEFAULT");
        setTeacher("DEFAULT");
        break;
      case "teacher":
        setTeacher(e.target.value);
        props.setApiUrlHead(`${requestParam}`);
        props.setApiUrlParam(`${e.target.value}`);
        setGroup("DEFAULT");
        setAuditory("DEFAULT");
        setSubject("DEFAULT");
        break;
      case "subject":
        setSubject(e.target.value);
        props.setApiUrlHead(`${requestParam}`);
        props.setApiUrlParam(`${e.target.value}`);
        setAuditory("DEFAULT");
        setTeacher("DEFAULT");
        setGroup("DEFAULT");
        break;
      case "group":
        setGroup(e.target.value);
        props.setApiUrlHead(`${requestParam}`);
        props.setApiUrlParam(`${e.target.value}`);
        setTeacher("DEFAULT");
        setAuditory("DEFAULT");
        setSubject("DEFAULT");
        break;
      default:
        break;
    }
  }

  return (
    <header className="selcetHead">
      <form className="selectDiv">
        <RequestGroup
          className="selecter"
          changeRequestParam={changeRequestParam}
          groupValue={groupValue}
        />
        <RequestAuditory
          className="selecter"
          changeRequestParam={changeRequestParam}
          auditoryValue={auditoryValue}
        />
        <RequestSubjcet
          className="selecter"
          changeRequestParam={changeRequestParam}
          subjectValue={subjectValue}
        />
        <RequestTeacher
          className="selecter"
          changeRequestParam={changeRequestParam}
          teacherValue={teacherValue}
        />
      </form>
      <button className="buttonStyle" onClick={props.onClick}>Показать расписание</button>
    </header>
  );
};

export default SelectInfo;
