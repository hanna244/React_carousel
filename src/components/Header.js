import React  from 'react'

function Header() {
    return (
        <div className='wrapper_header'>
            <a href="#none" className='link_logo'><img src='../logo.png' alt="MORE 홈으로 이동" width={54} height={16} /></a>
            <div className='navigation_menu'>
                <a href="#none" className='link_menu'><img src="../hambuger.png" alt="메뉴" width={30} height={30} /></a>
                <a href="#none" className='link_menu'><img src="../cart.png" alt="장바구니" width={30} height={30} /></a>
            </div>
        </div>
    )
}

export default Header