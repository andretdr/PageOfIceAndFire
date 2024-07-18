import Link from 'next/link';
import { returnIndex, getAPI } from "../utils/utils";

/** handles link section */
const CharacterLink = async ()=> {
  const characterList = await getAPI({url:'https://www.anapioficeandfire.com/api/characters', error:'Error on fetching Character Data'});
  
  return (<>
          {characterList.map((item:{name:string, aliases:string, url:string}, key : number)=>{
            return(
              <Link className='links' key={key} href={`/characters/${returnIndex(item.url)}`}>
                <div className="card">
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
           </>
  )
}


/** Characters Page component */
const Characters = ()=> {
  return (
    <>
        <section id='intro' className="bg-light">
          <div className="container-sm">
            <h1 className="display-2 pt-5 pb-2 text-center">Characters</h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus quasi ipsa!</p>
          </div>
        </section>
        <section id='links' className='bg-secondary'>
          <CharacterLink />
        </section>
    </>
  );
}

export default Characters