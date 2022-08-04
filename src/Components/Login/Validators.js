
const validate = (user) => {
    let errors = {};
    if(!user.email.includes('@')) {
        errors.email = 'Please enter a valid email address';
    };
    if(user.password.length === 0) {
        errors.password= 'Please enter a password';
    };
    

    return errors;
};


export default validate;