
import './App.css';


function App() {


  const fetchData = async () =>{
    
    try{
      const url = 'https://webhook.site/1fefe3f8-9306-4931-811f-dab910dc9ac0';
  
      const data = {
        key1: 'myusername',
        email: 'mymail@gmail.com',
        name: 'Isaac',
        lastname: 'Doe',
        age: 27
      };
  
      const header = {
        method: 'POST',
        headers: { 'Content-Type':'application/json'},
        body: JSON.stringify(data)
      };
      
      const response = await fetch(url ,header );
      console.log('data fetched', response );
    }
    catch(err){
      console.error(err)
    }
  }
  
  return (
    <div className="App">
      <p>Click on the button below and open the chrome DevTool to see the data fetched.</p>
      <button onClick={fetchData} >Press me to post some data </button>
    </div>
  );
}

export default App;
