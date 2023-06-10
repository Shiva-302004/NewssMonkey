import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imageurl,newsurl,publishedAt,author}=this.props;
    return (
      <div className='my-3'>
        <div className="card" style={{width: "18rem"}}>
          <img src={imageurl} className="card-img-top" alt="loading" />
          <div className="card-body">
            <h5 className="card-title">{title}.......</h5>
            <p className="card-text">{description}</p>
            <p className="author">{author}</p>
            <p className='text-primary'>{ new Date(publishedAt).toGMTString()}</p>
            <a  href={newsurl} target='blank' className="btn btn-dark btn-sm">read more</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Newsitem