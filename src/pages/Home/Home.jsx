import { useState } from 'react'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Header from '../../components/Header/Header'
import ContactUs from '../contactUs/ContactUs'
import OurServices from '../ourServices/OurServices'

const Home = () => {

  const [category, setCategory] = useState("All")

  return (
    <>
      <Header />
      <ExploreMenu setCategory={setCategory} category={category} />
      <FoodDisplay category={category} />
      <OurServices />
      {/* <AppDownload /> */}
      <ContactUs />

    </>
  )
}

export default Home
