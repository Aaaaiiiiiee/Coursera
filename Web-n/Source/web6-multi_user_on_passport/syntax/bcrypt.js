const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = '111111';
const someOtherPlaintextPassword = '111112';

bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash);

    bcrypt.compare(myPlaintextPassword, hash, (err, res)=>{
        console.log('my password', res);
    });
    bcrypt.compare(someOtherPlaintextPassword, hash, (err, res)=>{
        console.log('other password', res);
    });
});