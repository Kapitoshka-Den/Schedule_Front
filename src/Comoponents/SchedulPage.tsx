import React, { useEffect, useState } from 'react';
import  './SchedulePage.css'
const SchedulePage = (props:any) =>{
    
    
    return(
        <div className='schdedulePage'>
            
            {props.scheduleItems.map((item: { id: React.Key | null | undefined; Date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; LessonNumber: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Group: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Subject: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Auditories: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Teachers: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <div key={item.id} className="oneSubjectInSchedule">
                    <h2>{item.Date} - {item.LessonNumber} урок</h2> 
                    <p>{item.Subject}</p>
                    <p><b>Группа</b> : {item.Group}</p>
                    <p><b>Аудиории</b> : {item.Auditories}</p>
                    <p><b>Преподаватели</b> : {item.Teachers}</p>
                </div>
            ))}
        </div>
    );
}

export default SchedulePage;