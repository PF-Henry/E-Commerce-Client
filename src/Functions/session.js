import jwt from "jsonwebtoken";



export const getUserFromToken = (token) => {
    const JWT_SECRET = process.env.JWT_SECRET || "secretKey";
    const algorithm = 'HS256';

    if (token === '') {
        return {
            role: 'Guest'
        };
    }
    const user = jwt.verify(token, JWT_SECRET, { algorithm }).payload;
    return user;
};

export const getRole = () => {
    const user = getUserFromToken();
    if (user === undefined) {
        return 'Guest';
    }
    return user.role;
}