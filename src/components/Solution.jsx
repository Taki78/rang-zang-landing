export default function Solution() {
  return (
    <section id="solution" className="section">
      <div className="container">
        <h2 className="section-title">چرا رنگ زنگ متفاوت است؟</h2>
        <p className="section-intro">
          روش سنتی محافظت از سازه‌های فلزی به سه لایه رنگ (آستری زینک‌ریچ اپوکسی،
          میانی اپوکسی و رویه اپوکسی یا پلی‌اورتان) نیاز دارد که اجرای آن پرهزینه،
          زمان‌بر و وابسته به سندبلاست کامل سطح است.
        </p>

        <div className="solution__grid">
          <div className="compare-card compare-card--outline">
            <div className="compare-card__label">روش سنتی — سه‌لایه اپوکسی</div>
            <ul>
              <li>نیاز به سندبلاست کامل برای ایجاد پروفایل روی فلز</li>
              <li>سه مرحله اجرای جداگانه</li>
              <li>هزینه و زمان اجرای بالا</li>
              <li>نیاز به تجهیزات و نیروی متخصص</li>
            </ul>
          </div>
          <div className="compare-card compare-card--gold">
            <div className="compare-card__label">رنگ زنگ</div>
            <ul>
              <li>اجرای مستقیم روی سطح زنگ‌زده، بدون سندبلاست</li>
              <li>تنها دو مرحله پاشش ساده</li>
              <li>کاهش چشمگیر هزینه و زمان اجرا</li>
              <li>جذب و خنثی‌سازی زنگ موجود روی سطح</li>
            </ul>
          </div>
        </div>

        {/* placeholder — جایگزین با عکس واقعی قوطی محصول */}
        <div className="solution__image">
          <div className="placeholder-stripe placeholder-stripe--teal">
            <span className="placeholder-stripe__caption">
              تصویر محصول — قوطی رنگ زنگ
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
