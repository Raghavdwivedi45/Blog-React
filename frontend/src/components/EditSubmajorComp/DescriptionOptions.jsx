import "../../css/DescriptionOptions.css";

const DescriptionOptions = ({addEmphasis}) => {

  // const addSection = () => {
  //   func((sub) => [
  //     ...sub,
  //     React.createElement(tag, { key: Date.now(), ...props }, " ")
  //   ]);
  //   const toBeAdded = `<section key=${arr.length}> </section>`
  // }


  const addMedia = (tag, src) => {
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

  return (
    <div className="desc-opt-container">
        
        <button type="button" onClick={() => addEmphasis("<strong></strong>")}>Bold</button>
        <button type="button" onClick={() => addEmphasis("<em></<em>")}>Italics</button>

        <button type="button" onClick={() => addEmphasis("<h1></<h1>")}>Heading1</button>
        <button type="button" onClick={() => addEmphasis("<h2></<h2>")}>Heading2</button>
        <button type="button" onClick={() => addEmphasis("<h3></<h3>")}>Heading3</button>
        
        <button type="button" onClick={() => addEmphasis('<strong class="undrlnd"></strong>')}>
          Underline
        </button>
        
        <button type="button" onClick={() => addEmphasis('<mark class="hltd"></<mark>')}>
          Highlight
        </button>
        
        <button type="button" onClick={() => addEmphasis('<br/>')}>Line-Space</button>
        
        <button type="button" onClick={() => addMedia("img")}>Image</button>
        <button type="button" onClick={() => addMedia("a")}>HyperLink</button>
    </div>
  )
}

export default DescriptionOptions