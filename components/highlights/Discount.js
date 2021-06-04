import React, { useEffect, useState } from 'react'
import { Fade, Slide } from 'react-awesome-reveal'
import MyButton from '../utils/MyButton'

const Discount = () => {
  const end = 30
  const [start, setStart] = useState(0)
  const percentage = () => {
    if (start < end) {
      setStart((prevCount) => prevCount + 1)
    }
  }

  useEffect(() => {
    if (start > 0 && start < 30) {
      setTimeout(() => {
        setStart((prevCount) => prevCount + 1)
      }, 30)
    }
  }, [start])

  return (
    <div className="center_wrapper">
      <div className="discount_wrapper">
        <Fade
          onVisibilityChange={(inView) => {
            if (inView) {
              percentage()
            }
          }}
        >
          <div className="discount_percentage">
            <span>{start}%</span>
            <span>OFF</span>
          </div>
        </Fade>
        <Slide right>
          <div className="discount_description">
            <h3>Purchase ticket before 20th June</h3>
            <p>
              Mlkshk la croix ugh kinfolk. Cloud bread chillwave street art,
              squid vice narwhal wayfarers humblebrag adaptogen. Distillery
              portland tofu, man bun hammock plaid mlkshk gastropub venmo
              kickstarter you probably haven't heard of them craft beer 90's
              deep v kitsch. Vinyl organic man braid, umami shabby chic franzen
              street art aesthetic VHS asymmetrical gent
            </p>

            <MyButton
              text="Purchase tickets"
              link="https://google.com"
              size="small"
              style={{ background: '#ffa800', color: '#fff' }}
              iconTicket
            />
          </div>
        </Slide>
      </div>
    </div>
  )
}

export default Discount
