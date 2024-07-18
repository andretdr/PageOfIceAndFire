import styles from "./page.module.css";
import Link from 'next/link';
import { getAPI, dateStringFormat } from "@/app/utils/utils";


/** Book info section */
const BookInfo = async (props:{index:string}) => {

  const bookinfo = await getAPI({url:`https://www.anapioficeandfire.com/api/books/${props.index}`, error:'Error reading book data'});

  return (  <section className="">
              <div className="card">
                <div className="card-body">
                  <h3 className="display-3">{bookinfo.name as string}</h3>
                  <p className="">ISBN: {bookinfo.isbn as string}</p>
                  <p className="">Authors</p>
                    <ul>
                      {bookinfo.authors.map((item:string)=>{return(
                        <li>{item}</li>
                      )})}
                    </ul>
                  <p className="">Number of Pages: {bookinfo.numberOfPages as string}</p>
                  <p className="">Publisher: {bookinfo.publisher as string}</p>
                  <p className="">Country: {bookinfo.country as string}</p>
                  <p className="">Released: {dateStringFormat(bookinfo.released as string)}</p>

                </div>
              </div>
            </section>
  )
}


/** Book details page Component */
const BookDetailPage = (input:{params:{id:string}}) => {
  return (
    <>
        <section id='intro' className="bg-light">
          <div className="container-sm">
            <h1 className="display-2 pt-5 pb-2 text-center">Books</h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
              Dive further into the world of Westeros and Essos</p>
          </div>
        </section>

        <BookInfo index={input.params.id}/>

    </>
  );
}

export default BookDetailPage
