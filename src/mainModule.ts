//模块代码
export function Test(x: number): number {
    return x;
}

//模块代码的运行代码
const Vec1 = new Vector3(1, 1, 1);
const Vec2 = new Vector3(2, 2, 2);

print(Vector3.Angle(Vec1, Vec2));
world.OnRenderStepped.Connect(
    (delta: number) => {
        print('The duration of this frame is ', delta)
    });