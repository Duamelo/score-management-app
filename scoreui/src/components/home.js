var m = require('mithril');

const home = {
    view: function(vnode){
        return [
            m("main.col-md-9.ms-sm-auto.col-lg-10.px-md-4", [
                m(".d-flex.justify-content-between.flex-wrap.flex-md-nowrap.align-items-center.pt-3.pb-2.mb-3.border-bottom", [
                    m("h1.h2", "Dashboard")
                ])
            ])
        ]
    }
}

module.exports = {home};