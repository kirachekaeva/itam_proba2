import React from 'react';
import SignUpModal from './SignUpModal.tsx';

const SignUp: React.FC = () => {
    return (
        <div>
            <div className="container">
                <div className="img">
                    <img src={`${process.env.PUBLIC_URL}/Group 18.png`} alt="Group 18" />
                </div>
                <SignUpModal />
            </div>
        </div>
    );
}

export default SignUp;
