const path = require('path');
// let mypromise = new Promise((resolve, reject) =>
//     fs.readFile('FakeData/db.json', 'utf8', (res, err) => resolve(err))
// )
// mypromise.then((res) => console.log(res))

// path.extname(__filename) .js
// path.basename(__filename) class1.js
// path.join('c', 'project', 'Class1', 'index.js') c\project\Class1\index.js
// path.resolve(__dirname, 'index.js') C:\Users\Abdul Jabbar\Desktop\node-mongo\module 1\index.js
/*
   path.parse(__filename)
    {
    root: 'c:\\',
    dir: 'c:\\Users\\Abdul Jabbar\\Desktop\\node-mongo\\module 1',
    base: 'class1.js',
    ext: '.js',
    name: 'class1'
    }
*/
console.log(path.relative(__dirname+'\ hello',__dirname+'\ gelo' ))