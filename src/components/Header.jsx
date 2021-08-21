import React from 'react'
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button'
import logo from './../img/logo.png'

const Header = () => {
    return (
        <header>
            <div className="main">
                <div className='onediv'>
                    <img id='logoimg' src={logo} alt="" />
                    <p className="logo">Company</p>
                </div>

                <nav className="nav">
                    <Button variant="contained" color="primary"
                        className='classlink1' style={{ marginRight: '50px', marginTop: '25px' }} >
                        <NavLink
                            activeClassName='selected'
                            exact
                            to='/first'
                            className='links'
                            activeStyle={{
                                color: 'yellow',
                                textDecorationStyle: 'none',
                                textDecorationLine: "none",
                                fontSize: '15px',
                                fontFamily: 'serif',
                                borderRadius: '3px'

                            }}
                        >
                            Currency
                        </NavLink>
                    </Button>
                    <Button variant="contained"
                        color="primary"
                        className='classlink2' style={{ marginRight: '50px', marginTop: '25px' }} >
                        <NavLink
                            activeClassName='selected'
                            exact
                            to='/second'
                            className='links2'
                            activeStyle={{
                                color: '',
                                textDecorationStyle: 'none',
                                textDecorationLine: "none",
                                fontSize: '15px',
                                fontFamily: 'serif',
                                color: 'yellow',
                                borderRadius: '3px',

                            }}
                        >
                            Convertor
                        </NavLink>
                    </Button>
                    <div>
                        <Button
                        onClick={()=>alert('Log Out')}
                        
                        style={{
                            marginTop: '25px',
                            height: '30px',
                            backgroundColor: 'rgb(133, 30, 30)',
                            color: 'white'
                        }} className='lastbtn' variant='outlined'>Log Out</Button>
                    </div>
                </nav>

            </div>
        </header>
    )
}

export default Header
