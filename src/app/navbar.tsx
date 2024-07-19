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
        <nav id='navbar' className="navbar navbar-expand-lg bg-dark z-3" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand ms-5" href="/">Page of Ice and Fire</a>

                    <div className="navbar-nav d-flex flex-row justify-contents-end mb-2 mb-lg-0">
                        <div className="nav-item mx-3">
                            <Link className="nav-link" href="/characters/">Characters</Link>
                        </div>
                        <div className="nav-item dropdown dropdown_hover">
                            <Link href='/books' className="nav-link dropdown-toggle me-5" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Books
                            </Link>

                            <div id='dropdown_menu' className="d-flex flex-column dropdown_menu">
                                {booklist.map((item:{name:string, url:string})=>{return(
                                    <Link key={item.name} className="text-white bg-secondary text-decoration-none p-3" href={`/books/${returnIndex(item.url)}`}>
                                        {item.name}</Link>
                                )})}
                            </div>
                        </div>
                    </div>

            </div>
        </nav>
    )
}

export default Navbar