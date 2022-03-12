import * as Main from "./mainModule"

//世界代码
print(Main.Test(1));
class AAA{
    a:LuaObject
    /** @constructor AAA */
    constructor(a:LuaObject){
        this.a = a
    }
    run(){
        this.a.OnChildAdded.Connect((x:Vector3)=>{print(x+"helloworld")})
    }
}
