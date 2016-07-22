/**
 * Created by ifchangetoclzp on 2016/7/15.
 */
import ErrorBase from './ErrorBase'
class FetchError extends ErrorBase{
    constructor(obj){
        super(`向服务器发送信息错误:${obj.message}`);
        this.name='FetchError';
        this.status=obj.status;
        this.errorObject=obj;
    }
}

export default FetchError;