import logo from './logo.svg';
import './App.css';
import {useRef,useState} from 'react'
import html2canvas from 'html2canvas'
import Magnifier from "react-magnifier";

function App() {
  const [textData,setTextData] = useState("Text Data")
  const printRef  = useRef()
  // const [magnifier,setMagnifier] = useState(false)
  const [isImage,setImage] = useState(null)
  const createImage = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const  image = new Image();
    image.src = canvas.toDataURL('image/jpg');
      
    setImage(image.src)
  };
  return (
    <div>
        <div className='box-container'><div ref={printRef} className={"box"} onMouseOver={createImage} >{textData}</div></div>
        <div onMouseLeave={() => setImage(null)}>{isImage !== null && <Magnifier src={isImage} width={100} />}</div>
        <form className='box-container' onSubmit={(e) => e.preventDefault()}><input type="text" onChange={(e) => setTextData(e.target.value) } placeholder="change Data"/> 
        </form>
    </div>

  );
}


export default App;
