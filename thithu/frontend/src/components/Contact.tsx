import React from 'react'
import { Link } from 'react-router-dom';
import "../css/contact.css";
import "../css/HomePage.css"

const Contact = () => {
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
            <br />
            <section className="py-5 border-bottom" id="features">
                <div className="container px-5 my-5">
                    <div className="row gx-5">
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-collection" /></div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right" />
                            </a>
                        </div>
                        <div className="col-lg-4 mb-5 mb-lg-0">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-building" /></div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right" />
                            </a>
                        </div>
                        <div className="col-lg-4">
                            <div className="feature bg-primary bg-gradient text-white rounded-3 mb-3"><i className="bi bi-toggles2" /></div>
                            <h2 className="h4 fw-bolder">Featured title</h2>
                            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                            <a className="text-decoration-none" href="#!">
                                Call to action
                                <i className="bi bi-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <br />
            <div className="row gx-5 justify-content-center">
                <div className="col-lg-6">
                    <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                        {/* Name input*/}
                        <div className="form-floating mb-3">
                            <input className="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                            <label htmlFor="name">Full name</label>
                            <div className="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                        </div>
                        {/* Email address input*/}
                        <div className="form-floating mb-3">
                            <input className="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                            <label htmlFor="email">Email address</label>
                            <div className="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                            <div className="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                        </div>
                        {/* Phone number input*/}
                        <div className="form-floating mb-3">
                            <input className="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                            <label htmlFor="phone">Phone number</label>
                            <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                        </div>
                        {/* Message input*/}
                        <div className="form-floating mb-3">
                            <textarea className="form-control" id="message" placeholder="Enter your message here..." style={{ height: '10rem' }} data-sb-validations="required" defaultValue={""} />
                            <label htmlFor="message">Message</label>
                            <div className="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                        </div>
                        {/* Submit success message*/}
                        {/**/}
                        {/* This is what your users will see when the form*/}
                        {/* has successfully submitted*/}
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                To activate this form, sign up at
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        {/* Submit error message*/}
                        {/**/}
                        {/* This is what your users will see when there is*/}
                        {/* an error submitting the form*/}
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        {/* Submit Button*/}
                        <div className="d-grid"><button className="btn btn-primary btn-lg disabled" id="submitButton" type="submit">Submit</button></div>
                    </form>
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
                    <form >
                        <input type="text" placeholder="Email" />
                        <button>Click</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default Contact;