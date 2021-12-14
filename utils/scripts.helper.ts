import { RequestLogger, RequestHook } from 'testcafe';

export function clientSideRequest(method: string, url: string, data?: any): { content: string } {
  const body = data ? `'${JSON.stringify(data)}'` : '';
  const content = `
      window.addEventListener('DOMContentLoaded', () => {
          const xhr = new XMLHttpRequest();
          xhr.addEventListener('readystatechange', () => {
              if (xhr.readyState === xhr.DONE) {
                  const node = document.body.appendChild(document.createElement('div'));
                  node.setAttribute('hidden', 'hidden');
                  node.setAttribute('data-request-method', '${method}');
                  node.setAttribute('data-request-url', '${url}');
                  node.setAttribute('data-request-status', xhr.status);
                  node.innerText = xhr.responseText;
              }
          });
          xhr.open('${method}', '${url}');
          xhr.setRequestHeader('Content-Type', 'application/json');
          xhr.send(${body});
      });`;

  return { content };
}

export const logger = RequestLogger(/.*/, {
    logRequestHeaders:  true,
    logRequestBody:     true,
    logResponseHeaders: true,
    logResponseBody:    true,
    });