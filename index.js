require("./index.css");
var $fCOrg$handlebars = require("handlebars");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}

const $56ca650d5b922a96$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__registration">\r\n	<div class="registration">\r\n		<form id="registration__form" class="registration__form" name="registration__form" action="/choseChat">\r\n			<h3>\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F</h3>\r\n			<div class="form-control">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "email") || (depth0 != null ? lookupProperty(depth0, "email") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "email",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "login") || (depth0 != null ? lookupProperty(depth0, "login") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "login",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 10,
                    "column": 4
                },
                "end": {
                    "line": 10,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "first_name") || (depth0 != null ? lookupProperty(depth0, "first_name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "first_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 4
                },
                "end": {
                    "line": 14,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "second_name") || (depth0 != null ? lookupProperty(depth0, "second_name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "second_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 4
                },
                "end": {
                    "line": 18,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "phone") || (depth0 != null ? lookupProperty(depth0, "phone") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 22,
                    "column": 4
                },
                "end": {
                    "line": 22,
                    "column": 15
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control" id="form-control__pas">\r\n				<label for="password">\u041F\u0430\u0440\u043E\u043B\u044C</label>\r\n				<input type="password" id="password" name="password" class="password" placeholder="\u041F\u0430\u0440\u043E\u043B\u044C">\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control last" id="form-control__pas">\r\n				<label for="passwordRegTwo">\u041F\u0430\u0440\u043E\u043B\u044C (\u0435\u0449\u0451 \u0440\u0430\u0437)</label>\r\n				<input type="password" id="passwordRegTwo" name="passwordRegTwo" class="passwordRegTwo"\r\n					placeholder="\u041F\u0430\u0440\u043E\u043B\u044C">\r\n				<small>Error</small>\r\n			</div>\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonBlue") || (depth0 != null ? lookupProperty(depth0, "buttonBlue") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "buttonBlue",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 36,
                    "column": 3
                },
                "end": {
                    "line": 36,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n		</form>\r\n		<div>\r\n			" + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonText") || (depth0 != null ? lookupProperty(depth0, "buttonText") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "buttonText",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 39,
                    "column": 3
                },
                "end": {
                    "line": 39,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n		</div>\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $56ca650d5b922a96$export$2e2bcd8739ae039 = $56ca650d5b922a96$var$templateFunction;



const $478f115c639c75c3$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<button id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '" class="btn_blue">\r\n	' + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 1
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            }
        }) : helper)) + "\r\n</button>";
    },
    "useData": true
});
var $478f115c639c75c3$export$2e2bcd8739ae039 = $478f115c639c75c3$var$templateFunction;



const $bb52fe7f6c4c27ad$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<a id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 7
                },
                "end": {
                    "line": 1,
                    "column": 13
                }
            }
        }) : helper)) + '" class="btn_text" href="' + alias4((helper = (helper = lookupProperty(helpers, "href") || (depth0 != null ? lookupProperty(depth0, "href") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "href",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 38
                },
                "end": {
                    "line": 1,
                    "column": 46
                }
            }
        }) : helper)) + '">\r\n	' + alias4((helper = (helper = lookupProperty(helpers, "value") || (depth0 != null ? lookupProperty(depth0, "value") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "value",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 1
                },
                "end": {
                    "line": 2,
                    "column": 10
                }
            }
        }) : helper)) + "\r\n</a>";
    },
    "useData": true
});
var $bb52fe7f6c4c27ad$export$2e2bcd8739ae039 = $bb52fe7f6c4c27ad$var$templateFunction;


var $daa7293aeae3f240$export$2e2bcd8739ae039 = (id, value, href)=>!!href ? (0, $bb52fe7f6c4c27ad$export$2e2bcd8739ae039)({
        id: id,
        value: value,
        href: href
    }) : (0, $478f115c639c75c3$export$2e2bcd8739ae039)({
        id: id,
        value: value
    });



const $84e02aee949db1e0$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<label for="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '">\u041F\u043E\u0447\u0442\u0430</label>\r\n<input type="text" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" class="email" name="email" placeholder="pochta@yandex.ru">';
    },
    "useData": true
});
var $84e02aee949db1e0$export$2e2bcd8739ae039 = $84e02aee949db1e0$var$templateFunction;



const $f815630723bdee9b$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<label for="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '">\u0418\u043C\u044F</label>\r\n<input type="text" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" class="first_name" name="first_name" placeholder="\u0418\u043C\u044F">';
    },
    "useData": true
});
var $f815630723bdee9b$export$2e2bcd8739ae039 = $f815630723bdee9b$var$templateFunction;



const $20bcf3a92e44c520$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<label for="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '">\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435</label>\r\n<input type="text" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" class="display_name" name="display_name">';
    },
    "useData": true
});
var $20bcf3a92e44c520$export$2e2bcd8739ae039 = $20bcf3a92e44c520$var$templateFunction;



const $873b42a262dda1c1$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<label for="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '">\u041B\u043E\u0433\u0438\u043D</label>\r\n<input type="text" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" class="login" name="login" placeholder="\u041B\u043E\u0433\u0438\u043D">';
    },
    "useData": true
});
var $873b42a262dda1c1$export$2e2bcd8739ae039 = $873b42a262dda1c1$var$templateFunction;



