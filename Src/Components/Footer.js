import {useContext} from 'react';
import UserContext from '../utils/UserContext';
const Footer = () => {
  const {user}=useContext(UserContext);
    return (
      <div className="footer">
        Created By
        <i className="fa-solid fa-heart"></i>
        <a href="https://www.linkedin.com/in/nikhil-tanna-39228b161/" target="_blank">
          Nikhil Tanna
        </a>
        <i className="fa-solid fa-copyright"></i>2023
        <strong>
          Food<span>Villa</span>
        </strong>
        <div>
          {user.name}{" "}
          {user.email}
        </div>
      </div>
    );
  };

  export default Footer;