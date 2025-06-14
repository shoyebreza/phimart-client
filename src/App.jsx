
import List from './components/list'
import FirstComponent from './FirstComponent'

function App() {
  const fruits = ['Apple','Banana','Orange','Grapes','Mango','Pineapple'];
  const cities = ['Dhaka','Khulna','Barisal','Sylhet','Chattogram','Rajshahi'];
  return (
    <>
      <FirstComponent></FirstComponent>
      <List items={fruits} heading="Fruites"/>
      <List items={cities} heading="Cities"/>
    </>
  );
};

export default App;
