import "../../css/Major/SubmajorIdx.css";

const SubmajorIdx = ({idxArr=[]}) => {
  console.log(idxArr, "idxArr")

  return (
    <div className="idx-container">
        <h2 className="idx-cont-head">Index</h2>
        <ol>
            {
                idxArr.map((eachIdx, i) => <li key={i}><a href={"#" + i}>{eachIdx}</a></li>)
            }
        </ol>
    </div>
  )
}

export default SubmajorIdx