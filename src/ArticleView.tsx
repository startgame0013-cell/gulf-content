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
          ليست هذه كتابةً إنفعالية، بل قراءةٌ استراتيجية بلغة العصر: كيف يتبدّل المشهد الإقليمي،
          وكيف يمكن تحويل الوعي من ردّة فعل متأخرة إلى فعلٍ واعٍ يوسّع الهامش قبل انكماشه.
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
          في الفيزياء، كل نظامٍ يُترك بلا عناية يميل إلى الفوضى. قاعدة علمية باردة، لكنها تصبح
          ذات دلالة سياسية ساخنة حين يتراجع الاهتمام بالبنية المؤسسية وبالأفق طويل المدى.
        </p>
        <p>
          المقصود ليس تحويل العلم إلى مجازٍ متكلّف، بل التقاط التماثل البنيوي: ما يحدث في الخليج
          اليوم — بمنطق التراكم — يشبه ما يحدث حين يضمُر التفكير الاستراتيجي وتتضخّم الانفعالات
          في غرف القرار، فيغلب قصيرُ المدى على هندسة المستقبل.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          سنوات من غياب التخطيط الجاد، وسنوات من قرارات تُبنى على المزاج لا على خرائط طريق،
          وسنوات من تأجيل المبادرة إلى لحظة «مناسبة» لا تأتي غالباً إلا بعد اتساع الفاتورة.
        </p>
        <p>
          <span className="article-danger">فما النتيجة؟</span>
        </p>
        <p>
          أن محورين حاسمين — <span className="article-danger">الأمن</span> و
          <span className="article-danger"> استقرار التدفق المالي</span> — يبلغان اليوم واحدة من
          أعقد مراحلهما منذ التأسيس.
        </p>
        <p className="article-divider">— — —</p>

        <h2 className="article-section-title article-section-title--spaced">لماذا نصل إلى هذا رغم الوفرة؟</h2>
        <p>
          ليس لأن الموارد شحيحة؛ فالإقليم يمتلك وفرةً مالية وبشرية نادرة.
        </p>
        <p className="article-bridge">المعضلة الحقيقية تكمن في أربع طبقات متراكبة:</p>

        <p className="article-num-block">
          {`١
تراجع العمق الفكري والإداري في بعض دوائر القيادة، لا على شكل صدمة، بل كتآكلٍ بطيء.`}
        </p>
        <p className="article-num-block">
          {`٢
هيمنة القرار العاطفي والربح الآني على حساب المنهجية القابلة للاختبار والمساءلة.`}
        </p>
        <p className="article-num-block">
          {`٣
انقلاب منطق الفعل: لا نبدأ فنقود، بل ننتظر الضغط فنستجيب؛ نتحرك متأخرين ثم نتراجع عند أول هدوء، فتتآكل مكاسب اللحظة قبل أن تتحول إلى مسار.`}
        </p>
        <p className="article-num-block">
          {`٤
بقاء جزء من التعاون الإقليمي في صيغةٍ شكلية، دون ترجمة تشغيلية في الملفات السيادية.`}
        </p>

        <p className="article-divider">— — —</p>
        <p>
          <span className="article-danger">وأخطر ما في الأمر:</span> أن يُعاد تدوير المشكلة باسم
          «المعالجة»، بينما تضعف تدريجياً الأدوات القادرة على المعالجة فعلاً.
        </p>

        <h2 className="article-section-title article-section-title--spaced">الأسباب الخفية</h2>
        <p>
          <strong className="article-h2-inline">ما يحدث للخليج ليس صدفةً تاريخية عابرة.</strong>
        </p>
        <p>
          ثمة فرق جوهري بين دولة تضعف من داخلها ودولة يُدفع بها إلى الضعف من خارجها؛ والخليج
          يواجه أحياناً التداخل بين الاثنين، وهو تداخلٌ يُربك القراءة ويؤخر القرار.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          الانقسامات لا تُطفأ دائماً؛ قد تُغذّى. والخلافات لا تُطوى دائماً؛ قد تُستثمر. وبينما تُستهلك
          الطاقة في الملفات الصغيرة، تُرسم المسارات الكبرى في مساحات أبعد من النقاش المحلي.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          <span className="article-danger">والنتيجة؟</span> بيئةٌ تكثر فيها الاستجابة وتقلّ فيها المبادرة؛
          تنتظر الانفراج، بينما تمضي خطط أخرى بإيقاعٍ ثابت.
        </p>
        <p>
          <span className="article-danger">والخطة تُنفَّذ، حتى حين لا تُعلن عن نفسها.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">النتائج إن بقي الجميع على الهامش</h2>
        <p>
          <strong className="article-h2-inline">ماذا لو استمر الوضع على حاله؟</strong>
        </p>
        <p>المنتظر يبدّد وقته في رهانٍ مؤجل لا يضمن له موطئاً متقدماً.</p>
        <p>الخائف يدفع كلفة خوفه مرتين: مرةً بالصمت، ومرةً بفوات الفرصة.</p>
        <p>المتصارع شعبوياً يخسر المعركة والجمهور معاً، لأنه يربح الضجيج ويخسر البنية.</p>
        <p>العاطفي بلا أدوات يرفع حرارة الخطاب ويخفض فعالية الفعل.</p>
        <p>والمغرور بفرديته يكتشف متأخراً أن الميادين الكبرى لا تُدار بعقلية الجزر المعزولة.</p>
        <p className="article-divider">— — —</p>
        <p>
          هذه ليست إنشائيات؛ إنها <span className="article-hl">أنماط متكررة</span> حيث تغيب الرؤية
          وتضعف المؤسسة وتُستبدل السياسة العامة بإدارة يومية قصيرة النفس.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          لذلك، لا خيار ثالثاً: إما حركة واعية اليوم بما هو متاح، أو قرارات تُتخذ في مكان آخر ثم
          تُقدَّم لنا بوصفها «الواقع الوحيد الممكن».
        </p>
        <p>
          <span className="article-danger">والفارق بين المسارين ليس خطاباً؛ بل نافذة زمنية ضيقة جداً.</span>
        </p>

        <h2 className="article-section-title article-section-title--spaced">الحل والمطلوب</h2>
        <p>
          <strong className="article-h2-inline">الحل ممكن، لكنه يحتاج شجاعة مؤسسية وانضباطاً تنفيذياً.</strong>
        </p>
        <p>
          <span className="article-hl">أولاً:</span> الاعتراف بالجرح قبل تزيينه؛ فلا بناء متين فوق إنكار
          ممتد.
        </p>
        <p>
          <span className="article-hl">ثانياً:</span> وحدة خليجية عملية، تُقاس بالتنسيق الفعلي في الأمن
          والاقتصاد والموقف الخارجي، لا بمجرد البروتوكول.
        </p>
        <p>
          <span className="article-hl">ثالثاً:</span> تمكين العقول المنتجة؛ لتصبح الكفاءة معياراً مؤسسياً
          لا استثناءً ظرفياً.
        </p>
        <p>
          <span className="article-hl">رابعاً:</span> قرارات منهجية قابلة للقياس، لا اندفاعات فردية تُمنح
          اسم «رؤية» دون بنية تقييم ومساءلة.
        </p>
        <p className="article-divider">— — —</p>
        <p>
          المنطقة عند <span className="article-danger">منعطف تاريخي</span>؛ من يتحرك الآن يضع حجراً في
          هندسة المستقبل، ومن يؤجل يواجه واقعاً معاد الترتيب دون مشاركته.
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
