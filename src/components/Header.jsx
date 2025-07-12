import  { useEffect, useState } from 'react';
import '../styles/Header.css';
import { useLocation,useNavigate } from 'react-router-dom';

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
  const navigate=useNavigate();
  const { pathname, search } = useLocation();
  const params = new URLSearchParams(search);
  const initialCurrency=params.get("curr") || "USD";
  const[currency,setCurrency]=useState(initialCurrency);

  useEffect(()=>{
    const params=new URLSearchParams(search);
    const currPageUrl=params.get("curr") || "USD";
    setCurrency(currPageUrl);
  },[search])

   const handleCurrencyChange = (e) => {
    const newCurr = e.target.value;
    setCurrency(newCurr);
    params.set('curr', newCurr);    
    navigate({ pathname, search: params.toString()});
  };
  return (
    <header className="header bg-blue-900 text-white flex items-center justify-between px-6 py-4">
      <div className="flex items-center space-x-4">
        <div className="logo text-2xl font-bold">TIRUN Just Cruise</div>
        <nav className="hidden lg:flex space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="hover:underline"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <select
          value={currency}
          onChange={handleCurrencyChange}
          className="bg-blue-800 text-white p-1 rounded"
        >
          {CURRENCIES.map((curr) => (
            <option key={curr} value={curr}>
              {curr}
            </option>
          ))}
        </select>

        <a href="/" className="hidden md:inline-block">
          1800-11-5464
        </a>
        <button className="lg:hidden mobile-menu-button">
          <span className="hamburger-icon">☰</span>
        </button>
      </div>
    </header>
  )
}