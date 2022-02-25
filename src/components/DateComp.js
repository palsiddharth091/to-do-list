import React from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
export class MyComponent extends React.Component {
    constructor() {
        super();
        const d = new Date();
        let DayName="";
        let Dy = d.getDay();
        switch (Dy) {
            case 0:
                DayName = "Sunday";
                break;
            case 1:
                DayName = "Monday";
                break;
            case 2:
                DayName = "Tuesday";
                break;
            case 3:
                DayName = "Wednesday";
                break;
            case 4:
                DayName = "Thursday";
                break;
            case 5:
                DayName = "Friday";
                break;
            case 6:
                DayName = "Saturday";
                break;
        }
        let DisplayToday = DayName +" - "+d.getDate() + "/" + String(d.getMonth() + 1).padStart(2, '0') + "/" + d.getFullYear()+"   ";
        this.state = { 
            date : DisplayToday
    }
}
    render() {
        return (
            <h1 className='Clock'>{this.state.date}
                <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Calcutta'} /> </h1>
        );
    }
}

export default MyComponent;