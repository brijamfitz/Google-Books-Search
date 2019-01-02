import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
import DeleteBtn from "../components/DeleteBtn";
import { List, ListItem } from "../components/List";
import { Link } from "react-router-dom";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  // When this component mounts, search for the default book
  componentDidMount() {
    this.searchBooks("american pyscho");
  }

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

  // Delete book from database
  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  // Save book to database
  handleSaveBook = event => {
    event.preventDefault();
    console.log(this.state.books[0].id);
    API.saveBook({ 
      books: this.books.state 
    })
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Jumbotron>
              <h1>Search Results</h1>
            </Jumbotron>
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
                    handleSaveBook={this.handleSaveBook}
                  />
                ))}
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <h1>Search</h1>
            </Jumbotron>
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
          <Col size="md-12 sm-12">
              {this.state.books.length ? (
                <List>
                  {this.state.books.map(book => (
                    <ListItem key={book.id}>
                      <Link to={"/books/" + book._id}>
                        <strong>
                          {book.volumeInfo.title} by {book.volumeInfo.authors}
                        </strong>
                      </Link>
                      <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                    </ListItem>
                  ))}
                </List>
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
