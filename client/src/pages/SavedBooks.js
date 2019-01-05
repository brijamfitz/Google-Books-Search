import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SavedBookDetail from "../components/SavedBookDetail";
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

  // Loads all books (called in promise after user deletes book)
  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data })
      )
      .catch(err => console.log(err));
  };

  // Deletes a book by its MongoDB id
  handleDeleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Saved Books">
                {this.state.books.map(book => (
                  <SavedBookDetail
                    key={book._id}
                    src={book.src 
                      ? book.src 
                      : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"}
                    title={book.title
                      ? book.title
                      : "No Title Available"}
                    authors={book.authors
                      ? book.authors.join(", ")
                      : "No Authors Available"}
                    date={book.date
                      ? book.date
                      : "No Date Available"}
                    description={book.description
                      ? book.description
                      : "No Description Available"}
                    link={book.link
                      ? book.link
                      : "No Link Available"}
                    handleDeleteBook={() => this.handleDeleteBook(book._id)}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Saved Books"></Card>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedBooks;
