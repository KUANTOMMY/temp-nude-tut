//FS - Module (sync)  檔案系統 同步

//不同的存取方法
//1.
const { readFileSync, writeFileSync } = require('fs')

//2.
// const fs = require('fs')
// fs.readFileSync()
console.log('start')
const first = readFileSync('./content/first.txt', 'utf-8')
const second = readFileSync('./content/second.txt', 'utf-8')
// console.log(first, second)
writeFileSync(
  './content/result-sync.txt',
  `here is the result:${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')

//FS - Module (sync)

//Node.js 的 fs module ，是用來操作實體檔案，可以同步或非同步存取檔案系統操作。

//不同的存取方法
//1.
//{帶入要使用的fs method}
//const { readFileSync } = require('fs')

//2.
// const fs = require('fs')
// fs.readFileSync()

//Method

//readFileSync (同步讀取檔案)

//readFileSync(‘路徑’, 'utf-8')

//writeFileSync(同步寫入檔案)- 如果指定的檔案不存在，它將建立一個新檔案。檔案存在預設會覆蓋原有內容。

//

//fs.writeFileSync( 檔案、要寫入資料、選項 )

//加入選項flag:’a’ , 加入新的內容並且不覆蓋原有內容
