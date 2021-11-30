import { navContainer, navGroup } from '../styles/components/navbar.module.scss'
import { Logo } from './Logo'
import { Icon } from './Icon'
import { Search } from './Search'
import { CartShop } from './CartShop'
import { Aside } from './Aside'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth/useAuth'
import { roles } from '../helpers/roles'
import { ClientMenu } from './ClientMenu'
import { GuestMenu } from './menus/GuestMenu'
import { Menu } from './menus/Menu'
import { AdminMenu } from './menus/AdminMenu'

export const Navbar = () => {
    const { toggleMenu, toggle, user, isLogged } = useAuth()
    return (
        <>
            <nav className={`${navContainer}`}>
                <div className={`${navGroup}`}>
                    <Logo />
                    <Icon
                        className={`ri-menu-fill icon tabletHidden`}
                        onClick={toggle}
                    />

                    <Search />
                    <CartShop>
                        <Icon>
                            <Link
                                className="ri-shopping-cart-line icon"
                                to="/cart"
                            ></Link>
                        </Icon>
                    </CartShop>
                </div>
            </nav>
            <Aside toggleMenu={toggleMenu} toggle={toggle} tabletHidden>
                {isLogged() ? <ClientMenu /> : <GuestMenu />}
                <Menu />
                {user?.role === roles.admin && <AdminMenu />}
            </Aside>
        </>
    )
}
