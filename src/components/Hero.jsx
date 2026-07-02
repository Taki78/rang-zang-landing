export default function Hero() {
  return (
    <header id="hero" className="hero">
      <div className="hero__halo hero__halo--teal" />
      <div className="hero__halo hero__halo--gold" />
      <div className="hero__inner">
        <h1 className="hero__title">رنگ زنگ</h1>
        <p className="hero__subhead">رنگی که نیاز به زنگ‌زدایی ندارد</p>
        <p className="hero__body">
          پوشش صنعتی رنگ زنگ مستقیم روی سطوح زنگ‌زده اجرا می‌شود؛ بدون سندبلاست و
          سنباده‌کاری. این رنگ در حین اجرا زنگ سطح را در خود جذب و خنثی می‌کند، به
          فلز می‌چسبد و با مسدود کردن نفوذ رطوبت، از ادامه خوردگی جلوگیری می‌کند.
        </p>
        <div className="hero__actions">
          <a href="#contact" className="pill pill--gold-outline">
            درخواست مشاوره رایگان ↖
          </a>
          <a href="tel:09023353317" className="pill pill--teal-fill">
            تماس با کارشناسان
          </a>
        </div>
      </div>
    </header>
  )
}
