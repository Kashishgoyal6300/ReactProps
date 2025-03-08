import DogCard from "./DogCard"
import Image from "./Image"
import Counter from "./Counter";
import RenderConcept from "./RenderConcept";
import Rconcept2 from "./Rconcept2";
import Avatar from "./Avatar";
import AvatarNew from "./AvatarNew";
function App() {
  const obj={
    src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB0-EUwqJl2tLhaqqNFWsZOMHd5ejfXn5vxg&s",
    width:"100px",
    height:"100px"
  }

  return (
    <>
     {/* <DogCard name="bruno" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-1Y9PjQ1A0jnVlS_LWPzbqB6trpOvHfcYOA&s"/>
    <DogCard name="tiger" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhBnfBHCsyRDTAPHEXwuOpLOaPZYO-fXCHPg&s" />
  */}
   
      {/* <Avatar
         {...obj}
     />  
      
      <Avatar
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCIaiO0fgexZGFeT_3lTrIFW-AKzjDUcJZhA&s"
          width="100px"
          height="100px"
     > 
     <span>Child tag</span>
     </Avatar>
    */}

    {/* new  */}
      <AvatarNew/>
    </> 
  )
}

export default App;
