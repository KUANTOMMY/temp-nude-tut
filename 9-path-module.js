const path = require('path')

console.log(path.sep)

filepath = path.join('content', 'subfolder', 'test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

//Path - module 路徑模組

//Path.sep() -  platform specific separator. 分隔線 要記得

//Path.join() -  方法將指定的路徑段連接成一條路徑。您可以根據需要指定任意數量的路徑段。指定的路徑段必須是字串，以逗號分隔

//path.basename() -方法傳回檔案路徑的檔案名稱部分

//path.resolve() - 將指定路徑解析為絕對路徑
