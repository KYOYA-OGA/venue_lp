import React from 'react'
import { Zoom } from 'react-awesome-reveal'
import Image from 'next/image'

const VenueInfo = () => {
  return (
    <div className="bck_black">
      <div className="center_wrapper">
        <div className="vn_wrapper">
          <Zoom className="vn_item" triggerOnce>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_red"></div>
                  <div className="vn_icon">
                    <Image
                      src="/images/icons/calendar.png"
                      width={50}
                      height={50}
                      alt="Calendar"
                    />
                  </div>
                  <div className="vn_title">Event Date & Time</div>
                  <div className="vn_desc">
                    Nov 20 <br />
                    @20:00pm
                  </div>
                </div>
              </div>
            </div>
          </Zoom>
          <Zoom className="vn_item" delay={500}>
            <div>
              <div className="vn_outer">
                <div className="vn_inner">
                  <div className="vn_icon_square bck_yellow"></div>
                  <div className="vn_icon">
                    <Image
                      src="/images/icons/location.png"
                      width={50}
                      height={50}
                      alt="Location"
                    />
                  </div>
                  <div className="vn_title">Event Location</div>
                  <div className="vn_desc">375 Deer Oak, Oakland, CA 98355</div>
                </div>
              </div>
            </div>
          </Zoom>
        </div>
      </div>
    </div>
  )
}

export default VenueInfo
