import PropTypes from 'prop-types';
import Style from "./SearchBar.module.css"
import {Component } from "react"

class SearchBar extends Component {
  state = {
    search: ""
  }
  changeInput = ({target}) => {
  const {value, name} = target;
        this.setState({
            [name]: value
        })
  }
  submitForm = (e) => {
    e.preventDefault();
    const { updateSearch } = this.props;
   updateSearch({...this.state})
  }
 

render (){
    return (
    <form className={Style.form} onSubmit={this.submitForm}>
    <input
      className={Style.input}
      type="text"
      name="search"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={this.changeInput}
    />
    <button type="submit" className={Style.button}>
      <span className={Style.buttonLabel}>Search</span>
    </button>
  </form>
        )}
}
SearchBar.propTypes = {
updateSearch: PropTypes.func
}
export default SearchBar