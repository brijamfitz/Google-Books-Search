import React, { Component } from "react";
// import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
// import DeleteBtn from "../components/DeleteBtn";
// import { List, ListItem } from "../components/List";
// import { Link } from "react-router-dom";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  // When this component mounts, search for the default book
  // componentDidMount() {
  //   this.setState({ books: [] });
  // }

  // Searches the GoogleBooks API and stores data in books array
  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
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

  // Deletes book from database
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  // Saves book to database
  handleSaveBook = bookData => {
    // event.preventDefault();
    // console.log(this.state.books);
    API.saveBook(bookData)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Card heading="Google Books Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card>
                {this.state.books.map(book => (
                  <BookDetail
                    key={book.id}
                    src={book.volumeInfo.imageLinks 
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "data:image/png;base64,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"}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors}
                    date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSaveBook={() => this.handleSaveBook({ 
                      title: book.volumeInfo.title,
                      src: book.volumeInfo.imageLinks.thumbnail,
                      authors: book.volumeInfo.authors,
                      date: book.volumeInfo.publishedDate,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink})}
                  />
                ))}
                
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
