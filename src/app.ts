import express, { Request, Response } from 'express';
const app = express();
const port = 3000;


app.get('/', (req: Request, res: Response) => {
    console.log('hello wourld');
});

app.listen(port, () => {
    console.log(`Server listening localhost:${port}`);
});