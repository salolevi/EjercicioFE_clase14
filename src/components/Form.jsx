import axios from "axios";

export const Form = () => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    const URL = "https://jsonplaceholder.typicode.com/comments";
    const response = await axios.post(URL, {
      name: document.getElementById('name').value,
      body: document.getElementById('body').value,
      email: document.getElementById('email').value,
      postId: +document.getElementById('postId').value
    });
    console.log(response);
  }

  return (
    <form>
      <div><label htmlFor="">name</label>
      <input type="text" id="name"/></div>
      <div><label htmlFor="">body</label>
      <input type="text" id="body"/></div>
      <div><label htmlFor="">email</label>
      <input type="email" id="email"/></div>
      <div><label htmlFor="">post ID</label>
      <input type="number" id="postId"/></div>
      <button type="submit" onClick={handleSubmit}>Enviar</button>
    </form>
  )
}