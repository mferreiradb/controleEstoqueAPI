declare namespace Express {
    export interface Request {
        loggedUser: {
            id: number;
            login: string;
        }
    }
}