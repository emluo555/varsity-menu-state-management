import React, { useState } from 'react'

const MenuItem = props => {
  const[isClicked, setIsClicked] = useState(false);

  const handleClick = event => {
    if(!isClicked) {
      props.addPurchasedItem({
        name: props.name,
        price: props.price,
      })
    } else {
      props.removePurchasedItem(props.name);
    }
    
    setIsClicked(!isClicked);

  };

  return (
  <button className = {isClicked ? 'menu-item selected' : 'menu-item'} onClick = {handleClick} >
    <img src={props.picture} alt={props.name} />
    <dt>{props.name}</dt>
    <dd>{props.price}</dd>
  </button>
  )
}
export default MenuItem
