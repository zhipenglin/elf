/**
 * Created by ifchangetoclzp on 2016/7/14.
 */
import Vue from 'vue'
import Router from 'vue-router'

import plugin from './plugin'
import routerConfig from '../router'
import store from '../vuex/store'
import { default as getFetch,parseParam} from './fetch'

import Navbar from '../modules/navbar'
import Toolbar from '../modules/toolbar'
Vue.use(Router);
var router=new Router({history:true,root:'/'});
var fetch=getFetch({
    baseUrl:'/api/page'
});
var changeTitleAndWeixinShare=(data)=>{
    document.title = data.title;
    if(window.navigator.userAgent.toLowerCase().match(/MicroMessenger/i) == 'micromessenger'){
        // hack在微信等webview中无法修改document.title的情况
        var iframe=document.createElement('iframe');
        iframe.src='/favicon.ico';
        iframe.style.display='none';
        var eventHandler=iframe.addEventListener('load',function(){
            setTimeout(()=>{
                iframe.removeEventListener('load',eventHandler);
                document.body.removeChild(iframe);
            },0);
        });
        document.body.appendChild(iframe);
    }
};
var route=(()=>{
    var route={};
    for(let key in routerConfig){
        let routeItem=routerConfig[key];
        var compose=(routeItem,component)=>{
            component.template=`<div class="${routeItem.name}" :class="{'has-navbar':pageData.navbar!==false,'has-toolbar':pageData.toolbar!==false}">
                                    <template v-if="!$loadingRouteData">
                                        <navbar v-if="pageData.navbar!==false">
                                        <a slot="left" @click="leftMenu"><i class="iconfont icon-back"></i><span>返回</span></a>
                                        {{pageData.title}}
                                        <a slot="right" @click="rightMenu"><i class="iconfont icon-menu"></i></a>
                                        </navbar>
                                        <div class="page">${component.template}</div>
                                        <toolbar v-if="pageData.toolbar!==false"></toolbar>
                                    </template>
                                    <div class="loading" v-if="$loadingRouteData"></div>
                                </div>`;
            component.mixins=[{
                data(){
                    return {
                        pageData:{
                            navbar:true,
                            toolbar:true,
                            title:''
                        }
                    }
                },
                route:{
                    data({to:{params},next}){
                        if(routeItem.url){
                            let query=parseParam(params);
                            let url=routeItem.url;
                            if(query.length>0){
                                url+='?'+query;
                            }
                            return fetch.get(url).then(data=>{
                                let pageData=Object.assign({},data,routeItem.pageData||{});
                                changeTitleAndWeixinShare(pageData);
                                return {pageData}
                            })
                        }else{
                            let pageData=Object.assign({},routeItem.pageData||{});
                            changeTitleAndWeixinShare(pageData);
                            next({pageData});
                        }
                    }
                },
                methods:{
                    leftMenu(){
                        window.history.back();
                    },
                    rightMenu(){}
                },
                components:{
                    Navbar,Toolbar
                }
            }];
            return component;
        }
        if(typeof routeItem.component=='function'){
            route[key]={
                name:routeItem.name,
                component:function(reslove){
                    routeItem.component(function(component){
                        reslove(compose(routeItem,component));
                    });
                }
            };
        }else{
            route[key]={
                name:routeItem.name,
                component:compose(routeItem,routeItem.component)
            };
        }
    }

    return route
})();

var App=Vue.extend({
    store,
    template:`<div class="app">
                    <router-view class="view" transition="slide"></router-view>
                </div>`
});

router.map(route);
router.redirect({
    '*': '/404'
});

router.afterEach(({to,from})=>{
    console.log(to.name);
});

export default function(){
    var root=document.createElement("div");
    root.id='app-root';
    document.body.appendChild(root);
    Vue.use(plugin);
    router.start(App,root);
}