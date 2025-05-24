const SubmajorList = ({fullList}) => {
  return (
    <div className="submajor-list-container">
        {
            fullList.map((submajor, idx) => {
                return (
                    <div className="each-submajor">Chapter {idx+1} : {submajor.title}</div>
                    
                )
            })
        }
    </div>
  )
}

export default SubmajorList