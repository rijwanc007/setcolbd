import React,{Component} from 'react';
import {Image, Nav, Navbar , NavDropdown} from "react-bootstrap";
import logo from "../../assets/img/logo/setcolbd.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

class HeaderTwo extends Component{
    render(){
        return(
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
                                                {/*<AnchorLink offset='100' href="#about" className="logo_icon">About</AnchorLink>*/}
                                                {/*<AnchorLink offset='100' href="#services" className="logo_icon">Services</AnchorLink>*/}
                                                {/*<AnchorLink offset='100' href="#product" className="logo_icon">Product</AnchorLink>*/}
                                                {/*<AnchorLink offset='100' href="#portfolio" className="logo_icon">Portfolio</AnchorLink>*/}
                                                <AnchorLink offset='100' href="#contact" className="logo_icon">Contact</AnchorLink>
                                                {/*<AnchorLink offset='100' href="#career" className="logo_icon">Career</AnchorLink>*/}
                                                <NavDropdown title="Services" id="collasible-nav-dropdown">
                                                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                                    <NavDropdown.Divider />
                                                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                                                </NavDropdown>
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


export default HeaderTwo;