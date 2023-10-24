import {useState,useEffect} from 'react'

const useRestaurants=(resid)=>
{
    const [restaurant,setRestaurant] = useState();
   
    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const data = await fetch(
            "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4455331&lng=78.3606113&restaurantId="+resid
            );
            const json= await data.json();
            //console.log(json);
            setRestaurant(json?.data?.cards[0].card.card);
        }
        return restaurant;
               
           
}

export default useRestaurants;