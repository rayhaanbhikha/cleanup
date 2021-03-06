const checkJsVerson = (fileCode, fileName) => {
    let resEs5Expression = /(module.exports|exports\.\w+)(\ *|\t*)=/
    let resEs6Expression = /export\ /
    let regEs5 = RegExp(resEs5Expression, 'gm')
    let regEs6 = RegExp(resEs6Expression, 'gm');

    if (regEs5.test(fileCode)) {
        return 'es5';
    } else if (regEs6.test(fileCode)) {
        return 'es6';
    } else {
        console.log(`file ${fileName} has no exports`);
        console.log(`skipping....`);
        return null;
    }
}

module.exports = checkJsVerson;