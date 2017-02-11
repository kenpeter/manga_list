import React, { Component } from 'react';
import { connect } from "react-redux";
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
      myList = manga.map((val, key) => {
        return <ImgItem key={key} title={val.t} hit={val.h} />
      });
      
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
