import React from 'react'

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/m1.jpg",
      title: "Alexa"
    },
    {
      id: 2,
      image: "/m2.jpg",
      title: "John"
    },
    {
      id: 3,
      image: "/m3.jpg",
      title: "Michael"
    },
    {
      id: 4,
      image: "/m4.jpg",
      title: "Rober"
    },
    {
      id: 5,
      image: "/m5.jpg",
      title: "Siri"
    },
    {
      id: 6,
      image: "/m6.jpg",
      title: "Tobey"
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jhon Will"
    },
  ]
  return (
    <>
      <section className='members'>
        <div className='container'>
          <div className='heading_section'>
            <h2 className='heading'>MEMBERS</h2>
            <p>
              “Volunteers are the only human beings on the face of the earth who reflect this nation's compassion, unselfish caring, patience, and just plain loving one another.” “You may not have saved a lot of money in your life, but if you have saved a lot of heartaches for other folks, you are a pretty rich man.”
            </p>
          </div>
          <div className='members_container'>
            {
              members.map((item)=>{
                return(
                  <div className='card' key={item.id}>
                      <img src={item.image} alt={item.title}/>
                      <h3>{item.title}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>

      </section>
    </>
  )
}

export default Members