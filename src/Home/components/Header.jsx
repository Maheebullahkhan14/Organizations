import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='header-main-cover-wrapper flex  flex-row justify-between text-white px-[80px] p-5 mx-auto'>
            <div className="logo-box">
                <h6>Logobox</h6>
            </div>

            <div className="header-nav-link-box">
                <ul>
                    <li>
                        <Link className='mx-5 font-normal text-[13px]'>
                            Home
                        </Link>
                        <Link className='mx-5 font-normal text-[13px]'>
                            Projects
                        </Link>
                        <Link className='mx-5 font-normal text-[13px]'>
                            About
                        </Link>
                        <Link className='mx-5 font-normal text-[13px]'>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="header-login-btn">
                <Link>
                    Login
                </Link>
            </div>
        </div>
    )
}

export default Header
