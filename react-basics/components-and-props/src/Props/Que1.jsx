
    const profile = [
  {
    name: "Parvez",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Rahul",
    image: "https://i.pravatar.cc/150?img=3"
  },
  {
    name: "Aman",
    image: "https://i.pravatar.cc/150?img=5"
  },
  {
    name: "Rohit",
    image: "https://i.pravatar.cc/150?img=8"
  },
  {
    name: "Arjun",
    image: "https://i.pravatar.cc/150?img=11"
  }
];


const Que1 = ()=>{



    return(
        <>
        {
            profile.map((item) => {

                return(

                    <div>

                    <img src={item.image} alt="" />
                    <h1>{item.name}</h1>

                    </div>
                    

                )

            })
        }
        </>

    )
}

export default Que1