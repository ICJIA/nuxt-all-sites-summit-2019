const fs = require('fs')
const fm = require('front-matter')
const markdown = './markdown/'
const manifest = 'manifest.json'
let arr = []
const path = require('path')

/**
 * https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
 */
function dynamicSort(property) {
  var sortOrder = 1
  if (property[0] === '-') {
    sortOrder = -1
    property = property.substr(1)
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0
    return result * sortOrder
  }
}

// fs.readdir(markdown, (err, files) => {
//   files.forEach(file => {
//     fs.readFile(`${markdown}${file}`, 'utf8', (err, data) => {
//       let obj = {}
//       obj = fm(data)
//       /**
//        * Move attributes.position into sortable position ...
//        */
//       obj.position = obj.attributes.position
//       arr.push(obj)
//       /**
//        * ... sort ...
//        */
//       arr.sort(dynamicSort('position'))
//       /**
//        * ... then delete 'position' from attributes.position
//        */
//       delete obj.attributes.position

//       fs.writeFileSync('manifest.json', JSON.stringify(arr))
//     })
//   })
// })

/**
 * TODO: https://stackoverflow.com/questions/10049557/reading-all-files-in-a-directory-store-them-in-objects-and-send-the-object
 */
