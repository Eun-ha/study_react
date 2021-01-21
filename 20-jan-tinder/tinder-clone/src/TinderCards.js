import React, { useState } from 'react'
import TinderCard from "react-tinder-card"
import './TinderCards.css'

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name:'audrey-hepburn',
      url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTE4MDAzNDEwNTUyNTIyMjU0/audrey-hepburn-9335788-2-402.jpg'
    },
    {
      name: 'poe-portrait',
      url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTI1MDkzMjc2OTQzNDIyNzM4/poeportrait-600x487jpg.jpg'
    }
  ]);

  return (
    <div>
     <div className="tinderCards__cardContainer">
        {people.map(person => (
          <TinderCard
          className="swipe"
          key={person.name}
          preventSwipe={['up','down']}
          >
            <div
            style={{backgroundImage:`url(${person.url})`}}
            className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  )
}

export default TinderCards
