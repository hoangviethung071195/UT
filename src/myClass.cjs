class MyClass {
    constructor() {
        console.log('initial');
    }
    add(arg1, arg2) {
        console.log('object');
        return arg1 + arg2;
    }
    getResult() {
        return new Promise((res, rej) => {
            setTimeout(() => {
                console.log('okok');
                res(8);
            }, 1000);
        }).then(r => r * 3);
    }
}

module.exports = MyClass;