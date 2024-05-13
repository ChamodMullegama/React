import React from 'react'


function EventHandle() {

    function massage(){
    alert("hehe chamod")
    }

  return (
    
    <div>
        <button onClick={massage}>cliked me  </button>
    </div>
  )
}

export default EventHandle