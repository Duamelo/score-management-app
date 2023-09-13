var m = require('mithril');

const navbar = {
    view: function(vnode){
        return [
            m("header.header-color.navbar.navbar-dark.sticky-top.flex-md-nowrap.p-0.shadow", [
                m("a.app-name.navbar-brand.col-md-3.col-lg-2.me-0.px-3[href='#']", "NEIJO"),
                m("button.navbar-toggler.position-absolute.d-md-none.collapsed[aria-controls='sidebarMenu'][aria-expanded='false'][aria-label='Toggle navigation'][data-bs-target='#sidebarMenu'][data-bs-toggle='collapse'][type='button']", [
                    m("span.navbar-toggler-icon")
                ]),
                m(".navbar-nav", [
                    m(".nav-item.text-nowrap", [
                        m("a.nav-link.px-3[href='#']", "Se connecter")
                    ])
                ]),
            ])
        ]
    }
}

module.exports = {navbar};