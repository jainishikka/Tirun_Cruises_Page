import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-gray-100 text-gray-700 p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} TIRUN. All rights reserved.</p>
        <p className="mt-2">
          <a href="https://www.tirun.com/privacy_policy" className="underline">Privacy Policy</a> |
          <a href="https://www.tirun.com/terms_and_conditions" className="underline">Terms & Conditions</a>
        </p>
      </div>
    </footer>
  )
}