const { Client, UserManager } = require("../../src/index.js");

exports.mockClient = function() {
    return new Client();
}

exports.mockUserDtoData = function() {
    return {
        _id: "5a23d11025a09c281cd3ca13",
        login: "admin",
        password: "heslo123",
        email: "admin@localhost.dev",
        name: "Natasha Negovanlis",
        _created: "2017-12-02 21:57 UTC",
        activated: true,
        role: "admin"
    };
}
exports.mockUserDtoDataArray = function() {
    return [
        {
            _id: "5a23d11025a09c281cd3ca13",
            login: "admin",
            password: "heslo123",
            email: "admin@localhost.dev",
            name: "Natasha Negovanlis",
            _created: "2017-12-02 21:57 UTC",
            activated: true,
            role: "admin"
        },
        {
            _id: "6c73d11586a09ert1cd3ca13",
            login: "vampire",
            password: "heslo123",
            email: "blood@yourneck.suck",
            name: "Dracula",
            _created: "2017-12-04 20:07 UTC",
            activated: true,
            role: "member"
        },
        {
            _id: "7b862104c5a09c281cd3ca13",
            login: "monkey",
            password: "heslo123",
            email: "monkey@banana.com",
            name: "Donkey Kong",
            _created: "2017-12-12 11:25 UTC",
            activated: false,
            role: "member"
        }
    ]
}