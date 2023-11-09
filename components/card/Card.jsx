import Link from 'next/link'


function Card ({id, artist, description, label, producer, rating, release_date, sales, title, tracks }){
    return (
           <aside>
            <h2>{title}</h2>
            <p>{artist}</p>
            <p>{producer}</p>
            <p>{label}</p>
            <p>{release_date}</p>
            <p>{description}</p>
            <p>{tracks}</p>
            <p>{sales}</p>
            <p>{rating}</p>
            <Link className='text-blue-600 font-semibold' href={`/record/${id}`}>{title} using id: {id}</Link>
  
           </aside>
    )
  }

  export {Card}