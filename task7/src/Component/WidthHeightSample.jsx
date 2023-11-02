import React, { useState } from 'react'

function WidthHeightSample() {
    const [width, setwidth] = useState(10)
    const [height, setheight] = useState(10)



  return (
    <>
    <div style={{margin: 50}}>
        <label htmlFor="">Width: </label>
        <input type="number" onChange={(e) => setwidth(e.target.valueAsNumber)} />
    </div>

    <div style={{margin: 50}}>
        <label htmlFor="">Height: </label>
        <input type="number" onChange={(e) => setheight(e.target.valueAsNumber)} />
    </div>




    <div style={{width: width, height: height,borderStyle: 'solid',borderColor: 'red', margin: 50}}>
        
    </div>


    </>
  )
}



export default WidthHeightSample