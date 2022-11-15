import axios from "axios"
import { useEffect, useState } from "react"
import {Comment} from '../components/Comment'

export const Comments = () => {

  const [comments, setComments] = useState([]);

  useEffect(() => {
    const URL = "https://jsonplaceholder.typicode.com/comments";
    const getComments = async () => {
      const { data } = await axios.get(URL);

      setComments(data);
    }
    getComments();
  }, [])

  return (<ul>
    {comments.map((object, index) => <Comment key={index} commentObject={object}/>)}
  </ul>
  )
}