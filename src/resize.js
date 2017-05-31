/**
 * Created by Xiaotao.Nie on 27/05/2017.
 * All right reserved
 * IF you have any question please email onlythen@yeah.net
 */
const fs = require('fs');

const path = require('path');

const sharp = require("sharp");

const Type = /(jpg|png|jpeg|webp|gif)$/i;

const Escape = /\.[a-zA-Z]*?$/i;

function resize(config){

    const fileList = fs.readdirSync(config.path);

    for (let i = 0; i < fileList.length; i += 1) {
        if (Type.test(fileList[i])){
            console.log(path.join(config.path, fileList[i]));
            sharp(path.join(config.path, fileList[i]))                     //Load image from file
            //加载图像文件
                .resize(config.toWidth,config.toHeight)                          //Geometric scaling the image to 400 pixels width
                .toFile(path.join(config.toPath, fileList[i]));

        }

        else if(!Escape.test(fileList[i]) && fs.statSync(path.join(config.path, fileList[i])).isDirectory()){
            resize(Object.assign({},config,{path:path.join(config.path, fileList[i])}));
        }
    }
}

module.exports  = resize;