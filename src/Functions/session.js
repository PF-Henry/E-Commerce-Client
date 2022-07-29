import jwt from "jsonwebtoken";



export const getUserFromToken = (token) => {
    const JWT_SECRET = process.env.JWT_SECRET || "secretKey";
    const algorithm = 'HS256';

    if (token === '') {
        return {
            user: undefined
        };
    }
    const user = jwt.verify(token, JWT_SECRET, { algorithm }).payload;
    return user;
};

export const getRoleFromToken = (token) => {
    const user = getUserFromToken(token);
    if (user === undefined) {
        return 'Guest';
    }
    return user.role.name;
}

// export const getUserId = () => {
//     const user = getUserFromToken();
//     if (user === undefined) {
//         return undefined;
//     }
//     return user.id;
// }


// class Session {
//     constructor(token) {
//         this.token = token;
//     }

//     set token(token) {
//         if (token === undefined) {
//             throw new Error('Token is required');
//         }
//         // this._token = document.sessionStorage.setItem('token', token);
//         this._token = token;
//     }

//     get token() {
//         return this._token;
//     }

//     _getUser() {
//         const user = jwt.verify(this.token, process.env.JWT_SECRET || "secretKey").payload;
//         return user;
//     }

//     getUserId() {
//         const user = this._getUser();
//         return user.id;
//     }

//     getUserName() {
//         const user = this._getUser();
//         if (user === undefined) {
//             return null;
//         }
//         return user.name;
//     }

//     getUserRole() {
//         const user = this._getUser();
//         if (user === undefined) {
//             return null;
//         }
//         return user.role.name;
//     }
// }

// export default Session;