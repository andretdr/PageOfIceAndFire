import Image from 'next/image';



const PageImage = () => {

const imgArr = [
    '/song_sm.jpg',
    '/battle_sm.jpg',
    '/throne_sm.jpg',
    '/tourney_sm.jpg',
];

return (
    <section className="image-container">
    <div className="image-container_abs">
    <Image
    src={imgArr[Math.floor(Math.random()*4)]}
    alt="Baratheon Logo"
    className='image'
    width={500}
    height={380}
    />
    </div>
    </section>
)}

export default PageImage