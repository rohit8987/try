
import mainImg from '../../assets/main.jpg'

const Main = () => {
  return (
    <>
    <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative  p-4 bg-[#faf7f7]">
        <div className="flex items-center justify-center">
            <img src={mainImg} alt=""className='w-[350px] md:w-[550px] xl:w-[700px] drop-shadow'/>
        </div>
    <div className="text-4xl font-bold font-playfair lg:text-2xl xl:leading-10">
        <p className="grid justify-center grid-cols-1 p-20 m-20 mt-10 text-gray-600">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores reprehenderit earum beatae! Aut, quo recusandae possimus placeat eligendi repellendus earum error ullam rem, culpa tempore.
        </p>

    </div>
    </div>
    </>
  )
}

export default Main
