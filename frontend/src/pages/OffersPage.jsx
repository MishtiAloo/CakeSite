import React from 'react'
import OCCSection from '../components/OCCSection'

function OffersPage() {
  return (
    <div className='basic-page-container'>
        <OCCSection SectionTitle='Popular Offers'/>
        <OCCSection SectionTitle='For u'/>
        <OCCSection SectionTitle='Monthly'/>
    </div>
  )
}

export default OffersPage