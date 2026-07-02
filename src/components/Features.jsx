const features = [
  {
    n: '۱',
    tone: 'gold',
    title: 'بدون نیاز به سندبلاست',
    desc: 'آماده‌سازی سطح تنها با حذف زنگ‌های ورقه‌ای و اجسام سست انجام می‌شود.',
  },
  {
    n: '۲',
    tone: 'teal',
    title: 'جذب و خنثی‌سازی زنگ',
    desc: 'پس از پاشش، زنگ موجود روی سطح را در خود می‌گیرد و مانع گسترش آن می‌شود.',
  },
  {
    n: '۳',
    tone: 'gold',
    title: 'سد رطوبت و آب',
    desc: 'ترکیبات ویژه این رنگ از نفوذ رطوبت به فلز جلوگیری کرده و خوردگی را متوقف می‌کند.',
  },
  {
    n: '۴',
    tone: 'teal',
    title: 'صرفه اقتصادی',
    desc: 'هزینه و زمان اجرا نسبت به سیستم سه‌لایه اپوکسی به‌طور چشمگیری کاهش می‌یابد.',
  },
  {
    n: '۵',
    tone: 'gold',
    title: 'کاربرد صنعتی گسترده',
    desc: 'مناسب سازه‌های فولادی، تاسیسات نفت و گاز، صنایع دریایی و خودرویی.',
  },
  {
    n: '۶',
    tone: 'teal',
    title: 'دوام اثبات‌شده',
    desc: 'بیش از یک دهه سابقه مصرف موفق در صنایع ایران با رضایت مصرف‌کنندگان.',
  },
]

export default function Features() {
  return (
    <section id="features" className="section">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 70 }}>
          ویژگی‌های منحصربه‌فرد
        </h2>
        <div className="features__grid">
          {features.map((f) => (
            <div key={f.n} className="feature">
              <div className={`feature__num feature__num--${f.tone}`}>{f.n}</div>
              <div className="feature__title">{f.title}</div>
              <div className="feature__desc">{f.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
