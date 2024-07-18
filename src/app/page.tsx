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
              <Link className='links' key={item.header} href={item.url}>
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title text-decoration-none">{item.header}</h5>
                    <p className="card-text">{item.body}</p>
                  </div>
                </div>
              </Link>
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
          <div className="container-sm">
            <h1 className="display-2 pt-5 pb-2 text-center">A Song of Ice and Fire</h1>
            <p className="fs-5 text-muted pb-5 text-center mb-0">
              Explore the rich universe of author George R. R. Martin</p>
          </div>
        </section>
        <section id='links' className='bg-secondary'>
          <CardLink />
        </section>
    </>
  );
}

export default Home
