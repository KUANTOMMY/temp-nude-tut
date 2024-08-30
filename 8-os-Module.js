const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//Method returns the system uptime in seconds.
console.log(`the System Uptime is ${os.uptime()} second`)

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalmem: os.totalmem(),
  freemem: os.freemem(),
}
console.log(currentOs)

//Os module - OS模組提供與作業系統和硬體相關的信息(operating system)

//Os 內建模組設置

//const os = require('os')

//os.userInfo()-獲取使用著訊息,主目錄(home directory.)

//os.uptime() - 返回系統正常運作時間（以秒為單位）( Method returns the system uptime in seconds)

//os.type() - 返回操作系统名

//os.release() - 返回操作系统的发行版本

//os.freemem()- 返回操作系统空闲内存量，单位是字节

//os.totalmem()- 返回系统内存总量，单位为字节
