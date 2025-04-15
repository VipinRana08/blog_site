import React, { useState } from 'react';
import service from '../springboot backend/service';

function FloatingChatBot() {
    const [open, setOpen] = useState(false);
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);

    const toggleChat = () => {
        setOpen(!open);
    };

    const handleSubmit = async () => {
        if (!input.trim()) return;
        setLoading(true);

        try {
        
        const res = await service.getAiResponse(input);
        setResponse(res); 
        setTimeout(() => {
            
            setLoading(false);
        }, 1000);
        } catch (err) {
        console.error(err);
        setResponse('Something went wrong.');
        setLoading(false);
        }
    };

    return (
        <>
        {/* Floating Action Button */}
        <button
            onClick={toggleChat}
            className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 text-white text-2xl rounded-full shadow-lg hover:bg-blue-700 transition duration-200 z-[9999]"
            >
            💬
        </button>

        {/* Chat Panel */}
        {open && (
            <div className="fixed bottom-24 right-6 w-80 bg-white shadow-xl rounded-lg p-4 border border-gray-200 z-[9999]">
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask something..."
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={handleSubmit}
                className="mt-2 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
            >
                {loading ? 'Loading...' : 'Send'}
            </button>

            {response && (
                <div className="mt-3 max-h-40 overflow-y-auto p-3 bg-gray-100 rounded-md text-sm text-gray-800">
                {response}
                </div>
            )}
            </div>
        )}
        </>
    );
}

export default FloatingChatBot;
