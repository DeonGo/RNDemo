import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class componentName extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading:true,
      movieArray: [],
      title:"",
    }
  }

  async fetchMovies() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();
      let movieArray = [];
      let i = 0;
      responseJson.movies.map(function (movie) {
        movieArray.push({
          key: i,
          value: movie,
        })
        i++;
      })
  
      this.setState({
        movieArray:movieArray,
        isLoading:false,
        title:responseJson.title
      })
      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }

  }

  componentDidMount(){
     this.fetchMovies();
  }

  async getMoviesFromFacebookApi() {
    try {
      let response = await fetch('https://facebook.github.io/react-native/movies.json');
      let responseJson = await response.json();


      return responseJson.movies;
    } catch (error) {
      console.error(error);
    }
  }

    render() {
      if(!this.state.isLoading){
        return (
          <View>
            <Text>name:{this.state.title}</Text>
          </View>
        )
      }else{
        return(
          <View>loading...</View>
        )
      }

      
    };



  

  // async getMoviesFromFacebookApi(){
  //   try {
  //       let response = await fetch('https://facebook.github.io/react-native/movies.json');
  //       let responseJson = await response.json();
  //       return responseJson.movies;
  //   } catch (error) {
  //       console.error(error);
  //   }
  // }
};



