import { Request, Response, NextFunction } from 'express';
import { CustomError } from 'utils/response/custom-error/CustomError';


export const register = async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    try {
        const newUser = { email: null, password: null };
        newUser.email = email;
        newUser.password = password;

        res.status(200).json({message: 'User successfully created.', user: newUser})

    } catch (err) {
        const customError = new CustomError(400, 'Raw', 'Error', null, err);
        return next(customError);
    }
};