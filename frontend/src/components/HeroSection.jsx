import React from 'react'
import Navbar from './Navbar'

function HeroSection() {
  return (
    <>
    <div style={{backgroundColor: '#f7f7ab', width: '98.8vw', height: '550px', position: 'relative', borderRadius: '0 100px 0 0', marginTop: '-1.9rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

        {/* top bar */}
        <div style={{backgroundColor: '#f5a91d', position: 'absolute', right: '0', top: '0', width: '100%', height: '80px', borderRadius: '0 200px 0 200px'}}>
          <Navbar />
        </div>

        {/* bottom bar */}
        <div style={{backgroundColor: '#FFFDD0', position: 'absolute', left: '0', bottom: '0', width: '100%', height: '70px', borderRadius: '0 200px 0 0'}}></div>

        {/* bottom curl */}
        <div style={{backgroundColor: '#FFFDD0', position: 'absolute', left: '0', bottom: '70px', width: '70px', height: '100px'}}>
          <div style={{backgroundColor: '#f7f7ab', left: '0', bottom: '100px', width: '100%', height: '100px', borderRadius: '0 0 0 200px'}}></div>
        </div>

        {/* top curl */}
        <div style={{backgroundColor: '#FFA500', position: 'absolute', right: '0', top: '80px', width: '70px', height: '100px'}}> 
          <div style={{backgroundColor: '#f7f7ab', right: '0', top: '100px', width: '100%', height: '100px', borderRadius: '0 200px 0 0'}}></div> 
        </div>

        <div style={{width: '80%', height: '65%', border: '2px solid black', overflowX: 'auto', display: 'flex', flexDirection: 'row', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', borderRadius: '1rem', zIndex: '9'}}>
          <img style={{margin: '0 1rem', scrollSnapAlign: 'start', flex: '0 0 100%', width: '100%', height: '100%', objectFit: 'cover'}} src="https://images.moneycontrol.com/static-mcnews/2025/04/20250414082008_Happy-new-year.png?impolicy=website&width=1280&height=720" alt="" />
          <img style={{margin: '0 1rem', scrollSnapAlign: 'start', flex: '0 0 100%', width: '100%', height: '100%', objectFit: 'cover'}} src="https://cdn.vectorstock.com/i/1000v/17/95/happy-chinese-new-year-2025-red-background-vector-50041795.jpg" alt="" />
          <img style={{margin: '0 1rem', scrollSnapAlign: 'start', flex: '0 0 100%', width: '100%', height: '100%', objectFit: 'cover'}} src="https://cdn5.vectorstock.com/i/1000x1000/65/34/happy-islamic-new-year-aam-hijri-mubarak-arabic-vector-31536534.jpg" alt="" />
        </div>

    </div>
    </>
  )
}

export default HeroSection