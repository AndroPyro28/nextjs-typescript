import React from 'react'
import Pet from '../components/Pet'
import {petImages} from "../data/petImages"
function Pets() {
  return (
    <div>
        {
            petImages.map((img, index) => <Pet key={index} imgPath={img} />)
        }
    </div>
  )
}

export default Pets