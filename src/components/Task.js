import React, { useState } from 'react'

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
        console.log(id)
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
        let date = new Date();
        let id = date.getTime();
        let x = document.getElementById('Name');
        let y = document.getElementById('Age');
        let z = document.getElementById('Full');
        let JsontoString = JSON.stringify(Bio);
        JsontoString = removeSlash(JsontoString)
        let onlyString = "";
        if (JsontoString === "[]") {
            onlyString = JsontoString.slice(0, JsontoString.length - 1);
            RemainingString = RemainingString + onlyString + `{"id":${id},"myName":"${x.value}","Full":"${z.value}","myAge":"${y.value}"}]`;
            setBio(JSON.parse(RemainingString));
        }
        else {
            onlyString = JsontoString.slice(1, JsontoString.length - 1);
            RemainingString = `[` + RemainingString + onlyString + `,{"id":${id},"myName":"${x.value}","Full":"${z.value}","myAge":"${y.value}"}]`;
            setBio(JSON.parse(RemainingString));
        }
    }
    return (
        <>
            {Bio.map((element) => {
                return (
                    <>
                        <h1>Task Name : {element.myName} , Task Id : {element.id} , Full : {element.Full}</h1>
                        <button onClick={() => { ID(element.id) }}>Remove</button>
                    </>)
            })}
            <br />
            <label htmlFor="">Name:  </label>
            <input id="Name" type="text" />
            <br />
            <label htmlFor="">Ageei:  </label>
            <input id="Age" type="number" />
            <br />
            <label htmlFor="">Full:  </label>
            <input id="Full" type="text" />
            <br />
            <button onClick={Print}>Add</button>
        </>
    )
}

export default Task
