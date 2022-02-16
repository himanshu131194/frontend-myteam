import * as express from 'express';
import Template from './template';

const router = express.Router();




router.get('/api/hello', (req, res, next) => {
    res.json('World');
});


router.get('*', (req, res, next) => {
    res.send(Template());
});



export default router;