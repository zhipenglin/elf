/**
 * Created by ifchangetoclzp on 2016/7/14.
 */
import Page_404 from './page/404'
export default {
    '/':{
        url:'/',
        name:'home',
        text:'大家',
        component(reslove){
            require(['./page/home'], reslove)
        },
        pageData:{

        }
    },
    '/add':{
        url:'/list',
        name:'add',
        text:'添加',
        component(reslove){
            require(['./page/add'], reslove);
        },
        pageData:{
            toolbar:false
        }
    },
    '/person':{
        name:'person',
        text:'个人',
        component(reslove){
            require(['./page/person'], reslove);
        }
    },
    '/404':{
        name:'404',
        component:Page_404
    }
}