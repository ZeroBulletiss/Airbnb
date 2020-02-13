//index, show, store, update, destroy
import User from '../models/User'
import axios from 'axios'

export default {
    async store(req, res) {
        const {email} = req.body

        let user = await User.findOne({email})

        if(!user) {
            user = await User.create({email})
        }

        return res.json(user)

    },

    async show(req, res) {

        const user = await User.find()

        return res.json(user)
    },

    async getOne(req, res) {
        
        const user = await User.findById(req.params.id)
        
        return res.json(user)
    },

    async delete(req, res) {
        
        const user = await User.findByIdAndDelete(req.params.id)

        return res.json(user)
    },

    async update(req, res) {
        const user = await User.findByIdAndUpdate(req.params.id, req.body)

        return res.json(user)
    },
  
}
/* async teste(req, res) {
        console.log(req.body.valor)
        const resposta = await axios.get(`https://swapi.co/api/planets/${req.body.valor}/`)
        
        return res.json(resposta.data)
    }*/ 

