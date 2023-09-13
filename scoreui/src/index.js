var m = require("mithril");

const {
    mountRoutes
} = require("./mounter");
const { login } = require("./components/login");

if (window.localStorage['jwt'] == undefined)
    mountRoutes();
else
     m.route(document.body, "/login", {
            "/login": {
                render: function() {
                    return m(login);
                }
            },
            "/register": {
                render: function() {
                    return m(register);
                }
            },
        });