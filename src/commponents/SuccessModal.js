const SuccessModal = ({ isVisible, onClose }) => {
    if (!isVisible) 
        return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-lg shadow-2xl p-8 text-center max-w-sm w-full">
                <div className="mb-6"><svg className="w-16 h-16 mx-auto text-yellow-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 13.3636L8.83333 17.2L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
                <h3 className="text-2xl font-bold text-gray-500 mb-2">Message Sent!</h3>
                <p className="text-gray-500 mb-6">Thank you for reaching out. We'll get back to you soon.</p>
                <button onClick={onClose} className="bg-blue-900 text-white font-bold py-2 px-6 rounded-full hover:bg-yellow-400">Close</button>
            </div>
        </div>
    );
};
export default SuccessModal;