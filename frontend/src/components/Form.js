import React from 'react';
import Button from './Button';

function Form() {
    return (
        <div>
            <form className='form-wrapper'>
                <label htmlFor='fullName'>FullName:</label>
                <input name='fullname' placeholder='Enter Full Name' id='fullName'/>
                <label htmlFor='address'>Address:</label>
                <input name='address' placeholder='Enter address' id='address'/>
                <Button type="submit" text="NEXT" goPath="/orderPlace"/>
            </form>
        </div>
    )
}

export default Form;
