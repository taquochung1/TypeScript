import React from 'react';
import { joiResolver } from '@hookform/resolvers/joi';
import Joi from 'joi';
import { useForm } from 'react-hook-form';
import { IProduct } from '../interfaces/product';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// const signupSchema = Joi.object({
//     name: Joi.string().min(3),
//     email: Joi.string().email().required(),
//     password: Joi.string().required().min(6),
//     confirmPassword: Joi.string().required().valid(Joi.ref("password")),
// });

const Signin = () => {
  const navigate = useNavigate();


  const { register, handleSubmit, formState: { errors } } = useForm({
    // resolver: joiResolver(signupSchema),
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const { mutate } = useMutation({
    mutationFn: async (user) => {
      const { data } = await axios.post(`http://localhost:8080/api/signin`, user);
      localStorage.setItem('user', JSON.stringify(data))
      return data.product;

    },
    onSuccess: () => {
      alert('Đăng nhập thành công');


    }
  });

  const onSubmit = (user) => {
    mutate(user);
    navigate(`/`);
  };

  return (
    <div className='container'>
      <h2 className='mt-4'>Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label htmlFor="email" className='form-label'>Email</label>
          <input type="email" className='form-control' placeholder='Email' {...register("email", { required: true })} />
          {errors?.email?.message && (<span className='text-danger'>{errors?.email?.message}</span>)}
        </div>
        <div className="mb-3">
          <label htmlFor="image" className='form-label'>Mật khẩu</label>
          <input type="password" className='form-control' placeholder='Mật khẩu' {...register("password")} />
          {errors?.password?.message && (<span className='text-danger'>{errors?.password?.message}</span>)}
        </div>


        <button type="submit" className='btn btn-primary'>Đăng nhập</button>
      </form>
    </div>
  );
};

export default Signin;
