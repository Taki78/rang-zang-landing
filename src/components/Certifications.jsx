// placeholder — بج‌های متنی؛ جایگزین با لوگوی واقعی گواهی‌نامه‌ها (ترجیحاً SVG).
const certs = [
  { badge: 'ICS', tone: 'gold', caption: 'تاییدیه ICS کانادا' },
  { badge: 'ISO', tone: 'teal', caption: 'ISO 9001:2008 (TÜV NORD)' },
  { badge: 'ISIRI', tone: 'gold', caption: 'استاندارد ملی ایران' },
  { badge: 'NIOPDC', tone: 'teal', caption: 'پالایش و پخش فرآورده‌های نفتی' },
  { badge: 'متر', tone: 'gold', caption: 'موسسه رنگ امیرکبیر (مترا)' },
  { badge: 'مجوز', tone: 'teal', caption: 'پروانه بهره‌برداری صنعتی' },
]

export default function Certifications() {
  return (
    <section id="cert" className="section">
      <div className="container">
        <h2 className="section-title">گواهی‌نامه‌ها و تاییدیه‌های معتبر</h2>
        <p className="section-intro" style={{ maxWidth: 700, marginBottom: 60 }}>
          رنگ زنگ محصولی است با تاییدیه‌های داخلی و بین‌المللی که کیفیت و کارایی
          آن را تضمین می‌کند.
        </p>
        <div className="cert__grid">
          {certs.map((c) => (
            <div key={c.caption} className="cert__item">
              <div className={`cert__badge cert__badge--${c.tone}`}>{c.badge}</div>
              <div className="cert__caption">{c.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
