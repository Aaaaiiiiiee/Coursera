var db = require('../lib/db');

module.exports = function (app) {

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy;

    app.use(passport.initialize());
    app.use(passport.session());

    passport.serializeUser(function (user, done) {
        // login 하는 순간, 딱 한 번 호출 된다.
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        // login 상태에서 page를 reload할 때마다 호출된다.
        var user = db.get('users').find({ id: id }).value();
        done(null, user);
    });

    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'pwd'
    },
        function (email, password, done) {
            var user = db.get('users').find({ email: email, password: password }).value();
            if (user) {
                return done(null, user, {
                    message: 'Welcome.'
                });
            } else {
                return done(null, false, {
                    message: 'Incorrect user information.'
                });
            }
        }
    ));
    return passport;
}