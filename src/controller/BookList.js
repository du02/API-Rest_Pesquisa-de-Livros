const axios = require('axios');
const modelBook = require('../model/bookModel');

module.exports = {

    async index(req, res){

        const book = await modelBook.findAll();

        return res.send(book); 
    },

    async show(req, res){

        const { id } = req.body;
        
        const FilterBook = await modelBook.findByPk( id );
        
        return res.json(FilterBook);
    },

    async store(req, res){
    
        const { isbn, amoult } = req.body;
        const apiGoogle = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}`);

        const { totalItems } = apiGoogle.data;

        // Error Handling - Tratamento de erro
        
        if ( totalItems >= 1 ) {
            
            // Data processing - Tratamento de Dado
            const id_google = apiGoogle.data.items[0].id;
            const { title } = apiGoogle.data.items[0].volumeInfo;
            const author = apiGoogle.data.items[0].volumeInfo.authors[0];
            const isbn01 = apiGoogle.data.items[0].volumeInfo.industryIdentifiers[0].identifier;
            const isbn02 = apiGoogle.data.items[0].volumeInfo.industryIdentifiers[1].identifier;

            // Add BD
            const bookCreate = await modelBook.create({ id_google, title, author, amoult, isbn01, isbn02 });
                        
            return res.json({ bookCreate, success: 'Livro criado com sucesso!' });  
        } else {
            return res.json({ error: 'Livro não encontrado.' });
        }
        
    },

    async update(req, res){

        const { id, title, author, amoult, isbn01 } = req.body;
        
        // Edit - Editar
        const book = await modelBook.update({ title, author, amoult, isbn01 }, {
            where: {
                id: id
            }
        });
 
        return res.json({ book, success: 'Livro atualizado com sucesso!' }); 
    },

    async destroy(req, res){

        const { id } = req.params;

        // destroy - deletar, destruir
        const book = await modelBook.destroy({
            where: {
                id: id
            }
        });
        
        return res.json({ book, success: 'Livro deletado.' }); 
    }


}