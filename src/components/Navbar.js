import React, { Component } from 'react'
import { AuthContext } from '../context/AuthContext';
import { ThemeContext } from '../context/ThemeContext';

class Navbar extends Component { 

    render() {
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    const {isAuthenticated, toggleAuth} = authContext;
                    const {isLightTheme, light, dark} =  themeContext;
                    const theme = isLightTheme ? light : dark;
                    return(
                        <nav style={{background: theme.ui, color: theme.syntax}}>
                          <h1>Context</h1>
                          <div onClick={toggleAuth}>
                              {isAuthenticated ? 'logged in' : 'logged out'}
                          </div>
                            <ul>
                             <li>Home</li>
                             <li>About</li>
                             <li>Contact</li>
                            </ul>
                        </nav> 
                    )
                }}
                </ThemeContext.Consumer> 
            )}
           
            </AuthContext.Consumer>
        )
    }
}

export default Navbar;
