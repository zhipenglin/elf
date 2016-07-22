/**
 * Created by ifchangetoclzp on 2016/7/20.
 */
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
        this.event={
            isMove:undefined,
            start:{
                x:0,
                y:0
            }
        };
    }
    switchEditor(){
        this.editor=!this.editor;
    }
    touchStart(e){
        e.preventDefault();
        if(e.touches.length==1){
            this.event.isMove=true;
        }else{
            this.event.isMove=false;
        }
        this.event.start={
            sx:this.x,
            sy:this.y,
            x:e.touches[0].clientX,
            y:e.touches[0].clientY,
        };
    }
    touchMove(e){
        e.preventDefault();
        if(this.event.isMove===true){
            this.x=e.touches[0].clientX-this.event.start.x+this.event.start.sx;
            this.y=e.touches[0].clientY-this.event.start.y+this.event.start.sy;
        }else if(this.event.isMove===false){

        }
    }
    touchEnd(e){
    }
    copy(){
        return new Item({type:this.type,data:this.data,x:this.x,y:this.y});
    }
}