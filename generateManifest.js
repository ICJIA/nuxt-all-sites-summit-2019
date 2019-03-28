const fs = require('fs')
const fm = require('front-matter')
const markdown = './md/'
const manifest = 'manifest.json'
let arr = []

fs.readdir(markdown, (err, files) => {
  files.forEach(file => {
    fs.readFile(`${markdown}${file}`, 'utf8', (err, data) => {
      let obj = {}
      obj.file = file
      obj.fm = fm(data)
      arr.push(obj)
      fs.writeFileSync('manifest.json', JSON.stringify(arr))
    })
  })
})
