import { useState } from 'react';

const classes = ['piano', 'drums', 'guitar', 'duduk', 'darbuka'];
const cities = ['Kyiv', 'Kharkov', 'Korsun', 'Steblev'];

export const HeroFilter = () => {
  const [subjectValue, setSubjectValue] = useState('');
  const [cityValue, setCityValue] = useState('');
  const [focusInput, setFocusInput] = useState('');
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const handleInputChange = (e) => {
    const text = e.target.value;
    let filtered = [];
    switch (e.target.id) {
      case 'subject':
        setSubjectValue(text);
        filtered = classes.filter((item) => item.toLowerCase().includes(text.toLowerCase()));
        setFilteredSuggestions(filtered);
        break;
      case 'city':
        setCityValue(text);
        filtered = cities.filter((item) => item.toLowerCase().includes(text.toLowerCase()));
        setFilteredSuggestions(filtered);
        break;

      default:
        break;
    }

    e.target.value === '' && setFilteredSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    switch (focusInput) {
      case 'subject':
        setSubjectValue(suggestion);
        setFilteredSuggestions([]);
        break;
      case 'city':
        setCityValue(suggestion);
        setFilteredSuggestions([]);
        break;

      default:
        break;
    }
  };

  const handleFocus = (e) => {
    setFocusInput(e.target.id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = document.getElementById('subject').value;
    const city = document.getElementById('city').value;
    const online = document.getElementById('radio').checked;

    console.log('Предмет или занятие:', subject);
    console.log('Місто:', city);
    console.log('Онлайн:', online);
  };

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Предмет або заняття"
        onChange={handleInputChange}
        onFocus={handleFocus}
        value={subjectValue}
        id="subject"
      ></input>
      {focusInput === 'subject' && filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <input
        type="text"
        placeholder="Місто"
        onChange={handleInputChange}
        onFocus={handleFocus}
        value={cityValue}
        id="city"
      ></input>
      {focusInput === 'city' && filteredSuggestions.length > 0 && (
        <ul>
          {filteredSuggestions.map((suggestion, index) => (
            <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
              {suggestion}
            </li>
          ))}
        </ul>
      )}
      <input type="checkbox" id="radio"></input>
      <label htmlFor="radio">Онлайн</label>
      <button type="submit" className="filter-button">
        Найти
      </button>
    </form>
  );
};
