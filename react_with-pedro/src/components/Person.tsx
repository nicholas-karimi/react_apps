import { useState } from 'react';

interface Props {
  name: string;
  age: number;
  email: string;
  isMarried: boolean;
  friends: string[];
  country?: Country;
}

export enum Country {
  Kenya = 'Kenya',
  Tanzania = 'Tanzania',
  Uganda = 'Uganda',
}

const Person = (props: Props) => {
  // types in states
  // const [name, setName] = useState<string>()
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
      {/* <h3>Country: {props.country}</h3> */}
    </div>
  );
};
export default Person;
