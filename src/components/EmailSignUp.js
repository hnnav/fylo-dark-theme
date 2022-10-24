import React, { useState } from 'react';

function EmailSignUp() {

    const [email, setEmail] = useState(true);

    
    function handleSubmit(e){
        e.preventDefault();
        setEmail(/\S+@\S+\.\S+/.test(e.target.email.value))
    }
    
    return(
        <div className='email-signup'>
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form onSubmit={handleSubmit}>
                <input name="email" type='text' placeholder='email@example.com'/>
                <button type="submit">Get Started For Free</button>
            </form>
            {email ? null : <p className="email-error">Please enter a valid email address</p>}
        </div>
    );
    
}
export default EmailSignUp;