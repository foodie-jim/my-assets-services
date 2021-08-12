import express, { Request, Response, NextFunction } from 'express'

const app = express();

app.get('/', (req: Request, res: Response, next: NextFunction) => {

    res.send('Hello World');
});

app.listen(80, () => {
    console.log('Server is running');
});