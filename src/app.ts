import express, { Request, Response } from 'express'
import morganMiddleware from './configurations/morgan-middleware';
import * as routers from './routers';
import swaggerUi from 'swagger-ui-express';

const app = express();

app.use(morganMiddleware);

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(
    "/docs",
    swaggerUi.serve,
    swaggerUi.setup(undefined, {
        swaggerOptions: {
            url: "/swagger.json",
        },
    })
);

app.get('/', (_req: Request, res: Response) => {

    res.send('my-assets-services is running');
});

for (let router of Object.values(routers)) {
    
    const apiRouter = new router();
    app.use(apiRouter.service, apiRouter.router);
}

app.listen(process.env.PORT || 4000, () => {

    console.log(`my-assets-services is running on the port: ${process.env.PORT || 4000}`);
});