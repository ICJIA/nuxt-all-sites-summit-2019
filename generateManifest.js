const fs = require('fs')
const fm = require('front-matter')
const markdown = './markdown/'
const manifest = 'manifest.json'
let arr = []
const path = require('path')

/**
 * Sort array of objects by property
 *
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

const readFiles = dirname => {
  const readDirPr = new Promise((resolve, reject) => {
    fs.readdir(
      dirname,
      (err, filenames) => (err ? reject(err) : resolve(filenames))
    )
  })

  return readDirPr.then(filenames =>
    Promise.all(
      filenames.map(filename => {
        return new Promise((resolve, reject) => {
          fs.readFile(dirname + filename, 'utf-8', (err, content) => {
            let obj = {}
            obj = fm(content)
            /**
             * Move attributes.position into sortable position ...
             */
            obj.position = obj.attributes.position
            /**
             * ... then delete it from attributes.position
             */
            delete obj.attributes.position
            resolve(obj)
          })
        })
      })
    ).catch(error => Promise.reject(error))
  )
}

readFiles('./markdown/').then(
  allContents => {
    allContents.sort(dynamicSort('position'))
    fs.writeFileSync('manifest.json', JSON.stringify(allContents))
  },
  error => console.log(error)
)
