import { useEffect, useRef } from 'react'
import Router from './Router';
import "./App.scss";
import DisclaimerBanner from './components/DisclaimerBanner/DisclaimerBanner';

function App() {
  const scrollTopRef = useRef<any>()

  const handleScrollEvent = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      scrollTopRef.current.classList.add('show')
    }
    else if (scrolled <= 300) {
      scrollTopRef.current.classList.remove('show')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScrollEvent)
    return () => {
      window.removeEventListener('scroll', handleScrollEvent)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
  }


  return (
    <div className='main'>
       <DisclaimerBanner />
      <Router />
      <div className="scroll-to-top" ref={scrollTopRef} onClick={handleScrollToTop}>
        <i className="fas fa-angle-double-up"></i>
      </div>
    </div>
  )
}

export default App
