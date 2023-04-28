import React from 'react'
import Navigation from '../navbar/Navigation'
import FooterPart from '../footer/FooterPart'
import SectionForm from '../parts/SectionForm'
import TeamHome from '../parts/TeamHome'


export default function HomePage() {
  return (
    <div>
        <Navigation/>
        <h1>toto</h1>
        <TeamHome/>
        <SectionForm/>
        <FooterPart/>
    </div>
  )
}
