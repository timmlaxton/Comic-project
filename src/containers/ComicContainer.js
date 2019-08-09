import React from 'react';
import ComicSelector from '../components/ComicSelector';
import ComicDetail from '../components/ComicDetail';

class ComicContainer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      comics: [],
      currentComic: null
    };
    this.handleComicSelected = this.handleComicSelected.bind(this);
  }

  handleComicSelected(index){
    const selectedComic = this.state.comics[index];
    this.setState({currentComic: selectedComic});
  }

  componentDidMount(){
    const url = "https://comicvine.gamespot.com/api/characters/?api_key=d4cf1acf1f8989ab2e5d196ce2dd5e97c87fbe1d&format=json&sort=name";

    fetch(url
      , {
    // // //   method:'GET',
    //   mode:'no-cors'
    credentials:'include'
    }
  )
    .then(res => res.json())
    .then(comics => {this.setState({comics:comics.results})
      console.log(comics);
    })
    .catch(err => console.err);
}

    render(){
      console.log('comics',this.state.comics)
      return(
        <div>
        <h2>Select a character</h2>
        <ComicSelector onComicSelected={this.handleComicSelected}
        comics={this.state.comics}
        />
        <ComicDetail comic={this.state.currentComic}/>
        </div>
      );
    }
  }

export default ComicContainer;
