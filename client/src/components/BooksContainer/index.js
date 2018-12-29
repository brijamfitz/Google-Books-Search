import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import SearchForm from "../SearchForm";
import BookDetail from "../BookDetail";
import API from "../../utils/API";

class BooksContainer extends Component {
  state = {
    src: "",
    title: "",
    authors: "",
    description: "",
    link: "",
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("the satanic bible");
  }

  searchBooks = query => {
    API.search(query)
      .then(res =>
        this.setState(
          {
            src: res.data.items[0].volumeInfo.imageLinks.thumbnail,
            title: res.data.items[0].volumeInfo.title,
            authors: res.data.items[0].volumeInfo.authors,
            description: res.data.items[0].volumeInfo.description,
            link: res.data.items[0].volumeInfo.infoLink,
            date: res.data.items[0].volumeInfo.publishedDate
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the OMDB API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card>
              <BookDetail
                src={this.state.src}
                title={this.state.title}
                authors={this.state.authors}
                date={this.state.date}
                description={this.state.description}
                link={this.state.link}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BooksContainer;
