import './article.css'

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
          ليست هذه دعوةً للذعر، بل محاولة لقراءة ما يتغيّر في الإقليم بصوت هادئ: ربط المشهد بما يمكن أن نفعله
          محلياً، قبل أن تُفرض خيارات لا نملك تفاصيلها ولا أدوات التأثير فيها.
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
          في الفيزياء، يُقال إن أي نظام يُهمل يميل إلى الفوضى؛ صياغةٌ تقنية، لكنها تصبح سياسية حين
          يتراجع الاهتمام بالبنية والقواعد طويلة الأمد.
        </p>
        <p>
          وليس المقصود أن نُحوّل العلم إلى شعار؛ المقصود أن نلتقط تشابهاً دقيقاً: ما يحدث في الخليج
          اليوم يشبه — <span className="article-hl">في شكل التراكم</span> — ما يحدث حين تضعف الطبقة
          الاستراتيجية وتعلو الطبقة الانفعالية في اتخاذ القرار.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          سنوات من غياب التخطيط الجاد، وسنوات من قرارات تُؤسَّس على الانفعال لا على خريطة واضحة،
          وسنوات من تأجيل المبادرة إلى حين «ينصلح الحال» من تلقاء نفسه.
        </p>
        <p>
          <span className="article-danger">فما النتيجة؟</span>
          {'\n'}
          أن نقطتين محوريتين — <span className="article-danger">الأمن</span> و{' '}
          <span className="article-danger">استقرار التدفق المالي</span> — تقفان اليوم في أسوأ أحوالهما
          منذ تأسيس هذه الدول.
        </p>
        <p className="article-divider">— — —</p>

        <h2 className="article-section-title article-section-title--spaced">لماذا نصل إلى هذا رغم الوفرة؟</h2>
        <p>
          ليس لأننا نفتقر إلى المال أو إلى الموارد؛ فالخليج، بالعكس، من أغنى بقاع الأرض.
        </p>
        <p className="article-bridge">إنما المشكلة الحقيقية تكمن في ما يلي:</p>
        <ul className="article-key-points">
          <li>
            <span className="article-li-num">١</span>
            <span>
              تراجع عمق التكوين الفكري والإداري في أجيال قيادية، لا بصورة مفاجئة، بل تدريجياً وبمرور
              الزمن.
            </span>
          </li>
          <li>
            <span className="article-li-num">٢</span>
            <span>
              هيمنة قرارات تُبنى على العاطفة والمصلحة الآنية، بدلاً من استراتيجية تتحمّل الاختبار
              والمتابعة.
            </span>
          </li>
          <li>
            <span className="article-li-num">٣</span>
            <span>
              استبدال المبادرة بردود أفعال: نتحرك حين يضغط الخارج، ونصمت حين يخفّ الضغط.
            </span>
          </li>
          <li>
            <span className="article-li-num">٤</span>
            <span>
              وجود أطر التعاون «على الورق» دون أن تترجم إلى تنسيق حقيقي في الملفات الحساسة.
            </span>
          </li>
        </ul>
        <p className="article-divider">— — —</p>
        <p>
          <span className="article-danger">وأخطر ما في الأمر:</span> أن يُعاد إنتاج المشهد تحت مسمّى
          «المعالجة»، بينما تضعف أدوات الإصلاح ذاتها.
        </p>

        <h2 className="article-section-title article-section-title--spaced">الأسباب الخفية</h2>
        <p>
          <strong className="article-h2-inline">ما يحدث للخليج ليس صدفة تاريخية عابرة.</strong>
        </p>
        <p>
          هناك فرقٌ جذري بين دولة تضعف من داخلها وبين دولة يُراد لها أن تُضعف{' '}
          <span className="article-danger">من خارجها</span>؛ والخليج يواجه أحياناً الاثنين معاً، في
          تداخل يصعّب قراءة المشهد من زاوية واحدة.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          فالانقسامات الداخلية لا تُعالَج فحسب؛ قد تُغذّى. والخلافات بين الدول لا تُطوى فحسب؛ قد
          تُشعَل. وتبقى القيادة مشغولة بالصغير، بينما تُرسم الخطوط الكبرى في أماكن أخرى.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          والنتيجة؟ منطقة تكثر فيها ردود الفعل، وتقلّ فيها المبادرة البناءة؛ تنتظر «فرجاً» قد لا
          يأتي على مقاسها، بينما تستمر خططٌ أخرى — بصمتٍ أو بجهرٍ — في التقدم.
        </p>
        <p>
          <span className="article-danger">والخطة تُنفَّذ، حتى حين لا تُسمّى باسمها.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">النتائج إن بقي الجميع على الهامش</h2>
        <p>
          <strong className="article-h2-inline">ماذا لو استمرّ الوضع على حاله؟</strong>
        </p>
        <p>
          <span className="article-danger">المنتظر</span> يضيع زمنه وهو ينتظر فرصة «أنسب» لا تأتي
          دائماً.{'\n'}
          <span className="article-danger">الخائف</span> يدفع ثمن مخاوفه بأيديه، لأنه يتنازل عن
          مساحة القول والفعل.{'\n'}
          <span className="article-danger">المتصارع شعبوياً</span> يخرج من المعركة وقد خسر الجمهور
          والمشروع معاً.{'\n'}
          <span className="article-danger">العاطفي بلا أدوات</span> يضخّ الحرارة دون بناء.{'\n'}
          <span className="article-danger">والمغرور بفرديته</span> يظن أنه يحمي نفسه، وهو يهدم
          سوراً جماعياً لا يُعاد بسهولة.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          هذه ليست «تحليلات» ترفيهية؛ إنها <span className="article-hl">أنماطٌ تتكرر</span> حيثما غابت
          الرؤية وضعفت المؤسسة.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          وإزاء ذلك، يبقى خياران لا ثالث لهما: إما أن تتحرك اليوم بما تملك، وإما أن تُتخذ عنك
          قراراتٌ ثم تُعرض عليك كأمرٍ واقع.{'\n'}
          <span className="article-danger">والفرق بينهما ليس شعاراً؛ بل مساحة زمكانية ضيّقة.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">الحل والمطلوب</h2>
        <p>
          <strong className="article-h2-inline">الحل ليس مستحيلاً، لكنه يستوجب شجاعة مؤسسية.</strong>
        </p>
        <p>
          <span className="article-hl">أولاً:</span> الاعتراف بالجرح قبل التجميل؛ فلا بناء يستقيم على
          إنكارٍ طويل.{'\n'}
          <span className="article-hl">ثانياً:</span> وحدة خليجية لا تُقاس بالبروتوكولات، بل بالتنسيق
          في الأمن والاقتصاد والموقف الخارجي حين يقتضي الأمر.{'\n'}
          <span className="article-hl">ثالثاً:</span> تمكين العقول المنتجة؛ لتكن الكفاءة والإخلاص
          معياراً لا استثناءً.{'\n'}
          <span className="article-hl">رابعاً:</span> قرارات بمنهجية وبأطر مؤسسية، لا باندفاعات فردية
          تُسمّى «رؤية» من دون أدوات قياس.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          المنطقة تمرّ بـ<span className="article-danger"> نقطة تحول تاريخية</span>؛ من يتحرك اليوم
          يضع حجراً في البناء، ومن يؤجل يجد نفسه أمام واقعٍ يُعاد ترتيبه دون مشاركته.{'\n'}
          <span className="article-danger">ومن ينتظر طويلاً قد يكتشف أن غيره قد بُني عليه.</span>
        </p>

        <footer className="article-end">
          <div className="article-end-line" aria-hidden />
        </footer>
      </div>
    </article>
  )
}
