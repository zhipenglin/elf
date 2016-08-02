/**
 * Created by ifchangetoclzp on 2016/7/27.
 */
export default class AnimationItem{
    constructor({type,delay,last,repeat,parent,data}){
        this.type=type||0;
        this.delay=delay||0;
        this.last=last||0;
        this.repeat=repeat;
        this.data=data;
        this.x=0;
        this.y=0;
        var event={
            sx:0,
            sy:0,
            x:0,
            y:0
        };
        this.getParent=()=>{
            return parent;
        }
        this.getEvent=()=>{
            return {
                sx:event.sx,
                sy:event.sy,
                x:event.x,
                y:event.y
            }
        };
        this.setEvent=({x,y})=>{
            event.x=x;
            event.y=y;
            event.sx=this.x;
            event.sy=this.y;
        };
    }
    touchStart(e){
        this.setEvent({
            x:e.touches[0].clientX,
            y:e.touches[0].clientY
        });
    }
    touchMove(e){
        var start=this.getEvent();
        this.x=(e.touches[0].clientX-start.x+start.sx)*2/3;
        var y=2/3*Math.round((e.touches[0].clientY-start.y+start.sy)/30)*30;
        this.y=y<0?y:0;
    }
    touchEnd(e){
        var parent=this.getParent();

        this.delay+=this.x;
        console.log(this.delay);
        this.x=0;
        this.y=0;
    }
}