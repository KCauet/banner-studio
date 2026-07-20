import { useState } from 'react'
import './App.css'
import OptionBox from './components/OptionBox/OptionBox'

function App() {

  const [bannerStyles, setBannerStyle] = useState({
    backgroundColor: 'red',
    textFont: 'Arial',
    textContent: 'Your Text here'
  })

  function changeFont() {
    const newFont = String(prompt('Write the desired font here: '))

    if (newFont.trim().length === 0 || typeof(newFont) === null) {
      alert('Invalid font')
      return
    }

    setBannerStyle((bannerStyles) => (
      {
        ...bannerStyles,
        textFont: newFont
      }
    ))
  }
  
  return (
    <>
      <header>
        <div>
          <section style={{backgroundColor: 'yellow'}}>
            <h1>App Name Here</h1>
          </section>
          
          <section className='optionsSection'>
            
          </section>
          
        </div>
      </header>

      <main>
        <aside className='sideBar'>
          <div>
            <OptionBox func={changeFont} />
            
            
          </div>
          
        </aside>
        <div className='mainDiv'>

          <section 
          className='banner'
          style={{
            backgroundColor: `${bannerStyles.backgroundColor}`
          }}
          >
            <h1 style={{
              fontFamily: `${bannerStyles.textFont}`
            }}>{bannerStyles.textContent}</h1>
          </section>

        </div>
      </main>
    </>
  )
}

export default App
