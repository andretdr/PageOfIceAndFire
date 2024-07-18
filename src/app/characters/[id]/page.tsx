import { useState } from 'react'
import styles from "./page.module.css";
import Link from 'next/link';
import { getAPI } from '../../utils/utils'

// async function APIcall(index:string) {
//   const res = await fetch(`https://www.anapioficeandfire.com/api/characters/${index}`)
//   if (!res.ok) {
//       throw new Error('Error on fetching Character Data')
//   }
//   return res.json()
// }


/** handles link section */
const CharacterInfo = async (props: {index:string}) => {

  const characterinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/characters/${props.index}`, error:'Error on fetching Character Data'});
  console.log(characterinfo);

  return (<>
            <div className="card">
              <div className="card-body d-flex flex-column justify-content-between">
                <h5 className="card-title text-decoration-none">
                  {characterinfo.name !== ''
                  ? characterinfo.name
                  : characterinfo.aliases[0]}
                </h5>
                <p>Name : {characterinfo.name !== '' ? characterinfo.name : 'Unknown'}</p>
                <p>Gender : {characterinfo.gender !== '' ? characterinfo.gender : 'Unknown'}</p>
                <p>Culture : {characterinfo.culture !== '' ? characterinfo.culture : 'Unknown'}</p>
                <p>Born : {characterinfo.born !== '' ? characterinfo.born : 'Unknown'}</p>
                <p>Died : {characterinfo.died !== '' ? characterinfo.died : 'Unknown'}</p>
                <h5>Titles</h5>
                    <ul>
                  {characterinfo.titles.map((item: string)=>{ return(
                    <li key={item}>{item}</li>
                    )})}
                    </ul>
                <h5>Aliases</h5>
                    <ul>
                  {characterinfo.aliases.map((item: string)=>{ return(
                    <li key={item}>{item}</li>
                    )})}
                    </ul>

              </div>
            </div>
          </>
  )
}


/** Character Detail component */
const CharacterDetail = (input : {params:{id: string}})=> {
  return (
    <>
        <section id='intro' className="bg-light">
          
          <div className="container-sm">
            <h1 className="display-2 pt-5 pb-2 text-center"></h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus quasi ipsa!</p>
          </div>
        </section>
        <section id='links' className='bg-secondary'>
          <CharacterInfo index={input.params.id}/>

        </section>
    </>
  );
}

export default CharacterDetail