export const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    forgot_password: '/forgot-password',
    categories: '/categories',
    category: category => `/categories/${category}`,
    cart: '/cart',
    products: '/products',
    product: productId => `/products/${productId}`,
    profile: '/profile',
    settings: '/settings',
    cPanel: '/cpanel',
}
