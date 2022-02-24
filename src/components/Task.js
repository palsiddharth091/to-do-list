import React, { useState } from 'react'
import Heading from './Heading';
function Task() {
    const Arr = []
    const [Bio, setBio] = useState(Arr);
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
    let date = new Date();
    const Print = () => {
        let x = document.getElementById('Name');
        let y = document.getElementById('date');
        let z = document.getElementById('time');
        if (x.value !== undefined || y.value != undefined || z.value !== undefined) {
            let id = date.getTime();
            let w = document.getElementById('Full');
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
        } else {
            alert('Enter Inputs correctly');
        }

    }

    return (
        <>
            <div className="menu">
                <div className='Labels'>
                
                <label htmlFor="">Task Name:  </label>
                    <input id="Name" type="text" />
                    </div>
                {/* <br /> */}
                <div className='Labels'>
                
                <label htmlFor="">Due Date: </label>
                    <input id="date" type="date" />
                    </div>
                {/* <br /> */}
                <div className='Labels'>
                
                <label htmlFor="">Due Time: </label>
                    <input id="time" type="time" />
                    </div>
                {/* <br /> */}
                <div className='Labels'>
                
                <label htmlFor="">Notes:  </label>
                    <input id="Full" type="text" />
                </div>
                {/* <br /> */}
                <button className='btn' onClick={Print}>Add</button>
                <br />
                {/* I was also going to say the same  */}
            </div>
            <Heading hdg="Tasks :" />
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
            <br />















        </>
    )
}

export default Task
