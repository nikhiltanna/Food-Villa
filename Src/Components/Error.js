import {useRouteError} from 'react-router-dom'

const Error=()=>{
    const {status,statusText}= useRouteError();
    //const {status,statusText}=err;
   // console.log(err);
    return(
        <div>
            <h1>OOPS!!</h1>
            <h2>Something went wrong!!</h2>
            <h2>{status+":  "+statusText}</h2>
        </div>
    )
}

export default Error;