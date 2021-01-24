import React from 'react'
import { useParams } from 'react-router-dom'
import { useStateValue } from "../state";

function PatientInfo() {    
    const { id } = useParams<{ id: string }>();

    const [{ patients }, dispatch] = useStateValue();

    console.log (patients);
    return (
        <div>
            hello
        </div>
    )
}

export default PatientInfo
