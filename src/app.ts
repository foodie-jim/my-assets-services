import express, { Request, Response } from 'express'

const app = express();

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(80, () => {
    console.log('App is running');
});
