import Reac from "react"

export default function Product({ id, name, description, price, likes }) {
    return (
        <div className="container-fluid col-sm-12">
            <div className="card-post card post-img">
                    <span className="text-center mb-2 font-weight-bold text-titulo">{name}</span>
                <div className="row">
                    <div className="col-lg-8 col-sm-11 col-md-7 col-bg-5 autor">
                        <span><strong>Description:</strong>{description}</span>
                    </div>
                    <div className="col-lg-4 col-md-4 col-bg-5 views">
                         <span><strong><i className="fas fa-eye"> </i> Likes:</strong> {likes}</span>
                    </div>
                </div>
                <div className="card-text text-center mt-3 txt">
                    {price}
                </div>
            </div>
        </div>
    )
}