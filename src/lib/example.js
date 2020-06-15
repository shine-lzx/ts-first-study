/**如果要在ts文件里引入第三方的js库（比如Jquery或者自己写的js模块），
 * 那么该js没有类型约束，怎么办？这时候就可以引入该文件的.d.ts，
 * 然后typescript就会根据这个类型申明文件对该js进行类型验证。 */

const version = "1.0.0";

function fn () {
  console.log(this)
}

function bind (callback, context) {
  context = context || window;
  //把callback方法中的this预先处理为context
  return function () {
    callback.call(context)
  }
}

// fn.bind(obj, 100, 200)

export { fn, bind }