import styles from "./index.module.css";
import Link from 'next/link';
import PageImage from "./components/PageImage";
import BackToTop from "./components/BackToTop";
import { relative } from "path";

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
                    <h5 className="card-title fs-1 text-secondary">{item.header}</h5>
                    <p className="card-text">{item.body}</p>
                  </div>
                </div>
              </Link>
              </div>
            )
          })}
          <BackToTop />
           </>
  )
}

/** main page component */
const Home = ()=> {
  return (
    <>    
        <section id='intro' className={`bg-light z-3 header-banner`}>
          <div className='container-lg'>

            <h1 className="display-2 pt-5 pb-2 text-center text-secondary bg-transparent">
              A Song of Ice and Fire</h1>
            <p className="fs-5 pb-5 text-center text-muted mb-0 bg-transparent">
              Explore the rich universe of author George R. R. Martin</p>
          </div>
        </section>
          <PageImage />
        <section id='links' className={`${styles.body} container-fluid body-padding`}>
          <CardLink />
        </section>
    </>
  );
}

export default Home
