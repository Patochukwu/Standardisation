import React from 'react'
import { BandageFooter } from '../Components/BandageFooter'
import { Brands } from '../Components/Brands'
import { DescriptionSection } from '../Components/DescriptionSection'
import { Headers } from "../Components/Headers"
import { SingleItemHeader } from '../Components/SingleItemHeader'

export const SingleItemPage = () => {
  return (
    <section>
      <Headers />
      <SingleItemHeader />
      <DescriptionSection />
      <Brands />
      <BandageFooter />
    </section>
  )
}
