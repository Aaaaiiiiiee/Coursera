var db = require('../lib/db');
var bcrypt = require('bcrypt');

module.exports = function (app) {

    var passport = require('passport'),
        LocalStrategy = require('passport-local').Strategy,
        GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

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
            var user = db.get('users').find({ email: email }).value();
            if (user) {
                bcrypt.compare(password, user.password, (err, res) => {
                    if (res) {
                        return done(null, user, {
                            message: 'Welcome.'
                        });
                    } else {
                        return done(null, false, {
                            message: 'Password is not correct.'
                        });
                    }
                });

            } else {
                return done(null, false, {
                    message: 'There is no email.'
                });
            }
        }
    ));

    var googleCredentials = require('../config/google.json');
    passport.use(new GoogleStrategy({
        clientID: googleCredentials.web.client_id,
        clientSecret: googleCredentials.web.client_secret,
        callbackURL: googleCredentials.web.redirect_uris[0]
    },
        function (accessToken, refreshToken, profile, done) {
            console.log('Googlestrategy', accessToken, refreshToken, profile);
            var email = profile.email;
            var user = db.get('users')
                .find({email:email})
                .assign({googleId: profile.id})
                .write();
            done(null, user);
        }
    ));

    app.get('/auth/google',
        passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] }));

    app.get('/auth/google/callback',
        passport.authenticate('google', { failureRedirect: '/auth/login' }),
        function (req, res) {
            res.redirect('/');
        });

    return passport;
}