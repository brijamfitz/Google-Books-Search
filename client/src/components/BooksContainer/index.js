import React, { Component } from "react";
import Container from "../Container";
import Row from "../Row";
import Col from "../Col";
import Card from "../Card";
import SearchForm from "../SearchForm";
import BookDetail from "../BookDetail";
// import SaveBtn from "../SaveBtn";
import API from "../../utils/API";

class BooksContainer extends Component {
  state = {
    // src: "",
    // title: "",
    // authors: "",
    // date: "",
    // description: "",
    // link: "",
    // search: ""
    books: []
  };

  // When this component mounts, search for the default book
  componentDidMount() {
    this.searchBooks("harry potter");
  }

  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            // src: res.data.items[0].volumeInfo.imageLinks.thumbnail,
            // title: res.data.items[0].volumeInfo.title,
            // authors: res.data.items[0].volumeInfo.authors,
            // description: res.data.items[0].volumeInfo.description,
            // link: res.data.items[0].volumeInfo.infoLink,
            // date: res.data.items[0].volumeInfo.publishedDate
            books: res.data.items
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

  // When the form is submitted, search the GoogleBooks API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  handleSaveBook = event => {
    event.preventDefault();
    API.saveBook(this.state).then(res => {
      return res.json();
    });
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            {this.state.books.length ? (
              <Card>
                {this.state.books.map(book => (
                  <BookDetail
                    key={book.id}
                    src={book.volumeInfo.imageLinks.thumbnail}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                  />
                ))}
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
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
