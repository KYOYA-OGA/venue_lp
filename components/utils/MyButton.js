import React from 'react'
import Button from '@material-ui/core/Button'

// import TicketIcon from '/images/icons/ticket.png'
import Image from 'next/image'

const MyButton = (props) => {
  return (
    <Button
      href={props.link}
      variant="contained"
      size={props.size ? props.size : 'large'}
      style={{ background: '#8e8e8e', color: '#fff', ...props.style }}
    >
      {props.iconTicket && (
        <Image
          src="/images/icons/ticket.png"
          className="iconImage"
          alt="ticket"
          width={50}
          height={50}
        />
      )}
      {props.text}
    </Button>
  )
}

export default MyButton
