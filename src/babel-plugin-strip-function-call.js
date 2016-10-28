// LICENSE : MIT
"use strict";
module.exports = function() {
    return {
        visitor: {
            CallExpression(path) {
                const stripFunctionNameList = this.opts.strip || [];
                const isMatched = stripFunctionNameList.some((fnName) => {
                    // method call
                    const calleePath = path.get("callee");
                    if (calleePath.matchesPattern(fnName)) {
                        // ignore computed style
                        // e.g.) console["log"]()
                        return !calleePath.node.computed;

                    }
                    // function call
                    return calleePath.node.name === fnName;
                });
                if (isMatched) {
                    path.remove();
                }
            }
        }
    };
};