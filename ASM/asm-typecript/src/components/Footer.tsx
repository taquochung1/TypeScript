import React from 'react'

const Footer = () => {
    return (
        <div id="footer">
  <div className="box">
    <div className="logo">
      <img src="img/logo.png" alt="true" />
    </div>
    <p>Cung cấp sản phẩm chất lượng cao</p>
  </div>
  <div className="box">
    <h3>Nội dung</h3>
    <ul className="quick-menu">
      <div className="item">
        <a >Trang chủ</a>
      </div>
      <div className="item">
        <a>Sản phẩm </a>
      </div>
      <div className="item">
        <a >Liên hệ</a>
      </div>
      <div className="item">
        <a>Blog</a>
      </div>
    </ul>
  </div>
  <div className="box">
    <h3>Liên hệ</h3>
    <form action="">
      <input type="text" placeholder="Email" />
      <button>Click</button>
    </form>
  </div>
</div>

    )
}

export default Footer