/* eslint-disable no-unused-vars */
import React from 'react';
import { useForm } from 'react-hook-form';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="form-container">
            <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
                <div className='header'>Log in</div>
                <div className="form-group">
                    <label className="form-label">Email</label>
                    <input
                        type="email"
                        placeholder="Enter your Email"
                        className="form-input"
                        {...register('email', { required: 'Email is required' })}
                    />
                    {errors.email && <p className="form-error">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label className="form-label">Password</label>
                    <input
                        type="password"
                        placeholder="Enter your Password"
                        className="form-input"
                        {...register('password', { required: 'Password is required' })}
                    />
                    {errors.password && <p className="form-error">{errors.password.message}</p>}
                </div>
                <div className="form-group">
                    <label className="form-label">Account type</label>
                    <select
                        className="form-input"
                        {...register('role', { required: 'Role is required' })}
                    >
                        <option value="">Select your role</option>
                        <option value="admin">Admin</option>
                        <option value="donor">Donor</option>
                        <option value="needy">Needy</option>
                    </select>
                    {errors.role && <p className="form-error">{errors.role.message}</p>}
                </div>
                <button type="submit" className="form-submit">Submit</button>
                <span>Don't have an account<Link to="/register" style={{ fontSize: 'medium', fontWeight: 'bolder', marginLeft: '5px' }}>register</Link></span>

            </form>
        </div>
    );
};

export default LoginForm;
