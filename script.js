import fs from 'fs';
import axios from 'axios';

const PE_URL = 'https://projecteuler.net/problem=';
const GH_URL = 'https://raw.githubusercontent.com/luckytoilet/projecteuler-solutions/master/Solutions.md';

const PE_PATH = 'tmp/';

const START = 22;
const END = 30;

const getProblemSolution = (payload) => payload.slice(payload.indexOf(' ') + 1, -1);

const getProblemTitle = (payload) => {
  const titlePattern = /<h2>(.*)<\/h2>/g;
  return titlePattern.exec(payload)[1].replace(/[:"<>\/*?|]/g, '');
};

const main = async () => {
  const problemSolutions = (await axios.get(GH_URL)).data.split('\n').splice(4);

  for (let i = START; i <= END; i++) {
    const problemData = (await axios.get(PE_URL + i)).data;

    const id = String(i).padStart(4, '0');
    const title = getProblemTitle(problemData);
    const problemURL = PE_URL + id;
    const problemText = 'CHANGE ME!';
    const problemSolution = getProblemSolution(problemSolutions[i]);
    const folderName = `${id} - ${title}`;
    const folderPath = PE_PATH + folderName;
    const readmePath = `${folderPath}/README.md`;
    const jsFilePath = `${folderPath}/${id}.js`;
    const jsTestFilePath = `${folderPath}/${id}.test.js`;

    const readmeData = `# [${title}](${problemURL})\n\n${problemText}\n`;
    let jsFileData = '';
    jsFileData = `/*\n * @name: ${title}\n`;
    jsFileData += ` * @id:   ${id}\n`;
    jsFileData += ` * @url:  ${problemURL}\n`;
    jsFileData += ' *\n';
    jsFileData += ' * @problem:\n';
    jsFileData += ` *   ${problemText}\n`;
    jsFileData += ' *\n';
    jsFileData += ` * @solution: ${problemSolution}\n`;
    jsFileData += ' */\n';
    jsFileData += '\n';
    jsFileData += 'import { fibonacci } from \'../../../utils.js\';\n';
    jsFileData += '\n';
    jsFileData += `export default function problem${id}() {\n`;
    jsFileData += '    const TARGET = 1000;\n';
    jsFileData += '    let solution = \'\';\n';
    jsFileData += '\n';
    jsFileData += '    // HAVE FUN <3\n';
    jsFileData += '\n';
    jsFileData += '    return solution;\n';
    jsFileData += '}\n';

    let jsTestFileData = '';
    jsTestFileData += 'import { test } from \'@jest/globals\';\n';
    jsTestFileData += `import problem${id} from './${id}.js';\n`;
    jsTestFileData += '\n';
    jsTestFileData += `test('problem${id}() should return ${problemSolution}', () => {\n`;
    jsTestFileData += `    expect(problem${id}()).toBe(${problemSolution});\n`;
    jsTestFileData += '});\n';

    if (!fs.existsSync(folderPath))
      fs.mkdirSync(folderPath);

    if (!fs.existsSync(readmePath))
      fs.writeFileSync(readmePath, readmeData);

    if (!fs.existsSync(jsFilePath))
      fs.writeFileSync(jsFilePath, jsFileData);

    if (!fs.existsSync(jsTestFilePath))
      fs.writeFileSync(jsTestFilePath, jsTestFileData);
  }
};

main().catch((error) => console.log(error));

// let start = process.hrtime();
//
// const elapsed_time = note => {
//     let precision = 3; // 3 decimal places
//     let elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
//     console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms - " + note);
//     start = process.hrtime(); // reset the timer
//     return +elapsed.toFixed(precision);
// }
