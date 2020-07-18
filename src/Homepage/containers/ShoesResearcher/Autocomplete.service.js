
export const getSuggestions = (research, shoesList) => {
  const inputValue = research.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : shoesList.filter(shoes =>
    shoes.name.toLowerCase().slice(0, inputLength) === inputValue
  );
}
