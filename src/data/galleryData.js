// دادهٔ ثابت گالری نمونه‌کارها.
// برای استفاده از عکس واقعی بعداً کافی است فیلد `image` را به هر آیتم اضافه کنید
// و در Gallery/Lightbox به‌جای placeholder راه‌راه از <img src={item.image}/> استفاده شود.
export const galleryItems = [
  { caption: 'پالایشگاه نفت', tone: 'teal' },
  { caption: 'اسکله و سازه دریایی', tone: 'gold' },
  { caption: 'سازه فولادی صنعتی', tone: 'teal' },
  { caption: 'ناوگان خودرویی سنگین', tone: 'gold' },
]

// نگاشت تُن رنگی به کلاس placeholder راه‌راه (مطابق منطق مرجع طراحی).
export function toneClass(tone) {
  return tone === 'teal' ? 'placeholder-stripe--teal' : 'placeholder-stripe--gold'
}
