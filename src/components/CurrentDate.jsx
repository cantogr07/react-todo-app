import React from 'react'
import { useState, useEffect } from 'react'


function CurrentDate() {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => { setDate(new Date()) }, 1000)
    }, [])

    console.log(date.toLocaleDateString())

    return (
        <div>
            <div class="date">Today is {date.toLocaleDateString()}.</div>
        </div>
    )

    
}

export default CurrentDate