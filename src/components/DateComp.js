import React from 'react';
import Clock from 'react-live-clock';
import { Switch } from 'antd';
import moment from 'moment';
export class MyComponent extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <h1 className='Clock'><Clock format={'dddd - D/MM/YYYY HH:mm:ss'} ticking={true} timezone={'Asia / Kolkata'} /> </h1>
        );
    }
}
export default MyComponent;