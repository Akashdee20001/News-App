import React from 'react'

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div>
            <div className="card my-3">
                <div className='d-flex justify-content-end position-absolute end-0'>
                    <span className="badge rounded-pill bg-danger">
                        {source}
                    </span>
                </div>
                <img src={imageUrl ? imageUrl : "https://images.hindustantimes.com/tech/img/2022/10/17/1600x900/Nebula-Jet_Still_1_1666020108469_1666020115397_1666020115397.jpg"} className="card-img-top" alt="..." />
                <div className="card-body d-flex flex-column">



                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark mt-auto">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem