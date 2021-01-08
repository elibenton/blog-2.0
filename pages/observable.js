import React, { useRef, useEffect } from 'react'
// import { Runtime, Inspector } from '@observablehq/runtime'
// import notebook from '@elibenton/how-independent-is-the'

function HowIndependentIsThe() {
  const ref = useRef()

  // useEffect(() => {
  // 	new Runtime().module(notebook, name => {
  // 		if (name === 'chart')
  // 		return Inspector.into(ref.current.querySelector('.chart'))()
  // 	})
  // }, [])

  return (
    <div className="HowIndependentIsThe" ref={ref}>
      {/* <div className='chart'></div> */}
      <iframe
        width="100%"
        height="734"
        frameBorder="0"
        src="https://observablehq.com/embed/@elibenton/how-independent-is-the?cell=chart"></iframe>
    </div>
  )
}

export default HowIndependentIsThe
