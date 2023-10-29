const data = require("../utils/users")

function login(req, res){
    const {email, password} = req.query;

    const user = data.find((user) => user.email === email && user.password === password);
    
    const access = user ? true : false;

    res.status(200).json({access});
}

module.exports={
    login
};