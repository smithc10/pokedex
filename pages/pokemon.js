import React from 'react';
import Layout from '../components/Layout';
import Link from 'next/link';
export default function pokemon({ pokeman }) {
  return (
    <Layout title={pokeman.name}>
      <h1 className='text-4xl mb-2 text-center capitalize'>{pokeman.name}</h1>
      <img className='mx-auto' src={pokeman.image} alt={pokeman.name} />
      <div className='dark:bg-slate-700 p-4 mb-2 text-lg'>
        <p>
          <span className='font-bold mr-2'>Weight:</span>
          {pokeman.weight}
        </p>
        <p>
          <span className='font-bold mr-2'>Height:</span>
          {pokeman.height}
        </p>
      </div>
      <div className='dark:bg-slate-700 p-4 mt-6 text-lg'>
        <h2 className='text-2xl mb-2'>Types</h2>
        {pokeman.types.map((type, index) => (
          <p className='capitalize pl-1' key='index'>
            <li className='mt-1'>{type.type.name}</li>
          </p>
        ))}
      </div>
      <p className='mt-10 text-center'>
        <Link href='/'>
          <a className='text-2xl underline'>Home</a>
        </Link>
      </p>
    </Layout>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokeman = await res.json();
    const paddedId = ('00' + id).slice(-3);
    pokeman.image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
    return { props: { pokeman } };
  } catch (err) {
    console.error(err);
  }
}
