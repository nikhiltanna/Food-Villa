
import {useEffect,useState} from 'react'
import {useParams} from 'react-router-dom';
import useRestaurants from '../utils/useRestaurants';
import { additem } from '../utils/cartslice';
import { useDispatch } from 'react-redux';

const RestaurantMenu =()=>{

    //used to read dynamic url (values)
    const {resid}=useParams();
   const restaurant = useRestaurants(resid);
   console.log(restaurant);
   const dispatch=useDispatch();
    const handleAdditems= (cusisines)=>{
        dispatch(additem(cusisines));
    }
    


    return(
        <div className="menu">
            <div>
             <h1>Restaurant id:{resid}</h1>
            <h2>{restaurant?.info?.name}</h2>
            {<img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
                        restaurant?.info?.cloudinaryImageId}></img>}
             <h3>{restaurant?.info?.city}</h3>
             <h3>{restaurant?.info?.avgRating+" stars"}</h3>
             <h3>{restaurant?.info?.costForTwoMessage}</h3>
             {restaurant?.info?.cuisines.map((dishes)=>{
                return<div>
                    <button onClick={(dishes)=>handleAdditems()}>Add items</button>
                    <h4>{dishes}</h4>
                    </div>
               
             })}
             </div>
             <div>

             </div>
            
        </div>
    )
}
export default RestaurantMenu;