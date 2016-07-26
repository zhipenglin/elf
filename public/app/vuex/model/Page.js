/**
 * Created by ifchangetoclzp on 2016/7/20.
 */
import Item from './Item'
import ImageItem from './ImageItem'
import find from 'lodash.find'
import filter from 'lodash.filter'
export default class Page{
    constructor(){
        this.width=document.documentElement.clientWidth;
        this.height=document.documentElement.clientHeight;
        this.itemList=[];
    }
    push(item){
        switch (item.type){
            case 'image':
                this.itemList.push(new ImageItem(item));
                break;
            case 'text':
                break;
        }
    }
    cancelAllEditor(){
        this.itemList.forEach(n=>n.editor=false);
    }
    hasEditorItem(){
        return !!find(this.itemList,n=>n.editor);
    }
    delItems(){
        this.itemList=filter(this.itemList,n=>!n.editor);
    }
    copyItems(){
        this.itemList=this.itemList.concat(filter(this.itemList,n=>n.editor).map((n)=>n.copy()));
    }
    upIndex(){
        for(let i=this.itemList.length-1;i>=0;i--){
            if(this.itemList[i].editor&&i<this.itemList.length-1){
                var [item]=this.itemList.splice(i,1);
                this.itemList.splice(i+1,0,item);
            }
        }
    }
    downIndex(){
        for(let i=0;i<this.itemList.length;i++){
            if(i>0&&this.itemList[i].editor){
                var [item]=this.itemList.splice(i,1);
                this.itemList.splice(i-1,0,item);
            }
        }
    }
}