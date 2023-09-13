var m = require("mithril");
const { sidebar } = require("./components/sidebar");
const { home } = require("./components/home");
const { layout } = require("./components/layout");

function mountRoutes() {
    document.body.className = "";
        m.route(document.body, "/dashboard", {
            "/dashboard": {
                render: function() {
                    return m(layout, m(sidebar), m(home));
                }
            },
        });
}
exports.mountRoutes = mountRoutes;