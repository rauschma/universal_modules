"use strict";

(typeof umodules_browser === "undefined"
    ? require("umodules_node")._(require, exports) : umodules_browser
).module([ ],
    function () {
        return {
            copyOwnTo: function(source, target) {
                Object.getOwnPropertyNames(source).forEach(function(propName) {
                    Object.defineProperty(target, propName,
                        Object.getOwnPropertyDescriptor(source, propName));
                });
                return target;
            }
        };
    }
);

