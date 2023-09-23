const {User} = require("../DB_connection")

/* const login = async (req, res) =>{
    try {
        const {email, password} = req.query;
        
            if(!email || !password) {
                return res.status(400).send("faltan datos")
            };
        const user = await User.findOne({where:{email}})
        if(!user){
            return res.status(404).send("Usuario no encontrado")
        }
        return user.password === password ? 
        res.status(200).json({acces:true}) 
        : res.status(403).send("Contraseña incorrecta")
    } catch (error) {
        return res.status(500).send(error.message)
    }
} */
const login = async (req, res,) => {
    try {
        const {email, password} = req.query;

        if(!email || !password) return res.status(400).json({message: "Faltan datos"})

        const user = await User.findOne({ where: { email } });

        if (!user) res.status(404).json({message: "Usuarion no encontrado"});

        if (user.password !== password) res.status(403).send("Contraseña incorrecta")
        else res.status(200).json({ access: true })

    } catch (error) {
        res.status(500).json({message: error.message})
    }
}

module.exports = login