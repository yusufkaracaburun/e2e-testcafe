//https://www.youtube.com/watch?v=-T6bu7VYu90
// @ts-ignore
import http from 'http';
// @ts-ignore
import https from 'https'

class ApiUtils {

    getResponseData = (url) => new Promise((resolve, reject) => {
        https.get(url, res => {
            const { statusCode } = res;
            const contentType = res.headers['content-type'];

            res.setEncoding('utf8');
            let rawData = '';
            res.on('data', (chunk) => { rawData += chunk; });
            res.on('end', () => resolve({ statusCode, contentType, rawData }));
        }).on('error', e => reject(e));
    });
}

export default new ApiUtils();