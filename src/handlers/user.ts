import prisma from "../db";
import { createJwt, hashPassword, comparePassword } from "../modules/auth";


export const createNewUser = async (req: any, res: any) => {
        const user = await prisma.user.create({
        data: {
            email: req.body.email,
            password: await hashPassword(req.body.password),
        },
        });
        const token = createJwt(user);
        res.status(201).json({ token });  
}


export const loginUser = async (req: any, res: any) => {
    const user = await prisma.user.findUnique({
        where: {
            email: req.body.email,
        },
    });
    if(!user){
        res.status(401).json({ message: 'Invalid credentials' });
    }
    if(!user?.password === null){
        const password = user?.password as string;
        const isValid = await comparePassword(req.body.password, password);
        if(!isValid){
            res.status(401).json({ message: 'Invalid credentials' });
        }
        const token = createJwt(user);
        res.status(200).json({ token });
    }
}