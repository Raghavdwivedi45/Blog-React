import { useState } from "react";
import "../../css/DescriptionOptions.css";

const DescriptionOptions = ({addEmphasis, setIds}) => {

  const [idx, setIdx] = useState(0);

  const addMedia = (tag) => {
    if(tag==="img") {
      const sorc = prompt("Enter image URL")
      if(sorc===null) return;
      addEmphasis(`<img src="${sorc}" alt="No image to show"></img>`)
    } 
    else {
      const sorc = prompt("Enter HyperLink")
      if(sorc===null) return;
      addEmphasis(`<a href="${sorc}"></a>`)
    }
  };

  const addHead = (val) => {
    const txt = prompt("Enter heading here for preparing better index")
    if(txt===null) return;
    
    if(val===1) addEmphasis(`<h1 id="${idx}">${txt}</h1>`)
    else if(val===2) addEmphasis(`<h2 id="${idx}">${txt}</h2>`)
    else if(val===3) addEmphasis(`<h3 id="${idx}">${txt}</h3>`)
  
    setIds(prev => [...prev, txt])
    setIdx(id => id+1)
  }

  return (
    <div className="desc-opt-container">
        
        <button type="button" onClick={() => addHead(1)}>Heading1</button>
        <button type="button" onClick={() => addHead(2)}>Heading2</button>
        <button type="button" onClick={() => addHead(3)}>Heading3</button>

        <button type="button" onClick={() => addEmphasis("<strong></strong>")}>Bold</button>
        <button type="button" onClick={() => addEmphasis("<em></em>")}>Italics</button>
        
        <button type="button" onClick={() => addEmphasis('<strong class="undrlnd"></strong>')}>
          Underline
        </button>
        
        <button type="button" onClick={() => addEmphasis('<mark class="hltd"></mark>')}>
          Highlight
        </button>
        
        <button type="button" onClick={() => addEmphasis('<br/>')}>Line-Space</button>
        
        <button type="button" onClick={() => addMedia("img")}>Image</button>
        <button type="button" onClick={() => addMedia("a")}>HyperLink</button>
    </div>
  )
}

export default DescriptionOptions