const $9bd631abf4e4fe50$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<label for="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\r\n<input type="text" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" class="phone" name="phone" placeholder="+7 (909) 967 30 30">';
    },
    "useData": true
});
var $9bd631abf4e4fe50$export$2e2bcd8739ae039 = $9bd631abf4e4fe50$var$templateFunction;



const $d6d0a67769a0a612$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<label for="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 18
                }
            }
        }) : helper)) + '">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</label>\r\n<input type="text" id="' + alias4((helper = (helper = lookupProperty(helpers, "id") || (depth0 != null ? lookupProperty(depth0, "id") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "id",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 23
                },
                "end": {
                    "line": 2,
                    "column": 29
                }
            }
        }) : helper)) + '" class="second_name" name="second_name" placeholder="\u0418\u0432\u0430\u043D\u043E\u0432">';
    },
    "useData": true
});
var $d6d0a67769a0a612$export$2e2bcd8739ae039 = $d6d0a67769a0a612$var$templateFunction;


var $90da0c6d52de8e0a$export$2e2bcd8739ae039 = (name, id)=>{
    if (name === "email") return (0, $84e02aee949db1e0$export$2e2bcd8739ae039)(id);
    if (name === "login") return (0, $873b42a262dda1c1$export$2e2bcd8739ae039)(id);
    if (name === "first_name") return (0, $f815630723bdee9b$export$2e2bcd8739ae039)(id);
    if (name === "second_name") return (0, $d6d0a67769a0a612$export$2e2bcd8739ae039)(id);
    if (name === "display_name") return (0, $20bcf3a92e44c520$export$2e2bcd8739ae039)(id);
    if (name === "phone") return (0, $9bd631abf4e4fe50$export$2e2bcd8739ae039)(id);
};


const $066cd412b675e7d6$var$props = {
    buttonBlue: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("registration", "\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043E\u0432\u0430\u0442\u044C\u0441\u044F"),
    buttonText: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("enterAgain", "\u0412\u043E\u0439\u0442\u0438", "/"),
    email: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("email", "email"),
    login: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("login", "login"),
    first_name: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("first_name", "first_name"),
    second_name: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("second_name", "second_name"),
    display_name: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("display_name", "display_name"),
    phone: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("phone", "phone")
};
var $066cd412b675e7d6$export$2e2bcd8739ae039 = (0, $56ca650d5b922a96$export$2e2bcd8739ae039)($066cd412b675e7d6$var$props);



const $a0338c3b0b8a5804$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__choseChat">\r\n	<div class="allChats">\r\n		<div class="profile">\r\n			<div class="profile__outProfile">\r\n				<span>&lt;</span>' + ((stack1 = (helper = (helper = lookupProperty(helpers, "signOut") || (depth0 != null ? lookupProperty(depth0, "signOut") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "signOut",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 21
                },
                "end": {
                    "line": 5,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n			</div>\r\n			<div class="profile__inProfile">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "inProfile") || (depth0 != null ? lookupProperty(depth0, "inProfile") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inProfile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '<span> &gt;</span>\r\n			</div>\r\n		</div>\r\n		<div class="searchChat">\r\n			<input type="text" id="search" class="search" name="search" placeholder="&#128269;&ensp;\u043F\u043E\u0438\u0441\u043A">\r\n		</div>\r\n		<ul class="chatsNow">\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">500!</h3>\r\n					<a href="/fiveHundred" class="chat__massage"><span class="myMassage"></span> Five Hundred!\r\n						500!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">11:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">1</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">404!</h3>\r\n					<a href="/fourHundredFour" class="chat__massage"><span class="myMassage"></span>Four\r\n						Hundred Four 404!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">01:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">14</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">Chat Online!</h3>\r\n					<a href="/chatOnline" class="chat__massage"><span class="myMassage">upss:</span> Lorem\r\n						i</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">2</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">no chat!</h3>\r\n					<a href="/choseChat" class="chat__massage"><span class="myMassage">upss:</span> Lorem\r\n						i</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage _noActive">\r\n						<div class="newMassage_namber">5</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">Ivan</h3>\r\n					<a href="#" class="chat__massage"><span class="myMassage"></span> Lorem ipsum dolor sit amet\r\n						consectetur\r\n						adipisicing elit. Architecto nisi, non ducimus fugit expedita, possimus eaque in explicabo\r\n						fuga atque, error sequi. Sapiente eos deserunt, sed cum praesentium corrupti earum!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">1</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">Hola</h3>\r\n					<a href="#" class="chat__massage"><span class="myMassage"></span> Lorem ipsum dolor sit amet\r\n						consectetur\r\n						adipisicing elit. Architecto nisi, non ducimus fugit expedita, possimus eaque in explicabo\r\n						fuga atque, error sequi. Sapiente eos deserunt, sed cum praesentium corrupti earum!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">5</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<div class="chatContent">\r\n		<div class="noChoseChat">\r\n			<p>\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0447\u0430\u0442 \u0447\u0442\u043E\u0431\u044B \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435</p>\r\n		</div>\r\n	</div>\r\n</div>';
    },
    "useData": true
});
var $a0338c3b0b8a5804$export$2e2bcd8739ae039 = $a0338c3b0b8a5804$var$templateFunction;



var $f2a90527a6ccfd98$exports = {};
$f2a90527a6ccfd98$exports = new URL("78.884df5d6.png", "file:" + __filename).toString();


