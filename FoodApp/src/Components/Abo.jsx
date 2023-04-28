import React from  'react';

const SampleUi = () =>{
    const zero = 0

    return (
        <>
        { 
          !!zero && <p>Hello</p>
        }
            <h1>ABO PAGE </h1>
        </>
    )
}
// to learn about conditional rendering 
// it is not the traditional way to use the conditonal rendering
export default SampleUi;
