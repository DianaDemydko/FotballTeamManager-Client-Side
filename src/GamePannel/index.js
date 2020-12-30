import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar' 
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';
import './index.css';
import { useSelector, useDispatch, useStore, shallowEqual} from 'react-redux';
import { useState, useEffect } from 'react';
import { loadGames } from '../Actions/game.actions';
import { useToasts } from 'react-toast-notifications';
import Spinner from 'react-bootstrap/Spinner';
import { isEmpty } from 'lodash';


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
    const games = useSelector(state => state.gameReduser.gamesList, shallowEqual);
    const error = useSelector(state => state.gameReduser.error, shallowEqual);
    const [calendarEvents, setEvents] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    useEffect(() => {
        async function LoadGames(){
            await dispatch(loadGames()).then(() => {
               setLoading(false);     
            }); 
        }
        LoadGames();
    }, []);
    useEffect(() => {
        function FormEventsList() {
            let eventsArray = [];
            if(!isEmpty(games)) {
                games.map((game) => {
                    let eventDate = new Date(game.date);
                    let eventObject = {
                        'title': game.details,
                        'id': game.id,
                        'allDay': false,
                        'start': eventDate,
                        'end': eventDate
                    };
                    eventsArray.push(eventObject);
                });
            }
            setEvents(eventsArray);
        }
        FormEventsList();
    }, [games])
    useEffect(() => {
        if(error !== null) {
            addToast(`Internal server error: ${error}`, {
                appearance: 'error',
                autoDismiss: true,
            });
            setLoading(true);
        }
    }, [error]);
    return (
    <>
        {isLoading ? 
            <div className='spinner'>
                <Spinner animation="border" variant="warning" /> 
            </div>
        : 
            <div className='calendar-wrapper'>
                <Calendar 
                    localizer={localizer} 
                    events={calendarEvents}
                    step={60}
                    views={{ month: true }}
                />
            </div>
        }
    </>
        
    );
  
}

export default GamePannel;