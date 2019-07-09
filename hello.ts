import {Builder} from 'xml2js';

function buildObjectToXml() {
  console.log('--- buildObjectToXml ---');
  const options = {
    headless: true,
    rootName: 'item',
    renderOpts: {
      'pretty': true,
      'indent': '    ',
      'newline': '\r\n',
      'cdata': true
    }
  }
  const builder = new Builder(options)
  const xml = builder.buildObject({
    name: 'world',
    age: 1000000
  })
  console.log(xml)

  // Output:
  // <item>
  //     <name>world</name>
  //     <age>1000000</age>
  // </item>
}

buildObjectToXml();
