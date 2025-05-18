// Header.js
import React from 'react';

const Header = (props) => {
      // console.log(mydata)
      // const array = ["Adel1", 1,2,3,5,6]

      // array.map((data, index)=>{
      //   console.log(data)
      //   console.log(index)
      // })
  
      const handleNavbar = ()=>{
        console.log("Clicked")
      }
    return (
    <>
      <div className='conatiner'>

        <div className='inner-container'>
            <ul>
              {
                props.mydata.map((items, index)=>(
                  <li onClick={handleNavbar} key={index}>{items}</li>
                ))
              }
                
            </ul>
        </div>

      </div>
    </>
  );
};

export default Header;
