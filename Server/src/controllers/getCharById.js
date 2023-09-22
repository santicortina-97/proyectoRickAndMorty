const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/"

async function getCharById(req, res){
    try {
        const { id } = req.params;
        const {data} = await axios(`${URL}/${id}`)
        let character = {
            id:data.id, 
            name:data.name, 
            image:data.image, 
            gender:data.gender, 
            species:data.species, 
            status:data.status, 
            origin:data.origin?.name, 
            location:data.location 
        }
        if(data){
            res.status(200).json(character)
        }else{
            res.status(404).send("Not Found")
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}



module.exports = {
    getCharById,
};
