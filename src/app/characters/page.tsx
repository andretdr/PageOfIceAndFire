import Link from 'next/link';
import { returnIndex, getAPI } from "../utils/utils";
import PageImage from '../components/PageImage';
import styles from './character.module.css'
import BackToTop from '../components/BackToTop';
import { Metadata } from 'next';


/** Meta data info */
export const metadata: Metadata = {
  title: 'Characters',
  description: 'Link page for all characters'
}


/** handles link section */
const CharacterLink = async ()=> {
  const characterList = await getAPI({url:'https://www.anapioficeandfire.com/api/characters', error:'Error on fetching Character Data'});
  
  return (<div className='container-sm'>
          {characterList.map((item:{name:string, aliases:string, url:string}, key : number)=>{
            return(
              <Link className={`links d-flex justify-content-center`} key={key} href={`/characters/${returnIndex(item.url)}`}>
                <div className={`card m-3 ms-5 ${styles.cardlink}`}>
                  <div className="card-body d-flex flex-column ms-5">
                    <h5 className="fs-2 card-title text-secondary text-decoration-none">
                      {/* if name not available, use alias */}
                      {item.name !== ''
                        ? item.name
                        : item.aliases}
                    </h5>
                    <small>
                      {/* if name not available, print 'alias' */}
                      {item.name !== ''
                        ? null
                        : 'aliases'}
                    </small>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                  </div>
                </div>
              </Link>
            )
          })}
            <div className='d-flex flex-row align-items-center container-sm'>
              <Link className={`mx-3 text-white text-decorations-none backtoprev`} href='/'>Back to Home</Link>
              <BackToTop />
            </div>
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
        <section id='links' className={`body-padding d-flex flex-row justify-content-center ${styles.body}`}>
          <CharacterLink />
        </section>
    </>
  );
}

export default Characters