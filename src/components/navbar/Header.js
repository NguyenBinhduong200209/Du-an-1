
import React from 'react';
import { Nav } from 'react-bootstrap';
import { PhoneOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { FacebookOutlined, UserOutlined } from '@ant-design/icons';
import { MailOutlined } from '@ant-design/icons';
import Logo from '../logo/Logo.png';



const Header = () => {



    return (
        <div>
            <Nav className='headerNav' activeKey="/home">
                <Nav.Item>
                    <img src={Logo} alt="Logo" />
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item className='IconPhone' >
                    <Nav.Link><PhoneOutlined /></Nav.Link>
                </Nav.Item>
                <Nav.Item className='IconPhone' >
                    <Nav.Link><FacebookOutlined /></Nav.Link>
                </Nav.Item>
                <Nav.Item className='IconPhone' >
                    <Nav.Link><MailOutlined /></Nav.Link>
                </Nav.Item>
                <Nav.Item className='seachNav'>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="" />
                        <button className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
                    </div>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1"><ShoppingCartOutlined /></Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Support</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-3" >
                        <UserOutlined />


                    </Nav.Link>

                </Nav.Item>
            </Nav>

            <nav className="navbar navbar-expand-lg bg-body-tertiary container">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Trang chủ</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bánh sinh nhật
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bánh bông lan & Bánh Ngọt
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Bánh mỳ & Bánh mặn
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Thông tin khuyến mãi</a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    );
};

export default Header;