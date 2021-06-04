import React from 'react'
import { scroller } from 'react-scroll'
import { Drawer, List, ListItem } from '@material-ui/core'
const SideDrawer = (props) => {
  const links = [
    { where: 'featured', value: 'To Top' },
    { where: 'venueInfo', value: 'Venue Info' },
    { where: 'highlights', value: 'Highlights' },
    { where: 'pricing', value: 'Pricing' },
    { where: 'location', value: 'Location' },
  ]

  const scrollToElement = (element) => {
    scroller.scrollTo(element, {
      duration: 500,
      delay: 100,
      smooth: true,
      offset: -100,
    })
    props.onClose(false)
  }

  const renderItem = (item) => {
    return (
      <ListItem
        button
        onClick={() => scrollToElement(item.where)}
        key={item.where}
      >
        {item.value}
      </ListItem>
    )
  }

  return (
    <Drawer
      anchor="right"
      open={props.open}
      onClose={() => props.onClose(false)}
    >
      <List components="nav">{links.map((item) => renderItem(item))}</List>
    </Drawer>
  )
}

export default SideDrawer
