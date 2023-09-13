var m = require('mithril');



const credential = {
    check: 0,
    error: "",
    errorDisplay() {
        return credential.error != "" ? "" : "none"
    },
    canSubmit() {
        return credential.email != "" && credential.password != ""
    },
    _username: "",
    get username() {
        return this._username;
    },
    set username(value) {
        this._username = value;
    },
    _password: "",
    get password() {
        return this._password;
    },
    set password(value) {
        this._password = value;
    },
    login(e) {
        e.preventDefault();
        m.request({
            method: "POST",
            url: server.url + "/authentication/login",
            body: {
                "pseudo": credential.username,
                "password": credential.password
            }
        }).then((response) => {
            if (response != undefined) {
                jwt.token = response.token
                mountRoutes();
            }
        }, (error) => {
            if (error.code == 400)
                credential.error = "Erreur de login"
        })
    }
}


const login = {
    view: function(vnode){
        return [
            m("main.text-center.form-signin", [
                m("form", [
                    m("img.mb-4[alt=''][height='57'][src='/docs/5.0/assets/brand/bootstrap-logo.svg'][width='72']"),
                    m("h1.h3.mb-3.fw-normal", "Please sign in"),
                    m(".form-floating", [
                        m("input.form-control[id='floatingInput'][placeholder='name@example.com'][type='email']"),
                        m("label[for='floatingInput']", "Email address")
                    ]),
                    m(".form-floating", [
                        m("input.form-control[id='floatingPassword'][placeholder='Password'][type='password']"),
                        m("label[for='floatingPassword']", "Password")
                    ]),
                    m(".checkbox.mb-3", [
                        m("label", [
                            m("input[type='checkbox'][value='remember-me']"),
                            " Remember me\n      "
                        ])
                    ]),
                    m("button.w-100.btn.btn-lg.btn-primary[type='submit']", "Sign in"),
                    m("p.mt-5.mb-3.text-muted", "© 2017–2021")
                ]),
                "\n"
            ]),"\n"
        ]
    }
}

module.exports = {login};