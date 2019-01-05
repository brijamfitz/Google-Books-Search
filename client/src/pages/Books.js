import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

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
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Card heading="Search">
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
              <Card heading="Search Results">
                {this.state.books.map(book => (
                  <BookDetail
                    key={book.id}
                    src={book.volumeInfo.imageLinks 
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "N/A"}
                    date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSaveBook={() => this.handleSaveBook({ 
                      title: book.volumeInfo.title,
                      src: book.volumeInfo.imageLinks 
                        ? book.volumeInfo.imageLinks.thumbnail 
                        : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                      authors: book.volumeInfo.authors,
                      date: book.volumeInfo.publishedDate,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink})}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Search Results"></Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
