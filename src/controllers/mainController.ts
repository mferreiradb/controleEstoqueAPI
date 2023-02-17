import { Request, Response } from 'express';

export class Main {

    handle(req: Request, res: Response) {

        return res.json({ msg: 'online' });
    }
}