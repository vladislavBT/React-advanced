import { useState, useEffect } from "react";

const url = 'https://api.github.com/users';

const FetchData = () => {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
      const fetchData = async()=>{
        try{
        const response = await fetch(url);
        const users = await response.json();
        setUsers(users);
        }catch(error){
          console.log(error);
        }
      }
      fetchData();
    },[])
    

    console.log(users);

  return <h2>fetch data example</h2>;
};
export default FetchData;
