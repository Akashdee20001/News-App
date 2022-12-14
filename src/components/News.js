import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {

    const capitalize = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1)
    }

    const [articles, setarticles] = useState([])
    const [loading, setloading] = useState(true)
    const [page, setpage] = useState(1)
    const [totalResults, settotalResults] = useState(0)


    const updateNews = async () => {
        props.setProgress(10)
        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        const data = await fetch(url);
        props.setProgress(30)
        const parsedData = await data.json()
        props.setProgress(70)

        setarticles(parsedData.articles)
        settotalResults(parsedData.totalResults)
        setloading(false)
        props.setProgress(100)
    }

    useEffect(() => {
        document.title = `${capitalize(props.category)} - NewsMonkey`
        updateNews()
    }, [])



    const fetchMoreData = async () => {

        const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&page=${page + 1}&pageSize=${props.pageSize}`
        setpage(page + 1)
        const data = await fetch(url);
        const parsedData = await data.json()

        setarticles(articles.concat(parsedData.articles))
        settotalResults(parsedData.totalResults)
        setloading(false)
    }

    return (
        <>
            <h1 className='text-center' style={{ margin: "70px 0" }}>NewsMonkey - Top {capitalize(props.category)} Headlines</h1>
            {loading && <Spinner />}

            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={(articles.length > 0) && (articles.length < totalResults)}
                loader={<Spinner />}
            >
                <div className="container">
                    <div className="row">
                        {articles.map(element => (
                            <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        ))}
                    </div>
                </div>


            </InfiniteScroll>
        </>
    )
}

News.defaultProps = {
    country: "in",
    pageSize: 8,
    category: "general"
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
}

export default News