function add(a: number, b: number) {
  return a + b;
}
add(10, 20);
add.apply(null, [10, 20]);
add.call(null, 10, 20);
add.bind(null, 10, 20)(); // 返回函数后再通过()调用
