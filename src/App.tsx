import { useMemo, useState, type MouseEvent } from 'react'
import { ArticleView } from './ArticleView'
import './index.css'

function toArabicNumerals(n: number): string {
  const d = '٠١٢٣٤٥٦٧٨٩'
  return String(n)
    .split('')
    .map((c) => (c >= '0' && c <= '9' ? d[Number(c)] : c))
    .join('')
}

function copyPost(e: MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget
  const post = btn.closest('.post')
  const content = post?.querySelector('.post-content')
  if (!content || !(content instanceof HTMLElement)) return
  void navigator.clipboard.writeText(content.innerText).then(() => {
    const prev = btn.textContent
    btn.textContent = '✓ تم النسخ'
    btn.classList.add('copied')
    window.setTimeout(() => {
      btn.textContent = prev
      btn.classList.remove('copied')
    }, 2000)
  })
}

function copyThread(e: MouseEvent<HTMLButtonElement>) {
  const btn = e.currentTarget
  const post = btn.closest('.post')
  const items = post?.querySelectorAll('.thread-item')
  if (!items?.length) return
  let text = ''
  items.forEach((el) => {
    text += (el as HTMLElement).innerText.trim() + '\n\n'
  })
  void navigator.clipboard.writeText(text.trim()).then(() => {
    const prev = btn.textContent
    btn.textContent = '✓ تم النسخ'
    btn.classList.add('copied')
    window.setTimeout(() => {
      btn.textContent = prev
      btn.classList.remove('copied')
    }, 2000)
  })
}

