import React from 'react'
import { Header, GetStarted, Select, Questions, Comments, Footer} from './index'


const Home = () => {
  return (
    <div>
        <Header />
        <GetStarted />
        <Select />
        <Questions />
        <Comments />
        <Footer />
    </div>
  )
}

export default Home