import React,{Component} from 'react';
import { Navbar,Image,Nav } from 'react-bootstrap'
import logo from '../../../public/assets/img/logo/setcolbd.png'



class Header extends Component{
    render(){
        return (
            <div>
                <header>
                    <div id="sticker" className="header-area">
                        <div className='container'>
                            <div className="row">
                                <div className="col-md-12 col-sm-12">
                                    <Navbar bg="light" expand="lg">
                                        <Navbar.Brand href="#home"><Image src={logo} className="d-inline-block align-top"/></Navbar.Brand>
                                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                        <Navbar.Collapse id="basic-navbar-nav">
                                            <Nav style={{marginLeft:'7%'}}>
                                                <Nav.Link href="#home" className="logo_icon">About</Nav.Link>
                                                <Nav.Link href="#link" className="logo_icon">Services</Nav.Link>
                                                <Nav.Link href="#link" className="logo_icon">Product</Nav.Link>
                                                <Nav.Link href="#link" className="logo_icon">Portfolio</Nav.Link>
                                                <Nav.Link href="#link" className="logo_icon">Contact</Nav.Link>
                                                <Nav.Link href="#link" className="logo_icon">Career</Nav.Link>
                                            </Nav>
                                            <div style={{marginLeft:'7%',color:'#2BACE2'}}>
                                                <span><i className="fa fa-phone"></i> : +88-0255112226</span>
                                                <br/>
                                                <span><i className="fa fa-phone"></i> : +88-01401157050</span>
                                            </div>
                                        </Navbar.Collapse>
                                    </Navbar>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
            </div>
        )
    }
}

export default Header;