import configs from './configs';
import Koa, { Context } from 'koa';
import KoaRouter from 'koa-router'
import { bootstrapControllers, Ctx } from 'koa-ts-controllers'
import path from 'path'
// 安装路由解析库
import koaBodyParser from 'koa-bodyparser'

(async () => {

    const app = new Koa()
    const router = new KoaRouter()

    //注册路由
    await bootstrapControllers(app, {
        router,
        basePath: '/api',
        versions: [1],
        controllers: [
            path.resolve(__dirname, 'controllers/**/*')
        ],
        errorHandler: async (err: any, ctx: Context) => {
            console.log(err);

            let status = 500
            let body: any = {
                statusCode: status,
                error: "Internal Server Error",
                message: 'An Internal Server Error Occurree'
            }
            if (err.output) {
                status = err.output.statusCode
                body = { ...err.output.payload }
            }

            if (err.data) {
                body.errDetail = err.data
            }
            ctx.status = status
            ctx.body = body
        }
    })
    app.use(koaBodyParser())
    app.use(router.routes())

    app.listen(configs.server.port, configs.server.host, () => {
        console.log(`服务启动成功: http://${configs.server.host}:${configs.server.port}`);
    })
})()