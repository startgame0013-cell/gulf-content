import type { MouseEvent } from 'react'

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

/** سلسلة المنشورات + الثريد — نفس النص الذي أرسلته */
export function ArticleView() {
  return (
    <>
      <p className="page-title">سلسلة محتوى</p>
      <h1 className="page-subtitle">الخليج والمرحلة الفاصلة</h1>

      <header className="section-header">
        <h2>المشكلة والخطر</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post">
        <div className="post-number">POST 01</div>
        <div className="post-platform">
          <span className="dot dot-snap" />
          سناب / <span className="dot dot-twitter" />
          تويتر
        </div>
        <div className="post-content">
          <span className="hook">
            في قانون فيزيائي كوني يقول:
            <br />
            أي شيء تتركه بدون اهتمام — يتحول من نظام إلى فوضى.
          </span>
          {'\n\n'}
          هذا القانون مو بس في العلم.{'\n'}
          هو يصف <span className="highlight">بالضبط</span> ما يحدث اليوم في الخليج.
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          سنوات من غياب التخطيط الحقيقي.{'\n'}
          سنوات من القرار العاطفي بدل الاستراتيجي.{'\n'}
          سنوات من الانتظار بدل المبادرة.
          {'\n\n'}
          <span className="danger">والنتيجة؟</span>
          {'\n'}
          نقطتان اليوم في <span className="danger">أسوأ أحوالهما</span> منذ تأسيس هذه الدول:
          {'\n\n'}
          🔴 الأمن{'\n'}
          🔴 التدفق المالي
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          في الجزء القادم أشرح <span className="highlight">ليش وصلنا هنا.</span>
        </div>
        <footer className="post-footer">
          <span className="char-count">~٢٨٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <article className="post">
        <div className="post-number">POST 02</div>
        <div className="post-platform">
          <span className="dot dot-snap" />
          سناب / <span className="dot dot-twitter" />
          تويتر
        </div>
        <div className="post-content">
          <span className="hook">ليش وصلنا هنا؟</span>
          {'\n\n'}
          مو لأن عندنا نقص في المال أو الموارد.{'\n'}
          بالعكس — الخليج من أغنى مناطق العالم.
          {'\n\n'}
          المشكلة الحقيقية:
          {'\n\n'}
          <span className="highlight">١.</span> جيل قيادة فقد العمق الفكري والإداري تدريجياً{'\n'}
          <span className="highlight">٢.</span> قرارات تُتخذ بعاطفة ومصلحة آنية لا باستراتيجية{'\n'}
          <span className="highlight">٣.</span> ردود أفعال بدل مبادرات — نتحرك لما يضغط علينا أحد فقط{'\n'}
          <span className="highlight">٤.</span> مجلس تعاون موجود بالاسم، غايب بالفعل
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          <span className="danger">الأخطر من كل هذا؟</span>
          {'\n'}
          في الجزء القادم.
        </div>
        <footer className="post-footer">
          <span className="char-count">~٢٦٠ حرف</span>
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
        <div className="post-platform">
          <span className="dot dot-snap" />
          سناب / <span className="dot dot-twitter" />
          تويتر
        </div>
        <div className="post-content">
          <span className="hook">الأخطر: اللي يحدث للخليج مو صدفة.</span>
          {'\n\n'}
          في فرق كبير بين دولة تضعف من الداخل{'\n'}
          وبين دولة <span className="danger">يُعمل على إضعافها من الخارج.</span>
          {'\n\n'}
          الخليج يعاني من الاثنين معاً.
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          الانقسامات الداخلية لا تُحل — تُغذَّى.{'\n'}
          الخلافات بين الدول لا تُعالج — تُشعَّل.{'\n'}
          القيادات تُشغَل بمشاكل صغيرة بينما القرارات الكبيرة تُرسم في مكان آخر.
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          والخليج؟{'\n'}
          يرد على كل استفزاز.{'\n'}
          يخاف من كل تهديد.{'\n'}
          ينتظر بركة السماء.
          {'\n\n'}
          <span className="danger">بينما الخطة تُنفَّذ.</span>
        </div>
        <footer className="post-footer">
          <span className="char-count">~٢٧٠ حرف</span>
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
        <div className="post-platform">
          <span className="dot dot-snap" />
          سناب / <span className="dot dot-twitter" />
          تويتر
        </div>
        <div className="post-content">
          <span className="hook">شنو يحدث لو استمر الوضع على ما هو عليه؟</span>
          {'\n\n'}
          <span className="danger">المنتظر</span> — سيضيع لحظاته وهو ينتظر{'\n'}
          <span className="danger">الخائف</span> — سيدفع ثمن مخاوفه بنفسه{'\n'}
          <span className="danger">المتصارع</span> — سينجرح ويتألم ويخرج خاسراً{'\n'}
          <span className="danger">العاطفي</span> — سيؤجج المشاعر ويزيد الفوضى{'\n'}
          <span className="danger">المغرور بفرديته</span> — سيهدم أسواره بيده
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          هذه مو تحليلات.{'\n'}
          هذه <span className="highlight">أنماط تتكرر</span> في كل مجتمع ترك نفسه بدون رؤية.
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          الخيار الأول: تتحرك اليوم.{'\n'}
          <span className="danger">الخيار الثاني: يُتخذ عنك.</span>
        </div>
        <footer className="post-footer">
          <span className="char-count">~٢٨٠ حرف</span>
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
        <div className="post-platform">
          <span className="dot dot-snap" />
          سناب / <span className="dot dot-twitter" />
          تويتر
        </div>
        <div className="post-content">
          <span className="hook">الحل موجود — لكنه يحتاج شجاعة.</span>
          {'\n\n'}
          <span className="highlight">أولاً:</span> الاعتراف بالجراح قبل أي بناء{'\n'}
          لا تجميل، لا تأجيل، لا خطاب رسمي فارغ.
          {'\n\n'}
          <span className="highlight">ثانياً:</span> وحدة خليجية حقيقية لا شكلية{'\n'}
          توحد في الأمن، الاقتصاد، الموقف الخارجي.
          {'\n\n'}
          <span className="highlight">ثالثاً:</span> تمكين العقول المنتجة{'\n'}
          الكفاءة والإخلاص فوق المحسوبية والواسطة.
          {'\n\n'}
          <span className="highlight">رابعاً:</span> قرارات بمنهجية لا بفردانية{'\n'}
          مؤسسات حقيقية لا آراء شخصية.
          {'\n\n'}
          <span className="divider">— — —</span>
          {'\n\n'}
          المنطقة تمر بـ <span className="danger">نقطة تحول تاريخية.</span>
          {'\n'}
          اللي يتحرك اليوم يبني.{'\n'}
          اللي ينتظر — <span className="danger">يُبنى عليه.</span>
        </div>
        <footer className="post-footer">
          <span className="char-count">~٢٨٠ حرف</span>
          <button type="button" className="copy-btn" onClick={copyPost}>
            نسخ
          </button>
        </footer>
      </article>

      <header className="section-header">
        <h2>ثريد كامل — تويتر</h2>
        <div className="section-line" aria-hidden />
      </header>

      <article className="post thread-post">
        <div className="post-number">THREAD COMPLETE</div>
        <div className="post-platform">
          <span className="dot dot-twitter" />
          تويتر — ٦ تغريدات
        </div>

        <div className="thread-item">
          <span className="thread-num">١/٦</span>
          {`في قانون فيزيائي يقول: أي شيء تتركه بدون اهتمام يتحول من نظام إلى فوضى.

هذا القانون يصف بالضبط ما يحدث في الخليج اليوم 🧵`}
        </div>
        <span className="thread-connector" />

        <div className="thread-item">
          <span className="thread-num">٢/٦</span>
          {`الأمن والاقتصاد — نقطتان في أسوأ أحوالهما منذ تأسيس دول الخليج.

مو لأن تنقص الموارد.
بل لأن القرار صار عاطفياً، والتخطيط صار غائباً، والتوحد صار شكلياً.`}
        </div>
        <span className="thread-connector" />

        <div className="thread-item">
          <span className="thread-num">٣/٦</span>
          {`الأخطر: ما يحدث مو صدفة.

الانقسامات تُغذَّى، الخلافات تُشعَّل، والقيادات تُشغَل بالصغير بينما القرارات الكبيرة تُرسم في مكان آخر.

الخليج يرد — ولا يبادر.`}
        </div>
        <span className="thread-connector" />

        <div className="thread-item">
          <span className="thread-num">٤/٦</span>
          {`النتيجة الحتمية إذا استمر الحال:

المنتظر يضيع ← الخائف يدفع ثمن مخاوفه ← المتصارع يخرج خاسراً ← العاطفي يزيد الفوضى.

هذه أنماط تتكرر في كل مجتمع بلا رؤية.`}
        </div>
        <span className="thread-connector" />

        <div className="thread-item">
          <span className="thread-num">٥/٦</span>
          {`الحل ليس مستحيلاً:

✦ الاعتراف بالجراح أولاً
✦ وحدة حقيقية لا بروتوكولات فارغة
✦ تمكين الكفاءة فوق المحسوبية
✦ قرارات بمنهجية لا بفردانية
✦ الشعب شريك لا متفرج`}
        </div>
        <span className="thread-connector" />

        <div className="thread-item">
          <span className="thread-num">٦/٦</span>
          {`المنطقة تمر بنقطة تحول تاريخية.

الخيار الأول: تتحرك اليوم وتبني.
الخيار الثاني: يُتخذ عنك.

نافذة الفرصة لا تنتظر.`}
        </div>

        <footer className="post-footer">
          <span className="char-count">٦ تغريدات — جاهزة للنشر</span>
          <button type="button" className="copy-btn" onClick={copyThread}>
            نسخ الثريد
          </button>
        </footer>
      </article>
    </>
  )
}
