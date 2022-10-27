import React, { useState } from 'react';
import { gql, useLazyQuery } from '@apollo/client';

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

interface IResult {
  __typename: string;
  location: {
    name: string;
    __typename: string;
  };
}

const Search = () => {
  const [name, setName] = useState('');

  const [getLocations, { loading, error, data, called }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(data?.characters.results);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={() => getLocations()}>search</button>
      {loading && <div>spinners...</div>}
      {error && <div>someting went wrong</div>}
      {data && (
        <ul>
          {data.characters.results.map((character: IResult) => {
            return (
              <li key={character.location.name}>{character.location.name}</li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Search;
