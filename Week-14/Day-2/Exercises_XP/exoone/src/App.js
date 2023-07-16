import UserFavoriteAnimals from './UserFavoriteAnimals'
import Exercise from './Exercise3'
import './App.css';

function App() {
  const user = {
    firstName: 'Bob',
    lastName: 'Dylan',
    favAnimals : ['Horse','Turtle','Elephant','Monkey']
  };

  const myelement = <h1>I Love JSX!</h1>;
  const sum = 5+5;

  return(
      <>
          <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <p>Hello World</p>
            <p>{myelement}</p>
            <p>"React is {sum} times better with JSX"</p>
          </div>
          <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <h3> user first name is:  {user.firstName} </h3>
            <h3> user last name is: {user.lastName} </h3>
            <UserFavoriteAnimals fav_animals= {user.favAnimals}/>
          </div>
          <div style={{border: '2px solid black', padding: '10px', margin: '10px'}}>
            <Exercise/>
          </div>
      </>
  )
}

export default App;
