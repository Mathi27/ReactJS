import React, { useState } from 'react';

const Profile = (props) =>{
    const [count,setCount] = useState(0);
    return (
        <div>
            <h1>This is profile component</h1>
            <h3>Count Functional Component:{count}</h3>
            <button onClick={()=>{
                setCount(count+1);
            }}>press </button>

            <h3>name:{props.name}</h3>
        </div>
    );
}

export default Profile;