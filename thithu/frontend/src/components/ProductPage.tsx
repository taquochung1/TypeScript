import React from 'react'
import { Link } from 'react-router-dom';
import "../css/productpage.css";

const ProductPage = () => {
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
      <div id="wp-products">
        <h2 style={{ fontWeight: "bold", color: "black" }}>Sản phẩm HOT</h2>
        <ul id="list-products">
          <div className="item">
            <img src="public/product_1.png" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_1.png" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_1.png" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_1.png" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_1.png" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_1.png" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>

          <div className="item">
            <img src="public/product_3.png" alt="" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_4.png" alt="" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_5.png" alt="" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>
          <div className="item">
            <img src="public/product_6.png" alt="" />
            <div className="stars">
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
              <span>
                <img src="public/star.png" alt="" />
              </span>
            </div>
            <Link to="/detailproduct"><div className="name">Món ăn 1</div></Link>
            <div className="desc">Mô tả </div>
            <div className="price">100.000đ</div>
          </div>

        </ul>
        <div className="list-page">
          <div className="item">
            <Link to="#">1</Link>
          </div>
          <div className="item">
            <Link to="#">2</Link>
          </div>
          <div className="item">
            <Link to="#">3</Link>
          </div>
          <div className="item">
            <Link to="#">4</Link>
          </div>
        </div>
      </div>
      <div id="sale">
        <div className="box-left">

          <h1>
            <span>Giảm giá lên đến</span>
            <span>45%</span>
          </h1>
        </div>
        <img src="public/off.png" alt="" width={1000} />
        {/* <div className="box-right" /> */}

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

  )
}

export default ProductPage