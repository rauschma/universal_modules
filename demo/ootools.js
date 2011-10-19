"use strict";

(typeof define === "function" ? {define:define} : require("um_node")._(require, exports)).
define([ ],
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

