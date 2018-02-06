import React, {Component} from 'react'
import {Image} from 'react-native'

export default class BananasImage extends Component{
  render(){
    let picUri={uri:'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'}

    return(
      <Image source={picUri} style={{width:180, height:120}}></Image>
    )
  }
}
