
import './App.css';

function App() {
  return (
   <div className='Navbar'>
    <div className='logo'>
    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 13c0 2.038-2.239 4.5-5 4.5S7 15.038 7 13c0 1.444 10 1.444 10 0Z"/>
  <path fill="currentColor" d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"/>
  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m9 6.811.618 1.253 1.382.2-1 .975.236 1.377L9 9.966l-1.236.65L8 9.239l-1-.975 1.382-.2L9 6.811Zm6 0 .618 1.253 1.382.2-1 .975.236 1.377L15 9.966l-1.236.65L14 9.239l-1-.975 1.382-.2L15 6.811Z"/>
</svg>

    </div>
    <div className='inputs'>
      <li>Product</li>
      <li>Download</li>
      <li>Solutions</li>
      <li>Resources</li>
      <li>Pricing</li>
    </div>
    <div className='login'>
      <button>Request a demo</button>
      <button>Log in</button>
      <button>Get free account</button>
    </div>
   </div>
  );
}

export default App;
