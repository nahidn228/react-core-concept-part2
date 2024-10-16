const Friend = ({ friend }) => {
  //const [friend, setFriend] = useState([]);
  const { id, name, username, phone, email, website } = friend;

  return (
    <div className="box">
      <p>ID: {id} </p>
      <h4>Name : {name} </h4>
      <p>UserName : {username} </p>
      <p>Phone : {phone} </p>
      <p>Email : {email} </p>
      <p>Website : {website} </p>
    </div>
  );
};

export default Friend;
