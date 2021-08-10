import {getApp, PORT} from './app';
const server =  (): void => {
    const app = getApp();
    app.listen(PORT, () => {
        console.log(`App listening at port ${PORT}`);
    });
}
server();
