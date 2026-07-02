export default function CTABanner() {
  return (
    <div className="cta">
      <div className="cta__halo" />
      <div className="cta__inner">
        <div className="cta__title">
          برای سطوح زنگ‌زده، راه‌حل ساده و مقرون‌به‌صرفه داریم
        </div>
        <div className="cta__desc">
          همین حالا با کارشناسان رنگ زنگ تماس بگیرید و مشاوره رایگان بگیرید.
        </div>
        <a href="tel:02125632356" className="pill pill--gold-outline">
          تماس همین حالا: <bdi className="ltr-num">۰۲۱-۲۵۶۳۲۵۶</bdi>
        </a>
      </div>
    </div>
  )
}
