import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../../assets/Logo_imi_horizontal.png";
import './header.css'

export const Header = () => {
  return (
    
      <>
        <div className="header">
          <div className="header-logo">
            <img src={Logo} alt="logo" />
          </div>
          <div className="header-menu">
              <span><Link to="/form" style={{ textDecoration: 'none', color: 'black' }}>Форма</Link></span>
              <span><Link to="/preview" style={{ textDecoration: 'none', color: 'black' }}>Превью</Link></span>             
          </div>
        </div>
      </>
    
  );
};