const $1b8ae6af6c408200$var$props = {
    src: `${(0, (/*@__PURE__*/$parcel$interopDefault($f2a90527a6ccfd98$exports)))}`,
    signOut: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("signOutBtn_chooseChat", "\u0432\u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F", "/"),
    inProfile: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("inProfileBtn_chooseChat", "\u043F\u0440\u043E\u0444\u0438\u043B\u044C", "/profile")
};
var $1b8ae6af6c408200$export$2e2bcd8739ae039 = (0, $a0338c3b0b8a5804$export$2e2bcd8739ae039)($1b8ae6af6c408200$var$props);



const $361d33ed5309822d$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__chatOnline">\r\n	<div class="allChats">\r\n		<div class="profile">\r\n			<div class="profile__outProfile">\r\n				<span>&lt;</span>' + ((stack1 = (helper = (helper = lookupProperty(helpers, "signOut") || (depth0 != null ? lookupProperty(depth0, "signOut") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "signOut",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 21
                },
                "end": {
                    "line": 5,
                    "column": 34
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n			</div>\r\n			<div class="profile__inProfile">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "inProfile") || (depth0 != null ? lookupProperty(depth0, "inProfile") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inProfile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 4
                },
                "end": {
                    "line": 8,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '<span> &gt;</span>\r\n			</div>\r\n		</div>\r\n		<div class="searchChat">\r\n			<input type="text" id="search" class="search" name="search" placeholder="&#128269;&ensp;\u043F\u043E\u0438\u0441\u043A">\r\n		</div>\r\n		<ul class="chatsNow">\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">500!</h3>\r\n					<a href="/fiveHundred" class="chat__massage"><span class="myMassage"></span> Five Hundred!\r\n						500!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">11:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">1</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">404!</h3>\r\n					<a href="/fourHundredFour" class="chat__massage"><span class="myMassage"></span>Four\r\n						Hundred Four 404!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">01:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">14</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">Chat Online!</h3>\r\n					<a href="/chatOnline" class="chat__massage"><span class="myMassage">upss:</span> Lorem\r\n						i</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">2</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">no chat!</h3>\r\n					<a href="/choseChat" class="chat__massage"><span class="myMassage">upss:</span> Lorem\r\n						i</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage _noActive">\r\n						<div class="newMassage_namber">5</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">Ivan</h3>\r\n					<a href="#" class="chat__massage"><span class="myMassage"></span> Lorem ipsum dolor sit amet\r\n						consectetur\r\n						adipisicing elit. Architecto nisi, non ducimus fugit expedita, possimus eaque in explicabo\r\n						fuga atque, error sequi. Sapiente eos deserunt, sed cum praesentium corrupti earum!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">1</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n			<li class="chat">\r\n				<div class="chat__logo"></div>\r\n				<div class="chat__content">\r\n					<h3 class="chat__title">Hola</h3>\r\n					<a href="#" class="chat__massage"><span class="myMassage"></span> Lorem ipsum dolor sit amet\r\n						consectetur\r\n						adipisicing elit. Architecto nisi, non ducimus fugit expedita, possimus eaque in explicabo\r\n						fuga atque, error sequi. Sapiente eos deserunt, sed cum praesentium corrupti earum!</a>\r\n				</div>\r\n				<div class="chat__option">\r\n					<div class="option_del">\r\n						<p>&#10006;</p>\r\n					</div>\r\n					<div class="option_lookTime">10:00</div>\r\n					<div class="newMassage">\r\n						<div class="newMassage_namber">5</div>\r\n					</div>\r\n				</div>\r\n			</li>\r\n		</ul>\r\n	</div>\r\n	<div class="wrap__chatContent">\r\n		<div class="chatContent">\r\n			<div class="wrap__header">\r\n				<div class="header__contant">\r\n					<div class="chat__logo"></div>\r\n					<h3 class="chat__title">chat online!</h3>\r\n				</div>\r\n				<div class="chat__change">\r\n					<span>&#8942;</span>\r\n				</div>\r\n			</div>\r\n			<section class="data_Message">\r\n				<p class="data__contant">19 \u0438\u044E\u043D\u044F</p>\r\n			</section>\r\n			<section class="massages">\r\n				<div class="massages__content">\r\n					<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam autem rerum sint similique\r\n						voluptatem iusto quidem aliquid, repellendus nihil, quibusdam sit omnis atque accusamus\r\n						maiores quia aspernatur numquam non repudiandae!</p>\r\n					<p class="time">11:00</p>\r\n				</div>\r\n			</section>\r\n			<section class="massages">\r\n				<div class="massages__content">\r\n					<img src="' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "src") || (depth0 != null ? lookupProperty(depth0, "src") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "src",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 147,
                    "column": 15
                },
                "end": {
                    "line": 147,
                    "column": 22
                }
            }
        }) : helper)) + '" alt="my_foto">\r\n					<p class="time">11:00</p>\r\n				</div>\r\n			</section>\r\n			<section class="my__massages">\r\n				<div class="massages__content">\r\n					<p>Hola Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga assumenda\r\n						temporibus consequatur magni. Reprehenderit amet sint, quibusdam ratione quis nisi quae,\r\n						deserunt eius accusantium consequatur dignissimos esse autem\r\n						provident.&emsp;<span>&#10003;&#10003;</span></p>\r\n					<p class="time">11:00</p>\r\n				</div>\r\n			</section>\r\n			<div class="wrap__footer">\r\n				<div class="footer__contant">\r\n					<div class="added"><a href="#"><span>&#128206;</span></a></div>\r\n					<div class="inputMassage">\r\n						<input type="text" id="massage" class="massage" name="massage" placeholder="\u0421\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435">\r\n					</div>\r\n					<div class="sendMassage">\r\n						<div><a href="#"><span>\r\n									&#8605;</span></a>\r\n						</div>\r\n					</div>\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>';
    },
    "useData": true
});
var $361d33ed5309822d$export$2e2bcd8739ae039 = $361d33ed5309822d$var$templateFunction;




