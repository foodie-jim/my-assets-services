import express, { Request, Response } from 'express'

const app = express();

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World, 성수연 말');
});

app.listen(process.env.PORT || 3000, () => {
    console.log('my-assets-services is running');
});
