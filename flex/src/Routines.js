import React from 'react'

function Routines(){

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
                name: "Pushups",
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
    
const displayRoutines = (arr) => {
  arr.map((obj) => {
      return(
          <div>
              <h3>{obj.name}</h3>
              <p>{obj.type}</p>
          </div>
      )
  })
}


    return(
        <div>
            <h1>Routines go here</h1>
            {displayRoutines(sampleRoutines)}
        </div>
    )
}

export default Routines;