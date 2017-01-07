export function selectBook(book) {
  // selectBook is an ActionCreator. It needs to return an action,
  // which is an object with a type property.
  return {
    type: 'BOOK_SELECTED',
    payload: book,
  };
}
