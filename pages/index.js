import Layout from '../components/Layout'
import Link from 'next/Link'

export default function Home({pokemon}) {
  return (
  <Layout title="Connor's Pokedex">
    <h1 className='text-3xl mb-8 text-center'>Connor's Pokedex</h1>
    <ul>
      {pokemon.map((pokeman, index) => {
        return <li key={index}>
          <Link href={`/pokemon?id${index + 1}`}>
            <a className='border p-4 border-gray my-2 capitalize flex items-center text-lg bg-gray-200'>
              <img className="w-20 h20 mr-3"src={pokeman.image} alt={pokeman.name}></img>
              <span className="mr-2">{index + 1}.</span>
              {pokeman.name}
            </a>
          </Link>
        </li>
      })}
    </ul>
  </Layout>
  )
}

export async function getStaticProps(context) {
  try {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=150');
      const { results } = await res.json();
      const pokemon = results.map((pokeman, index) => {
          const paddedId = ('00' + (index + 1)).slice(-3);

          const image = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${paddedId}.png`;
          return { ...pokeman, image };
      });
      return {
          props: { pokemon },
      };
  } catch (err) {
      console.error(err);
  }
}

