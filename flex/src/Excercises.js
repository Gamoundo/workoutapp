import React from 'react'

function Excercises(){

    const exces = [
        {
            name: "Pushups",
            pic: "pic of pushups",
            desc: "decribe it",
            quantity: ""
        },
        {
            name: "Situps",
            pic: "a pic of",
            desc: "situps expertlt decribed",
            quantity: ""
        },
        {
            name: "crunches",
            pic: "a pic of",
            desc: "desc of",
            quantity: ""
        },
        {
            name: "running",
            pic: "",
            desc: "",
            quantity: ""
        },
        {
            name: "plank",
            pic: "",
            desc: "",
            quantity: ""
        },
        {
            name: "dumbbell raise",
            pic: "",
            desc: "",
            quantity: ""
        },
        {
            name: "punching",
            pic: "",
            desc: "",
            quantity: ""
        },
        {
            name: "squats",
            pic: "",
            desc: "",
            quantity: ""
        },
        {
            name: "pullups",
            pic: "",
            desc: "",
            quantity: ""
        }
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


    return(
        <div>
            <h1>Excercises go here</h1>
            {displayEx(exces)}
        </div>
    )
}

export default Excercises;