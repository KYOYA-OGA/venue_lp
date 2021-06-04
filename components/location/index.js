import React from 'react'

const Location = () => {
  return (
    <section className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6205.935253052243!2d-77.06379719161997!3d38.947567953956764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b7c9b787657b23%3A0x97308e093f372886!2sEllicott%20House%20Apartments!5e0!3m2!1sja!2sjp!4v1622785575388!5m2!1sja!2sjp"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        title="location"
      ></iframe>
      <div className="location_tag">
        <div>Location</div>
      </div>
    </section>
  )
}

export default Location
