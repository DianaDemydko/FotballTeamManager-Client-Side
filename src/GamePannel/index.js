import React from 'react';
import { Calendar, momentLocalizer  } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './index.css';
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
        <div className='calendar-wrapper'>
           <Calendar 
                localizer={localizer} 
                events={events}
                step={60}
                view={'month'}
                onView={() => {}}
            />
        </div>
    );
  
}

export default GamePannel;