/**
 * Created by ifchangetoclzp on 2016/7/20.
 */
import Item from './Item'

export default class ImageItem extends Item{
    constructor({data,x,y,width=200,height=200}){
        super({type:'image',data,x,y});
        this.width=width;
        this.height=height;
        this.x=x||(document.documentElement.clientWidth-this.width)/2;
        this.y=y||(document.documentElement.clientHeight-this.height)/2;
    }
    copy(){
        return new ImageItem({data:this.data,x:this.x,y:this.y,width:this.width,height:this.height});
    }
}