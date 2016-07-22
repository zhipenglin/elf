/**
 * Created by ifchangetoclzp on 2016/7/13.
 */
import page from './page'
import user from './user'
import object from './object'
const routes=[page,user,object];
export default function(app){
    routes.forEach((route)=>{
        app.use(route.routes())
            .use(route.allowedMethods({
                throw:true
            }));
    });
}