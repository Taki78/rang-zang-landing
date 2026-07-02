import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustStrip from './components/TrustStrip'
import Solution from './components/Solution'
import Features from './components/Features'
import Guide from './components/Guide'
import Certifications from './components/Certifications'
import Gallery from './components/Gallery'
import Lightbox from './components/Lightbox'
import CTABanner from './components/CTABanner'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import { galleryItems } from './data/galleryData'

export default function App() {
  // null = بسته | عدد = ایندکس آیتم گالری باز
  const [lightboxIndex, setLightboxIndex] = useState(null)

  const openLightbox = (i) => setLightboxIndex(i)
  const closeLightbox = () => setLightboxIndex(null)
  const step = (delta) =>
    setLightboxIndex((i) => {
      if (i === null) return i
      const n = galleryItems.length
      return (i + delta + n) % n
    })

  return (
    <>
      <Nav />
      <Hero />
      <TrustStrip />
      <Solution />
      <Features />
      <Guide />
      <Certifications />
      <Gallery onOpen={openLightbox} />
      <CTABanner />
      <ContactForm />
      <Footer />

      {lightboxIndex !== null && (
        <Lightbox
          index={lightboxIndex}
          onClose={closeLightbox}
          onStep={step}
        />
      )}
    </>
  )
}
