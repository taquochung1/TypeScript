import React from 'react';
import { Link } from 'react-router-dom';
import "../css/About.css";

const About = () => {
    return (
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
                        <Link style={{ color: "black" }} to="">Giới thiệu</Link>
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

            <div>
                <section className="py-5 bg-light" id="scroll-target">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6"><img className="img-fluid rounded mb-5 mb-lg-0" src="public/how-to-contact-binance-support-1140x626.jpg" alt="..." /></div>
                            <div className="col-lg-6">
                                <h2 className="fw-bolder">Our founding</h2>
                                <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                            </div>
                        </div>
                    </div>
                </section>
                {/* About section two*/}
                <section className="py-5">
                    <div className="container px-5 my-5">
                        <div className="row gx-5 align-items-center">
                            <div className="col-lg-6 order-first order-lg-last"><img className="img-fluid rounded mb-5 mb-lg-0" src="public/how-to-contact-binance-support-1140x626.jpg" alt="..." /></div>
                            <div className="col-lg-6">
                                <h2 className="fw-bolder">Growth &amp; beyond</h2>
                                <p className="lead fw-normal text-muted mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto est, ut esse a labore aliquam beatae expedita. Blanditiis impedit numquam libero molestiae et fugit cupiditate, quibusdam expedita, maiores eaque quisquam.</p>
                            </div>
                        </div>
                    </div>
                </section>
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
              <Link to="">Trang chủ</Link>
            </div>
            <div className="item">
              <Link to="">San pham</Link>
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
    )
}

export default About