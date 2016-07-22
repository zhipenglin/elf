/**
 * Created by ifchangetoclzp on 2016/7/14.
 */
import Vuex from 'vuex'
import getFetch from '../lib/fetch'

var fetch=getFetch();
var maxAge=5*60*1000;

const state={
    pageData:{},
    pageDataList:{}
}

const mutations={
      ADD_PAGE(state,url,cache=true){
          if(state.pageDataList[url]&&state.pageDataList[url].createdTime-new Date()<maxAge&&cache){
              state.pageData=state.pageDataList[url];
          }else{
              fetch.get(url).then(response=>{
                  state.pageDataList[url]={
                      data:response,
                      createdTime:new Date()
                  };
                  state.pageData=state.pageDataList[url];
              });
          }
      }
}

export default new Vuex.Store({
    state,mutations
});