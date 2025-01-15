import { useState } from "react"
import { SideBarToggle } from "./components/icons/SidebarToggle"


export default function App(){
  const [sidebarOpen,setSidebarOpen] = useState(true)


  return ( <div className="flex">
    <SideBar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
    <MainContent sidebarOpen={sidebarOpen}/>

  </div>
  
      
    
  )
}

function SideBar({sidebarOpen,setSidebarOpen}){

  if(!sidebarOpen){
    return <div className="fixed top-0 left-0">
      <div className="cursor-pointer hover:bg-slate-200" onClick = {() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SideBarToggle/>
      </div>
    </div>
  }
  return <div className="w-96 h-screen bg-red-100">
    <div>
      <div className="cursor-pointer hover:bg-slate-200" onClick={() => {
        setSidebarOpen(!sidebarOpen)
      }}>
        <SideBarToggle/>
      </div>
    </div>
  </div>
}


function MainContent(sidebarOpen){
  return <div className="w-full">
    <div className = 'h-72 bg-black'></div>
    <div className="grid grid-cols-11 gap-8 p-8">
       <div className="h-96 rounded-2xl  bg-red-200 md:col-span-2 -translate-y-24 shadow-lg col-span-11">

       </div>
       <div className="h-96 rounded-2xl  bg-green-200 md:col-span-6 shadow-lg col-span-11" >

       </div>
       <div className="h-96 rounded-2xl  bg-yellow-200 md:col-span-3 shadow-lg col-span-11">

       </div>

    </div>

  </div>

}



