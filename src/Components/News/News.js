import React, { useState, useEffect } from 'react'
import './News.css'
import NewsItem from './NewsItem'
import Spinner from '../Spinner/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
    const capitalizeFirstLetter = (str)=>{
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [article, setArticle] = useState({
        articl: [],
        totalResult: 0
    });
    
    const handleNewsLoading = async (pgNo) => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${props.apiKey}&page=${pgNo}&pageSize=12`;
        setLoading(true);
        props.setProgress(15);
        let data = await fetch(url);
        props.setProgress(50);
        let parsedData = await data.json();
        props.setProgress(90);
        setArticle({
            articl: parsedData.articles,
            totalResult: parsedData.totalResults
        });
        setPage(pgNo);
        setLoading(false);
        props.setProgress(100);
    }


    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.catagory)} - NewsOrange`
        handleNewsLoading(1);
        // eslint-disable-next-line
    }, [props.catagory])


    const fetchMoreData = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.catagory}&apiKey=${props.apiKey}&page=${page+1}&pageSize=12`;
        let data = await fetch(url);
        let parsedData = await data.json();
        setArticle({
            articl: article.articl.concat(parsedData.articles),
            totalResult: parsedData.totalResults
        });
        setPage(page+1);

    }
    

    return (
        <>
        <div className="container-news">
            <h1 className="headline">{`NewsOrange - Top ${capitalizeFirstLetter(props.catagory)} Headlines`}</h1>
            

                    {loading && <Spinner />}
                    <InfiniteScroll
                    dataLength={article.articl.length}
                    next={fetchMoreData}
                    hasMore={article.articl.length !== article.totalResult}
                    loader={<Spinner />}
                    >
                    <div className="main">
                    {article.articl.map((ele) => {
                            return <NewsItem key={ele.url} title={ele.title} desc={ele.description} imgUrl={ele.urlToImage} url={ele.url} author={ele.author} date={ele.publishedAt} />
                    })}
                    </div>
                    </InfiniteScroll>             
        </div>
            
        </>
    )
}
