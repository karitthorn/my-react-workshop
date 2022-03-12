import {useState} from "react"
import { AiFillCaretLeft,AiFillCaretDown } from "react-icons/ai";

const SingleContent = ({title, description}) => {
    const [showContent,setShowContent] = useState(false)
  return (
    <article className="content">
      <header>
        <h4>{title}</h4>
        <button className="exampleClass" onClick={()=>setShowContent(!showContent)}>
            {showContent ? <AiFillCaretDown/> : <AiFillCaretLeft/>}
        </button>
      </header>
      <p>{showContent && <p>{description}</p>}</p>
    </article>
  );
};

export default SingleContent;
