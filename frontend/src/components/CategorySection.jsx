import React, {useRef, useState} from 'react'
import SectionTitleBox from './SectionTitleBox'
import CakeCard from '../cards/CakeCard'  

function CategorySection() {

  const [sliderPos, setSliderPos] = useState(0);
  const [sliderWidth, setSliderWidth] = useState(0);
  const containerRef = useRef(null);

  const handlePClick = (e) => {
    const rect = e.target.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();
    setSliderPos(rect.left - containerRect.left - 5);
    setSliderWidth(rect.width + 10);
  };

  return (
    <div style={{width: '98vw', display: 'flex', flexDirection: 'column', padding: '2.5rem'}}>

    <SectionTitleBox SectionTitle="Our Products"/>

    {/* Option bar */}
    <div ref={containerRef} style={{backgroundColor: '#ff870f', padding: '0.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'row', justifyContent: 'center', gap: '1rem', borderRadius: '1rem', fontSize: '1.2rem', fontWeight: 'bold', position: 'relative'}}>

        {/* White slider */}
        <div style={{backgroundColor: 'white', height: '70%', position: 'absolute', borderRadius: '0.5rem', opacity: '0.5', left: `${sliderPos}px`, width: `${sliderWidth}px`, transition: 'left 0.3s ease, width 0.3s ease'}}></div>

        {/* Options */}
        <p onClick={handlePClick} style={{ cursor: 'pointer', zIndex: 1 }}>Cake</p>
        <p onClick={handlePClick} style={{ cursor: 'pointer', zIndex: 1 }}>Cupcakes</p>
        <p onClick={handlePClick} style={{ cursor: 'pointer', zIndex: 1 }}>Daily bakes</p>
        <p onClick={handlePClick} style={{ cursor: 'pointer', zIndex: 1 }}>Donuts</p>
    </div>

    <div style={{display: 'flex', flexDirection: 'row', overflowX: 'auto', scrollSnapType: 'x mandatory', scrollBehavior: 'smooth', gap: '1.5rem', padding: '2rem'}}>

        <CakeCard
        imgSrc="https://plus.unsplash.com/premium_photo-1713447395823-2e0b40b75a89?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D"
        title="Chocolate Fudge Delight"
        description="Rich chocolate cake layered with creamy fudge and sweetness."
        price="450"
        />

        <CakeCard
        imgSrc="https://plus.unsplash.com/premium_photo-1690214491960-d447e38d0bd0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2FrZXxlbnwwfHwwfHx8MA%3D%3D"
        title="Strawberry Cream Bliss"
        description="Fresh strawberries blend into soft cream and vanilla sponge."
        price="380"
        />

        <CakeCard
        imgSrc="https://images.unsplash.com/photo-1565958011703-44f9829ba187"
        title="Rainbow Sprinkle Fantasy"
        description="Colorful layers filled with frosting and topped with sprinkles."
        price="520"
        />

        <CakeCard
        imgSrc="https://images.unsplash.com/photo-1711972964916-a56f50b74c36?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZlbHZldCUyMHJvc2UlMjBjYWtlfGVufDB8fDB8fHww"
        title="Velvet Rose Cake"
        description="Red velvet cake with delicate rose buttercream and elegance."
        price="460"
        />

        <CakeCard
        imgSrc="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
        title="Lemon Zest Classic"
        description="Zesty lemon sponge layered with smooth citrus flavored icing."
        price="390"
        />
    </div>
</div>
  )
}

export default CategorySection