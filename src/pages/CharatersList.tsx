import React from 'react';
import { useCharacters } from '../hooks/useCharacters';
import './CharacterList.css';
import { useNavigate, Link } from 'react-router-dom';

export interface ICharcter {
  image: string;
  name: string;
  id: number;
}

const CharactersList = () => {
  const { error, data, loading } = useCharacters();
  const navigate = useNavigate();
  console.log(data);

  if (loading) return <div>spinners...</div>;
  if (error) return <div>error...</div>;
  return (
    <div className='CharacterList'>
      {data.characters.results.map((character: ICharcter) => {
        return (
          <div key={character.id}>
            <Link to={`/${character.id}`}>
              <img src={character.image} />
              <h2>{character.name}</h2>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default CharactersList;
