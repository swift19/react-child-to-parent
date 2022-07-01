import React, { useState } from 'react'

const Child = ({props}) => {
    const [firstName, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        // props.onSubmit(firstName)
    }
 return (
     <div>
         <form onSubmit={handleSubmit}>
             <input type='text' value={firstName} onChange={handleChange} ></input>
             <button type='submit' onClick={() => props(firstName)}>Submit</button>
         </form>
     </div>
 )
}
export default Child