const $8aad2642cdd65204$var$props = {
    src: `${(0, (/*@__PURE__*/$parcel$interopDefault($f2a90527a6ccfd98$exports)))}`,
    signOut: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("signOutBtn", "\u0432\u0432\u044B\u0445\u043E\u0434 \u0438\u0437 \u043F\u0440\u043E\u0444\u0438\u043B\u044F", "/"),
    inProfile: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("inProfileBtn", "\u043F\u0440\u043E\u0444\u0438\u043B\u044C", "/profile")
};
var $8aad2642cdd65204$export$2e2bcd8739ae039 = (0, $361d33ed5309822d$export$2e2bcd8739ae039)($8aad2642cdd65204$var$props);



const $fd98b3e0cab87cb5$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper___fourHundredFour">\r\n        ' + ((stack1 = (helper = (helper = lookupProperty(helpers, "pageError404") || (depth0 != null ? lookupProperty(depth0, "pageError404") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "pageError404",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 8
                },
                "end": {
                    "line": 2,
                    "column": 26
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n    </div>";
    },
    "useData": true
});
var $fd98b3e0cab87cb5$export$2e2bcd8739ae039 = $fd98b3e0cab87cb5$var$templateFunction;



const $5ca4b94fc5821367$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="' + alias4((helper = (helper = lookupProperty(helpers, "class") || (depth0 != null ? lookupProperty(depth0, "class") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "class",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 1,
                    "column": 12
                },
                "end": {
                    "line": 1,
                    "column": 21
                }
            }
        }) : helper)) + '">\r\n	<h1>' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 5
                },
                "end": {
                    "line": 2,
                    "column": 14
                }
            }
        }) : helper)) + "</h1>\r\n	<p>" + alias4((helper = (helper = lookupProperty(helpers, "text") || (depth0 != null ? lookupProperty(depth0, "text") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "text",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 4
                },
                "end": {
                    "line": 3,
                    "column": 12
                }
            }
        }) : helper)) + '</p>\r\n	<div class="btn_text">\r\n		' + ((stack1 = (helper = (helper = lookupProperty(helpers, "choseChatAgain") || (depth0 != null ? lookupProperty(depth0, "choseChatAgain") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "choseChatAgain",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 2
                },
                "end": {
                    "line": 5,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $5ca4b94fc5821367$export$2e2bcd8739ae039 = $5ca4b94fc5821367$var$templateFunction;



const $ba8aad201c310730$var$props1 = {
    class: "fourHundredFour__content",
    title: "404",
    text: "\u041D\u0435 \u0442\u0443\u0434\u0430 \u043F\u043E\u043F\u0430\u043B\u0438",
    choseChatAgain: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("choseChat_PageError404", "\u043D\u0430\u0437\u0430\u0434 \u043A \u0447\u0430\u0442\u0430\u043C", "/choseChat")
};
const $ba8aad201c310730$var$props2 = {
    class: "fiveHundred__content",
    title: "500",
    text: "\u041C\u044B \u0443\u0436\u0435 \u0444\u0438\u043A\u0441\u0438\u043C",
    choseChatAgain: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("choseChat_PageError500", "\u043D\u0430\u0437\u0430\u0434 \u043A \u0447\u0430\u0442\u0430\u043C", "/choseChat")
};
var $ba8aad201c310730$export$2e2bcd8739ae039 = (type)=>type === "404" ? (0, $5ca4b94fc5821367$export$2e2bcd8739ae039)($ba8aad201c310730$var$props1) : (0, $5ca4b94fc5821367$export$2e2bcd8739ae039)($ba8aad201c310730$var$props2);


const $cbf1479dc6c41d2b$var$props = {
    pageError404: (0, $ba8aad201c310730$export$2e2bcd8739ae039)("404")
};
var $cbf1479dc6c41d2b$export$2e2bcd8739ae039 = (0, $fd98b3e0cab87cb5$export$2e2bcd8739ae039)($cbf1479dc6c41d2b$var$props);



const $a2666574ed80c23c$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper___fiveHundred">\r\n	' + ((stack1 = (helper = (helper = lookupProperty(helpers, "pageError500") || (depth0 != null ? lookupProperty(depth0, "pageError500") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "pageError500",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 1
                },
                "end": {
                    "line": 2,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>";
    },
    "useData": true
});
var $a2666574ed80c23c$export$2e2bcd8739ae039 = $a2666574ed80c23c$var$templateFunction;



const $4125d4b1a6cc34e2$var$props = {
    pageError500: (0, $ba8aad201c310730$export$2e2bcd8739ae039)("500")
};
var $4125d4b1a6cc34e2$export$2e2bcd8739ae039 = (0, $a2666574ed80c23c$export$2e2bcd8739ae039)($4125d4b1a6cc34e2$var$props);



const $bf2e61056e8eaac4$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__index">\r\n	<div class="enterChat">\r\n		<form id="enterChat__form" class="enterChat__form" name="enterChat__form" action="/choseChat">\r\n			<h3>' + container.escapeExpression((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 7
                },
                "end": {
                    "line": 4,
                    "column": 16
                }
            }
        }) : helper)) + '</h3>\r\n			<div class="form-control">\r\n				' + ((stack1 = (helper = (helper = lookupProperty(helpers, "inputLogin") || (depth0 != null ? lookupProperty(depth0, "inputLogin") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "inputLogin",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 6,
                    "column": 4
                },
                "end": {
                    "line": 6,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				<small>Error</small>\r\n			</div>\r\n			<div class="form-control last" id="form-control__pas">\r\n				<label for="password">\u041F\u0430\u0440\u043E\u043B\u044C</label>\r\n				<input type="password" id="password" name="password" class="password" placeholder="\u041F\u0430\u0440\u043E\u043B\u044C">\r\n				<small>Error</small>\r\n			</div>\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonBlue") || (depth0 != null ? lookupProperty(depth0, "buttonBlue") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "buttonBlue",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 14,
                    "column": 3
                },
                "end": {
                    "line": 14,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n		</form>\r\n		<div id="toRegistration__form" name="toRegistration__form">\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonText") || (depth0 != null ? lookupProperty(depth0, "buttonText") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "buttonText",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 17,
                    "column": 3
                },
                "end": {
                    "line": 17,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n		</div>\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $bf2e61056e8eaac4$export$2e2bcd8739ae039 = $bf2e61056e8eaac4$var$templateFunction;




const $2d5b7d5ca01bf14e$var$props = {
    title: "\u0412\u0445\u043E\u0434",
    buttonBlue: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("enter", "\u0410\u0432\u0442\u043E\u0440\u0438\u0437\u043E\u0432\u0430\u0442\u044C\u0441\u044F"),
    buttonText: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("register", "\u041D\u0435\u0442 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430?", "/registration"),
    inputLogin: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("login", "login")
};
var $2d5b7d5ca01bf14e$export$2e2bcd8739ae039 = (0, $bf2e61056e8eaac4$export$2e2bcd8739ae039)($2d5b7d5ca01bf14e$var$props);



const $6691b02ba7c9fd69$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__profile">\r\n	<div class="wrap__arrow">\r\n		<div class="blueCircle">\r\n			<div>\r\n				<a href="/choseChat"><span>&#8656;</span></a>\r\n			</div>\r\n		</div>\r\n	</div>\r\n	<div class="content">\r\n		<div class="profile">\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarLog") || (depth0 != null ? lookupProperty(depth0, "avatarLog") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "avatarLog",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 3
                },
                "end": {
                    "line": 11,
                    "column": 18
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n			<form id="profile__form" class="profile__form" name="profile__form" action="#">\r\n				<div class="form-control">\r\n					<label for="email">\u041F\u043E\u0447\u0442\u0430</label>\r\n					<input type="text" id="email" class="email" name="email" readonly="readonly"\r\n						value="pochta@yandex.ru">\r\n				</div>\r\n				<div class="form-control">\r\n					<label for="login">\u041B\u043E\u0433\u0438\u043D</label>\r\n					<input type="text" id="login" class="login" name="login" readonly="readonly" value="ivanivanov">\r\n				</div>\r\n				<div class="form-control">\r\n					<label for="first_name">\u0418\u043C\u044F</label>\r\n					<input type="text" id="first_name" class="first_name" name="first_name" readonly="readonly"\r\n						value="\u0418\u0432\u0430\u043D">\r\n				</div>\r\n				<div class="form-control">\r\n					<label for="second_name">\u0424\u0430\u043C\u0438\u043B\u0438\u044F</label>\r\n					<input type="text" id="second_name" class="second_name" name="second_name" readonly="readonly"\r\n						value="\u0418\u0432\u0430\u043D\u043E\u0432">\r\n				</div>\r\n				<div class="form-control">\r\n					<label for="display_name">\u0418\u043C\u044F \u0432 \u0447\u0430\u0442\u0435</label>\r\n					<input type="text" id="display_name" class="display_name" name="display_name" readonly="readonly"\r\n						value="\u0418\u0432\u0430\u043D">\r\n				</div>\r\n				<div class="form-control">\r\n					<label for="phone">\u0422\u0435\u043B\u0435\u0444\u043E\u043D</label>\r\n					<input type="text" id="phone" class="phone" name="phone" readonly="readonly"\r\n						value="+7 (909) 967 30 30">\r\n				</div>\r\n			</form>\r\n			<div class="wrap__profileBtn">\r\n				<div class="changeData btn">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "changeProfile_btn") || (depth0 != null ? lookupProperty(depth0, "changeProfile_btn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "changeProfile_btn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 45,
                    "column": 5
                },
                "end": {
                    "line": 45,
                    "column": 28
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="changePassword btn">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "changePassword_btn") || (depth0 != null ? lookupProperty(depth0, "changePassword_btn") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "changePassword_btn",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 48,
                    "column": 5
                },
                "end": {
                    "line": 48,
                    "column": 29
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="out btn">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonTextOut") || (depth0 != null ? lookupProperty(depth0, "buttonTextOut") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "buttonTextOut",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 51,
                    "column": 5
                },
                "end": {
                    "line": 51,
                    "column": 24
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n				</div>\r\n			</div>\r\n		</div>\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $6691b02ba7c9fd69$export$2e2bcd8739ae039 = $6691b02ba7c9fd69$var$templateFunction;




const $6d769bd18d3cffcc$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrap__avatar">\r\n	<a href="/loadAvatar" class="profile__avatar">\r\n		<div>\r\n			<img src="' + alias4((helper = (helper = lookupProperty(helpers, "src") || (depth0 != null ? lookupProperty(depth0, "src") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "src",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 4,
                    "column": 13
                },
                "end": {
                    "line": 4,
                    "column": 20
                }
            }
        }) : helper)) + '" alt="avatar" class="avatar">\r\n		</div>\r\n		<p class="changeAvatar">\r\n			\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C<br>\u0430\u0432\u0430\u0442\u0430\u0440 </p>\r\n	</a>\r\n	<h3>' + alias4((helper = (helper = lookupProperty(helpers, "displayName") || (depth0 != null ? lookupProperty(depth0, "displayName") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "displayName",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 5
                },
                "end": {
                    "line": 9,
                    "column": 20
                }
            }
        }) : helper)) + "</h3>\r\n</div>";
    },
    "useData": true
});
var $6d769bd18d3cffcc$export$2e2bcd8739ae039 = $6d769bd18d3cffcc$var$templateFunction;


