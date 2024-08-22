import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import './Auth.css';
import { Link, useNavigate } from 'react-router-dom';
import Gooogleimg from "../../../src/assets/Google.svg"
import Main_logo from "../../../src/assets/new_logo.svg"
import Login_div from "../../../src/assets/login_left.png"
import useRegisterUser, { Login, RegisterUser } from '../../Hooks/ApiService';

// import loginbg from "../../assets/loginbg.jpeg"

const schema = yup.object().shape({
  fullName: yup.string().when('isLogin', {
    is: false,
    then: yup.string().required('Full name is required')
  }),
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: yup.string().when('isLogin', {
    is: false,
    then: yup.string().oneOf([yup.ref('password'), null], 'Passwords must match').required('Confirm password is required')
  })
});

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isUser, setIsUser] = useState(true);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: { isLogin }
  });

  const OnSubmit = async(data) => {
    if (isLogin) {
      // Handle login
      // const storedUser = JSON.parse(localStorage.getItem('user'));
      if (data) {
         const body = {
        
        email: data.email,
        password: data.password,
       
      };
      const result = await Login(body);
      debugger
      if(result?.response?.status !== 400){
        // alert('Login successful!');
        window.location.href = '/';
      }
      } else {
        // alert('Invalid email or password');
      }
    } else {
      const body = {
        first_name:data.fullName,
        email: data.email,
        password: data.password,
        password2: data.password,
      };
      debugger
      try {
        const result = await RegisterUser(body);
        
        if(result?.response?.status !== 400){
          setIsLogin(true);
        }
      } catch (err) {
        // alert('Registration failed. Please try again.');
      }
      // alert('Registration successful! You can now log in.');
     
    }
  };
  useEffect(() => {

  }, [isLogin, isUser])

  return (
    <div className="auth-container">
      <div className="auth-left d-md-block d-none">
        {/* <h1 className="auth-logo"><img src={Main_logo} alt='Main_logo' /></h1> */}
        <p className="auth-welcome">Welcome to Copyva</p>
        <p className="auth-description">Your one-stop destination to buy & sell licenses</p>
        {/* <img src={loginbg} alt="" className="auth-image" /> */}
        {!isLogin && !isUser && (
        <div class="notes-container">
          <h6 style={{ textAlign: 'start', color: "black", paddingLeft: "12px" }}>Notes</h6>
          <ol>
            <li>Copyva is only for copyright owners and its distributors</li>
            <li>Copyva serves as a third party platform facilitating connections between copyright owners, distributors (organisation/agencies), and their customers in order to form licence agreements</li>
            <li>Copyva does not issue licences under its own name.</li>
          </ol>
        </div>
      )}

      </div>
      <div className="auth-right">
        <div className='d-lg-none d-flex mobi_login'><Link to='/' style={{ color: 'black', textDecoration: 'none' }}><img src={Login_div} alt='Login_div' /> Login</Link></div>
        <div className='auth_right_content'>
          <h2 className="auth-title">{isLogin ? 'Login' : 'Create account'}</h2>
          <div className="auth-toggle">
            <button
              className={isUser ? 'active' : ''}
              onClick={() => setIsUser(true)}>
              User
            </button>
            <button
              className={!isUser ? 'active' : ''}
              onClick={() => setIsUser(false)}>
              Owner
            </button>
          </div>
          <form onSubmit={handleSubmit(OnSubmit)} className="auth-form">
            {!isLogin && (
              <>
                <input
                  type="text"
                  placeholder="Full name"
                  {...register('fullName')}
                  className={errors.fullName ? 'input-error' : ''}
                />
                {errors.fullName && <p className="error-message">{errors.fullName.message}</p>}
              </>
            )}
            <input
              type="email"
              placeholder="Email address"
              {...register('email')}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <p className="error-message">{errors.email.message}</p>}
            <input
              type="password"
              placeholder="Password"
              {...register('password')}
              className={errors.password ? 'input-error' : ''}
            />
            {errors.password && <p className="error-message">{errors.password.message}</p>}
            {!isLogin && (
              <>
                <input
                  type="password"
                  placeholder="Confirm password"
                  {...register('confirmPassword')}
                  className={errors.confirmPassword ? 'input-error' : ''}
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
              </>
            )}
            {isLogin && <p className="forgot-password">Forgot password?</p>}
            <button type="submit" className="auth-submit">Submit</button>
          </form>


          <button className="google-signin"><img src={Gooogleimg} alt='' />Continue with Google</button>
          <div className="auth-divider">
            <span>Or</span>
          </div>
          <p className="auth-switch">
            {isLogin
              ? 'Not a member? Sign up'
              : 'Already a member? Login'}

          </p>

          <button
            onClick={() => setIsLogin(!isLogin)}
            className="google-signin">
            {isLogin ? 'Create your account' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Auth;
