import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { Link } from 'react-router-dom'
import { IProduct } from '../interfaces/product'

const ProductList = () => {
    const queryClient = useQueryClient();
    const { data } = useQuery({
        queryKey: ['PRODUCTS'],
        queryFn: async () => {
            const { data } = await axios.get(`http://localhost:8080/api/products`);
            return data.products
        },
    });

    const { mutate } = useMutation({
        mutationFn: async (id: string) => {
            return (
                window.confirm("Bạn có chắc chắn muốn xóa không?") && (await axios.delete(`http://localhost:8080/api/products/${id}`))
            );
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['PRODUCTS'] })
        }
    });


    return <div className='container'>
        <div className="d-flex justify-content-between">
            <h2 className='mt-2'>Quản lý sản phẩm</h2>
            <Link to="/admin/products/add" className='btn btn-primary'>Them </Link>
        </div>

        <table className='table table-bordered'>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Anh</th>
                    <th>Ten</th>
                    <th>Gia</th>
                    <th>Mo ta</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {data?.map((product: IProduct, index: number) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>
                            <img src={product.image} width={50} alt="" />
                        </td>
                        <td>{product.name}</td>
                        <td>{product.price}</td>
                        <td>{product.description}</td>
                        <td>
                            <Link to={`/admin/products/${product._id}/edit`} className='btn btn-primary'>Cap nhat</Link>
                            <button onClick={() => mutate(product._id!)} className='btn btn-danger'>Xoa</button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </table>
    </div>
}

export default ProductList