var $b374def2d9ba6811$export$2e2bcd8739ae039 = (src, displayName)=>(0, $6d769bd18d3cffcc$export$2e2bcd8739ae039)({
        src: src,
        displayName: displayName
    });


var $37811cf95483e396$exports = {};
$37811cf95483e396$exports = new URL("cat.5ff3e4b7.png", "file:" + __filename).toString();


const $53b94ec840727244$var$props = {
    buttonTextOut: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("sign_outProfile", "\u0412\u044B\u0439\u0442\u0438", "/"),
    changePassword_btn: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("changePassword_btn", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u0430\u0440\u043E\u043B\u044C", "/changePassword"),
    changeProfile_btn: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("changeProfile_btn", "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0434\u0430\u043D\u043D\u044B\u0435", "/changeProfile"),
    avatarLog: (0, $b374def2d9ba6811$export$2e2bcd8739ae039)(`${(0, (/*@__PURE__*/$parcel$interopDefault($37811cf95483e396$exports)))}`, "\u0418\u0432\u0430\u043D")
};
var $53b94ec840727244$export$2e2bcd8739ae039 = (0, $6691b02ba7c9fd69$export$2e2bcd8739ae039)($53b94ec840727244$var$props);



const $9e657c2464df6610$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__profileChange">\r\n	<div class="wrap__arrow">\r\n		<div class="blueCircle">\r\n			<div><a href="/profile"><span>&#8656;</span></a></div>\r\n		</div>\r\n	</div>\r\n	<div class="content">\r\n		<div class="profile">\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarLog") || (depth0 != null ? lookupProperty(depth0, "avatarLog") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "avatarLog",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 3
                },
                "end": {
                    "line": 9,
                    "column": 18
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n			<form id="changeProfile__form" class="changeProfile__form" name="changeProfile__form" action="/profile">\r\n				<div class="form-control">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "email") || (depth0 != null ? lookupProperty(depth0, "email") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "email",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 12,
                    "column": 5
                },
                "end": {
                    "line": 12,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="form-control">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "login") || (depth0 != null ? lookupProperty(depth0, "login") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "login",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 15,
                    "column": 5
                },
                "end": {
                    "line": 15,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="form-control">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "first_name") || (depth0 != null ? lookupProperty(depth0, "first_name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "first_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 18,
                    "column": 5
                },
                "end": {
                    "line": 18,
                    "column": 21
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="form-control">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "second_name") || (depth0 != null ? lookupProperty(depth0, "second_name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "second_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 21,
                    "column": 5
                },
                "end": {
                    "line": 21,
                    "column": 22
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="form-control">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "display_name") || (depth0 != null ? lookupProperty(depth0, "display_name") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "display_name",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 24,
                    "column": 5
                },
                "end": {
                    "line": 24,
                    "column": 23
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="form-control">\r\n					' + ((stack1 = (helper = (helper = lookupProperty(helpers, "phone") || (depth0 != null ? lookupProperty(depth0, "phone") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "phone",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 27,
                    "column": 5
                },
                "end": {
                    "line": 27,
                    "column": 16
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n				</div>\r\n				<div class="wrap__btn">\r\n					<div class="btn_width">\r\n						' + ((stack1 = (helper = (helper = lookupProperty(helpers, "btn_save") || (depth0 != null ? lookupProperty(depth0, "btn_save") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "btn_save",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 31,
                    "column": 6
                },
                "end": {
                    "line": 31,
                    "column": 20
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n					</div>\r\n				</div>\r\n			</form>\r\n		</div>\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $9e657c2464df6610$export$2e2bcd8739ae039 = $9e657c2464df6610$var$templateFunction;






const $3359806e6a8ec9a0$var$props = {
    btn_save: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("btn_saveChange", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
    avatarLog: (0, $b374def2d9ba6811$export$2e2bcd8739ae039)(`${(0, (/*@__PURE__*/$parcel$interopDefault($37811cf95483e396$exports)))}`, "\u0418\u0432\u0430\u043D"),
    email: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("email", "email"),
    login: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("login", "login"),
    first_name: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("first_name", "first_name"),
    second_name: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("second_name", "second_name"),
    phone: (0, $90da0c6d52de8e0a$export$2e2bcd8739ae039)("phone", "phone")
};
var $3359806e6a8ec9a0$export$2e2bcd8739ae039 = (0, $9e657c2464df6610$export$2e2bcd8739ae039)($3359806e6a8ec9a0$var$props);



const $cfe3c61e0f2a99eb$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__profileChangePasword">\r\n	<div class="wrap__arrow">\r\n		<div class="blueCircle">\r\n			<div><a href="/profile"><span>&#8678;</span></a></div>\r\n		</div>\r\n	</div>\r\n	<div class="content">\r\n		<div class="profile">\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "avatarLog") || (depth0 != null ? lookupProperty(depth0, "avatarLog") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "avatarLog",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 9,
                    "column": 3
                },
                "end": {
                    "line": 9,
                    "column": 18
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n			<form id="changePassword__form" class="changePassword__form" name="changePassword__form" action="/profile">\r\n				<div class="form-control" id="form-control__pas">\r\n					<label for="oldPassword">\u0421\u0442\u0430\u0440\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>\r\n					<input type="password" id="oldPassword" name="oldPassword" class="oldPassword" value="\u041F\u0430\u0440\u043E\u043B\u044C">\r\n					<small>Error</small>\r\n				</div>\r\n				<div class="form-control" id="form-control__newPassword">\r\n					<label for="newPassword">\u041D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>\r\n					<input type="password" id="newPassword" name="newPassword" class="password" value="\u041F\u0430\u0440\u043E\u043B\u044C">\r\n					<small>Error</small>\r\n				</div>\r\n				<div class="form-control" id="form-control__newPasswordTwo">\r\n					<label for="newPasswordTwo">\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043D\u043E\u0432\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C</label>\r\n					<input type="password" id="newPasswordTwo" name="newPasswordTwo" class="newPasswordTwo"\r\n						value="\u041F\u0430\u0440\u043E\u043B\u044C">\r\n					<small>Error</small>\r\n				</div>\r\n				<div class="wrap__btn">\r\n					<div class="btn_width">\r\n						' + ((stack1 = (helper = (helper = lookupProperty(helpers, "btn_saveCangePasword") || (depth0 != null ? lookupProperty(depth0, "btn_saveCangePasword") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "btn_saveCangePasword",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 29,
                    "column": 6
                },
                "end": {
                    "line": 29,
                    "column": 32
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n					</div>\r\n				</div>\r\n			</form>\r\n		</div>\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $cfe3c61e0f2a99eb$export$2e2bcd8739ae039 = $cfe3c61e0f2a99eb$var$templateFunction;





const $17d63dc420abc240$var$props = {
    btn_saveCangePasword: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("btn_saveCangePasword", "\u0421\u043E\u0445\u0440\u0430\u043D\u0438\u0442\u044C"),
    avatarLog: (0, $b374def2d9ba6811$export$2e2bcd8739ae039)(`${(0, (/*@__PURE__*/$parcel$interopDefault($37811cf95483e396$exports)))}`, "\u0418\u0432\u0430\u043D")
};
var $17d63dc420abc240$export$2e2bcd8739ae039 = (0, $cfe3c61e0f2a99eb$export$2e2bcd8739ae039)($17d63dc420abc240$var$props);



const $ca3966e6f2fc3b1b$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__loadAvatar">\r\n	' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chooseFile") || (depth0 != null ? lookupProperty(depth0, "chooseFile") : depth0)) != null ? helper : container.hooks.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, {
            "name": "chooseFile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 2,
                    "column": 1
                },
                "end": {
                    "line": 2,
                    "column": 17
                }
            }
        }) : helper)) != null ? stack1 : "") + "\r\n</div>";
    },
    "useData": true
});
var $ca3966e6f2fc3b1b$export$2e2bcd8739ae039 = $ca3966e6f2fc3b1b$var$templateFunction;



