export { render }
// See https://vike.dev/data-fetching
export const passToClient = ['pageProps', 'urlPathname', 'urlParsed']

import ReactDOMServer from 'react-dom/server'
import { PageShell } from './PageShell'
import { escapeInject, dangerouslySkipEscape } from 'vike/server'

async function render(pageContext) {
  const { Page, pageProps } = pageContext
  if (!Page) throw new Error('My render() hook expects pageContext.Page to be defined')
  const pageHtml = ReactDOMServer.renderToString(
    <PageShell pageContext={pageContext}>
      <Page {...pageProps} />
    </PageShell>
  )

  const documentHtml = escapeInject`<!DOCTYPE html>
    <html lang="en">
      <body>
        <div id="react-root">${dangerouslySkipEscape(pageHtml)}</div>
      </body>
    </html>`

  return {
    documentHtml,
  }
}
