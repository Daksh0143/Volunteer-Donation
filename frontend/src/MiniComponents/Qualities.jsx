import React from 'react'

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.jpg",
      title: "COMMUNITY DEVELOPMENT",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 2,
      image: "/transparency.jpg",
      title: "TRANSPARENCY",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    },
    {
      id: 3,
      image: "/impact.jpg",
      title: "IMPACT MEASUREMENT",
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
    }
  ]
  return (
    <>
      <div className='qualities'>
        <h2>OUR QUALITIES</h2>
        <div className='container'>
            {
              qualities.map((item)=>{
                  return(
                    <div className='card' key={item.id}>
                    <div className='img-wrapper'>
                        <img src={item.image} alt={item.title}/>
                    </div>
                    <div className='content'>
                        <p className='title'>{item.title}</p>
                        <p className='description'>{item.description}</p>

                    </div>
                    </div>
                  )
              })
            }
        </div>
      </div>
    </>
  )
}

export default Qualities