/**
 * Created by ifchangetoclzp on 2016/7/20.
 */
import Animation from './Animation'

var getUUID=(function(){
    var index=0;
    return function(){
        return index++;
    }
})();

export default class Item{
    constructor({type,data,x,y}){
        this.id=getUUID();
        this.type=type;
        this.data=data;
        this.x=x||(document.documentElement.clientWidth)/2;
        this.y=y||(document.documentElement.clientHeight)/2;
        this.editor=false;
        this.animations=new Animation();
        var event={
            isMove:undefined,
            start:{
                sx:0,
                sy:0,
                x:0,
                y:0
            }
        };
        this.setIsMove=(value)=>{
            event.IsMove=value;
        };
        this.getIsMove=()=>{
            return event.IsMove
        };
        this.setStart=({sx,sy,x,y})=>{
            event.start={
                sx,
                sy,
                x:x,
                y:y
            }
        };
        this.getStart=()=>{
            return event.start;
        };
    }
    switchEditor(){
        this.editor=!this.editor;
    }
    touchStart(e){
        e.preventDefault();
        if(e.touches.length==1){
            this.setIsMove(true);
        }else{
            this.setIsMove(false);
        }
        this.setStart({
            sx:this.x,
            sy:this.y,
            x:e.touches[0].clientX,
            y:e.touches[0].clientY,
        });
    }
    touchMove(e){
        e.preventDefault();
        if(this.getIsMove()===true){
            var start=this.getStart();
            this.x=e.touches[0].clientX-start.x+start.sx;
            this.y=e.touches[0].clientY-start.y+start.sy;
        }else if(this.getIsMove()===false){

        }
    }
    touchEnd(e){
    }
    copy(){
        return new Item({type:this.type,data:this.data,x:this.x,y:this.y});
    }
    addAnimation(animItem){
        this.animations.add(animItem);
    }
}