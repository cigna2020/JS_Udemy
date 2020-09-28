function myModule() {
    this.hello = function () {
        console.log('hello');
    };

    this.goodbye = function () {
        console.log('bye');
    };
}

//  чтобы экспортировать в другой файл js:
module.exports = myModule;