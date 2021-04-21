import { Body, Controller, Get, Params, Post, Query } from "koa-ts-controllers";
import { IsNumberString } from 'class-validator'

class GetUsersQuery {
    @IsNumberString({}, {
        message: 'page必须是数字'
    })
    page: number
}

@Controller('/test')
class TestController {
    @Get('/user')
    async hello(
        @Query() q: GetUsersQuery
    ) {
        return `123${JSON.stringify(q)}`
    }
    // @Post('/user')
    // async postUser(
    //     @Body() body: {
    //         name: string,
    //         password: string
    //     }) {
    //     return `当前提交的数据是 账号：${body.name}, 密码： ${body.password}`
    // }
}