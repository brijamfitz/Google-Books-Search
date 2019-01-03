import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SavedBookDetail from "../components/SavedBookDetail";
// import SaveBtn from "../components/SaveBtn";
// import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

class SavedBooks extends Component {
  state = {
    books: []
  };
  // When this component mounts, grab the books from /api/books
  componentDidMount() {
    API.getBooks()
      .then(res => this.setState(
        { 
          books: res.data 
        },
        console.log(res.data)
        )
      )
      .catch(err => console.log(err));
  }

  // NEED TO POINT TO SPECIFIC BOOK ID AND THEN RELOAD BOOKS
  handleDeleteBook = id => {
    console.log(this.state.books);
    API.deleteBook(this.state.books[0]._id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Saved Books">
                {this.state.books.map(book => (
                  <SavedBookDetail
                    key={book._id}
                    src={book.src}
                    title={book.title}
                    authors={book.authors}
                    date={book.date}
                    description={book.description}
                    link={book.link}
                    handleDeleteBook={this.handleDeleteBook}
                  />
                ))}
              </Card>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Search</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedBooks;
