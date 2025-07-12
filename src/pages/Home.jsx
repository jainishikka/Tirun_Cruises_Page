import '../styles/Home.css';
import cruiseData from '../data/cruiseData';
import Header from "../components/Header.jsx"
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const location=useLocation();
  
  const params=new URLSearchParams(location.search);
  
  const curr = params.get('curr') || 'USD';  

  return (
    <div className="home-page">
      <Header/>
      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold mb-4">Our Cruise Lines</h1>
        <p className="mb-8">
          With exclusive deals from our partners &mdash; Royal Caribbean, Celebrity Cruises, Silversea, Azamara Cruises &mdash; get a holiday experience that involves activities beyond your imagination.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {
            cruiseData?.map((data)=>{
                const query = encodeURIComponent(`${data.name} ${curr}`);                               
                const url = `https://www.google.com/search?q=${query}`;
              return <div key={data.id} className="card border rounded-lg overflow-hidden shadow-md">
            <img src={data.image} alt={data.alt} className="w-full h-48 object-auto" />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{data.name}</h2>
              <p className="text-sm mb-4">
                {data.description}
              </p>
              <a href={url} target='_blank' className="btn-explore inline-block px-4 py-2 bg-black text-white rounded">Explore</a>
            </div>
          </div>
            })
          }
        </section>
      </main>
      <Footer/>
    </div>
  );
}
