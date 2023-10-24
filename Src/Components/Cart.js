import {useDispatch} from 'react-redux';
import {clearcart} from  '../utils/cartslice'
const Cart =()=>
{
    const dispatch = useDispatch();
    const handleclearcart = ()=>{
        dispatch (clearcart());
    }

    return(
        <div>
            <button onClick={()=>handleclearcart()}>Clear Cart</button>
        </div>
    )

}
export default Cart;