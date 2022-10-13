import React from 'react'

function EmailSignUp(){
    return(
        <div class='email-signup'>
            <h2>Get early access today</h2>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form>
                <input type='email' placeholder='email@example.com'/>
                <button>Get Started For Free</button>
            </form>
        </div>
    );
}
export default EmailSignUp;