import React from 'react'
import Collection from './Collection/Collection'
import Important from './Important/Important'
import New from './New/New'
import Team from './Team/Team'

const Home = () => {
  return (
    <div>
        <div>
          <New/>
          <Collection/>
          <Important/>
          <Team/>
        </div>
    </div>
  )
}

export default Home