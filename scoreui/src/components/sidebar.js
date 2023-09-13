var m = require('mithril');

const sidebar = {
    view: function(vnode){
        return [
            m("nav.col-lg-2.d-md-block.bg-light.sidebar.collapse[id='sidebarMenu']", [
                m(".position-sticky.pt-3", [
                    m("ul.nav.flex-column", [
                        m("li.nav-item", [
                            m("a.nav-link.active[aria-current='page'][href='#']", [
                                m("span[data-feather='home']"),
                                "\n              Dashboard\n            "
                            ])
                        ]),
                        m("li.nav-item", [
                            m("a.nav-link[href='#']", [
                                m("span[data-feather='file']"),
                                "\n              Tournois\n            "
                            ])
                        ]),
                        m("li.nav-item", [
                            m("a.nav-link[href='#']", [
                                m("span[data-feather='shopping-cart']"),
                                "\n              Equipes\n            "
                            ])
                        ]),
                        m("li.nav-item", [
                            m("a.nav-link[href='#']", [
                                m("span[data-feather='users']"),
                                "\n              Joueurs\n            "
                            ])
                        ]),
                        m("li.nav-item", [
                            m("a.nav-link[href='#']", [
                                m("span[data-feather='bar-chart-2']"),
                                "\n              Matchs\n            "
                            ])
                        ]),
                        m("li.nav-item", [
                            m("a.nav-link[href='#']", [
                                m("span[data-feather='layers']"),
                                "\n              Groupes\n            "
                            ])
                        ])
                    ])
                ])
            ])
        ]
    }
}

module.exports = {sidebar};