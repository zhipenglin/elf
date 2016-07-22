/**
 * Created by ifchangetoclzp on 2016/7/15.
 */
class ErrorBase extends Error{
    constructor(message){
        super(message);
        this.name='CustomError';
        this.status=0;
    }
}

export default ErrorBase;