## img-resize

*注:这是一个正在完善的内容,如果您发现有任何问题,可以到这里给我提issue.*

这是一个基于node的图像大小调整工具，需要你本机上装有node和npm

>笔者有些时候会有批量处理图片大小的需求，比如说将一个列表所有图片调整到合适大小，用单反拍了一堆照片需要统一调整大小...之前自己的做法都是用PS新建一个动作，但这需要：打开PS->新建动作->完成->创建新的文件夹->设置批处理。是比较繁琐的。

### 安装方法

```
npm install img-resize -g
```

### 使用

将图片宽度统一调整到300，高度自适应：

```
img-resize sourceFile -t targetFile -w 300
```

将图片宽度调整到300，高度调整到300:

```
img-resize sourceFile -t targetFile -w 300 -h 300
```

### 说明

目前支持JPEG、JPG、PNG、GIF、WEBP等常用图片格式
