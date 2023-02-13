import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import Card from './components/Card';
import { useState, useEffect } from 'react';
import ImageSearch from './components/ImageSearch';


function App() {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIX_API_KEY}&q=${term}&image_type=photo&pretty=true`)
      .then(response => response.json())
      .then(data => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  }, [term])


  return (
    <div className="App">
      <Header />
      <Nav />
      <div>
        <div>
          <ImageSearch searchText={(text) => setTerm(text)} />
          {isLoading ? <h1>Loading</h1> :
            <div>{images.map(image => (
              <Card key={image.id} image={image} />
            ))}
            </div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;