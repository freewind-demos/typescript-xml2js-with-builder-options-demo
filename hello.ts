import {parseString, Builder} from 'xml2js';

function parseXmlToObject() {
  console.log('--- parseXmlToObject ---');
  parseString(` <name>hello</name>`, (err, result) => {
    console.log(err, result);
    // result:
    // { name: 'xml2js' }
  })
}

function buildObjectToXml() {
  console.log('--- buildObjectToXml ---');
  const builder = new Builder()
  const xml = builder.buildObject({name: 'world'})
  console.log(xml)
}

parseXmlToObject();
buildObjectToXml();
