import React, {useState} from 'react';
import Autosuggest from 'react-autosuggest'
import {getSuggestions} from "./ShoesResearcher.service";
import './ShoesResearcher.style.css'

const shoes = [
  { brand: 'Nike', name: 'Air MAX 90', year: 2010 },
  { brand: 'Nike', name: 'Air Force 1', year: 2015 },
  { brand: 'Nike', name: 'Zoom Fly 3', year: 2019 },
  { brand: 'Nike', name: 'Lebron 17 Low', year: 2020 },
  { brand: 'Nike', name: 'Pegasus 37', year: 2019 },
  { brand: 'Nike', name: 'Kiger 6', year: 2019},
  { brand: 'Adidas', name: 'Stan smith', year: 2017},
  { brand: 'Adidas', name: 'Superstar', year: 2019},
];

export const ShoesResearcher = ({setSelectedShoes}) => {
  const [research, setResearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const onChange = (event, {newValue}) => setResearch(newValue);
  const onSuggestionsFetchRequested = ({ value }) => setSuggestions(getSuggestions(value, shoes));
  const onSuggestionsClearRequested = () => setSuggestions([]);
  const onSuggestionSelected = (_, { suggestion }) => setSelectedShoes(suggestion);
  const getSuggestionValue = (suggestion) => suggestion.name;
  const renderSuggestion = suggestion => (
    <div>
      {suggestion.brand} | {suggestion.name}
    </div>
  );

  const inputProps = {
    placeholder: 'Research a shoes model',
    value: research,
    onChange: onChange
  };

  return (
    <div className="shoes-researcher">
      <Autosuggest
        suggestions={suggestions}
        onSuggestionSelected={onSuggestionSelected}
        onSuggestionsFetchRequested={onSuggestionsFetchRequested}
        onSuggestionsClearRequested={onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
    </div>
  )
}
