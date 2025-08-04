import Head from './components/head.jsx'
import Intro from './components/Intro.jsx'
import Scroll1 from './components/Scroll1.jsx'
import ProductScroller from './components/ProductScroller.jsx'
import HorizontalFeatureCards from './components/HorizontalFeatureCards.jsx'
import FamilyFeature from './components/FamilyFeauture.jsx'
import CloserLookBanner from './components/CloserLookBanner.jsx'

import IphoneHeroSection from './components/IphoneHeroSection.jsx'
import EssentialsCards from './components/EssentialsCards.jsx'
import PhoneHero from './PhoneHero.jsx'
import SignificantOthers from './components/SignificantOthers.jsx'
import IphoneHeaderFooter from './components/IphoneHeaderFooter.jsx'
import KK from './components/KK.jsx'

function App() {
  return (
    <>
      <Head />
      <Intro />
      <Scroll1 />
      <IphoneHeroSection />
      <ProductScroller />
      <HorizontalFeatureCards />
      <PhoneHero/>
      <FamilyFeature />
      <CloserLookBanner />
      <KK />
      <EssentialsCards />
      <SignificantOthers />
      <IphoneHeaderFooter />
    </>
  )
}

export default App
