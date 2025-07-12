import styles from './Header.module.css';
import movielogo from '../../assets/movie logo.png'; // rename to no spaces recommended
import crown from '../../assets/crown.png';
import searchIcon from '../../assets/search.png';
import userIcon from '../../assets/user.png';
import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import LoginModal from '../user/LoginModal';

const Header = () => {
  const [query, setQuery] = useState('');
  const [user, setUser] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();

  const navlinks = ["Home", "Sports", "Movies", "Tv Shows", "Kids"];

  useEffect(() => {
    const stored = localStorage.getItem('muuvizUser');
    if (stored) setUser(stored);
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleUserClick = () => {
    if (user) {
      const confirmed = window.confirm("Do you want to log out?");
      if (confirmed) {
        localStorage.removeItem('muuvizUser');
        setUser(null);
      }
    } else {
      setShowLogin(true);
    }
  };

  return (
    <div>
      <header className={styles.Header}>
  <nav className={styles.navigation}>
    
    {/* Left Section: Logo + Title + Premium */}
    <div className={styles.leftSection}>
      <img src={movielogo} className={styles.logo} alt="Muuviz logo" />
      <p className={styles.title}><b>Muuviz</b></p>
      <div className={styles.premium}>
        <img src={crown} alt='premium' />
        <p>Go premium</p>
      </div>
    </div>

    {/* Center Section: Nav Links */}
    <ul className={styles.navlinks}>
      {navlinks.map(link => (
        <li key={link} className={styles.navlink}>
          <Link to={link === "Home" ? "/" : `/category/${link.toLowerCase().replace(" ", "_")}`}>
            {link}
          </Link>
        </li>
      ))}
    </ul>

    {/* Right Section: Search + User */}
    <div className={styles.rightSection}>
      <div className={styles.searchbox}>
        <img className={styles.searchicon} src={searchIcon} alt='search' />
        <input
          type='text'
          placeholder='Search movies, shows...'
          className={styles.textbox}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
        />
      </div>

      <div className={styles.userinfo} onClick={handleUserClick}>
        <img src={userIcon} alt='user' className={styles.user} />
        {user && <span className={styles.email}>{user}</span>}
      </div>
    </div>

  </nav>
</header>

{showLogin && (
  <LoginModal
    onClose={() => setShowLogin(false)}
    onLogin={(email) => {
      setUser(email);
      localStorage.setItem('muuvizUser', email);
    }}
  />
)}

    </div>
  );
};

export default Header;
