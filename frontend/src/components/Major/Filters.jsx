import { useState } from "react";
import "../../css/Major/Filters.css"
import { Link } from "react-router-dom";

const Filters = ({typeLink}) => {
    const posts = ["Technology"];
    const [showFilters, setShowFilters] = useState(false);
    
  
    return (
        <div className="pg-filter-container">
            <div className="pg-tags">
                {
                    showFilters &&
                    posts.map((p) => {
                        return (
                        <Link style={{textDecoration:"none", color:"white"}} to={"/" + typeLink + "?filter=" + p}>
                            <div className="pg-tag">{p}</div>
                        </Link>
                        );
                    })
                }
            </div>
            <div className="pg-filter-cross" >
                {
                showFilters 
                ?
                <img src="../../assets/cross.png" alt="" onClick={() => {setShowFilters(false)}} />
                :
                <button className="pg-filter-btn" onClick={() => {setShowFilters(true)}}>Filters</button>
                }
            </div>
        </div>
    )
}

export default Filters;