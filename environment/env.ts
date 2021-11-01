/// <reference types="node" />

export const APP_NAME = process.env.APP_NAME || 'APP name';

export const BASE_URL = {
    local: 'url localhost',
    dev: 'url dev',
    acc: 'url acceptanse'
};

export const CREDS = {
    username: process.env.USERNAME_GUI || 'USERNAME_GUI',
    password: process.env.PASSWORD_GUI || 'PASSWORD_GUI'
}