
import Button from './components/Button';
import List from './components/list'
import FirstComponent from './FirstComponent'

function App() {
  const fruits = ['Apple','Banana','Orange','Grapes','Mango','Pineapple'];
  const cities = ['Dhaka','Khulna','Barisal','Sylhet','Chattogram','Rajshahi'];
  
  const handleClick =()=> console.log('button');
  return (
    <>
      <FirstComponent></FirstComponent>
      <List items={fruits} heading="Fruites"/>
      <List items={cities} heading="Cities"/>
      <Button handleClick={handleClick} color="info">My Button</Button>
    </>
  );
};

export default App;
