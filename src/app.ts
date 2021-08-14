import express, { Request, Response } from 'express'

const app = express();

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('my-assets-services is running');
});
