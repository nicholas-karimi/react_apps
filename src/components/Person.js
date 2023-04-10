import { PropTypes } from 'prop-types';
const Person = props => {
  return (
    <div>
      <h2>Your Profile Dteails</h2>
      <h3>Name: {props.name} </h3>
      <h3>Email: {props.email} </h3>
      <h3>Age: {props.age} </h3>
      <h3>This Person {props.isMarried ? 'is' : 'is not'} Married. </h3>
      {props.friends.map(friend => (
        <h4>{friend}</h4>
      ))}
    </div>
  );
};

Person.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.number,
  isMarried: PropTypes.bool,
  friends: PropTypes.arrayOf(PropTypes.string),
};
export default Person;
