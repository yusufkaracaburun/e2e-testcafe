import * as config from '../environment/env';

var args = require("minimist")(process.argv.slice(2));

export function getUrl() {
    if (args.env === "local") {
        return config.BASE_URL.local
    } else if (args.env === "dev") {
        return config.BASE_URL.dev
    }
    return config.BASE_URL.acc
}

export function getUsername() {
    if (args.usr) {
        return args.usr;
    }
    return config.CREDS.username;
}

export function getPassword() {
    if (args.pwd) {
        return args.pwd;
    }
    return config.CREDS.password;
}

export function getCredentials() {
    return {
        username: this.getUsername(),
        password: this.getPassword(),
    }
}

export function getEnv() {
    return args.env;
}