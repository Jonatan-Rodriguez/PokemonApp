const { User } = require('../db');

const postUser = async (req, res) => {
    try {
        const { name, user, email, password, image, dob, favorite} = req.body;

        const userCreate = await User.create({name, user, email, password, image, dob, favorite});

        return res.status(200).json(userCreate);
        
    } catch (error) {
        console.error('Error al agregar un usuario a la DB:', error.message);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

module.exports = {
    postUser
}