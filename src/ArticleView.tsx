import './article.css'

/** المتن من «في قانون فيزيائي…» إلى «يُبنى عليه» — تحريري، دون ثريد ولا إشارة لسلسلة منشورات. */
export function ArticleView() {
  return (
    <article className="article-page" dir="rtl" lang="ar">
      <header className="article-hero">
        <div className="article-hero-glow" aria-hidden />
        <p className="article-kicker article-kicker--plain">محتوى الخليج – مقال</p>
        <h1 className="article-h1">
          المشكلة والمرحلة الفاصلة: حين يصبح الصمت خياراً له ثمن
        </h1>
        <p className="article-dek">
          قراءة هادئة لما يتغيّر في الإقليم وليس دعوة للذعر؛ بل محاولة لربط المشهد بما يمكن
          أن نفعله محلياً قبل أن تُفرض علينا خيارات لا نملك تفاصيلها.
        </p>
        <p className="article-byline">
          <span className="article-byline-main">
            <span className="article-byline-prefix">بقلم</span>
            <span className="article-byline-name">عجايب الشمري</span>
          </span>
          <span className="article-byline-en" dir="ltr" lang="en">
            Ajayeb Alshammari
          </span>
        </p>
        <div className="article-meta">
          <span className="article-meta-item">وقت القراءة ~ ٨ دقائق</span>
          <span className="article-meta-dot" aria-hidden />
          <span className="article-meta-item">رأي وتحليل</span>
        </div>
      </header>

      <div className="article-body">
        <h2 className="article-section-title">المشكلة والخطر</h2>

        <p className="article-opening-lines">
          في قانون فيزيائي كوني يقول:{'\n'}
          أي شيء تتركه بدون اهتمام — يتحول من نظام إلى فوضى.
        </p>
        <p>
          هذا القانون مو بس في العلم.{'\n'}
          هو يصف <span className="article-hl">بالضبط</span> ما يحدث اليوم في الخليج.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          سنوات من غياب التخطيط الحقيقي.{'\n'}
          سنوات من القرار العاطفي بدل الاستراتيجي.{'\n'}
          سنوات من الانتظار بدل المبادرة.
        </p>
        <p>
          <span className="article-danger">والنتيجة؟</span>
          {'\n'}
          نقطتان اليوم في <span className="article-danger">أسوأ أحوالهما</span> منذ تأسيس هذه الدول:
        </p>
        <ul className="article-risk-points" aria-label="نقطتان محوريتان">
          <li>الأمن</li>
          <li>التدفق المالي</li>
        </ul>
        <p className="article-divider">— — —</p>

        <h2 className="article-section-title article-section-title--spaced">ليش وصلنا هنا؟</h2>
        <p>
          مو لأن عندنا نقص في المال أو الموارد.{'\n'}
          بالعكس — الخليج من أغنى مناطق العالم.
        </p>
        <p className="article-bridge">المشكلة الحقيقية:</p>
        <ul className="article-key-points">
          <li>
            <span className="article-li-num">١</span>
            <span>جيل قيادة فقد العمق الفكري والإداري تدريجياً</span>
          </li>
          <li>
            <span className="article-li-num">٢</span>
            <span>قرارات تُتخذ بعاطفة ومصلحة آنية لا باستراتيجية</span>
          </li>
          <li>
            <span className="article-li-num">٣</span>
            <span>ردود أفعال بدل مبادرات — نتحرك لما يضغط علينا أحد فقط</span>
          </li>
          <li>
            <span className="article-li-num">٤</span>
            <span>مجلس تعاون موجود بالاسم، غايب بالفعل</span>
          </li>
        </ul>
        <p className="article-divider">— — —</p>
        <p>
          <span className="article-danger">الأخطر من كل هذا؟</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">الأسباب الخفية</h2>
        <p>
          <strong className="article-h2-inline">الأخطر: اللي يحدث للخليج مو صدفة.</strong>
        </p>
        <p>
          في فرق كبير بين دولة تضعف من الداخل{'\n'}
          وبين دولة <span className="article-danger">يُعمل على إضعافها من الخارج.</span>
        </p>
        <p>الخليج يعاني من الاثنين معاً.</p>
        <p className="article-divider">— — —</p>
        <p>
          الانقسامات الداخلية لا تُحل — تُغذَّى.{'\n'}
          الخلافات بين الدول لا تُعالج — تُشعَّل.{'\n'}
          القيادات تُشغَل بمشاكل صغيرة بينما القرارات الكبيرة تُرسم في مكان آخر.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          والخليج؟{'\n'}
          يرد على كل استفزاز.{'\n'}
          يخاف من كل تهديد.{'\n'}
          ينتظر بركة السماء.
        </p>
        <p>
          <span className="article-danger">بينما الخطة تُنفَّذ.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">النتائج إذا ما تحرك أحد</h2>
        <p>
          <strong className="article-h2-inline">شنو يحدث لو استمر الوضع على ما هو عليه؟</strong>
        </p>
        <p>
          <span className="article-danger">المنتظر</span> — سيضيع لحظاته وهو ينتظر{'\n'}
          <span className="article-danger">الخائف</span> — سيدفع ثمن مخاوفه بنفسه{'\n'}
          <span className="article-danger">المتصارع</span> — سينجرح ويتألم ويخرج خاسراً{'\n'}
          <span className="article-danger">العاطفي</span> — سيؤجج المشاعر ويزيد الفوضى{'\n'}
          <span className="article-danger">المغرور بفرديته</span> — سيهدم أسواره بيده
        </p>
        <p className="article-divider">— — —</p>
        <p>
          هذه مو تحليلات.{'\n'}
          هذه <span className="article-hl">أنماط تتكرر</span> في كل مجتمع ترك نفسه بدون رؤية.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          الخيار الأول: تتحرك اليوم.{'\n'}
          <span className="article-danger">الخيار الثاني: يُتخذ عنك.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">الحل والمطلوب</h2>
        <p>
          <strong className="article-h2-inline">الحل موجود — لكنه يحتاج شجاعة.</strong>
        </p>
        <p>
          <span className="article-hl">أولاً:</span> الاعتراف بالجراح قبل أي بناء{'\n'}
          لا تجميل، لا تأجيل، لا خطاب رسمي فارغ.
        </p>
        <p>
          <span className="article-hl">ثانياً:</span> وحدة خليجية حقيقية لا شكلية{'\n'}
          توحد في الأمن، الاقتصاد، الموقف الخارجي.
        </p>
        <p>
          <span className="article-hl">ثالثاً:</span> تمكين العقول المنتجة{'\n'}
          الكفاءة والإخلاص فوق المحسوبية والواسطة.
        </p>
        <p>
          <span className="article-hl">رابعاً:</span> قرارات بمنهجية لا بفردانية{'\n'}
          مؤسسات حقيقية لا آراء شخصية.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          المنطقة تمر بـ <span className="article-danger">نقطة تحول تاريخية.</span>
          {'\n'}
          اللي يتحرك اليوم يبني.{'\n'}
          اللي ينتظر — <span className="article-danger">يُبنى عليه.</span>
        </p>

        <footer className="article-end">
          <div className="article-end-line" aria-hidden />
        </footer>
      </div>
    </article>
  )
}
