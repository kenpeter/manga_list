import React, { Component } from 'react';
import { connect } from "react-redux";
import { Grid, Image } from 'semantic-ui-react';
import ImgItem from "./ImgItem";

import loadMore from "../actions/loadMore";

class ImgList extends Component {

  constructor(props) {
    super(props);
    
  }
  
  componentWillMount() {
    // fire action
    this.props.loadMore();
  }



  render() {
    
    //test
    //console.log("-- render --");
    //console.log(this.props.propList);
    
    
    let myList;
    
    // take a while to get data
    if(this.props.propList.length === 0) {
      //console.log("no there yet");
      myList = "Loading...................";
    }
    else {
      let manga = this.props.propList;
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
            <div>{key}, {val.t}, {val.h}</div>
          </Grid.Column>
        )  
      });
      
      myList = 
        <Grid columns={3} className="mangaContainer">
          { tmpMyList }
        </Grid>
    }
    
    return (
      <div>
        { myList }
      </div>
    );
  }
}

function mapStateToProps(state) {

  //console.log("-- start --");
  //console.log(state);

  return {
    propLoadingMore: state.loadMore.loadingMore,
    // state, reducer, prop
    propList: state.loadMore.list
  };
}

export default connect(mapStateToProps, { loadMore })(ImgList);
