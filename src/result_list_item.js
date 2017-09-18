import React from 'react'
import './listItem.css'

const ListItem = (props) => {

  return (
    <li>
      <a href={props.data.link} target='_blank'>
        <div className='listItem'>
          <h2>
            {props.data.title}
          </h2>
          <p>
            {props.data.excerpt}
          </p>
        </div>
      </a>
    </li>
  )
}

export default ListItem
