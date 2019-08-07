System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function meuDecoratorDeClasse() {
        return function (constructor) {
            const original = constructor;
            const novo = function (...args) {
                console.log("Criando uma instância com New: " + original.name);
                return new original(...args);
            };
            novo.prototype = original.prototype;
            return novo;
        };
    }
    exports_1("meuDecoratorDeClasse", meuDecoratorDeClasse);
    return {
        setters: [],
        execute: function () {
        }
    };
});
