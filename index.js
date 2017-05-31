#!/usr/bin/env node

const fs = require('fs');

/*
 *
 *
 *
 *
 * */

// 检测文件或者文件夹存在 nodeJS
function fsExistsSync(path) {
    try {
        fs.accessSync(path, fs.F_OK);
    } catch (e) {
        return false;
    }
    return true;
}

const Resize = require("./src/resize");

(function() {

    var arg = process.argv.splice(1);

    if (arg.length < 5) {
        console.log(" Usage: img-resize sourcepath targetpath  -w width");
        console.log("choice: -h height");
    }

    let config = {};

    if (['-v', '--v'].indexOf(arg[1]) !== -1) {
        console.log("v0.0.1");
        return;
    }

    config.path = arg[1];

    if (!fsExistsSync(config.path)) {
        console.log("The source path doesn\'t exist.");
        return;
    }

    for (let i = 1; i < arg.length; i++) {
        switch (arg[i]) {
            case '-t':
                i++;
                config.toPath = arg[i];
                break;
            case '-w':
                i++;
                config.toWidth = parseInt(arg[i]);
                break;
            case '-h':
                i++;
                config.toHeight = parseInt(arg[i]);
                break;
            default:
                break;
        }
    }

    if (!config.toPath || !config.toWidth) {
        console.log(" Usage: img-resize sourcepath targetpath  -w width");
        console.log("choice: -h height");
    } else {

        if (!fsExistsSync(config.toPath)) {
            fs.mkdirSync(config.toPath);
        }

        console.log(config);
        Resize(config);
    }
})();
