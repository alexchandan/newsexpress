import React, { Component } from 'react'

const NewsItems = (props) => {

    let { title, description, imageUrl, newsUrl, publishedAt, author, source } = props;
    return (
        <>
            <div className="my-3 ">
                <div className="card" >
                    <span className="position-absolute top-0 end-0 right-0 badge  bg-danger d-flex justify-content-end"> {!(source) ? "google news" : source}</span>
                    <img src={!(imageUrl) ? "https://media.istockphoto.com/id/1264074047/vector/breaking-news-background.jpg?s=612x612&w=0&k=20&c=C5BryvaM-X1IiQtdyswR3HskyIZCqvNRojrCRLoTN0Q=" : imageUrl} className="card-img-top" alt="..." style={{ maxHeight: "180px" }} />
                </div>
                <div className="card-body p-2">
                    <h5 className="card-title">{!(title) ? "title of the news" : title.slice(0, 64)}...</h5>
                    <p className="card-text">{!(description) ? "description of the news" : description.slice(0, 88)}...</p>
                    <p className='text-secondary' style={{ fontSize: "11px" }}>Published on&nbsp;{(!publishedAt) ? 'nodate' : publishedAt.slice(0, 10)} <span className='text-primary'>By {!(author) ? "Author" : author.slice(0, 12)}</span>.</p>
                    <a href={newsUrl} target="_blank" rel='noreferrer' className="btn btn-primary">Read More...</a>
                </div>
            </div>
        </>
    )

}

export default NewsItems    