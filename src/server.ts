import express from 'express';
import router from './router';
import morgan from 'morgan';
import cors from 'cors';
import { protect } from './modules/auth';
import { createNewUser, loginUser } from './handlers/user';

const app = express();


const customLogger = (message: string) => (req: any, res: any, next: () => void) => {
    console.log(`[${new Date().toISOString()}] ${message}`);
    next();
}


app.use(cors())
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(customLogger('Request received'));


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World' });
});


app.post('/user', createNewUser );
app.post('/user/login', loginUser );


app.use('/api', protect, router);







export default app;