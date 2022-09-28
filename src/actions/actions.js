const booksRequested = () => {
    return {
        type: 'FETCH_BOOKS_REQUEST'
    };
};

const booksLoaded = (newBooks) => {
    return {
        type: 'FETCH_BOOKS_SUCCESS',
        payload:newBooks
    };
};

const booksError = (error) => {
    return {
      type: 'FETCH_BOOKS_FAILURE',
      payload: error
    };
};

export const bookAddedToCart = (bookID) => {
    return {
        type: 'BOOK_ADDED_TO_CART',
        payload: bookID
    };
};

export const bookRemovedFromCart = (bookID) => {
    return {
        type: 'BOOK_REMOVED_FROM_CART',
        payload: bookID
    };
};

export const AllbooksRemovedFromCart = (bookID) => {
    return {
        type: 'ALL_BOOKS_REMOVED_FROM_CART',
        payload: bookID
    };
};

// const fetchBooksOld = (bookstoreService, dispatch) => () => {
//     dispatch(booksRequested());
//     bookstoreService.getBooks()
//         .then((data) => dispatch(booksLoaded(data)))
//         .catch((err) => dispatch(booksError(err)));
// };

const fetchBooks = (bookstoreService) => () =>(dispatch)=> {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((err) => dispatch(booksError(err)));
};

export {
    fetchBooks
};