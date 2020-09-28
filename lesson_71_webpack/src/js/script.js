const newModule = require('./main');    // Обязательно прогнать через сборщик модулей, иначе будет ошибка в браузере!!!!

const myModuleExample = new newModule();

myModuleExample.hello();
myModuleExample.goodbye();