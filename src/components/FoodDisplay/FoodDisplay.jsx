import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem'

const FoodDisplay = ({category}) => {

    const {food_list} = useContext(StoreContext)

  return (
    <div className='food-display' id='food-display'>
      <h2>Top deashes near you</h2>
      <div className="food-display-list">
        {food_list.map((item,index)=> {
          // {console.log(item._id,`this is the id of ${item.name}`)}
          if(category === '' || category === item.category){
            return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
          } 
        })}
      </div>
    </div>
  )
}

export default FoodDisplay
