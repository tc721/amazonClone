import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Header.css";
import { Outlet, Link } from "react-router-dom";
import { useStateValue } from '../../StateProvider';

function Header() {
const [{basket}, dispatch] = useStateValue();

  return (
    <header className="Header-Container">

        <Link to={"/"}>
          <div className="Logo"> 
          </div>
        </Link>
        

        <div className="search">
            <input 
             className="inputSearch"
            type="text" />

            <SearchIcon className='searchIcon'/>
        </div>

        <div className="Nav">
        <Link to={"/Login"}>
          <div className='subNav'>
            <span className='UsuarioSpan'>
                Usuario
            </span>

            <span className='UsuarioSpan second'>
                Sign In
            </span>
          </div>
          </Link>
          <Link to={"/checkout"}>
          <div className='subNav'>
              <span className='ComprasSpan'>
                Compras
              </span>
              <span>
                <ShoppingCartIcon className='comprasSpan'/>
                {basket.length}
                </span>
              
          </div>
          </Link>
        </div>
    <Outlet />
    </header>
  );
}

export default Header;
