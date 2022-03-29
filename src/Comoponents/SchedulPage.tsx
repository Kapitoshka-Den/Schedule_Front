import React, { useEffect, useState } from 'react';

const SchedulePage = (props:any) =>{
    
    
    return(
        <div>
            {props.scheduleItems.map((item: { id: React.Key | null | undefined; Date: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; LessonNumber: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Group: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Subject: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Auditories: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; Teachers: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => (
                <div key={item.id}>
                    <h2>{item.Date} - {item.LessonNumber} урок</h2>
                    <p>Группа {item.Group}</p>
                    <p>{item.Subject}</p>
                    <p>{item.Auditories}</p>
                    <p>{item.Teachers}</p>
                </div>
            ))}
        </div>
    );
}

export default SchedulePage;