import React, { useState } from 'react';


function Routines(){

const [x, setx] = useState("")

    const sampleRoutines = [{
        name: "Incredibly Bald",
        exercises: [
            {
                name: "Pushups",
                quantity: 100,
                desc: "how to do pushups",
                pic: "pic of pushups"
            },
            {
                name: "Squats",
                quantity: 100,
                desc: "how to do squats",
                pic: "pic of squats"
            },
            {
                name: "Running",
                quantity: "6 miles",
                desc: "good luck",
                pic: "pic of running"
            }
        ],
        type: "full-body"

    },
    {
    name: "The prince",
        exercises: [
            {
                name: "Pushups",
                quantity: 100,
                desc: "how to do pushups",
                pic: "pic of pushups"
            },
            {
                name: "Situps",
                quantity: 100,
                desc: "how to do situps",
                pic: "pic of situps"
            },
            {
                name: "Juice",
                quantity: "plenty",
                desc: "I reccomend apple",
                pic: "pic of drinking"
            }
        ],
        type: "full-body"

    },

]

const displayEx = (arr2) => {
    return (arr2.map((obj) => {
        return(
            <div className='excard'>
                <h3>{obj.name}</h3>
                <p>{obj.pic}</p>
                <p>{obj.quantity}</p>
                <p>{obj.desc}</p>
                
            </div>
        )
    })
   )
 }
    
const displayRoutines = (arr) => {
 
 
    return (arr.map((obj) => {
        const seeEx = () => {
           setx(obj.exercises)
          }
      return(
          <div className='left' onClick={seeEx}>
              <h3>{obj.name}</h3>
              <p>{obj.type}</p>
          </div>
      )
  })
 )
}


    return(
        <div>
            <h1>Routines go here</h1>
            <div className='twodivs'>
                <div>
                {displayRoutines(sampleRoutines)}
                </div>
            
            <div className='right'>
             {x !== "" && displayEx(x)}
            </div>
            </div>
            
        </div>
    )
}

export default Routines;