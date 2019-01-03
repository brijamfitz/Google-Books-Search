import React, { Component } from "react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import BookDetail from "../components/BookDetail";
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

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Saved Books">
                {this.state.books.map(book => (
                  <BookDetail
                    key={book._id}
                    src={book.src}
                    title={book.title}
                    authors={book.authors}
                    date={book.date}
                    description={book.description}
                    link={book.link}
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
