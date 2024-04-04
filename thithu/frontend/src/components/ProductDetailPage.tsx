import React from 'react'
import { Link } from 'react-router-dom';
import "../css/ProductDetailPage.css";

const ProductDetailPage = () => {
    return (
        <div>
            <div>
                <div id="header">
                    <Link to="/" className="logo">
                        <img src="public/logo.png" />
                    </Link>
                    <div id="menu">
                        <div className="item" style={{ fontWeight: "bold", fontSize: "25px" }}>
                            <Link style={{ color: "black" }} to="/">Trang chủ</Link>
                        </div>
                        <div className="item" style={{ fontWeight: "bold", fontSize: "25px" }}>
                            <Link style={{ color: "black" }} to="/products">Sản phẩm</Link>
                        </div>
                        <div className="item" style={{ fontWeight: "bold", fontSize: "25px" }}>
                            <Link style={{ color: "black" }} to="/contact">Liên hệ</Link>
                        </div>
                        <div className="item" style={{ fontWeight: "bold", fontSize: "25px" }}>
                            <Link style={{ color: "black" }} to="/about">Giới thiệu</Link>
                        </div>
                    </div>
                    <div id="action">
                        <div className="item">
                            <Link to=""><img src="public/shopping-cart.png" /></Link>
                        </div>
                        <div className="item">
                            <Link to="/signup"><img src="public/user (1).png" /></Link>
                        </div>
                    </div>
                </div>
                <div id="banner" style={{ backgroundImage: "url(public/banner.png)" }}>


                    <div className="box-left">

                        <h2 style={{ marginLeft: "200px" }}>Thực phẩm hữu cơ</h2>
                        <p style={{ color: 'whilesmoke', marginTop: "20px" }}>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng và hợp vệ sinh đến người dùng</p>
                        <button style={{ marginLeft: "500px" }}>Mua ngay</button>
                    </div>
                    <div className="box-right">
                        <img src="public/img_1.png" />
                        <img src="public/img_2.png" />
                        <img src="public/img_3.png" />
                    </div>
                    <div className="to-bottom">
                        <Link to="">
                            <img src="public/to_bottom.png" />
                        </Link>
                    </div>
                </div>
                <div className="wp-content">
                    <div id="content">
                        <div>
                            <section className="py-5">
                                <div className="container px-4 px-lg-5 my-5">
                                    <div className="row gx-4 gx-lg-5 align-items-center">
                                        <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="public/product_1.png" alt="..." /></div>
                                        <div className="col-md-6">
                                            <div className="small mb-1">SKU: BST-498</div>
                                            <h1 className="display-5 fw-bolder">Shop item template</h1>
                                            <div className="fs-5 mb-5">
                                                <span className="text-decoration-line-through">$45.00</span>
                                                <span>$40.00</span>
                                            </div>
                                            <p className="lead">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi alias magni, accusamus eius blanditiis delectus ipsam minima ea iste laborum vero?</p>
                                            <div className="d-flex">
                                                <input className="form-control text-center me-3" id="inputQuantity" type="num" defaultValue={1} style={{ maxWidth: '3rem' }} />
                                                <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                                    <i className="bi-cart-fill me-1" />
                                                    Thêm vào giỏ hàng
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                            {/* Related items section*/}
                            <section className="py-5 bg-light">
                                <div className="container px-4 px-lg-5 mt-5">
                                    <h2 className="fw-bolder mb-4">Các sản phẩm liên quan</h2>
                                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                                {/* Product image*/}
                                                <img className="card-img-top" src="public/th (2).jpg" alt="..." />
                                                {/* Product details*/}
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        {/* Product name*/}
                                                        <h5 className="fw-bolder">Fancy Product</h5>
                                                        {/* Product price*/}
                                                        $40.00 - $80.00
                                                    </div>
                                                </div>
                                                {/* Product actions*/}
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Thêm vào giỏ hàng</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                {/* Sale badge*/}
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                                {/* Product image*/}
                                                <img className="card-img-top" src="public/th (3).jpg" alt="..." />
                                                {/* Product details*/}
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        {/* Product name*/}
                                                        <h5 className="fw-bolder">Special Item</h5>
                                                        {/* Product reviews*/}
                                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                        </div>
                                                        {/* Product price*/}
                                                        <span className="text-muted text-decoration-line-through">$20.00</span>
                                                        $18.00
                                                    </div>
                                                </div>
                                                {/* Product actions*/}
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Thêm vào giỏ hàng</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                {/* Sale badge*/}
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                                {/* Product image*/}
                                                <img className="card-img-top" src="public/th (4).jpg" alt="..." />
                                                {/* Product details*/}
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        {/* Product name*/}
                                                        <h5 className="fw-bolder">Sale Item</h5>
                                                        {/* Product price*/}
                                                        <span className="text-muted text-decoration-line-through">$50.00</span>
                                                        $25.00
                                                    </div>
                                                </div>
                                                {/* Product actions*/}
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Thêm vào giỏ hàng</a></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col mb-5">
                                            <div className="card h-100">
                                                <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Sale</div>
                                                {/* Product image*/}
                                                <img className="card-img-top" src="public/th.jpg" alt="..." />
                                                {/* Product details*/}
                                                <div className="card-body p-4">
                                                    <div className="text-center">
                                                        {/* Product name*/}
                                                        <h5 className="fw-bolder">Popular Item</h5>
                                                        {/* Product reviews*/}
                                                        <div className="d-flex justify-content-center small text-warning mb-2">
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                            <div className="bi-star-fill" />
                                                        </div>
                                                        {/* Product price*/}
                                                        $40.00
                                                    </div>
                                                </div>
                                                {/* Product actions*/}
                                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Thêm vào giỏ hàng</a></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>

                    </div>
                </div>
                <div id="footer">
                    <div className="box">
                        <div className="logo">
                            <img src="public/logo.png" />
                        </div>
                        <p>Cung cấp sản phẩm chất lượng cao</p>
                    </div>
                    <div className="box">
                        <h3>Nội dung</h3>
                        <ul className="quick-menu">
                            <div className="item">
                                <Link to="index.html">Trang chủ</Link>
                            </div>
                            <div className="item">
                                <Link to="">Sản phẩm </Link>
                            </div>
                            <div className="item">
                                <Link to="">Liên hệ</Link>
                            </div>
                            <div className="item">
                                <Link to="">Blog</Link>
                            </div>
                        </ul>
                    </div>
                    <div className="box">
                        <h3>Liên hệ</h3>
                        <form>
                            <input type="text" placeholder="Email" />
                            <button>Click</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetailPage