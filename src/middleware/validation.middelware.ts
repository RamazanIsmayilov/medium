import { NextFunction, Request, Response } from "express"
import { ObjectSchema } from "joi";

const validationMiddleware = (schema: ObjectSchema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body);
        if (error) {
            res.status(400).json({ error: error.details[0].message });
            return
        }
        next();
    };

}

export default validationMiddleware