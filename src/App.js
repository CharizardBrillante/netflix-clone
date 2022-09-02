import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import MyNav from './components/MyNav';
import Slider from './components/Slider';
import Footer from './components/Footer';
import { Component } from 'react';



class App extends Component {
  state = {
    movies: {
        harryPotter : [],
        starWars : [],
        pirates : []
    },
}
getData() {
    fetch('http://www.omdbapi.com/?apikey=658f9c38&s=harry%20potter')
    .then(res => res.json())
    .then((res) => {this.setState({ movies: {...this.state.movies, harryPotter: res.Search}}); console.log('harry potter: ',res.Search)})
    .catch((err) => {console.log(err)})

    fetch('https://www.omdbapi.com/?apikey=658f9c38&s=pirates%20of%20the%20caribbean')
    .then(res => res.json())
    .then((res) => {this.setState({ movies: {...this.state.movies, pirates: res.Search}}); console.log('pirates:', res.Search)})
    .catch((err) => {console.log(err)})

    fetch('https://www.omdbapi.com/?apikey=658f9c38&s=star%20wars')
    .then(res => res.json())
    .then((res) => {this.setState({ movies: {...this.state.movies,starWars: res.Search}}); console.log('star wars:', res.Search)})
    .catch((err) => {console.log(err)})
}


componentDidMount() {
    this.getData();
}

  render() {
    return (
      <div className="App">
        <MyNav></MyNav>
        <Slider 
          movies={this.state.movies.harryPotter}
          slider='harryPotter'
          title='Harry Potter'>
        </Slider>
        <Slider 
          movies={this.state.movies.starWars}
          slider='starWars'
          title = 'Star Wars'>
        </Slider>
        <Slider 
          movies={this.state.movies.pirates}
          slider='pirates'
          title = 'Pirates of the Caribbean'>
        </Slider>
        <Footer></Footer>
      </div>
    )
  };
}

export default App;
