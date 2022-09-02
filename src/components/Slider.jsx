import { Component } from 'react';
import { ChevronLeft, ChevronRight } from 'react-bootstrap-icons';

class Slider extends Component {
    scrollRight(sliderName) {
        let slider = document.querySelector(`#${sliderName}`);
        let slide = setInterval(()=> slider.scrollLeft += 2, 1)
        setTimeout(()=> clearInterval(slide), 500)
    }
    
    scrollLeft(sliderName) {
        let slider = document.querySelector(`#${sliderName}`);
        let slide = setInterval(()=> slider.scrollLeft -= 2, 1)
        setTimeout(()=> clearInterval(slide), 500)
    }
    render() {
        return(
            <div className='slider-container'>
                <h4>{this.props.title}</h4>
            <div className="container" >
                <a className='scrollLeft' href="#left" onClick={()=>this.scrollLeft(this.props.slider)}>
                    <ChevronLeft color="white" size={50}/>
                </a>
                
                <div id={this.props.slider} className="slider">
                    {this.props.movies.map(movie => (
                        <div className="movie-card" key={movie.imdbID}>
                            <img className="poster" src={movie.Poster} alt="movie card"/>
                        </div>
                    ))}
                </div>
                <a className='scrollRight' href="#right" onClick={()=>this.scrollRight(this.props.slider)}>
                    <ChevronRight color="white" size={50}/>
                </a>
            </div>
            </div>

            
        )
    }
}

export default Slider;