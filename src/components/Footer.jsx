export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div>
          <div className="footer__brand-title">رنگ زنگ</div>
          <div className="footer__brand-desc">
            محصول صنایع رنگ زنگ بابل؛ پوشش ضدخوردگی صنعتی که مستقیم روی سطوح
            زنگ‌زده اجرا می‌شود.
          </div>
        </div>

        <div>
          <div className="footer__col-title">دسترسی سریع</div>
          <div className="footer__links">
            <a href="#hero">خانه</a>
            <a href="#features">ویژگی‌ها</a>
            <a href="#guide">راهنمای اجرا</a>
            <a href="#cert">گواهی‌نامه‌ها</a>
          </div>
        </div>

        <div>
          <div className="footer__col-title">تماس با ما</div>
          <div className="footer__links">
            <span>آمل، میدان کیاکلا، ش.ص منصور کنده</span>
            <a href="tel:02125632356"><bdi className="ltr-num">۰۲۱-۲۵۶۳۲۵۶</bdi></a>
            <a href="tel:09023353317"><bdi className="ltr-num">۰۹۰۲۳۳۵۳۳۱۷</bdi></a>
            <a href="mailto:infi@roohrang.ir">infi@roohrang.ir</a>
          </div>
        </div>

        <div>
          <div className="footer__col-title">شبکه‌های اجتماعی</div>
          <div className="footer__links">
            <a href="https://roohrang.ir" target="_blank" rel="noreferrer">
              وبسایت: roohrang.ir
            </a>
            <a href="https://roohrang.ir" target="_blank" rel="noreferrer">
              اینستاگرام
            </a>
            <a href="https://roohrang.ir" target="_blank" rel="noreferrer">
              تلگرام
            </a>
            <a href="https://roohrang.ir" target="_blank" rel="noreferrer">
              لینکدین
            </a>
          </div>
        </div>
      </div>

      <div className="footer__copy">
        © ۱۴۰۵ صنایع رنگ زنگ بابل. تمامی حقوق محفوظ است.
      </div>
    </footer>
  )
}
