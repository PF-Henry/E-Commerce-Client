import jwt from "jsonwebtoken";

const storage = window.localStorage;

function initSession(token)  {
    const JWT_SECRET = process.env.JWT_SECRET || "secretKey";
    const algorithm = "HS256";
    storage.setItem('token', token);

    const session = {
        getUser: () => {
            const token = window.localStorage.getItem('token');
            const user = jwt.verify(token, JWT_SECRET, { algorithm });
            return user.payload;
        },
        getUserId: () => {
            let user = session.getUser();
            return user.id;
        },
        getRole: () => {
            let user = session.getUser();
            return user.role.name;
        }       
    }
    return session;
}

function  closeSession() {
    return storage.removeItem('token');
}

export {
    initSession,
    closeSession
};