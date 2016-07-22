/**
 * Created by ifchangetoclzp on 2016/7/15.
 */
import 'whatwg-fetch'
import FetchError from './error/FetchError'

class Fetch{
    static parseParam(obj) {
        var toQueryPair=(key, value)=>{
            if (typeof value == 'undefined'){
                return key;
            }
            return key + '=' + encodeURIComponent(value === null ? '' : String(value));
        }
        var ret = [];
        for(var key in obj){
            key = encodeURIComponent(key);
            var values = obj[key];
            if(values && values.constructor == Array){//数组
                var queryValues = [];
                for (var i = 0, len = values.length, value; i < len; i++) {
                    value = values[i];
                    queryValues.push(toQueryPair(key, value));
                }
                ret = ret.concat(queryValues);
            }else{ //字符串
                ret.push(toQueryPair(key, values));
            }
        }
        return ret.join('&');
    }
    constructor(options){
        this.options=Object.assign({
            baseUrl:'/api',
            cache:true,
            cacheKeyName:'__send_key',
            maxAge:3*60*1000
        },options);
        this.middleware=[];
        this.fetch=window.fetch;
        this.FormData=window.FormData;
        this.cache={};
    }
    use(func){
        this.middleware.push(func);
        return this;
    }
    get(url){
        return this.send(url,{
            method:'GET'
        });
    }
    post(url,data){
        return this.send(url,{
            method:'POST',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:Fetch.parseParam(data)
        })
    }
    upload(url,files){
        var data = new this.FormData();
        for(let key in files){
            data.append(key,files[key]);
        }
        return this.send(url,{
            method:'POST',
            body:data,
            cache:false
        })
    }
    put(url,data){
        return this.send(url,{
            method:'PUT',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:Fetch.parseParam(data)
        })
    }
    delete(url,data){
        return this.send(url,{
            method:'DELETE',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body:Fetch.parseParam(data)
        })
    }
    saveCache(response){
        this.cache[response[this.options.cacheKeyName]]=response;
    }
    async send(url,{method,headers,body,cache}){
        cache=cache===undefined?this.options.cache:cache;
        url=this.options.baseUrl+url;
        const fetch=this.fetch;
        var key=encodeURIComponent(`${url}_${method}_${body||''}`);
        if(cache&&this.cache[key]&&this.cache[key].createdTime-new Date()<this.options.maxAge){
            return this.cache[key].response;
        }else{
            var response=await fetch(url,{
                method,headers,body
            });
            for(let middleware of this.middleware){
                response=await middleware(response);
            }
            if(cache){
                Object.defineProperty(response,this.options.cacheKeyName,{
                    enumerable:false,
                    writable:false,
                    value:key
                });
                this.cache[key]={
                    response,createdTime:new Date()
                };
            }
            return response;
        }
    }
}

export function getFetch(options){
    var fetch=new Fetch(options);
    return fetch.use(respose=>{
        if(respose.ok){
            return respose.json().then(data=>{
                if(data.status==1){
                    return {
                        status:true,
                        data:data.data
                    };
                }else{
                    return {
                        status:false,
                        data:data
                    }
                }
            }).catch(e=>{
                return {
                    status:false,
                    data:{
                        status:100,
                        message:'服务器返回数据异常'
                    }
                }
            });
        }else{
            return {
                status:false,
                data:{
                    status:101,
                    message:statusText
                }
            }
        }
    }).use(respose=>{
        if(respose.status){
            return respose.data;
        }else{
            return new FetchError(respose.data);
        }
    });
}

export default function getNormalFetch(options){
    return getFetch(options).use(respose=>{
        if(respose instanceof Error){
            alert(respose.errorObject.message);
            throw respose;
        }else{
            return respose;
        }
    });
}

export function getPassErrorFetch(options){
    return getFetch(options).use(respose=>{
        if(respose instanceof FetchError){
            throw respose;
        }else{
            return respose;
        }
    });
}

export const parseParam=Fetch.parseParam
