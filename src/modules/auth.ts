import jwt from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';

export const createJwt = (user: any) => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
            email: user.email,
        },
        process.env.JWT_SECRET || 'secret',
    )
    return token;
}

export const protect = (req: any, res: any, next: () => void) =>{
    const bearer = req.headers.authorization;
    if(!bearer){
        res.status(401).json({ message: 'Unauthorized' });
    }
    const [, token] = bearer.split(' ')
    if(!token){
        res.status(401).json({ message: 'Unauthorized' });
    }
    try {
        const user = jwt.verify(token, process.env.JWT_SECRET || 'secret');
        req.user = user;
        next()
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized' });
    }
}


export const comparePassword = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
}

export const hashPassword = async (password: string) => {
    return await bcrypt.hash(password, 10);
}