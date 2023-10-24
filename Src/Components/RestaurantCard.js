

  
  export const RestaurantCard=({name,cuisines,totalRatingsString,cloudinaryImageId} )=>
  {
    {/*console.log(restaurant);*/}
  {/* const{name,cuisines,totalRatingsString,cloudinaryImageId}=restaurant.data;*/}
    return (
      <div className="card">
        {<img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
      cloudinaryImageId}></img>}
        <h2>{name}</h2>
       { <h3>{cuisines.join(",")}</h3>}
        <h4>{totalRatingsString} minutes</h4>
        
      </div>
    )
  }
