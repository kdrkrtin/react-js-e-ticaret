import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories").then(response => response.json()).then(data => this.setState({categories:data}));
  }
  render() {
    return (
      <div>
        <h3> {this.props.info.title} </h3>
        <ListGroup>
          {this.state.categories.map(abbba => (
            <ListGroupItem active={abbba.categoryName === this.props.categoryCurrent?true:false}
              onClick={() => this.props.changeCategory(abbba)}
              key={abbba.id}
              id={abbba.id}
            >
              {abbba.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* {<h4> {this.props.categoryCurrent} </h4>} */}
      </div>
    );
  }
}
