import React from 'react'
import ListItem from './result_list_item'

const ResultList = (props) => {
  const ListItems = props.results[1] === undefined ? '' : props.results[1].map((title, index) => {
    const ItemData = {
      title: title,
      excerpt: props.results[2][index],
      link: props.results[3][index]
    }
    return (
      <ListItem data={ItemData} key={ItemData.title}/>
    )
  })
  return (
    <ul className='col-md-4 list-group'>
      {ListItems}
    </ul>
  )
}

export default ResultList
