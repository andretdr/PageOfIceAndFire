import styles from "./books.module.css";
import Link from 'next/link';
import { returnIndex, getAPI, dateStringFormat } from "../utils/utils";
import { Metadata } from 'next';
import PageImage from "../components/PageImage";
import BackToTop from "../components/BackToTop";

/** Meta data info */
export const metadata: Metadata = {
  title: 'Books',
  description: 'Link page for all books'
}


/** Section for list of books */
const BookList = async() => {

  const booklist = await getAPI({url:'https://www.anapioficeandfire.com/api/books', error:'Error fetching books information'});
  console.log(booklist);

  return (<section>
            {booklist.map((item:{name:string, url:string, released: string})=>{return(
              <>
                <Link className='text-decoration-none' href={`/books/${returnIndex(item.url)}`}>
                  <div className={`card my-4 pt-3 ${styles.cardlink}`}>
                    <div className="card-body ms-5">
                      <h5 className="fs-2 card-title text-decoration-none text-secondary">
                        {item.name}
                      </h5>
                      <small className="text-muted">
                        {dateStringFormat(item.released as string, 'YEAR')}
                      </small>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Error blanditiis voluptatibus illo atque sequi quod!
                      </p>
                    </div>
                  </div>
                </Link>
              </>
            )})}

            <div className='d-flex flex-row align-items-center container-sm'>
              <Link className={`mx-3 text-white text-decorations-none backtoprev`} href='/'>Back to Home</Link>
              <BackToTop />
            </div>
          </section>
  )
}


/** Books Component */
const Books = () => {
  return (
    <>
        <section id='intro' className="bg-light">
          <div className="container-sm header-banner">
              <h1 className="display-2 pt-5 pb-2 text-center text-secondary">Books</h1>
              <p className="fs-5 text-muted pb-5 text-center mb-0">
              Dive further into the world of Westeros and Essos</p>
          </div>
        </section>
        <PageImage />
        <section id='links' className={`body-padding d-flex flex-row justify-content-center ${styles.bookbg}`}>
          <BookList />
        </section>
    </>
  );
}

export default Books
