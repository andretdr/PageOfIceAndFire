import styles from "./page.module.css";
import Link from 'next/link';
import { returnIndex, getAPI } from "../utils/utils";


/** Section for list of books */
const BookList = async() => {

  const booklist = await getAPI({url:'https://www.anapioficeandfire.com/api/books', error:'Error fetching books information'});

  return (<section>
            {booklist.map((item:{name:string, url:string})=>{return(
              <>
                <Link className='text-decoration-none' href={`/books/${returnIndex(item.url)}`}>
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title text-decoration-none">
                        {item.name}
                      </h5>    
                    </div>
                  </div>
                </Link>
              </>
            )})}
          </section>
  )
}


/** Books Component */
const Books = () => {
  return (
    <>
        <section id='intro' className="bg-light">
          <div className="container-sm">
            <h1 className="display-2 pt-5 pb-2 text-center">Books</h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
              Dive further into the world of Westeros and Essos</p>
            
            <BookList />
          </div>
        </section>
        <section id='links' className='bg-secondary'>
        </section>
    </>
  );
}

export default Books
