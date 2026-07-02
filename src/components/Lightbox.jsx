import { useEffect } from 'react'
import { galleryItems, toneClass } from '../data/galleryData'

export default function Lightbox({ index, onClose, onStep }) {
  const item = galleryItems[index]
  const total = galleryItems.length

  // بستن با Escape و ناوبری با کلیدهای جهت‌دار + قفل اسکرول بدنه
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') onStep(-1)
      else if (e.key === 'ArrowLeft') onStep(1)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose, onStep])

  return (
    <div className="lightbox__overlay" onClick={onClose}>
      <div
        className="lightbox__card"
        dir="rtl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="lightbox__close"
          onClick={onClose}
          aria-label="بستن"
        >
          ✕
        </button>

        {/* placeholder — جایگزین با <img src={item.image} .../> */}
        <div className={`placeholder-stripe lightbox__image ${toneClass(item.tone)}`}>
          <span
            className="placeholder-stripe__caption"
            style={{ color: 'var(--teal-deep)' }}
          >
            تصویر نمونه‌کار — {item.caption}
          </span>
        </div>

        <div className="lightbox__bar">
          <button className="lightbox__nav" onClick={() => onStep(-1)}>
            قبلی
          </button>
          <div className="lightbox__counter">
            {item.caption} · {index + 1}/{total}
          </div>
          <button className="lightbox__nav" onClick={() => onStep(1)}>
            بعدی
          </button>
        </div>
      </div>
    </div>
  )
}
