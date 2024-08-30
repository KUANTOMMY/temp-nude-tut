const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('content-type', 'text/plain;charset=utf-8')
    res.end('需要返回的資料')
    return
  }
  if (req.url === '/about') {
    res.setHeader('content-type', 'text/plain;charset=utf-8')
    res.end('關於About')
    return
  }
  res.end(
    `
    <h1>Oops!<h1/>
    <p>not found page</p>
    <a href="/">back home</a>
    `
  )
})

server.listen(5000)
