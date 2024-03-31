import React from 'react'

function Header() {
    return (
        <div className='header' data-testid='header'>
            <h1><span className='reddit'>reddit</span>Minimal <img className='logo' alt='logo' src='/favicon.ico'/></h1>
        </div>
    )
}

export default Header