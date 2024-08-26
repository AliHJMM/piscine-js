const escapeStr = `\` , \\ , \/ ,  \" , \' `;
const arr = [4,'2']
const obj = {
    str: "Ali",
    num: 20,
    bool: true,
    undef: undefined,
    nested: {
        arr: [4, undefined, '2'],
        obj: {
            str: "Hadi",
            age: 16,
            bool:true,
        }
    }
}
Object.freeze(obj);
Object.freeze(obj.nested);
Object.freeze(obj.nested.arr);
Object.freeze(obj.nested.obj);