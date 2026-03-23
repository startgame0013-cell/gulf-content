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
          ليس المقصود إثارةً عابرة، بل تقديم قراءة معاصرة لما يتحول في الإقليم: ربط المشهد بما يمكن التصرف فيه
          محلياً، قبل أن تُفرض خيارات لا نملك فك رموزها ولا ضمان مشاركتنا في صياغتها.
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
          في علم الطبيعة، ثمة ميلٌ أساسيٌّ لأي نظام يُهمل: أن يزداد فوضويةً مع الزمن. صياغة تقنية، إلا أنها
          تُنذر بمعنى سياسي حين يتراجع الاهتمام بالبنية التحتية للقرار وبالمسارات طويلة الأمد.
        </p>
        <p>
          ولا نريد تحويل العلم إلى شعارٍ مطبوع؛ نريد رصدَ تماثلٍ دقيقٍ: ما يجري في الخليج اليوم — في منطق
          التراكم — يشبه ما يحدث حين يُضعَفُ الفكر الاستراتيجي ويُفعَّلُ الانفعالُ في مفاصل القرار، فيغلبُ
          قصيرُ المدى على طويله.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          سنوات من غياب التخطيط الجاد، وسنوات من قرارات تُؤسَّس على الانفعال لا على خريطة واضحة، وسنوات من
          تأجيل المبادرة إلى حين «ينصلح الحال» من تلقاء نفسه — كأن الزمن حكيمٌ بلا مُدخلٍ بشري.
        </p>
        <p>
          <span className="article-danger">فما النتيجة؟</span>
        </p>
        <p>
          أن نقطتين محوريتين — <span className="article-danger">الأمن و استقرار التدفق المالي</span> — تقفان
          اليوم في أسوأ أحوالهما منذ تأسيس هذه الدول.
        </p>
        <p className="article-divider">— — —</p>

        <h2 className="article-section-title article-section-title--spaced">لماذا نصل إلى هذا رغم الوفرة؟</h2>
        <p>
          ليس لأننا نفتقر إلى المال أو إلى الموارد؛ فالخليج، بالعكس، من أغنى بقاع الأرض.
        </p>
        <p className="article-bridge">إنما المشكلة الحقيقية تكمن في ما يلي:</p>

        <p className="article-num-block">
          {`١
تراجع عمق التكوين الفكري والإداري في أجيال قيادية، لا بصورة مفاجئة، بل تدريجياً وبمرور الزمن.`}
        </p>
        <p className="article-num-block">
          {`٢
هيمنة قرارات تُبنى على العاطفة والمصلحة الآنية، بدلاً من استراتيجية تتحمّل الاختبار والمتابعة والتدقيق.`}
        </p>
        <p className="article-num-block">
          {`٣
استبدال المبادرة بردود أفعال: نتحرك حين يضغط الخارج، ونصمت حين يخفّ الضغط — كأن الإقليم يُدار بمنطق المفاجأة لا بمنطق المسار.`}
        </p>
        <p className="article-num-block">
          {`٤
وجود أطر التعاون «على الورق» دون أن تترجم إلى تنسيق حقيقي في الملفات الحساسة.`}
        </p>

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
          هناك فرقٌ جذري بين دولة تضعف من داخلها وبين دولة يُراد لها أن تُضعف من خارجها؛ والخليج يواجه
          أحياناً الاثنين معاً، في تداخل يصعّب قراءة المشهد من زاوية واحدة، ويُدخل القارئ في متلازمة
          «التحليل الكافي» دون «القرار الكافي».
        </p>
        <p className="article-divider">— — —</p>
        <p>
          فالانقسامات الداخلية لا تُعالَج فحسب؛ قد تُغذّى. والخلافات بين الدول لا تُطوى فحسب؛ قد تُشعَل.
          وتبقى القيادة مشغولة بالصغير، بينما تُرسم الخطوط الكبرى في أماكن أخرى.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          <span className="article-danger">والنتيجة؟</span> منطقة تكثر فيها ردود الفعل، وتقلّ فيها المبادرة
          البناءة؛ تنتظر «فرجاً» قد لا يأتي على مقاسها، بينما تستمر خططٌ أخرى — بصمتٍ أو بجهرٍ — في
          التقدم.
        </p>
        <p>
          <span className="article-danger">والخطة تُنفَّذ، حتى حين لا تُسمّى باسمها.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">النتائج إن بقي الجميع على الهامش</h2>
        <p>
          <strong className="article-h2-inline">ماذا لو استمرّ الوضع على حاله؟</strong>
        </p>
        <p>المنتظر يضيع زمنه وهو ينتظر فرصة «أنسب» لا تأتي دائماً.</p>
        <p>الخائف يدفع ثمن مخاوفه بأيديه، لأنه يتنازل عن مساحة القول والفعل.</p>
        <p>المتصارع شعبوياً يخرج من المعركة وقد خسر الجمهور والمشروع معاً.</p>
        <p>العاطفي بلا أدوات يضخّ الحرارة دون بناء.</p>
        <p>والمغرور بفرديته يظن أنه يحمي نفسه، وهو يهدم سوراً جماعياً لا يُعاد بسهولة.</p>
        <p className="article-divider">— — —</p>
        <p>
          هذه ليست «تحليلات» ترفيهية؛ إنها <span className="article-hl">أنماطٌ تتكرر</span> حيثما غابت الرؤية
          وضعفت المؤسسة.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          وإزاء ذلك، يبقى خياران لا ثالث لهما: إما أن تتحرك اليوم بما تملك، وإما أن تُتخذ عنك قراراتٌ ثم
          تُعرض عليك كأمرٍ واقع.
        </p>
        <p>
          <span className="article-danger">والفرق بينهما ليس شعاراً؛ بل مساحة زمكانية ضيّقة.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">الحل والمطلوب</h2>
        <p>
          <strong className="article-h2-inline">الحل ليس مستحيلاً، لكنه يستوجب شجاعة مؤسسية.</strong>
        </p>
        <p>
          <span className="article-hl">أولاً:</span> الاعتراف بالجرح قبل التجميل؛ فلا بناء يستقيم على إنكارٍ
          طويل.
        </p>
        <p>
          <span className="article-hl">ثانياً:</span> وحدة خليجية لا تُقاس بالبروتوكولات، بل بالتنسيق في
          الأمن والاقتصاد والموقف الخارجي حين يقتضي الأمر.
        </p>
        <p>
          <span className="article-hl">ثالثاً:</span> تمكين العقول المنتجة؛ لتكن الكفاءة والإخلاص معياراً لا
          استثناءً.
        </p>
        <p>
          <span className="article-hl">رابعاً:</span> قرارات بمنهجية وبأطر مؤسسية، لا باندفاعات فردية تُسمّى
          «رؤية» من دون أدوات قياس.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          المنطقة تمرّ بـ<span className="article-danger"> نقطة تحول تاريخية</span>؛ من يتحرك اليوم يضع حجراً
          في البناء، ومن يؤجل يجد نفسه أمام واقعٍ يُعاد ترتيبه دون مشاركته.
        </p>
        <p>
          <span className="article-danger">ومن ينتظر طويلاً قد يكتشف أن غيره قد بُني عليه.</span>
        </p>

        <footer className="article-end">
          <div className="article-end-line" aria-hidden />
        </footer>
      </div>
    </article>
  )
}
