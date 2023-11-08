import Hero from "../../components/Home/Hero"
import './Home.css'
import Feature from "../../components/Home/Feature"
import Partners from "../../components/Home/Partners"
import Members from "../../components/Home/Members"
import { Helmet } from "react-helmet"

const Home = () => {
  return (
    <>
    <Helmet>
      <title>FeedTheHunger | Home</title>
    </Helmet>
      <Hero/>
      <Feature/>
      <Members/>
      <Partners/>
    </>
  )
}

export default Home