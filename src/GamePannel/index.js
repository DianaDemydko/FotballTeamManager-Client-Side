import React from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment'
const localizer = momentLocalizer(moment);
const events = [
    {
        'title': 'All Day Event very long title',
        'allDay': true,
        'start': new Date(2020, 11, 28),
        'end': new Date(2020, 11, 28)
      },
      {
        'title': 'Long Event',
        'start': new Date(2020, 11, 30),
        'end': new Date(2020, 11, 30)
      },
    ]


function GamePannel() {
    return (
        <div style={{ height: 700 }}>
           <Calendar 
                localizer={localizer} 
                events={events}
                step={60}
                defaultDate={new Date(2020, 12, 12)}
            />
        </div>
    );
  
}

export default GamePannel;