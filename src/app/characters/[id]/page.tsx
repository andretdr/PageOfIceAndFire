import { useState } from 'react'
import styles from "./character_info.module.css";
import Link from 'next/link';
import { getAPI } from '../../utils/utils'
import type { Metadata } from 'next';
import PageImage from '@/app/components/PageImage';
import BackToTop from '@/app/components/BackToTop';


/** dynamic Metadata info */
export const generateMetadata = async(input :{params:{id:string}})
 : Promise<Metadata> => {
    // read route params
    const id = input.params.id;
    const characterinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/characters/${input.params.id}`, error:'Error on fetching Character Data'});
    let title:string;
    {characterinfo.name !== ''
      ? title = characterinfo.name
      : title = characterinfo.aliases[0]}
    return {
      title: title,
      description: `Character details for ${characterinfo.name !== ''
        ? title = characterinfo.name
        : title = characterinfo.aliases[0]}}`
    }
}

type Props = {info:{name:string, gender:string, aliases:string[], culture:string, born:string, died:string, titles:string[]}};

/** handles link section */
const CharacterInfo = async (props: Props) => {

  return (<>
            <div className={`card container-sm ${styles.cardlink}`}>
              <div className="ms-5 card-body text-secondary d-flex flex-column justify-content-between">
                <h5 className="fs-2 card-title text-decoration-none">
                  {props.info.name !== ''
                  ? props.info.name
                  : props.info.aliases[0]}
                </h5>
                <p>Name : {props.info.name !== '' ? props.info.name : 'Unknown'}</p>
                <p>Gender : {props.info.gender !== '' ? props.info.gender : 'Unknown'}</p>
                <p>Culture : {props.info.culture !== '' ? props.info.culture : 'Unknown'}</p>
                <p>Born : {props.info.born !== '' ? props.info.born : 'Unknown'}</p>
                <p>Died : {props.info.died !== '' ? props.info.died : 'Unknown'}</p>
                <h5>Titles</h5>
                    <ul>
                  {props.info.titles.map((item: string)=>{ return(
                    <li key={item}>{item}</li>
                    )})}
                    </ul>
                <h5>Aliases</h5>
                    <ul>
                  {props.info.aliases.map((item: string)=>{ return(
                    <li key={item}>{item}</li>
                    )})}
                    </ul>
              </div>
            </div>
            <div className='d-flex flex-row align-items-center container-sm'>
            <Link className={`mx-3 text-white text-decorations-none backtoprev`} href='/characters'><div>Back to Character Page</div></Link>
            <BackToTop />
            </div>
          </>
  )
}


/** Character Detail component */
const CharacterDetail = async (input : {params:{id: string}})=> {

  const characterinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/characters/${input.params.id}`, error:'Error on fetching Character Data'});

  return (
    <>
        <section id='intro' className="bg-light">
          <div className="container-sm header-banner">
            <h1 className="display-2 pt-5 pb-2 text-secondary text-center">
                {characterinfo.name !== ''
                  ? characterinfo.name
                  : characterinfo.aliases[0]}
            </h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus quasi ipsa!</p>
          </div>
        </section>
        <PageImage />
        <section id='links' className={`body-padding ${styles.bodybottom}`}>
          <CharacterInfo info={characterinfo}/>
        </section>
        
    </>
  );
}

export default CharacterDetail