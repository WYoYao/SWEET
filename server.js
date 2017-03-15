
var xlsx = require('node-xlsx').default;
var fs = require('fs');
const data = [[1111, 2222, 33333], [1111, false, null, 'sheetjs'], ['foo', 'bar', new Date('2014-02-19T14:30Z'), '0.3'], ['baz', null, 'qux']];
var buffer = xlsx.build([{name: "mySheetName", data: data}]); // Returns a buffer

fs.writeFileSync('myFile.xlsx', buffer, 'binary');