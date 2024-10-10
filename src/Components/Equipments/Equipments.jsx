
import { GrYoga } from 'react-icons/gr'
import { FaDumbbell } from 'react-icons/fa'
import { GiGymBag } from 'react-icons/gi'


const EquipmentData = [
    {
   id:1,
   title: 'Yoga Equipments',
   desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
   icon:<GrYoga/>,
   delay:0.3,
},
{
    id:2,
    title: 'Muscles Equipments',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
    icon:<FaDumbbell/>,
    delay:0.6,
 },
 {
    id:3,
    title: 'Fitness Equipments',
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing ",
    icon:<GiGymBag/>,
    delay:0.9,
 },
]
const Equipments = () => {
  return (
    <div className=''>
      <div className="container py-24">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 font-playfair">
            <div className="p-6 space-y-4">
                <h1 className="text-3xl font-bold md:text-4xl">
                    What we offer for you
                </h1>
                 <p className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing
                    </p>
            </div>
            { EquipmentData.map((item)=>{
                    return(
                        < >
                        <div className="bg-gray-100 space-y-4 p-6 bg-[#fbfbfb]
                        hover:bg-white rounded-xl hover:shadow-[0_0_22px_0_rgba(0,0,0,0.15)]">
                           <div className="text-4xl">{item.icon}</div>
                          <p className="text-2xl font-semibold">{item.title}</p>
                          <p className="text-gray-500">{item.desc}</p>
                         </div>
                        </>
                    )

                })
            }
        </div>
      </div>
    </div>
  )
}

export default Equipments
