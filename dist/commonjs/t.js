"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

Object.defineProperty(exports, "__esModule", {
  value: true
});

var I18N = require("./i18n").I18N;

var TValueConverter = exports.TValueConverter = (function () {
  function TValueConverter(i18n) {
    _classCallCheck(this, TValueConverter);

    this.service = i18n;
  }

  _createClass(TValueConverter, {
    toView: {
      value: function toView(value, options) {
        return this.service.tr(value, options);
      }
    }
  }, {
    inject: {
      value: function inject() {
        return [I18N];
      }
    }
  });

  return TValueConverter;
})();