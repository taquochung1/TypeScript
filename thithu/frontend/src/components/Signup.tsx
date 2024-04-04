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

const Signup = () => {
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const { register, handleSubmit, formState: { errors } } = useForm({
        // resolver: joiResolver(signupSchema),
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",


        }
    });

    const { mutate } = useMutation({
        mutationFn: async (user) => {
            const { data } = await axios.post(`http://localhost:8080/api/signup`, user);
            return data.product;

        },
        onSuccess: () => {
            alert('Đăng ký thành công');
            queryClient.invalidateQueries({ queryKey: ["PRODUCTS"] });

        }
    });

    const onSubmit = (user) => {
        mutate(user);
        navigate(`/signin`);
    };

    return (
        <div className='container'>
            <h2 className='mt-4'>Đăng ký</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="name" className='form-label'>Tên </label>
                    <input type="text" className='form-control' placeholder='Tên' {...register("name", { required: true, minLength: 3 })} />
                    {errors?.name?.message && (<span className='text-danger'>{errors?.name?.message}</span>)}
                </div>
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
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className='form-label'>Xác nhận mật khẩu</label>
                    <input type="password" className='form-control' placeholder='Mật khẩu' {...register("confirmPassword")} />

                </div>

                <button type="submit" className='btn btn-primary'>Đăng ký</button>
            </form>
        </div>
    );
};

export default Signup;
