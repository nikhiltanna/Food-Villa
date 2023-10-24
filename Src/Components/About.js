import {Outlet} from 'react-router-dom'
import ProfileFuntionalComponent from './Profile';
import Profile from './ProfileClass'
const About=()=>{
    return (
        <>
        <h1>About Us Page</h1>
        <p>
            This is the namaste react live course chapter 07- Finding the path
        </p>
        <ProfileFuntionalComponent/>
       <Profile name={"Classcompoent"} xyz={"abc"}/>
        </>
    )
}

export default About;