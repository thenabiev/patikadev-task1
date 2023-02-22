
import axios from 'axios';


const getData=async(id)=>{

    const user=await axios(`https://jsonplaceholder.typicode.com/users/${id}`);
    const post=await axios(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

    const process=user + " " + post

    console.log(process);
    return process
    
}
export default getData