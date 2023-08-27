import InternetConnection from './controller/InternetConnection'
import Routers from "./controller/Routers";

function App() {


  return (
    <div className='h-screen container mx-auto dark:text-white dark:bg-urbanDarkMode'>    
        <Routers/>
      <InternetConnection/>
     </div>
  )
}

export default App