import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div id="header">
                <a className="logo">
                    <img src="img/logo.png" />
                </a>
                <div id="menu">
                    <div className="item">
                        <a>Trang chủ</a>
                    </div>
                    <div className="item">
                        <a>Sản phẩm</a>
                    </div>
                    <div className="item">
                        <a>Liên hệ</a>
                    </div>
                    <div className="item">
                        <a>Giới thiệu</a>
                    </div>
                </div>
                <div id="action">
                    <div className="item">
                        <img src="img/shopping-cart.png" alt="true" />
                    </div>
                    <div className="item">
                        <img src="img/user (1).png" alt="true" />
                    </div>
                </div>
            </div>
            <div id="banner">
                <div className="box-left">
                    <h2>Thực phẩm hữu cơ</h2>
                    <p>Chuyên cung cấp các món ăn đảm bảo dinh dưỡng và hợp vệ sinh đến người dùng</p>
                    <button>Mua ngay</button>
                </div>
                <div className="box-right">
                    <img src="img/img_1.png" alt="true" />
                    <img src="img/img_2.png" alt="true" />
                    <img src="img/img_3.png" alt="true" />
                </div>
                <div className="to-bottom">
                    <a >
                        <img src="img/to_bottom.png" alt="true" />
                    </a>
                </div>
            </div>
        </div>

    )
}

export default Header