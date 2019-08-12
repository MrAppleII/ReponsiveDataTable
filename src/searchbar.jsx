import React, { Component } from "react"
import styled from "styled-components"
import searchIcon from './search_icon.svg'

class SearchBar extends Component {
    constructor(props) {
      super(props)
      this.state = {
      isFocused:false,
    }
}
componentDidMount() {}
componentWillUnmount() {}


render() {
    try {
      return (
          <BarContainer className={this.state.isFocused? "isFocused" : ""}>
          <SearchIcon
           width="32px"
           height="auto"
            src={searchIcon}
          />
           <UserSearchInput 
           onFocus={()=>{this.setState({isFocused:true})}}
           onBlur={()=>{this.setState({isFocused:false})}}
           {...this.props}></UserSearchInput>
          </BarContainer>
     
      ) 
    } catch (e) {
      if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
        console.log(e)
      }
      return null
    }
  }
}
export default SearchBar
const UserSearchInput = styled.input`
width:100%;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
outline:none;
background:transparent;
border:none;
overflow:hidden;
`
const BarContainer = styled.div`
display:flex;
flex-direction:row;
justify-content:center;
align-content:center;
align-items:center;
padding:10px 10px;
border-radius:2px;
background:rgba(244,244,244,1);
border:1px solid rgba(244,244,244,1);
transition: all 0.2s ease-out;
&.isFocused{
    border:1px solid rgba(59,59,59,1);
    box-shadow: 0 0px 20px rgba(0,0,0,0.24), 0 0px 10px rgba(0,0,0,0.40);

}
`
const SearchIcon = styled.img`

`