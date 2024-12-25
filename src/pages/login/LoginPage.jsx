import React from 'react';
import LoginForm from '../../components/login/LoginForm';
const LoginPage = () => {
  return (
    <div className="">
      <div
        className="w-full h-screen flex items-center justify-center bg-cover bg-center p-5"
        style={{
          backgroundImage: "url('/img/bg-login.png')", 
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
