import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Image } from 'semantic-ui-react';
import ImgItem from "./ImgItem";

import getMangaList from "../actions/getMangaList";

class ImgList extends Component {

  constructor(props) {
    super(props);
  
    this.props.getMangaList();
  }


  // why render called twice
  // 1. it is empty value in reducer
  // 2. getMangaList actually fires and dispatch an action. This causes re-render.
  render() {
    
    /*
    let output = this.props.propList.map((value, key) => {
      console.log(value);
    });
    */
    
    let myList;
    
    // take a while to get data
    if(this.props.propList.list.data === undefined) {
      //console.log("no there yet");
      myList = "Loading...................";
    }
    else {
      let manga = this.props.propList.list.data.manga;
      //console.log(this.props.propList.list.data.manga);
      let tmpMyList = manga.map((val, key) => {
      
        let imgUrl;
        if(val.im !== null) {
          imgUrl = "http://cdn.mangaeden.com/mangasimg/" + val.im;
        }
        else {
          imgUrl = "http://placehold.it/350x150?text=Empty";
        }
        
        //let mangaUrl = "https://www.mangaeden.com/api/manga/" + val.i
        let mangaUrl = "http://www.mangaeden.com/en/en-manga/" + val.a
        
        return (
          <Grid.Column key={key}>
            <Image 
              src={imgUrl} 
              as="a"
              size="medium"
              href={mangaUrl}
              target='_blank'
            />
            <div>{val.t}, {val.h}</div>
          </Grid.Column>
        )  
      });
      
      myList = 
        <Grid columns={3}>
          { tmpMyList }
        </Grid>
    }
    
    return (
      <div>
        <h2>img list</h2>
        { myList }
      </div>
    );
  }
}

function mapStateToProps(state) {

  return { 
    propList: state.list
  };
}

export default connect(mapStateToProps, { getMangaList })(ImgList);
