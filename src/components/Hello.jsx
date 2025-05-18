import React from 'react'

function Hello({mydata}) {

  console.log(mydata[2].myid)
  // const array = [1,2,3,4,5,6,7,8, 20, 10, 30]

  // console.log(array.length)

  // console.log(array)

  // for (let index = 0; index < array.length; index++) {
  //   console.log(array[index])
  // }
  // console.log(props.mydata)
  return (
    <div>
      <h1>{mydata[2].myname}</h1>
    </div>
  )
}

export default Hello
