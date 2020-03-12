const { Router } = require('express');
const BookList = require('./src/controller/BookList');
const BookManual = require('./src/controller/BookManual');

const router = Router();

router.get('/', BookList.index);
router.get('/book', BookList.show);

router.post('/adicionarIsbn', BookList.store);
router.post('/adicionarManual', BookManual.store);

router.put('/editarBook', BookList.update);
router.delete('/deletarBook/:id', BookList.destroy);


module.exports = router;