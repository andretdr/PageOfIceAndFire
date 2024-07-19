import styles from "./books_info.module.css";
import Link from 'next/link';
import { getAPI, dateStringFormat } from "@/app/utils/utils";
import { Metadata } from 'next';
import PageImage from "@/app/components/PageImage";
import BackToTop from "@/app/components/BackToTop";

/** dynamic Metadata info */
export const generateMetadata = async(input :{params:{id:string}})
 : Promise<Metadata> => {
    // read route params
    const id = input.params.id;
    const bookinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/books/${input.params.id}`, error:'Error on fetching book Data'});
    let title:string;
    {bookinfo.name !== ''
      ? title = bookinfo.name
      : title = bookinfo.aliases[0]}
    return {
      title: title,
      description: `Book details for ${bookinfo.name}`
    }
}


type Props = {bookinfo:{name:string, isbn:string, authors:string[], numberOfPages:string, publisher:string,country:string, released:string}};

/** Book info section */
const BookInfo = async (props:Props) => {

//  const bookinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/books/${props.index}`, error:'Error reading book data'});

  return (  <section className="d-flex flex-column">
              <div className={`card mx-auto text-secondary ${styles.cardlink}`}>
                <div className="card-body p-5 ms-5">
                  <h5 className="fs-2 mb-3">{props.bookinfo.name as string}</h5>
                  <p className="">ISBN: {props.bookinfo.isbn as string}</p>
                  <p className="">Authors</p>
                    <ul>
                      {props.bookinfo.authors.map((item:string)=>{return(
                        <li>{item}</li>
                      )})}
                    </ul>
                  <p className="">Number of Pages: {props.bookinfo.numberOfPages as string}</p>
                  <p className="">Publisher: {props.bookinfo.publisher as string}</p>
                  <p className="">Country: {props.bookinfo.country as string}</p>
                  <p className="">Released: {dateStringFormat(props.bookinfo.released as string)}</p>
                </div>
              </div>
              <div className='d-flex flex-row align-items-center container-sm'>
                <Link className={`mx-3 text-white text-decorations-none backtoprev`} href='/books'><div>Back to Book Page</div></Link>
                <BackToTop />
              </div>
            </section>
  )
}


/** Book details page Component */
const BookDetailPage = async(input:{params:{id:string}}) => {

  const bookinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/books/${input.params.id}`, error:'Error on fetching Book Data'});

  return (
    <>
        <section id='intro' className="bg-light">
          <div className="container-sm header-banner">
            <h1 className="display-2 pt-5 pb-2 text-secondary text-center">
                {bookinfo.name}
            </h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta voluptatibus quasi ipsa!</p>
          </div>
        </section>
        <PageImage />
        <section id='links' className={`body-padding ${styles.bookbg}`}>
          <BookInfo bookinfo={bookinfo}/>
        </section>
    </>
  );
}

export default BookDetailPage
