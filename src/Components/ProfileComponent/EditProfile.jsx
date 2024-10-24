import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';

const EditProfile = () => {

    const { id } = useParams(); 
    const { user, setUser } = useAuth();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {
        const fetchUserData = async() => {
            try {
                // const response = await axios.get(`http://localhost:8000/users`);
                const response = await axios.get(`http://localhost:5000/users`);
                const matchedUser = response.data.find(u => u.id === id);
                setName(matchedUser.name);
                setEmail(matchedUser.email);
                setPassword(matchedUser.password);            
            } catch (error) {
                setMsg('user not found');
                console.log('some error occured');                
            }
        }
        fetchUserData();
    }, [id])

    const handleSubmit = async(e) => {
        e.preventDefault();
        const newUserDetails = {
            name, email, password
        }

        try {

            // await axios.put(`http://localhost:8000/users/${id}`, newUserDetails)
            await axios.put(`http://localhost:5000/users/${id}`, newUserDetails)
            setUser( { ...user, name, email, password } )
            setName('');
            setEmail('');
            setPassword('');
            setMsg('Profile updated')
            navigate('/profile'); 
        } catch (error) {
            setMsg('Some Error occured try again later');
            console.log('Some Error occured', error);
        }     
    }

    const handleCancel = () => {
        navigate('/profile');
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Name'  />
        <br />
        <label htmlFor="email">Email</label>
        <input type="email" name='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
        <br />
        <button type='submit'>Save</button>
      </form>
      <button onClick={handleCancel}>Cancel</button>
      {msg && <p>{msg}</p>}
    </div>
  )
}

export default EditProfile
