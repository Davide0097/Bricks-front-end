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
  function handleReject() {
    localStorage.setItem('cookiesAccepted', false);
    setShowModal(false);
  }
  return (
    <div className={`fixed bottom-0 left-0 w-full p-4 bg-gray-200 z-[99999] text-center ${showModal ? 'block' : 'hidden'}`}>
      <h2 className="font-bold mb-2">Cookie Policy</h2>
      <p className="text-md mb-4 font-semibold px-20">We use cookies to provide the best experience on our website.<br/>The only personal information we collect is your name and email address, which is required for registration to our platform.<br/>We do not collect any additional personal data, and any information provided is treated with the utmost care and in compliance with relevant data protection laws.</p>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2" onClick={handleAccept}>Accept</button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2" onClick={handleReject}>Reject All</button>

      <a href="https://www.freeprivacypolicy.com/live/b080f60e-1524-44c8-bbb1-0c0dbfc8f6ac" aria-label="Complete Cookies Policy Document"className="text-blue-600 underline">Read the complete document</a>
    </div>
  );
}

export default CookiesModal; 