import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Feedback = () => {

    const [feedbackData, setFeedbackData] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            try {
                // const response = await axios.get('http://localhost:9000/messages');
                const response = await axios.get('http://localhost:5000/messages');
                const feedbackItems = response.data;              
                await fetchUsers(feedbackItems); 
            } catch (error) {
                console.log('Some error occurred, try again later');
            }
        };

        const fetchUsers = async (feedbackItems) => {
            try {
                // const response = await axios.get('http://localhost:8000/users'); 
                const response = await axios.get('http://localhost:5000/users');
                const users = response.data;
        
                setFeedbackData(feedbackItems.map(item => {
                    const isUser = users.some(user => {
                        const userEmail = user.email?.trim().toLowerCase();
                        const userName = user.name?.trim().toLowerCase();
                        const feedbackEmail = item.email?.trim().toLowerCase();
                        const feedbackName = item.username?.trim().toLowerCase();
                        return userEmail === feedbackEmail && userName === feedbackName;
                    });
        
                    return {
                        ...item,
                        userType: isUser ? 'User' : 'Guest' 
                    };
                }));
            } catch (error) {
                console.log('Error fetching user data:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Feedback Table</h1>
            <div className="overflow-x-auto p-6 bg-gray-100">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                    <thead>
                        <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                            <th className="py-3 px-20 text-left w-1/4">Name</th>
                            <th className="py-3 px-6 text-left w-1/4">Email</th>
                            <th className="py-3 px-6 text-left w-1/4">User/Guest</th>
                            <th className="py-3 px-20 text-left w-1/4">Feedback</th>
                        </tr>
                    </thead>
                    <tbody className="text-gray-600 text-sm font-light">
                        {feedbackData.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                                <td className="py-3 px-20 text-left w-1/4">{item.username}</td>
                                <td className="py-3 px-6 text-left w-1/4">{item.email}</td>
                                <td className="py-3 px-6 text-left w-1/4">{item.userType}</td>
                                <td className="py-3 px-20 text-left w-1/4">{item.message}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Feedback
