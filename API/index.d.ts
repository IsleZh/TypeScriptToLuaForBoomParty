//临时API，仅作参考
/** @customConstructor Vector3 */
declare class Vector3 {
    constructor(x: number, y: number, z: number);
    static Back: Vector3;
    static Down: Vector3;
    static Forwaord: Vector3;
    static Left: Vector3;
    static One: Vector3;
    static Right: Vector3;
    static Up: Vector3;
    static Zero: Vector3;
    X: number;
    Y: number;
    Z: number;
    x: number;
    y: number;
    z: number;
    /** @noSelf */
    static Angle(vec1: Vector3, vec2: Vector3): number;
    /** @noSelf */
    static Dot(vec1: Vector3, vec2: Vector3): number;
    Angle(vec1: Vector3): number;
    Dot(vec1: Vector3): number;
}
declare class EulerDegree{

}
declare function print(...args: any[]): void;

declare interface Tuple { }

declare class SignalEvent{
    Clear():void;
    Connect(callback:Function):void;
    Disconnect(callback:Function):void;
    HasConnected(callback:Function):void;
    Wait(callback:Function):void;
}

declare class LuaObject {
    /*private*/ constructor();
    ActiveInHierarchy: boolean;
    ActiveSelf: boolean
    Back: Vector3
    /** Int类型 */
    ChildCount: number; 
    ClassName: string;
    Down: Vector3;
    Forwaord: Vector3;
    Left: Vector3;
    Right: Vector3;
    Up: Vector3;
    BroadcastEvent(eventName: string, params: Tuple): void;
    Clone(parent: Object, spawnInWorldSpace: boolean): Object;
    OnChildAdded:SignalEvent
}

/** @customConstructor Vector3 */
declare class PlayerInstance {
    Avatar: Object;
    Y: number;
    Z: number;
    x: number;
    y: number;
    z: number;
    /** @noSelf */
    static Angle(vec1: Vector3, vec2: Vector3): number;
    /** @noSelf */
    static Dot(vec1: Vector3, vec2: Vector3): number;
    Angle(vec1: Vector3): number;
    Dot(vec1: Vector3): number;
}

declare class world extends LuaObject{
    /*private*/ constructor();
    
    static CurrentCamera: LuaObject;
    static PlayerArchetype:LuaObject;
    static MaxPlayerNumber:number;
    static CreateInstance( archetypeName:string, instanceName:string, parent:LuaObject, position:Vector3, rotation:EulerDegree): void;
    static OnPlayerAdded:SignalEvent
    static OnPlayerRemoved:SignalEvent
    static OnRenderStepped:SignalEvent
}

declare function print(...args: any[]): void;
