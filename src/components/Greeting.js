import { useState } from "react"

const Greeting = () => {

    const [change,setchange] = useState(false)

    return (
        <div>
            <h1>Hello world!</h1>
            <button onClick={()=>setchange(true)}>CLICK</button>
            {!change && <p>Some paragraph is there</p> }
            {change && <p>Change</p> }
        </div>
    )
}
export default Greeting