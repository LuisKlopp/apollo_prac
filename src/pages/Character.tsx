import React from 'react';
import './Character.css';
import { useParams } from 'react-router-dom';
import { useCharacter } from '../hooks/useCharacter';

interface IEpisode {
  __typename: string;
  name: string;
  episode: string;
}

export default function Character() {
  const { id } = useParams();
  const numId = Number(id);
  const { data, error, loading } = useCharacter(numId);

  if (error) return <div>error</div>;
  if (loading) return <div>spinner</div>;
  console.log(data.character.episode);

  return (
    <div className='Character'>
      <img src={data.character.image} width={750} height={750} />
      <div className='Character-content'>
        <h1>{data.character.name}</h1>
        <p>{data.character.gender}</p>
        <div className='Character-episode'>
          {data.character.episode.map((episode: IEpisode) => {
            return (
              <div key={episode.episode}>
                {episode.name} - <b>{episode.episode}</b>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
