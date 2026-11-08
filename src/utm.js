// Shared with the web app (app.instrait.com) through a root-domain cookie.
// apps/web/lib/utm.ts in SelfImp-APP reads this — keep the name and format in sync.
const COOKIE_NAME = 'instrait_utm'
const MAX_AGE_SECONDS = 60 * 60 * 24 * 30
const MAX_VALUE_LENGTH = 200
const UTM_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term']

function readRecord() {
  const raw = document.cookie
    .split('; ')
    .find((c) => c.startsWith(`${COOKIE_NAME}=`))
    ?.slice(COOKIE_NAME.length + 1)
  if (!raw) return null
  try {
    return JSON.parse(decodeURIComponent(raw))
  } catch {
    return null
  }
}

export function captureUtm() {
  const params = new URLSearchParams(window.location.search)
  const incoming = {}
  for (const key of UTM_KEYS) {
    // Array.from counts code points, so the cut can't split an emoji in half.
    const value = Array.from(params.get(key)?.trim() ?? '')
      .slice(0, MAX_VALUE_LENGTH)
      .join('')
    if (value) incoming[key] = value
  }
  if (Object.keys(incoming).length === 0) return
  if (readRecord()?.utm_campaign && !incoming.utm_campaign) return

  const { hostname, protocol } = window.location
  const domain = /(^|\.)instrait\.com$/.test(hostname) ? '; Domain=.instrait.com' : ''
  const secure = protocol === 'https:' ? '; Secure' : ''
  const value = encodeURIComponent(JSON.stringify({ ...incoming, captured_at: Date.now() }))
  document.cookie = `${COOKIE_NAME}=${value}; Max-Age=${MAX_AGE_SECONDS}; Path=/${domain}; SameSite=Lax${secure}`
}
