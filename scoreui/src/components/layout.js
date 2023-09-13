var m = require('mithril');
const { navbar } = require('./navbar');

const layout = {
    view: function(vnode){
        return [
            m(navbar),
            m(".container-fluid", [
                m("div", {
                    "class": "row"
                }, [
                    m("div", {"class":"col-md-3"}, 
                        vnode.children[0]
                    ),
                    m("div", {"class":""}, 
                        vnode.children[1]
                    )
                ])
            ])
        ]
    }
}
module.exports = {layout};