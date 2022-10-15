import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinnner from "./Spinnner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props)=> {

 const [articles, setArticles] = useState([])
 const [loading, setLoading] = useState(false)
 const [page, setPage] = useState(1)
 const [totalResults, setTotalResults] = useState(0)

 
 const capitalizeFirstLetter = (string) => {
   return string.charAt(0).toUpperCase() + string.slice(1);
  }
  

  const updateNews = async () => {
    props.changeProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true)
    let data = await fetch(url);
    props.changeProgress(30);
    let parsedData = await data.json();
    props.changeProgress(70);
    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.changeProgress(100);
  }

  useEffect(()=>{
    document.title = `${capitalizeFirstLetter(props.category)} - News Monkey`;
    updateNews();
  }, [])

 const fetchMoreData = async () => {
   let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`;
   setPage(page + 1)
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
  };


    return (
      <div>
        <h1 className="text-center" style={{ margin: "30px 0px", marginTop:'90px' }}>
          NewsMonkey - Top {capitalizeFirstLetter(props.category)} Headlines
        </h1>
        {/* {loading && <Spinnner />} */}

        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== articles.totalResults}
          loader={<Spinnner/>}
        >
          <div className="container">
        <div className="row">
          {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author ? element.author : "Unknown"}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
        </div>
        </div>
        </InfiniteScroll>
      </div>
    );
}

News.defaulProps = {
  country: "in",
  pageSize: 6,
  category: "general",
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News
