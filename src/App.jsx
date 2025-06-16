
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  
  const handleClick =()=> console.log('button');
  return (
    <>
      <Alert color='success'/>
      <Button handleClick={handleClick} color="info">My Button</Button>
    </>
  );
};

export default App;
