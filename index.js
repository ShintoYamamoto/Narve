function hello(name){
    console.log("hello " + name)
    return "hello" + name
}
exports.module = hello
exports.module.default = hello