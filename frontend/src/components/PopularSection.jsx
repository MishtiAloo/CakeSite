import React from 'react'
import CakeCard from '../cards/CakeCard'
import SectionTitleBox from './SectionTitleBox'

function PopularSection() {
  return (
    <>
    
    <div style={{width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', rowGap: '2rem', flexWrap: 'wrap', padding: '2.5rem', gap: '1rem'}}>

        <SectionTitleBox SectionTitle="Popular Cakes" />

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

        <CakeCard
        imgSrc="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29va2llc3xlbnwwfHwwfHx8MA%3D%3D"
        title="Cookies & Cream Crunch"
        description="Creamy layers of vanilla cake with crunchy cookie pieces."
        price="430"
        />

        <CakeCard
        imgSrc="https://images.unsplash.com/photo-1509042239860-f550ce710b93"
        title="Classic Vanilla Bean"
        description="Simple, fluffy vanilla sponge infused with real bean flavor."
        price="340"
        />

        <CakeCard
        imgSrc="https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGlyYW1pc3V8ZW58MHx8MHx8fDA%3D"
        title="Tiramisu Dream Slice"
        description="Coffee-soaked sponge layered with creamy mascarpone and cocoa."
        price="550"
        />

        <CakeCard
        imgSrc="https://plus.unsplash.com/premium_photo-1713371128106-3d4c5ad9e308?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFzcGJlcnJ5JTIwY2FrZXxlbnwwfHwwfHx8MA%3D%3D"
        title="Raspberry Swirl Cheesecake"
        description="Rich baked cheesecake marbled with sweet raspberry syrup."
        price="480"
        />
    </div>
    </>
  )
}

export default PopularSection