import { Link } from "react-router-dom";
import TeacherSidebar from "./TeacherSidebar";

function AddCourses(){
    return(
        <div className="container mt-4">
        <div className="row">
            <aside className="col-md-3">
                <TeacherSidebar/>
            </aside>
            <div className="col-6">
                <div className="card">
                    <h5 className="card-header">Add Course</h5>
                    <div className="card-body">
                        <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input type="text" className="form-control"/>
                            </div>

                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Description</label>
                                <textarea className="form-control" id="description"/>
                            </div>


                            <div className="mb-3">
                                <label for="title" className="form-label">Thumbnail</label>
                                <input type="file" accept="jpeg/*" name="thumbnail" className="form-control"/>
                            </div>


                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Technologies</label>
                                <textarea className="form-control" id="description"/>
                            </div>

                            <Link to="/add-videos"><button type="submit" className="btn btn-primary">Proceed</button></Link>

                        </form>
                    </div>

                </div>
            </div>
        </div>
       </div>
               
    );
}

export default AddCourses;