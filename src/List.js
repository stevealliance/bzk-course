import React, {useEffect} from 'react'
import {atom, useRecoilState} from "recoil/dist";

const namesState = atom({
    key: "name",
    default: [{name: "Jeff"}]
})

let Lists =  (props) => {

    let resp = [
        {name:  "steve"},
        {"name":  "alex"},
        {"name":  "greg"},
        {"name":  "atlantide"},
        {"name":  "guy"},
        {"name":  "felix"},
        {"name":  "steve 22"},
        {"name":  "steve 23"},
    ]

    resp = [{name: "Jeff"}]

    const [names, setNames] = useRecoilState(namesState)

    useEffect(()=> {
        const getName = async () => {
            const resp = await fetch('http://localhost:3000/test.json')
            const body = await resp.json()
            console.log(names);
            setNames([...names,...body])
            //setNames(body)
        }
        getName()
    }, [])
    console.log(names)

    return (
        <ul>
            {names.map( (name , i)=> {
                return (
                    <li key={i}>{name.name}</li>
                )
            })}
        </ul>
    )
}

export default Lists

