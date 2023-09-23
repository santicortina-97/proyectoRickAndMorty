const {Favorite} = require("../DB_connection");

const postFav = async(req, res) =>{
    try {
        console.log(req.body)
        const {id, name, origin, status, image, species, gender, location} = req.body;
        if(!id || !name || !origin.name || !status || !image || !species || !gender || !location.name){
            return res.status(401).send("Faltan datos")
        }
        await Favorite.findOrCreate({where:{id, name, origin, status, image, species, gender, location}});
/* 
        fav.addUser(idUser);
        fav.setUser([id]) */

        const allFavorites = await Favorite.findAll();

        return res.status(200).json(allFavorites)
    } catch (error) {
        return res.status(500).json(error.message)
    }
}

module.exports = postFav