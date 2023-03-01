import { useState, useEffect } from 'react';

 function CookiesModal() {

  const [showModal, setShowModal] = useState(false);

  // Check if the user has already accepted cookies
  useEffect(() => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted');
    if (!cookiesAccepted) {
      setShowModal(true);
    }
  }, []);

  // Handle click on accept button
  function handleAccept() {
    localStorage.setItem('cookiesAccepted', true);
    setShowModal(false);
  }

  return (
    <div className={`fixed bottom-0 left-0 w-full p-4 bg-gray-200 text-center ${showModal ? 'block' : 'hidden'}`}>
      <h2 className="font-bold mb-2">Cookie Policy</h2>
      <p className="text-sm mb-4 font-semibold">We use cookies to provide the best experience on our website. By continuing to browse the site, you agree to our use of cookies.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2" onClick={handleAccept}>Accept</button>
      <a href="https://www.freeprivacypolicy.com/live/b080f60e-1524-44c8-bbb1-0c0dbfc8f6ac" aria-label="Complete Cookies Policy Document"className="text-blue-600 underline">Read the complete document</a>
    </div>
  );
}

export default CookiesModal;