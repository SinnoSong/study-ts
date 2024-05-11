let numbers = {
    *[Symbol.iterator]() {
        for (let i = 0; i < 10; i++) {
            yield i;
        }
    }
}
for (const num of numbers) {
    console.log(num);
}
let allNumbers = [...numbers];
let [one, two, ...rest] = numbers;
export { };
