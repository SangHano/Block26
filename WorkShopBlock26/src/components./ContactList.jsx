import { useState }  from 'react';
import ContactRow from "./ContactRow.jsx";
import {useEffect} from "react";
const API_URL =`https://jsonplaceholder.typicode.com/users`


const dummyContacts = [
    { id:1, 
      name: "Bob", 
      phone:"111-111-1111",
      email:"bobbob@bob.com"
    },
    { id:2, 
      name: "Tob", 
      phone:"222-222-2222",
      email:"tobtob@tob.com"
    },
    { id:3, 
      name: "Gob", 
      phone:"333-333-3333",
      email:"gobgob@gob.com"
    },
  ];


  const ContactList = ({ setSelectedContactId }) => {
    
    const [contacts, setContacts] = useState([]);;
    useEffect(() => {
        const fetchContacts = async () => {
          try {
            const response = await fetch(API_URL);
            const data = await response.json();
            setContacts(data);  // Setting the state with the fetched data
          } catch (error) {
            console.error(error);
          }
        }
  
        fetchContacts();
      }, []);

    

    return (
        <table>
            <thead>
                <tr>
                    <th>Contact Lists</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Name:</td>
                    <td>Email:</td>
                    <td>Phone#:</td>
                </tr>
                {contacts.map((contact)=>{
                    return <ContactRow key={contact.id} contact={contact} setSelectedContactId={setSelectedContactId}/>;
                })}
            </tbody>
        </table>
    )
}
export default ContactList