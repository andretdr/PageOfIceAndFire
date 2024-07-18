import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link';

/** Link info to be mapped in CardLink component */
const linkInfo = [
  {
    header: 'Characters',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '/characters/',
  },
  {
    header: 'Books',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    url: '/books/',
  }
]

/** handles link section */
const CardLink = ()=> {
  return (<>
          {linkInfo.map((item)=>{
            return(
              <div className={`container-sm ${styles.cardlink}`} key={item.header} >
              <Link className='links' href={item.url}>
                <div className="card h-75">
                  <div className="card-body">
                    <h5 className="card-title text-decoration-none display-5">{item.header}</h5>
                    <p className="card-text">{item.body}</p>
                  </div>
                </div>
              </Link>
              </div>
            )
          })}
           </>
  )
}

/** main page component */
const Home = ()=> {
  return (
    <>
        <section id='intro' className="bg-light">
          <div className='container-lg'>
            <h1 className="display-2 pt-5 pb-2 text-center">A Song of Ice and Fire</h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
              Explore the rich universe of author George R. R. Martin</p>
          </div>
        </section>
        <section id='links' className='bg-black container-fluid body_height pt-5'>
          <CardLink />
        </section>
    </>
  );
}

export default Home
