import './App.css';
import Actor from './Actor';
import './Actor.css'


const actors = [
  {
      firstNmae : 'Kamal',
      lastNmae : 'Loudini',
      image : 'https://img.mensxp.com/media/content/2019/Apr/background-dancers-who-became-known-bollywood-actors1400-1556545997.jpg'
  },
  {
      firstNmae : 'Anas',
      lastNmae : 'Hadif',
      image : 'https://stylesatlife.com/wp-content/uploads/2021/03/Famous-Bollywood-Actor-Actor-Ajay-Devgan.jpg.webp'
  },
  {
      firstNmae : 'Anas',
      lastNmae : 'Hadif',
      image : 'https://images.all-free-download.com/images/graphiclarge/bruce_willis_celebrity_actor_217250.jpg'
  }
]
function App() {
  return (
<div className='list'>
    {actors.map((act) => (<Actor act={act} />) )}

    </div>
  );
}

export default App;


