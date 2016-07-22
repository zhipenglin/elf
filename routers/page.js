/**
 * Created by ifchangetoclzp on 2016/7/15.
 */
import Router from 'koa-router'

var router=new Router({
    prefix:'/api/page'
});

router.get('/',async (ctx,next)=>{
    ctx.success({
        title:'主页'
    });
}).get('/list',async (ctx,next)=>{
    ctx.success({
        title:'列表页'
    });
});

export default router;