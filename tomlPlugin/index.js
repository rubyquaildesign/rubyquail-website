"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.tomlConvert = void 0;
/* eslint-disable object-shorthand */
var fs = require("node:fs");
var path = require("node:path");
var chokidar = require("chokidar");
var toml = require("toml");
var defaults = { inputFolder: 'src/toml', outputFolder: 'src/_data' };
function tomlConvert(options) {
    var mainOptions = __assign(__assign({}, defaults), options);
    var watcher;
    var cmd;
    var plugin = {
        name: 'ruby-toml-plugin',
        config: function (cfg, cenv) {
            cmd = cenv.command;
        },
        buildStart: function (_options) {
            if (cmd === 'serve') {
                var inFolder = mainOptions.inputFolder;
                var outFolder_1 = path.resolve(mainOptions.outputFolder);
                watcher = chokidar.watch(path.resolve(inFolder, '*.toml'));
                watcher.on('change', function (pth) {
                    var content = fs.readFileSync(pth, 'utf8');
                    var tml = toml.parse(content);
                    var name = path.basename(pth, '.toml');
                    path.join(',');
                    var output = path.resolve(outFolder_1, "".concat(name, ".json"));
                    fs.writeFileSync(output, JSON.stringify(tml, null, '\t'));
                });
            }
        }
    };
    return plugin;
}
exports.tomlConvert = tomlConvert;
exports["default"] = tomlConvert;
