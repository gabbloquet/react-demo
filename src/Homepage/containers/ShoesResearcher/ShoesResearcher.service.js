import Fuse from 'fuse.js'

const FUSE_OPTIONS = {
  includeScore: true,
  keys: [
    {
      name: 'brand',
      weight: 0.3
    },
    {
      name: 'name',
      weight: 0.7
    }
  ]
}

export const getSuggestions = (research, shoesList) => {
  const inputValue = research.trim().toLowerCase();
  const inputLength = inputValue.length;
  const fuse = new Fuse(shoesList, FUSE_OPTIONS)

  return inputLength === 0 ? [] : fuse.search(research).map(shoes => shoes.item);
}
