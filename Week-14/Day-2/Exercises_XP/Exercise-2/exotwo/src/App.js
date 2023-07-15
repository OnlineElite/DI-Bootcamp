
import './App.css';
import UserFavoriteAnimals from './Animals'

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };
  return (
    <>
      <h3> user first name is:  {user.firstName} </h3>
      <h3> user last name is: {user.lastName} </h3>
      <UserFavoriteAnimals fav_animals= {user.favAnimals}/>
    </>   
  );
}

export default App;
