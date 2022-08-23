const fs = require('fs');

fs.readFile('fs/fs_W/db.json', (err, deta) => {
    
    fs.writeFile('fs/fs_W/test.json', JSON.parse(deta), (err) => console.log(err))
})