function SeriesView() {
  return (
    <>
      <p className="page-title">سلسلة محتوى</p>
      <h1 className="page-subtitle">المشكلة… والمرحلة الفاصلة</h1>

      <header className="section-header">
        <h2>المشكلة والخطر</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post">
        <div className="post-number">POST 01</div>
        <div className="post-platform">
          <span className="dot dot-twitter" />
          X / Twitter
        </div>
        <div className="post-content">
          <span className="hook">قانون فيزيائي كوني يقول: كل فعل له رد فعل مساوٍ له في المقدار ومضادٌّ له في الاتجاه.</span>
          <span className="divider">— — —</span>
          <span className="danger">والنتيجة؟</span>
          <span className="divider">— — —</span>
          ما يُزرع اليوم هو ما سيُحصَد غداً — والمنطقة أمام لحظة لا تعود كما كانت.
        </div>
        <footer className="post-footer">
          <span className="char-count">~ ٢٨٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <article className="post">
        <div className="post-number">POST 02</div>
        <div className="post-content">
          <span className="hook">ليش وصلنا هنا؟</span>
          <span className="highlight">أولاً:</span> التغيّر كان تدريجياً حتى صار «طبيعياً».
          {'\n'}
          <span className="highlight">ثانياً:</span> القرارات الكبرى تُتخذ باستراتيجية، لا بصدفة إعلامية.
          {'\n'}
          <span className="highlight">ثالثاً:</span> حين يضعف الإجماع الداخلي، تتسع مساحة لغيرك.
          {'\n'}
          <span className="highlight">رابعاً:</span> الصوت الواحد — إن غاب — يُستبدل بصوتٍ آخر يفرضه الواقع.
          <span className="divider">— — —</span>
          <span className="danger">الأخطر من كل هذا؟</span>
          {'\n'}
          ألّا ندرك أن «الانتظار» خيارٌ له ثمنٌ يُدفَع عنّا وبالنيابة عنا.
        </div>
        <footer className="post-footer">
          <span className="char-count">~ ٢٧٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <header className="section-header">
        <h2>الأسباب الخفية</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post">
        <div className="post-number">POST 03</div>
        <div className="post-content">
          <span className="hook">ما يحدث للخليج ليس صدفة.</span>
          <span className="divider">— — —</span>
          <span className="danger">بينما الخطة تُنفَّذ بهدوء…</span>
          {'\n'}
          تتشكّل تحالفات جديدة، وتُعاد صياغة أولويات الطاقة والأمن والاقتصاد. من يملك الخريطة اليوم يحدّد من يملك الغد.
        </div>
        <footer className="post-footer">
          <span className="char-count">~ ٢٨٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <header className="section-header">
        <h2>النتائج إذا ما تحرك أحد</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post">
        <div className="post-number">POST 04</div>
        <div className="post-content">
          <span className="hook">الوضع على ما هو عليه؟</span>
          {'\n'}
          <span className="danger">المنتظر</span> — يراهن على الزمن.
          {'\n'}
          <span className="danger">الخائف</span> — يراهن على الصمت.
          {'\n'}
          <span className="danger">المتصارع</span> — يراهن على الصراخ دون بناء.
          {'\n'}
          <span className="danger">العاطفي</span> — يراهن على الشعور دون خطة.
          {'\n'}
          <span className="danger">المغرور بفرديته</span> — يراهن على أن «الاستثناء» يكفي.
          <span className="divider">— — —</span>
          <span className="danger">الخيار الثاني: يُتخذ عنك.</span>
        </div>
        <div className="stats-row">
          <span className="stat-pill">تجميد</span>
          <span className="stat-pill">تغيير أولويات</span>
          <span className="stat-pill">فراغ يملأه غيرك</span>
        </div>
        <footer className="post-footer">
          <span className="char-count">~ ٢٨٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <header className="section-header">
        <h2>الحل والمطلوب</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post">
        <div className="post-number">POST 05</div>
        <div className="post-content">
          <span className="hook">الحل موجود… لكنه يحتاج شجاعة تنظيمية وسياسية معاً.</span>
          {'\n'}
          <span className="highlight">أولاً:</span> توحيد الرسالة الداخلية قبل إطلاقها خارجياً.
          {'\n'}
          <span className="highlight">ثانياً:</span> استثمارٌ حقيقي في التعليم والبحث والصناعة — ليس شعاراً.
          {'\n'}
          <span className="highlight">ثالثاً:</span> شراكات تُبنى على مصلحة متبادلة طويلة الأمد.
          {'\n'}
          <span className="highlight">رابعاً:</span> قياس النتائج بعيداً عن لغة المؤشرات الزائفة.
          <span className="divider">— — —</span>
          من يتحرك مبكراً يصنع خيارات. من يتأخر يستقبل خياراتٍ صُنعت له.
        </div>
        <footer className="post-footer">
          <span className="char-count">~ ٢٨٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <header className="section-header">
        <h2>ثريد كامل — تويتر</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post">
        <div className="post-number">THREAD</div>
        <div className="thread-post">
          <div className="thread-item">
            <span className="thread-num">١/٦</span>
            مقدّمة قصيرة: هذه السلسلة ليست عن «الذعر» — بل عن القراءة الهادئة لما يتغيّر حولنا.
          </div>
          <span className="thread-connector" />
          <div className="thread-item">
            <span className="thread-num">٢/٦</span>
            المشكلة ليست حدثاً ليلة واحدة؛ هي تراكم قرارات أُجِّلت، وفرصٌ ضاعت لأن الصمت بدا أسهل.
          </div>
          <span className="thread-connector" />
          <div className="thread-item">
            <span className="thread-num">٣/٦</span>
            الخارج يتحرك بخطة. والداخل إن لم يتحرك بخطة، سيتحرك بالتفاعل مع واقعٍ فرضه الآخرون.
          </div>
          <span className="thread-connector" />
          <div className="thread-item">
            <span className="thread-num">٤/٦</span>
            النتيجة إن استمرّ الغياب عن الطاولة: تُتخذ قرارات باسمك، ثم تُعرض عليك كأمرٍ واقع.
          </div>
          <span className="thread-connector" />
          <div className="thread-item">
            <span className="thread-num">٥/٦</span>
            الحل يبدأ بمصداقية: تعليم، اقتصاد معرفة، وشراكات لا تُبنى على مزاج السوق فقط.
          </div>
          <span className="thread-connector" />
          <div className="thread-item">
            <span className="thread-num">٦/٦</span>
            الختام: المرحلة الفاصلة ليست «نهاية» — هي بوابة. من يعبُرها بوعيٍ يملك زماماً أكبر غداً.
          </div>
        </div>
        <footer className="post-footer">
          <span className="char-count">جاهزة للنشر — نسخ الثريد كاملاً</span>
          <button type="button" className="copy-btn" onClick={copyThread}>
            نسخ الثريد
          </button>
        </footer>
      </article>
    </>
  )
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
  const [tab, setTab] = useState<'article' | 'series' | 'create'>('article')

  return (
    <div className={tab === 'article' ? 'container container--article' : 'container'}>
      <nav className="app-nav" aria-label="التنقل الرئيسي">
        <button type="button" className={tab === 'article' ? 'active' : ''} onClick={() => setTab('article')}>
          المقال
        </button>
        <button type="button" className={tab === 'series' ? 'active' : ''} onClick={() => setTab('series')}>
          عرض السلسلة
        </button>
        <button type="button" className={tab === 'create' ? 'active' : ''} onClick={() => setTab('create')}>
          إنشاء مسودة
        </button>
      </nav>

      {tab === 'article' ? <ArticleView /> : tab === 'series' ? <SeriesView /> : <CreateView />}
    </div>
  )
}
