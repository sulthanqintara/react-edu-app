import React from 'react'
import "./forgetPassword.css";
import Picture from "../../assets/img/icon/forget.png";
import { Link } from 'react-router-dom';


function ForgetPassword() {
    return (
        <>
            <nav className="icon-forget position-absolute">
                <Link to="/login">
                    <i className="fas fa-chevron-left fa-2x"></i>
                </Link>
            </nav>
            <main className="main-forget vh-100 d-flex justify-content-around align-items-center">
                <section className="container left">
                    <img src={Picture} alt="Logo" />
                </section>
                <section className="container right d-flex flex-column justify-content-center ">
                    <h1>Reset Password</h1>
                    <div className="form-email">
                        <h5>Enter your email address linked to this account.</h5>
                        <p>We will send you the verification code to reset your password</p>
                        <form className="d-flex flex-column align-items-center mt-5 mb-5">
                            <label className="label-email position-relative">Email</label>
                            <input className="mb-4" type="text" placeholder="Please input email"></input>
                            <button className="btn-login mb-3" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                    {/* <div className="form-verification">
                        <h5>Enter verification code we just sent to your email address</h5>
                        <form className="verification d-flex justify-content-center mt-5 mb-3">
                            <input type="text" maxLength="1" min="0" max="9" />
                            <input type="text" maxLength="1" min="0" max="9" />
                            <input type="text" maxLength="1" min="0" max="9" />
                            <input type="text" maxLength="1" min="0" max="9" />
                        </form>
                        <p>Didn’t receive a code? <Link><span>Resend</span></Link></p>
                        <button className="btn-login mt-5 mb-3" type="submit">
                            Verify
                        </button>
                    </div> */}
                </section>
            </main>
        </>
    )
}

export default ForgetPassword
