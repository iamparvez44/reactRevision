import Hero from "./Hero"
import Sidebar from "./Sidebar"

const Mainpage = ()=>{
    return (
        <div style={{height:"100vh", width:"100vh" , display: "flex"}}>

            <Sidebar/>
            <Hero/>

        </div>
    )
}

export default Mainpage