const baseURL = "https://eco.kmaobharat.com";

const allApis = {
    get_product: `${baseURL}/user/get-product`,
    get_category: `${baseURL}/user/get-category`,
    baseurl: `${baseURL}/assets/img/`,
    login: `${baseURL}/user/login`,
    get_otp: `${baseURL}/user/get-otp`,
    verify_otp: `${baseURL}/user/verify-otp`,
    user_existence: `${baseURL}/user/check-user-existence`,
    register: `${baseURL}/user/register`,
    forget_password: `${baseURL}/user/forget-password`,
    add_cart: `${baseURL}/user/add-cart`,
    verify_token: `${baseURL}/user/token-check`,
    remove_cart: `${baseURL}/user/remove-cart`,
    get_cart: `${baseURL}/user/get-cart`,
    user_details: `${baseURL}/user/user-details`,
    update_user_details: `${baseURL}/user/update-user-details`,
    remove_address: `${baseURL}/user/remove-address`,
    banner: `${baseURL}/user/get-banner`,
    add_wishlist: `${baseURL}/user/add-wishlist`,
    get_wishlist: `${baseURL}/user/get-wishlist`,
    remove_wishlist: `${baseURL}/user/remove-wishlist`,
    promoted_tabs: `${baseURL}/user/get-promoted`,
    get_orders: `${baseURL}/user/get-order`,
    change_password: `${baseURL}/user/change-password`,
    offer_strip: `${baseURL}/user/get-offer`,
    add_order: `${baseURL}/user/add-order`
    

};

export default allApis;