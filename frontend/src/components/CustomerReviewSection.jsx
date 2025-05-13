import React from 'react'
import SectionTitleBox from './SectionTitleBox'
import ReviewCard from '../cards/ReviewCard'

function CustomerReviewSection() {
  return (
    <div style={{width: '98vw', display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', rowGap: '1.5rem', flexWrap: 'wrap', padding: '2.5rem'}}>

        <SectionTitleBox SectionTitle="Customer Reviews" />

        <div style={{backgroundColor: '#FFFBAE', width: '100%', display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', padding: '2rem', maxHeight: '60vh', overflowY: 'auto', rowGap: '2rem', borderRadius: '2rem', placeItems: 'center'}}>
            <ReviewCard imgSrc= 'https://ucarecdn.com/3834d3d9-21de-4fd5-b9f0-83adbf8e49e1/-/crop/581x581/0,0/-/preview/-/progressive/yes/-/format/auto/' name= 'Ramona' description= 'Lorem ipsum dolor sit amet consectetur adipising lit.'/>
            <ReviewCard imgSrc= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRofsGUGlk2ZexeCSZedbz-LxY9MJx6Dy97Gw&s' name= 'Sue' description= 'Lorem ipsum dolor sit amet consectetur adipising lit.'/>
            <ReviewCard imgSrc= 'https://hips.hearstapps.com/hmg-prod/images/sydney-sweeney-attends-the-2023-met-gala-celebrating-karl-news-photo-1743864106.pjpeg?crop=0.668xw:1.00xh;0.0689xw,0&resize=1200:*' name= 'Sydney' description= 'Lorem ipsum dolor sit amet consectetur adipising lit.'/>
            <ReviewCard imgSrc= 'https://ntvb.tmsimg.com/assets/assets/73134_v9_bb.jpg?w=360&h=480' name= 'Perdita' description= 'Lorem ipsum dolor sit amet consectetur adipising lit.'/>
            <ReviewCard imgSrc= 'https://d.latintimes.com/en/full/276269/game-thrones-myranda.jpg?w=1600&h=1600&q=88&f=abf9ccf4a30047a4e482ee86d72e4f51' name= 'Myranda' description= 'Lorem ipsum dolor sit amet consectetur adipising lit.'/>
            <ReviewCard imgSrc= 'https://d.newsweek.com/en/full/1571727/pokimane-twitch-deal-exclusive-stream-streaming.jpg' name= 'Poki' description= 'Lorem ipsum dolor sit amet consectetur adipising lit.'/>
            <ReviewCard imgSrc= 'https://www.newagebd.com/files/records/news/202008/113516_133.jpg' name= 'Fine Shyt' description= 'Ami mori nai, bongoboltu more nai'/>
        </div>
    
    </div>
  )
}

export default CustomerReviewSection