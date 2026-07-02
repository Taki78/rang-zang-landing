import { useState } from 'react'

const initial = { name: '', phone: '', projectType: '', description: '' }

export default function ContactForm() {
  const [form, setForm] = useState(initial)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const update = (key) => (e) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    setError('')
    setSubmitted(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name.trim() || !form.phone.trim()) {
      setError('لطفاً نام و شماره تماس را وارد کنید.')
      return
    }
    // بدون بک‌اند — فقط پیام موفقیت (طبق تصمیم پروژه)
    setError('')
    setSubmitted(true)
    setForm(initial)
  }

  return (
    <section id="contact" className="section">
      <div className="contact__grid">
        <div className="contact__form-card">
          <h2 className="contact__form-title">درخواست مشاوره</h2>
          <p className="contact__form-desc">
            فرم زیر را پر کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.
          </p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="contact__row">
              <input
                className={`field${error && !form.name.trim() ? ' field--error' : ''}`}
                placeholder="نام و نام خانوادگی"
                value={form.name}
                onChange={update('name')}
              />
              <input
                className={`field${error && !form.phone.trim() ? ' field--error' : ''}`}
                placeholder="شماره تماس"
                inputMode="tel"
                value={form.phone}
                onChange={update('phone')}
              />
            </div>
            <input
              className="field"
              style={{ marginBottom: 16 }}
              placeholder="نوع پروژه (صنعتی، دریایی، خودرویی و…)"
              value={form.projectType}
              onChange={update('projectType')}
            />
            <textarea
              className="field field--area"
              placeholder="توضیحات پروژه"
              rows={4}
              value={form.description}
              onChange={update('description')}
            />

            {error && <p className="contact__error-text">{error}</p>}

            <button type="submit" className="contact__submit">
              ارسال درخواست
            </button>

            {submitted && (
              <div className="contact__success">
                درخواست شما ثبت شد. کارشناسان رنگ زنگ به‌زودی با شما تماس می‌گیرند.
              </div>
            )}
          </form>
        </div>

        <div className="contact__info-card">
          <div className="contact__info-title">راه‌های ارتباط مستقیم</div>
          <div className="contact__info-list">
            <div>آدرس: آمل، میدان کیاکلا، شهرک صنعتی منصور کنده</div>
            <div>
              تلفن: <a href="tel:02125632356"><bdi className="ltr-num">۰۲۱-۲۵۶۳۲۵۶</bdi></a>
            </div>
            <div>
              موبایل: <a href="tel:09023353317"><bdi className="ltr-num">۰۹۰۲۳۳۵۳۳۱۷</bdi></a>
            </div>
            <div>
              ایمیل: <a href="mailto:infi@roohrang.ir">infi@roohrang.ir</a>
            </div>
            <div>
              وبسایت:{' '}
              <a href="https://roohrang.ir" target="_blank" rel="noreferrer">
                roohrang.ir
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
