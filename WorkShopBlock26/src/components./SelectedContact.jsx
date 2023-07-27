import {useState} from 'react';  
import React, {useEffect} from "react";

const API_URL = `https://jsonplaceholder.typicode.com/users`

const SelectedContact =  ({selectedContactId, setSelectedContactId})=>{
    const [contact, setContact] = useState(null);
    useEffect(() => {
        const fetchContact  = async () => {
          try {
            const response = await fetch(`${API_URL}/${selectedContactId}`);
            const data = await response.json();
            setContact(data); 
          } catch (error) {
            console.error(error);
          }
        }

        fetchContact();
        
      }, []);
      console.log(contact)
      return (
        <div></div>
      )
    }
   
export default SelectedContact