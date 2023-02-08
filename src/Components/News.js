import React, { useEffect, useState } from 'react'
import NewsItems from './NewsItems'
import Loading from './Loading';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';
function News(props) {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    document.title = `${capitalizeFirstLetter(props.category)} - Alex News Express`;
    const newsUpdate = async () => {
        props.setProgress(0)
        let url = `${props.url}&country=${props.country}&category=${props.category}&page=${page}`;
        setLoading(true);
        props.setProgress(30)
        let data = await fetch(url);
        let parsedData = await data.json()
        props.setProgress(70)
        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)
        props.setProgress(100)
    }
    useEffect(() => {
        newsUpdate()
    }, [])
    const fetchMoreData = async () => {
        setPage(page + 1)
        let url = `${props.url}&country=${props.country}&category=${props.category}&page=${page + 1}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };

    return (
        <>
            <div className="container">
                <h2 className='text-center mt-3'>Alex News Express - Top {capitalizeFirstLetter(props.category)} Headlines</h2>
                {loading && <Loading />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading />}
                >
                    <div className="container ">
                        <div className="row " >
                            {articles.map((element) => {
                                return <div className='col-md-4' key={element.url}>
                                    <NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} publishedAt={element.publishedAt} author={element.author} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </div>
        </>
    )

}

export default News
News.propTypes = {
    page: PropTypes.number,
    category: PropTypes.string
};