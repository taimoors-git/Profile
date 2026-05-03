import React from 'react'

const Profile = ({name, post, img, links}) => {
  
  return (
    
    <div className="card flex flex-col justify-center items-center bg-gray-500 w-45 h-60 m-10 rounded-3xl shadow-black hover:scale-102" >
      <img src={img} alt={name} className='w-25 rounded-full'/>
      <h1 className='text-white text-2xl '>{name}</h1>
      <h3 className='text-white pb-3'>{post}</h3>
      <div className="links flex w-20 space-x-2 space-y-0">
        {links.map((link, i) => {
          return(

            <a key={i} href={link} target='_blank'>
            <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="social" className='w-6 h-6' />
          </a>
      )
        })}
        </div>
        </div>

  )
}

export default Profile
