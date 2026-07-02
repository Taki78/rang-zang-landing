import { galleryItems, toneClass } from '../data/galleryData'

export default function Gallery({ onOpen }) {
  return (
    <section id="gallery" className="section section--cream">
      <div className="container">
        <h2 className="section-title" style={{ marginBottom: 70 }}>
          نمونه پروژه‌های اجرا شده
        </h2>
        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <div
              key={item.caption}
              className="gallery__item"
              onClick={() => onOpen(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(i)}
            >
              {/* placeholder — جایگزین با <img src={item.image} .../> */}
              <div className={`placeholder-stripe ${toneClass(item.tone)}`}>
                <span
                  className="placeholder-stripe__caption"
                  style={{ color: 'var(--teal-deep)' }}
                >
                  تصویر نمونه‌کار — {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
