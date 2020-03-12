const modelBook = require('../model/bookModel');

module.exports = {
    async store(req, res){

        const { id_google, title, author, amoult, isbn01, isbn02 } = req.body;

        const bookCreate = await modelBook.create({id_google, title, author, amoult, isbn01, isbn02})

        return res.json({ bookCreate, success: 'Livro criado MANUALMENTE com sucesso!' })
    }
}