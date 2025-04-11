import React from 'react'
import './Suggestion.css'
const Suggestion = () => {
  return (
    <div>
        <div className="suggetion_container">
<h1 className='sheading'> Suggest Events  </h1>

<form className='formContainer'>
    <div>
    <input type='text ' placeholder='Name' />
    <input type='text ' placeholder='Contact' /> </div>
    <textarea value='suggestion' className='sugBox'> </textarea>
    <button type='submit' >Submit</button>

</form>

</div>

    </div>
  )
}

export default Suggestion