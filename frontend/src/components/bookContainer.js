import React from 'react'
import PropTypes from 'prop-types'

class BookContainer extends React.Component {
  render () {
    console.log(this.props.data)
    const book = JSON.parse(this.props.data.book)
    return (
      <div className='book-container col-12 col-md-4 col-lg-2'>
          <div className='inner-book-container' key={this.props.data._id} id={this.props.data._id} >
            <div className="book-title font-weight-bold">
              <h5>{book.title}</h5>
            </div>
            <div className="book-author font-italic">
              <h6>{book.authors[0].name}</h6>
            </div>
            <div className="book-isbn">
              <p>{book.identifiers.isbn_13}</p>
            </div>
            {/*
            // <div className="book-current-user">
            //   <p>{this.props.data.users[0]}</p>
            // </div>
            */}
          </div>
      </div>
    )
  }
}

BookContainer.propTypes = {
  data: PropTypes.object

}

export default BookContainer
