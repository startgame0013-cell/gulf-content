import { useMemo, useState } from 'react'
import { ArticleView } from './ArticleView'
import './index.css'

function toArabicNumerals(n: number): string {
  const d = '٠١٢٣٤٥٦٧٨٩'
  return String(n)
    .split('')
    .map((c) => (c >= '0' && c <= '9' ? d[Number(c)] : c))
    .join('')
}

function CreateView() {
  const [postLabel, setPostLabel] = useState('POST —')
  const [hook, setHook] = useState('')
  const [body, setBody] = useState('')
  const [copyFlash, setCopyFlash] = useState(false)

  const plainText = useMemo(() => {
    const h = hook.trim()
    const b = body.trim()
    if (h && b) return `${h}\n\n${b}`
    return h || b
  }, [hook, body])

  const len = plainText.length
  const overLimit = len > 280

  const copyDraft = () => {
    if (!plainText) return
    void navigator.clipboard.writeText(plainText).then(() => {
      setCopyFlash(true)
      window.setTimeout(() => setCopyFlash(false), 2000)
    })
  }

  return (
    <>
      <p className="page-title">إنشاء</p>
      <h1 className="page-subtitle">مسودة منشور (X)</h1>
      <p className="draft-intro">
        اكتب الخطاف ثم النص. المعاينة للقراءة فقط؛ النسخ ينقل <strong>نصاً عادياً</strong> جاهزاً للصق في المنصة.
      </p>

      <div className="draft-form">
        <div className="draft-field">
          <label htmlFor="draft-label">تسمية البطاقة (للعرض)</label>
          <input
            id="draft-label"
            type="text"
            value={postLabel}
            onChange={(e) => setPostLabel(e.target.value)}
            placeholder="مثال: POST 06"
            dir="rtl"
          />
        </div>
        <div className="draft-field">
          <label htmlFor="draft-hook">الخطاف (Hook)</label>
          <textarea
            id="draft-hook"
            value={hook}
            onChange={(e) => setHook(e.target.value)}
            placeholder="جملة قوية تُمسك الانتباه…"
            dir="rtl"
            rows={3}
          />
        </div>
        <div className="draft-field">
          <label htmlFor="draft-body">المتن</label>
          <textarea
            id="draft-body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="بقية المنشور…"
            dir="rtl"
            rows={6}
          />
        </div>
      </div>

      <article className="post">
        <div className="post-number">{postLabel || 'POST —'}</div>
        <div className="post-platform">
          <span className="dot dot-twitter" />
          مسودة
        </div>
        <div className="post-content">
          {hook.trim() ? (
            <span className="hook">{hook.trim()}</span>
          ) : (
            <span className="hook placeholder-muted">الخطاف يظهر هنا…</span>
          )}
          {hook.trim() && body.trim() ? <span className="divider">— — —</span> : null}
          {body.trim() ? (
            <span className="body-preline">{body.trim()}</span>
          ) : hook.trim() ? null : (
            <span className="muted-placeholder">المتن يظهر هنا…</span>
          )}
        </div>
        <footer className="post-footer">
          <span className={`char-count ${overLimit ? 'warn' : 'ok'}`}>
            {toArabicNumerals(len)} / {toArabicNumerals(280)} حرف{overLimit ? ' — تجاوز حد X' : ''}
          </span>
          <button type="button" className={`copy-btn ${copyFlash ? 'copied' : ''}`} onClick={copyDraft} disabled={!plainText}>
            {copyFlash ? '✓ تم النسخ' : 'نسخ النص'}
          </button>
        </footer>
      </article>
    </>
  )
}

export default function App() {
  const [tab, setTab] = useState<'article' | 'create'>('article')

  return (
    <div className="container">
      <nav className="app-nav" aria-label="التنقل الرئيسي">
        <button type="button" className={tab === 'article' ? 'active' : ''} onClick={() => setTab('article')}>
          المقال
        </button>
        <button type="button" className={tab === 'create' ? 'active' : ''} onClick={() => setTab('create')}>
          إنشاء مسودة
        </button>
      </nav>

      {tab === 'article' ? <ArticleView /> : <CreateView />}
    </div>
  )
}
