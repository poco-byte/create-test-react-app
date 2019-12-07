#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
var rimraf = require("rimraf");

const args = require('minimist')(process.argv);

const { webpackValue } = require("./template/webpackConfig");
const { packageValue } = require("./template/package");
const { indexHtmlValue } = require("./template/indexHtml");
const { indexJsValue } = require("./template/indexJs");
const { mainJsValue } = require("./template/mainJs");
const { mainScssValue } = require("./template/mainScss");
const { gitIgnoreValue } = require("./template/gitignore");

const myApp = args.app + '/';
const src = myApp + "src/";

function createDirectories(pathname) {
  const __dirname = path.resolve();
  newpathname = pathname.replace(/^\.*\/|\/?[^\/]+\.[a-z]+|\/$/g, ""); // Remove leading directory markers, and remove ending /file-name.extension
  fs.mkdir(path.resolve(__dirname, newpathname), { recursive: true }, e => {
    if (e) {
      console.error(e);
    } else {
      console.log("Successfully made ", newpathname);

      switch (pathname) {
        case myApp:
          createFile(myApp + "webpack.config.js", webpackValue);
          createFile(myApp + "package.json", packageValue);
          createFile(myApp + ".gitignore", gitIgnoreValue);
          return;
        case src:
          createFile(pathname + "index.html", indexHtmlValue);
          createFile(pathname + "index.js", indexJsValue);
          createFile(pathname + "main.js", mainJsValue);
          createFile(pathname + "main.scss", mainScssValue);
      }
    }
  });
}

function createFile(pathname, content) {
  fs.writeFile(pathname, content, err => {
    if (err) throw err;
    console.log(`Successfully made file ${pathname}`);
  });
}

async function createBasicReactApp() {
	//	Making template
	rimraf.sync(myApp);

  //	Making Main App
  createDirectories(myApp);

  //	Making src

  createDirectories(src);

}

createBasicReactApp();

module.exports = {
  createBasicReactApp
};
