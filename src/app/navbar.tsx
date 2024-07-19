import { getAPI, returnIndex } from "./utils/utils"
import Link from 'next/link'



const Navbar = async() =>{
    const booklist = await getAPI({url:'https://www.anapioficeandfire.com/api/books', error:'Error fetching books information'});

    const handleClick = () =>{
        const el = document.getElementById('dropdown_menu');
        !el
        ? null
        : el.style.display === 'absolute'
        ? el.style.display = 'none'
        : el.style.display = 'absolute'
    }


    return (
        <nav className="navbar navbar-expand-lg bg-dark z-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">Song of Ice and Fire</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li key='character_link' className="nav-item">
                            <Link className="nav-link" href="/characters/">Characters</Link>
                        </li>
                        <li key='books_link' className="nav-item dropdown dropdown_hover">
                            <Link href='/books' className="nav-link dropdown-toggle me-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Books
                            </Link>

                            <div id='dropdown_menu' className="d-flex flex-column dropdown_menu">
                                {booklist.map((item:{name:string, url:string})=>{return(
                                    <Link key={item.name} className="text-white bg-secondary text-decoration-none p-3" href={`/books/${returnIndex(item.url)}`}>
                                        {item.name}</Link>
                                )})}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar