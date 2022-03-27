const validate = async (req, res, next) => {
    let errors = {};

    const {
        firstname,
        lastname,
        email,
        address

    } = req.body;


    if (!firstname) {
        errors["firstname"] = "Firstname is required.";
    }

    if (!lastname) {
        errors["lastname"] = "Lastname is required.";
    }
    if (!email || !email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/)) {
        errors["email"] = "Email is not valid.";
    }
    if (!address) {
        errors["address"] = "Address is required.";
    }

    if(Object.keys(errors).length > 0){
        return res.status(400).json(errors)
    }

    next();
};

module.exports = { validate };
