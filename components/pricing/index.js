import React from 'react'
import MyButton from '../utils/MyButton'
import { Zoom } from 'react-awesome-reveal'

const Pricing = () => {
  const priceState = {
    prices: [100, 150, 200],
    position: ['Balcony', 'Medium', 'Star'],
    desc: [
      'l organic man braid, umami shabby chic franzen street art aesthetic VHS asymmetrical gentrify ramps sartorial. Organic VHS deep v asymmetrical. Everyday carry whatever bushwick knausgaard selvage vape food truck f',
      'Sriracha fanny pack selvage, umami brooklyn shabby chic mlkshk squid kitsch mumblecore shoreditch. Pour-over shaman pork belly migas selvage, food truck godard',
      'ers activated charcoal fingerstache prism, raclette art party cray deep v YOLO tofu godard fashion axe shaman literally. Listicle scenester mlkshk af franzen artisan snackwave. Craft beer af cornhole PBR&B normcore, locavore',
    ],
    linkto: ['#', '#', '#'],
    delay: [500, 0, 500],
  }

  const showBoxes = () => {
    return priceState.prices.map((box, index) => {
      return (
        <Zoom
          key={index}
          className="pricing_item"
          delay={priceState.delay[index]}
        >
          <div className="pricing_inner_wrapper">
            <div className="pricing_title">
              <span>${priceState.prices[index]}</span>
              <span>{priceState.position[index]}</span>
            </div>
            <div className="pricing_description">{priceState.desc[index]}</div>
            <div className="pricing_buttons">
              <MyButton text="Purchase" link={priceState.linkto[index]} />
            </div>
          </div>
        </Zoom>
      )
    })
  }
  return (
    <section className="bck_black">
      <div className="center_wrapper pricing_section">
        <h2>Pricing</h2>
        <div className="pricing_wrapper">{showBoxes()}</div>
      </div>
    </section>
  )
}

export default Pricing