const $8f5c63e21644a59c$var$templateFunction = (0, ($parcel$interopDefault($fCOrg$handlebars))).template({
    "compiler": [
        8,
        ">= 4.3.0"
    ],
    "main": function(container, depth0, helpers, partials, data) {
        var stack1, helper, alias1 = depth0 != null ? depth0 : container.nullContext || {}, alias2 = container.hooks.helperMissing, alias3 = "function", alias4 = container.escapeExpression, lookupProperty = container.lookupProperty || function(parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) return parent[propertyName];
            return undefined;
        };
        return '<div class="wrapper__loadAvatar">\r\n	<div class="loadAvatar">\r\n		<h3>' + alias4((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "title",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 3,
                    "column": 6
                },
                "end": {
                    "line": 3,
                    "column": 15
                }
            }
        }) : helper)) + '</h3>\r\n		<div class="loadAvatar_change">\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "chooseFile") || (depth0 != null ? lookupProperty(depth0, "chooseFile") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "chooseFile",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 5,
                    "column": 3
                },
                "end": {
                    "line": 5,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n		</div>\r\n		<form class="loadAvatar_btn" action="/profile">\r\n			' + ((stack1 = (helper = (helper = lookupProperty(helpers, "buttonBlue") || (depth0 != null ? lookupProperty(depth0, "buttonBlue") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "buttonBlue",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 8,
                    "column": 3
                },
                "end": {
                    "line": 8,
                    "column": 19
                }
            }
        }) : helper)) != null ? stack1 : "") + '\r\n		</form>\r\n		<div class="loadAvatar_error">\r\n			<p>' + alias4((helper = (helper = lookupProperty(helpers, "message") || (depth0 != null ? lookupProperty(depth0, "message") : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, {
            "name": "message",
            "hash": {},
            "data": data,
            "loc": {
                "start": {
                    "line": 11,
                    "column": 6
                },
                "end": {
                    "line": 11,
                    "column": 17
                }
            }
        }) : helper)) + "</p>\r\n		</div>\r\n	</div>\r\n</div>";
    },
    "useData": true
});
var $8f5c63e21644a59c$export$2e2bcd8739ae039 = $8f5c63e21644a59c$var$templateFunction;



