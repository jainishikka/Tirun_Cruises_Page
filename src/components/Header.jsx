import { useEffect, useState } from 'react';
import '../styles/Header.css';
import { useLocation, useNavigate } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Destinations', path: 'https://www.tirun.com/destinations' },
  { label: 'Our Cruise Lines', path: 'https://www.tirun.com/royalcaribbean' },
  { label: 'Cruise Deals', path: 'https://www.tirun.com/cruisedeals' },
  { label: 'About Us', path: 'https://www.tirun.com/about' },
  { label: 'Contact', path: 'https://www.tirun.com/contact' },
];
const CURRENCIES = ['USD', 'EUR', 'GBP', 'INR'];

export default function Header() {
  const navigate = useNavigate();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const initialCurrency = params.get('curr') || 'USD';
  const [currency, setCurrency] = useState(initialCurrency);

  useEffect(() => {
    const params = new URLSearchParams(search);
    setCurrency(params.get('curr') || 'USD');
  }, [search]);

  const handleCurrencyChange = (e) => {
    const newCurr = e.target.value;
    setCurrency(newCurr);
    params.set('curr', newCurr);
    navigate({ pathname, search: params.toString() });
  };

  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">TIRUN Just Cruise</div>

        {/* mobile checkbox toggle */}
        <input type="checkbox" id="menu-toggle" className="menu-toggle" />
        <label htmlFor="menu-toggle" className="hamburger">
          <span />
          <span />
          <span />
        </label>

        <nav className="nav-links">
          {NAV_LINKS.map((link) => (
            <a key={link.path} href={link.path}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <select
            value={currency}
            onChange={handleCurrencyChange}
            className="currency-select"
          >
            {CURRENCIES.map((curr) => (
              <option key={curr} value={curr}>
                {curr}
              </option>
            ))}
          </select>
          <a href="/" className="phone">
            1800-11-5464
          </a>
        </div>
      </div>
    </header>
  );
}
