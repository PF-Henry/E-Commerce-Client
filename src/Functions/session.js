import jwt from "jsonwebtoken";


const arrCookies = document.cookie.split(';');

export const getToken = () => {
    const tokenCookie = arrCookies.find(cookie => cookie.includes('token')); //* Find the token in the cookies
    if (tokenCookie === undefined) {
        return null;
    }
    return tokenCookie.split('=')[1];
}

export const getUser = () => {
    const JWT_SECRET = process.env.JWT_SECRET || "secretKey";
    const algorithm = 'HS256';
    const token = getToken();
    if (token === null) {
        return null;
    }
    const user = jwt.verify(token, JWT_SECRET, { algorithm }).payload;
    return user;
}

export const getRole = () => {
    if (document.cookie === '') {
        return 'Guest';
    }
    const user = getUser();
    return (user && user.role.name) || 'Guest';
}

export const closeSession = () => {
    arrCookies.forEach(cookie => {
        document.cookie = cookie.split("=")[0] + "=;expires=" + new Date(0).toUTCString();
    });
    console.log('arrCookies', arrCookies);
}