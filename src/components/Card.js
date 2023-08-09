import {Link} from "react-router-dom";

function Card({cardvalue}){
    function truncate(string, n) {
        return string?.length > n ? string.substr(0, n - 1) + '...' : string;

    }
    return(
        <div className="card mx-3 mt-0 h-100">
        <Link to="/course-detail/1" ><img src={cardvalue?.course_thumbnail} className="card-img-top img-fluid" alt="Hollywood Sign on The Hill" /></Link>
            <div className="card-body">
            <h5 className="card-title">{cardvalue?.course_title}</h5>
            <p className="card-text">
            {truncate(`${cardvalue?.course_description}`,100)}
             
            </p>
            </div>
        </div> 
    );
}

export default Card;