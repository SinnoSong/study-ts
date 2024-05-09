let x = {
  a() {
    return this;
  },
};
console.log(x.a()); // 返回x对象
let a = x.a;
console.log(a()); //返回undefined

function fancyDate(this: Date) {
  return `${this.getDate()}/${this.getMonth()}/${this.getFullYear()}`;
}
console.log(fancyDate.call(new Date()));
// fancyDate();
