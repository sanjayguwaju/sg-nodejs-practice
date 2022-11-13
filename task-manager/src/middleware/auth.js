const jwt = require('jsonwebtoken')
const User = require('../models/user')


const auth = async (req, res, next) => {
    try {
        // At the Bearer i just forgot to add space. Error Occured : Please authenticate and took time of 2 hours
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = jwt.verify(token, 'thisismynewcourse')
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })

        if (!user) {
            throw new Error()
        }

        req.user = user
        next()
        console.log(user)
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate' })
    }
}

module.exports = auth