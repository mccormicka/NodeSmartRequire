'use strict';

var Module = require('module');
if(!Module.prototype._originalRequire){
    var path = require('path');
    Module.prototype._originalRequire = Module.prototype.require;
    Module.prototype.require = function(string){
        var result;
        try{
            result = Module.prototype._originalRequire.call(this, string);
        }catch(e){
            result = Module.prototype._originalRequire.call(this, path.resolve(string));
        }
        return result;
    };
}