const $2e02e0a65fa88464$var$chooseFile = {
    title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
    chooseFile: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_chooseFile", "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435", "#"),
    buttonBlue: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_chooseFileBlue", "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C"),
    message: ""
};
const $2e02e0a65fa88464$var$fileOk = {
    title: "\u0424\u0430\u0439\u043B \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043D",
    chooseFile: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_fileOk", "pic.jpg", "#"),
    buttonBlue: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_fileOkBlue", "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C"),
    message: ""
};
const $2e02e0a65fa88464$var$fileError = {
    title: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u0430\u0439\u043B",
    chooseFile: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_chooseFileNoError", "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435", "#"),
    buttonBlue: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_changeFileNoErrorBlue", "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C"),
    message: "\u041D\u0443\u0436\u043D\u043E \u0432\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B"
};
const $2e02e0a65fa88464$var$reloadFile = {
    title: "\u041E\u0448\u0438\u0431\u043A\u0430, \u043F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437",
    chooseFile: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_reloadFile", "\u0412\u044B\u0431\u0440\u0430\u0442\u044C \u0444\u0430\u0439\u043B \u043D\u0430 \u043A\u043E\u043C\u043F\u044C\u044E\u0442\u0435\u0440\u0435", "#"),
    buttonBlue: (0, $daa7293aeae3f240$export$2e2bcd8739ae039)("loadFile_reloadFileBlue", "\u041F\u043E\u043C\u0435\u043D\u044F\u0442\u044C"),
    message: ""
};
var $2e02e0a65fa88464$export$2e2bcd8739ae039 = (type)=>{
    if (type === "chooseFile") return (0, $8f5c63e21644a59c$export$2e2bcd8739ae039)($2e02e0a65fa88464$var$chooseFile);
    if (type === "fileOk") return (0, $8f5c63e21644a59c$export$2e2bcd8739ae039)($2e02e0a65fa88464$var$fileOk);
    if (type === "fileError") return (0, $8f5c63e21644a59c$export$2e2bcd8739ae039)($2e02e0a65fa88464$var$fileError);
    if (type === "reloadFile") return (0, $8f5c63e21644a59c$export$2e2bcd8739ae039)($2e02e0a65fa88464$var$reloadFile);
};


