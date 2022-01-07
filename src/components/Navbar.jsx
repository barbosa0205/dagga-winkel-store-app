import {
    navContainer,
    navGroup,
    cartIcon,
    notify,
} from '../styles/components/navbar.module.scss'
import { Logo } from './Logo'
import { Icon } from './Icon'
import { Search } from './Search'
import { Aside } from './Aside'
import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/auth/useAuth'
import { roles } from '../helpers/roles'
import { ClientMenu } from './ClientMenu'
import { GuestMenu } from './menus/GuestMenu'
import { Menu } from './menus/Menu'
import { AdminMenu } from './menus/AdminMenu'
import { useCart } from '../contexts/cart/useCart'

export const Navbar = () => {
    const { toggleMenu, toggle, user, isLogged } = useAuth()
    const { cart } = useCart()
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

                    <Icon>
                        <Link
                            className={`ri-shopping-cart-line icon ${cartIcon}`}
                            to="/cart"
                        >
                            <span className={notify}>
                                {user ? cart.length : 0}
                            </span>
                        </Link>
                    </Icon>
                </div>
            </nav>
            <Aside toggleMenu={toggleMenu} toggle={toggle} tabletHidden>
                {isLogged() ? (
                    <ClientMenu asideToggle={toggle} />
                ) : (
                    <GuestMenu />
                )}
                <Menu />
                {user?.role === roles.admin && <AdminMenu />}
            </Aside>
        </>
    )
}
