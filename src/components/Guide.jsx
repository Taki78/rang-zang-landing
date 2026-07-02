const steps = [
  {
    n: 'مرحله ۱',
    title: 'آماده‌سازی سطح',
    desc: 'زنگ‌های ورقه‌ای و اجسام سست را جدا کنید. ضخامت زنگ باید کمتر از ضخامت رنگ باشد.',
  },
  {
    n: 'مرحله ۲',
    title: 'رقیق‌سازی',
    desc: 'با ۵۰ تا ۶۰ درصد تینر مخصوص رنگ زنگ رقیق شود.',
  },
  {
    n: 'مرحله ۳',
    title: 'لایه اول',
    desc: 'اجرا با ضخامت فیلم خشک ۷۰ تا ۱۰۰ میکرون.',
  },
  {
    n: 'مرحله ۴',
    title: 'لایه دوم',
    desc: 'پس از ۱۰ تا ۱۲ ساعت، پاشش تکمیلی تا ۲۰۰ میکرون.',
  },
]

const specs = [
  { text: 'مقاومت پاشش نمکی: ۱۰۰۰ ساعت', astm: '(ASTM B117)' },
  { text: 'مقاومت UV: ۱۰۰۰ ساعت', astm: '(ASTM G154)' },
  { text: 'چسبندگی: درجه ۵B', astm: '(ASTM D3359)' },
  { text: 'انعطاف‌پذیری: بدون ترک در ۶mm', astm: '(ASTM D522)' },
  { text: 'پوشش‌دهی: ~۸ متر مربع/کیلوگرم', astm: '' },
  { text: 'خشک شدن سطحی: ۱۵ دقیقه', astm: '' },
]

export default function Guide() {
  return (
    <section id="guide" className="section section--cream">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 70 }}>
          راهنمای اجرای رنگ زنگ
        </h2>

        <div className="guide__steps">
          {steps.map((s) => (
            <div key={s.n} className="step-card">
              <div className="step-card__num">{s.n}</div>
              <div className="step-card__title">{s.title}</div>
              <div className="step-card__desc">{s.desc}</div>
            </div>
          ))}
        </div>

        <div className="specs">
          <div className="specs__title">مشخصات فنی و نتایج آزمون</div>
          <div className="specs__grid">
            {specs.map((s) => (
              <div key={s.text}>
                {s.text} {s.astm && <span className="astm">{s.astm}</span>}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
