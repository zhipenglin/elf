/**
 * Created by ifchangetoclzp on 2016/7/27.
 */
export default class AnimationItem{
    constructor({type,delay,last,repeat,parent,data}){
        this.type=type;
        this.delay=delay;
        this.last=last;
        this.repeat=repeat;
        this.data=data;
        var position={
            x:0,
            y:0
        };
        var event={

        };
        this.getParent=()=>{
            return parent;
        }
    }
    touchStart(e){
        var parent=this.getParent();
    }
    touchMove(e){

    }
    touchEnd(e){

    }
}