import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3000/categories")
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }
  render() {
    return (
      <div className="category-list">
        <div className="category-head">
          <h3 className="mb-4"> {this.props.info.title} </h3>
        </div>
        <ListGroup>
          {this.state.categories.map(category => (
            <ListGroupItem active={category.categoryName === this.props.categoryCurrent ? true : false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
              id={category.id}
            >
              {category.categoryName}
            </ListGroupItem>
          ))}
        </ListGroup>
      </div>
    );
  }
}
