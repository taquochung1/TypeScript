import { useParams } from "react-router-dom";
import useProductQuery from "../hooks/useProductQuery";
import { useEffect } from "react";
import useProductMutation from "../hooks/useProductMutation";
const ProductEdit = () => {
    const { id } = useParams();
    const { data } = useProductQuery(id);
    const { form, onSubmit } = useProductMutation({
        action: "UPDATE",
    });
    useEffect(() => {
        form.reset(data);
    }, [id, form, data]);
    return (
        <div>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <input type="text" {...form.register("name")} />
                <input type="number" {...form.register("price")} />
                <button>Thêm sản phẩm</button>
            </form>
        </div>
    );
};

export default ProductEdit;