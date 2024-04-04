// import Cart from '../models/cart';
// import Product from '../models/product';
// import User from '../model/user';

// export const addItemToCart = async (req, res) => {
//     const { userId, productId, quantity } = req.body;
//     try {
//         // kiem tra gio hang co ton tai chua(dua ten userId)
//         let cart = await Cart.findOne({ userId });

//         // neu gio hang khong ton tai thi tao moi gio hang
//         if (!cart) {
//             cart = new Cart({ userId, products: [] });
//         }
//         // kiem tra xem san pham co ton tai trong gio hang khong
//         const existProductIndex = cart.products.findIndex(item => item.productId.toString() == productId);

//         if (existProductIndex !== -1) {
//             // neu ton tai thi cap nhat so luong
//             cart.products[existProductIndex].quantity += quantity;

//         } else {
//             // neu san pham chua co trong gio hang thi them moi
//             cart.products.push({ productId, quantity })
//         }
//         // luu gio hang
//         await cart.save();


        
//     } catch (error) {
//         // tra ve client loi

//     }
// }