// TODO: Create action creators as defined in tests

const addQuote = (quote) => {
  return {type: "ADD_QUOTE", quote: {...quote, votes: 0}}
}

const removeQuote = quoteID => {
  return {type: REMOVE_QUOTE}, quoteID}
}