const $6bda7484bf0e7983$var$props = {
    chooseFile: (0, $2e02e0a65fa88464$export$2e2bcd8739ae039)(`chooseFile`)
};
var $6bda7484bf0e7983$export$2e2bcd8739ae039 = (0, $ca3966e6f2fc3b1b$export$2e2bcd8739ae039)($6bda7484bf0e7983$var$props);



const $c50e7c435ce40c6f$var$root = document.getElementById("root");
const $c50e7c435ce40c6f$var$routes = {
    "/": (0, $2d5b7d5ca01bf14e$export$2e2bcd8739ae039),
    "/registration": (0, $066cd412b675e7d6$export$2e2bcd8739ae039),
    "/choseChat": (0, $1b8ae6af6c408200$export$2e2bcd8739ae039),
    "/chatOnline": (0, $8aad2642cdd65204$export$2e2bcd8739ae039),
    "/fourHundredFour": (0, $cbf1479dc6c41d2b$export$2e2bcd8739ae039),
    "/fiveHundred": (0, $4125d4b1a6cc34e2$export$2e2bcd8739ae039),
    "/profile": (0, $53b94ec840727244$export$2e2bcd8739ae039),
    "/changeProfile": (0, $3359806e6a8ec9a0$export$2e2bcd8739ae039),
    "/changePassword": (0, $17d63dc420abc240$export$2e2bcd8739ae039),
    "/loadAvatar": (0, $6bda7484bf0e7983$export$2e2bcd8739ae039)
};
window.onload = function() {
    const path = window.location.pathname;
    Object.keys($c50e7c435ce40c6f$var$routes).find((el)=>el === path) ? $c50e7c435ce40c6f$var$root.innerHTML = $c50e7c435ce40c6f$var$routes[path] : $c50e7c435ce40c6f$var$root.innerHTML = (0, $cbf1479dc6c41d2b$export$2e2bcd8739ae039);
};


//# sourceMappingURL=index.js.map
