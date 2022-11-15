
export const Comment = ({commentObject}) => {

  const style = {
    "text-align": "left",
    "margin": "30px 0"
  }

  return (
    <li className="comment" style={style}>
      <p><strong>Comentario nro {commentObject.id}</strong></p>
      <p>{commentObject.name}</p>
      <p>{commentObject.body}</p>
      <p>{commentObject.email}</p>
    </li>
  )
}