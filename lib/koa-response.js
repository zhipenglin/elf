/**
 * Created by ifchangetoclzp on 2016/7/15.
 */
export default function(){
    return function(ctx,next){
        ctx.success=(data)=>{
            ctx.body={
                status:1,data
            }
        };
        ctx.error=(status,message)=>{
            ctx.body={
                status,message
            }
        };
        return next();
    }
}