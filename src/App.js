import React, { Component } from 'react';
import './App.css';
import cardImg from "./cards.json";
import CardComponent from "./component/card/card";
import Jumbotron from "./component/jumbotron/jumbotron";
import Score from './component/scoreComponent/score';
import Nav from './component/Nav/nav';
import Wrapper from './component/page/page';


class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id : [],
      score : 0,
      topScore : 0,
      cardImg
    }
  }

  //****************** function to shuffle the picture *******************//
  shuffle = (img) => {
    for(let i =0; i< img.length;i++){
      const j = Math.floor(Math.random()*(i+1));
      const temp = img[i];
      img[i] = img[j];
      img[j] = temp;
    }
    return img;
  }

  //********** function to check the top score vs score and displays the highest schore ************//
  checkScore = () => {
    console.log("testing");
    if(this.state.topScore < this.state.score){
      return this.state.score
    }else{
      return this.state.topScore
    }
  }

  //********* function handle the onClick which shuffles the images and sets the states ************//
  handleClick = (id) =>{
    if(this.state.id.includes(id)){
      console.log("End Game");
      this.setState({
        id : [],
        score: 0,
        topScore: this.checkScore(),
        cardImg: this.state.cardImg
      })
    }else{
      this.setState({
        id: [...this.state.id, id],
        score: this.state.score + 1
      })
      this.shuffle(cardImg);
    }
  }

  render() {
    return (
      
      <Wrapper>
        <Nav>
          Welcome to Game Of Thrones!
        </Nav>
        <Jumbotron>
          Please select a character you want to kill. You can't kill a character more than once
          <Score score={this.state.score} topscore={this.state.topScore}/>
        </Jumbotron>
        <div id="divContainer">
          <div className="container">    
          {
            cardImg.map((cardImg, i) => {
              const {id, url, name} = cardImg;      
              return(
                <CardComponent 
                img={url} 
                key={id} 
                id={id} 
                name={name} 
                alt="Game of Thrones Character" 
                clickfunction={() => this.handleClick(cardImg.id)}
                />
              );
            })
          }
          </div>
        </div>
      </Wrapper>

    );
  }
}

export default App;
