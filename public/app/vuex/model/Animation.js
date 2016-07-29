/**
 * Created by ifchangetoclzp on 2016/7/27.
 */
import AnimationItem from './AnimationItem'
export default class Animation{
    constructor(){
        this.timeLine=[
            //主时间轴
            []
        ];
    }
    add(animItem){
        animItem.parent=this;
        this.timeLine[0].push(new AnimationItem(animItem));
    }
    move(index,timeLine){

    }
}