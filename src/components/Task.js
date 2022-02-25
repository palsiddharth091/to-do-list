import React, { useState } from 'react'
import Heading from './Heading';
import LoadingBar from 'react-top-loading-bar'
import moment from 'moment';
const min_date = new Date();
const dt = moment(min_date).format('YYYY-MM-DD');
const time = moment(min_date).format('HH:mm');
let date = new Date();
function Task() {
    const Arr = []
    const [progress, setProgress] = useState(0);
    const [Bio, setBio] = useState(Arr);
    //    const dt = useState(null);

    const removeSlash = (Element) => {
        let str = "";
        for (let index = 0; index < Element.length; index++) {
            if (Element[index] !== "\\") {
                str = str + Element[index];
            }
        }
        return str;
    }
    const ID = (id) => {
        const newArray = Bio.filter((elementFair) => {
            return elementFair.id !== id;
        });
        // Here what is happening is that the object elements of the array Bio is being extracted and stored in elementFair 
        // Since Array against which the filter function is working is Bio. Now we are returning those elements of Bio array 
        // in which elementFair.id !== id


        // We are using Filter function to remove the Id on which it is clicked. 
        //What filter function does is 

        // Syntax :-
        // [Array_Name_that_I_want_to_filter].filter((write a function here. If possible write an arrow function)=>{
        // return_the_array based on the condition. Eg. return element.id > id    })
        setBio(newArray);
    }
    let RemainingString = "";
    const Print = () => {
        setProgress(10);
        let x = document.getElementById('Name');
        let y = document.getElementById('date');
        let z = document.getElementById('time');
        let w = document.getElementById('Full');
        if (x.value !== '' && y.value !== '' && z.value !== '') {
            if (y.value === dt && z.value < time) {
                alert('Invalid Date/Time');
            }
            else {
                setProgress(50);
                let id = date.getTime();
                let JsontoString = JSON.stringify(Bio);
                JsontoString = removeSlash(JsontoString)
                let onlyString = "";
                if (JsontoString === "[]") {
                    onlyString = JsontoString.slice(0, JsontoString.length - 1);
                    RemainingString = RemainingString + onlyString + `{"id":${id},"myName":"${x.value}","Notes":"${w.value}","DeadLineTime":"${z.value}","DeadLineDate":"${y.value}"}]`;
                    setBio(JSON.parse(RemainingString));
                }
                else {
                    onlyString = JsontoString.slice(1, JsontoString.length - 1);
                    RemainingString = `[` + RemainingString + onlyString + `,{"id":${id},"myName":"${x.value}","Notes":"${w.value}","DeadLineTime":"${z.value}","Full":"${z.value}","DeadLineDate":"${y.value}"}]`;
                    setBio(JSON.parse(RemainingString));
                }
            }
        } else {
            alert('Enter Inputs correctly');
        }
        setProgress(70);
        x.value = '';
        y.value = '';
        z.value = '';
        w.value = '';
        setProgress(100);
    }
    { Bio.length === 0 ? document.title = `To Do List` : document.title = `(${Bio.length}) - To Do List` }
    return (
        <>
            <LoadingBar
                color='#f11946'
                progress={progress}
                height={2.5}
                loaderSpeed={700}
                onLoaderFinished={() => setProgress(0)}
            />
            <div className="menu">
                <table>
                    <tr><td style={{ width: "10rem" }} className='tble'><label className='Labels' htmlFor="">Task Name:  </label></td>   <td><input className='Data' id="Name" type="text" /></td></tr>
                    <tr><td style={{ width: "10rem" }} className='tble'><label className='Labels' htmlFor="">Due Date: </label></td>     <td><input className='Data' id="date" min={dt} type="date" /></td></tr>
                    <tr><td style={{ width: "10rem" }} className='tble'><label className='Labels' htmlFor="">Due Time: </label></td>     <td><input className='Data' id="time" type="time" /></td></tr>
                    <tr><td style={{ width: "10rem" }} className='tble'><label className='Labels' htmlFor="">Notes:  </label></td>       <td><input className='Data' id="Full" type="text" /></td></tr>
                </table>
                <center><button className='btn' onClick={Print}>Add</button></center>
                <br />
            </div>
            <Heading hdg={Bio.length === 0 ? `` : `Tasks left - ${Bio.length} :`} />
            {
                Bio.map((element) => {
                    return (
                        <>
                            <div className='Card'>
                                <h1 className='TaskName'>Task Name : {element.myName}</h1>
                                <h2 className='Date'>Due Date : {element.DeadLineDate}</h2>
                                <h2 className='Time'>Due Time : {element.DeadLineTime}</h2>
                                <h3 className='Notes'>Notes : {element.Notes}</h3>
                                <button className='btn' onClick={() => { ID(element.id) }}>Remove</button>
                            </div>
                        </>)
                })}
        </>
    )
}

export default Task
