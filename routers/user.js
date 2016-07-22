/**
 * Created by ifchangetoclzp on 2016/7/13.
 */
import Router from 'koa-router'

var router=new Router({
    prefix:'/api/user'
});

router.get('/login',async (ctx,next)=>{
    ctx.success({content:'这是登录页'});
}).post('/login',async (ctx,next)=>{
    ctx.success({content:'登录成功'});
});

export default router;