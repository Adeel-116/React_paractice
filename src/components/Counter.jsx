import React, {useState} from 'react'

function Counter() {
    let [value, setValue] = useState(5)



        function Increment() {
            setValue(value++)
            // value++
            // console.log(value)
      }
      function Decrement() {
        // value--
        // console.log("Decrement" , value)
        setValue(value--)
      }

  return (
    <div>
      
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>

        <h1>{value}</h1>

    </div>
  )
}

export default Counter

        

