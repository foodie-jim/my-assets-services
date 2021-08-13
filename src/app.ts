import express, { Request, Response, NextFunction } from 'express'

const app = express();

app.get('/', (_req: Request, res: Response, _next: NextFunction) => {

    res.send('Hello World');
});

app.listen(80, () => {
    console.log('Server is running');
});
// eslint 적용해서 아래 것 eslint 에러 나오게 해라
function Spelling (work) 
{
console.log(1);
}