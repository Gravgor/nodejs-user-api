import { Router } from 'express';


const router = Router();

router.get('/product', (req, res) => {
    res.status(200).json({ message: 'There is our products' });
})

router.get('/product/:id', () => {
    console.log('Hello World');
})

router.post('/product', () => {
    console.log('Hello World');
})

router.put('/product/:id', () => {
    console.log('Hello World');
})

router.delete('/product/:id', () => {
    console.log('Hello World');
})

/*Updates    */

router.get('/update', () => {
    console.log('Hello World');
})

router.get('/update/:id', () => {
    console.log('Hello World');
})

router.post('/update', () => {
    console.log('Hello World');
})

router.put('/update/:id', () => {
    console.log('Hello World');
})

router.delete('/update/:id', () => {
    console.log('Hello World');
})


/* Update points */

router.get('/updatepoint', () => {
    console.log('Hello World');
})

router.get('/updatepoint/:id', () => {
    console.log('Hello World');
})

router.post('/updatepoint', () => {
    console.log('Hello World');
})

router.put('/updatepoint/:id', () => {
    console.log('Hello World');
})

router.delete('/updatepoint/:id', () => {
    console.log('Hello World');
})


export default router;
