import Link from 'next/link';
import { returnIndex, getAPI } from "../utils/utils";
import PageImage from '../imgs/components/PageImage';
import styles from './character.module.css'

/** handles link section */
const CharacterLink = async ()=> {
  const characterList = await getAPI({url:'https://www.anapioficeandfire.com/api/characters', error:'Error on fetching Character Data'});
  
  return (<div className='container-sm'>
          {characterList.map((item:{name:string, aliases:string, url:string}, key : number)=>{
            return(
              <Link className={`links d-flex justify-content-center`} key={key} href={`/characters/${returnIndex(item.url)}`}>
                <div className={`card m-4 ms-5 ${styles.cardlink}`}>
                  <div className="card-body d-flex justify-content-between">
                    <h5 className="card-title text-decoration-none">
                      {/* if name not available, use alias */}
                      {item.name !== ''
                        ? item.name
                        : item.aliases}
                    </h5>
                    <span>
                      {/* if name not available, print 'alias' */}
                      {item.name !== ''
                        ? null
                        : 'aliases'}
                    </span>
                  </div>
                </div>
              </Link>
            )
          })}
           </div>
  )
}


/** Characters Page component */
const Characters = ()=> {
  return (
    <>
        <section id='intro' className="bg-light header-banner">
          <div className="container-sm">
            <h1 className="display-2 pt-5 pb-2 text-center text-secondary">Characters</h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus quasi ipsa!</p>
          </div>
        </section>
        <PageImage />
        <section id='links' className='bg-secondary body-padding d-flex flex-row justify-content-center'>
          <CharacterLink />
        </section>
    </>
  );
}

export default Characters