import User from '../models/User'
import Spot from '../models/Spot'

export default {
    async index(req, res) {
        const {tech} = req.query
        
        const spots = await Spot.find({techs: tech})

        return res.json(spots)
    },


    async store(req, res) {
        const { filename } = req.file
        const {company, price, techs} = req.body
        const { user_id } = req.headers

        const error = await User.findById(user_id)

        if(!error) {
            return res.status(400).json({ error: 'User does not exists'})
        }

        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            techs: techs.split(',').map(tech => tech.trim()),
            price
        })

        return res.json(spot)
    } 
}
