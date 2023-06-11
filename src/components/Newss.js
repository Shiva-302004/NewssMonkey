import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spiner'

// import Spinner from './Spiner'
// import { PropTypes } from 'prop-types'
const  News=(props)=>{
  let [articles, setArticles] = useState([""])
  // const [loading, setloading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, settotalResults] = useState(0)
  // static defaultProps={
  //   country:"in",
  //   pagesize:"5"
  // }
  // static PropTypes={
  //   country:PropTypes.string
  // }  
   document.title=` NewsMonkey- ${props.category} `

  //  articles=[{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Target removing some LGBTQ merchandise following customer backlash - Reuters","description":"(This May 23 story has been corrected to fix the spelling of Carnell's first name to Erik, from Eric, in paragraph 8)","url":"https://www.reuters.com/business/retail-consumer/target-remove-some-lbgtq-merchandise-after-facing-customer-backlash-2023-05-23/","urlToImage":"https://www.reuters.com/resizer/Evp_4nO4BTyeixQM-E5QyXBltjU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ZRMT7S52BM5TCBCVNHYPHVC2Q.jpg","publishedAt":"2023-05-24T16:25:00Z","content":"NEW YORK, May 23 (Reuters) - (This May 23 story has been corrected to fix the spelling of Carnell's first name to Erik, from Eric, in paragraph 8)\r\nTarget, which rolled out its Pride Collection at th… [+3001 chars]"},{"source":{"id":"abc-news","name":"ABC News"},"author":"SUSIE BLANN and JOANNA KOZLOWSKA Associated Press","title":"Head of Russian private army Wagner says more than 20,000 of his troops died in Bakhmut battle - ABC News","description":"The head of the Russian private army Wagner says his force lost more than 20,000 men in the drawn-out battle for the eastern Ukrainian city of Bakhmut","url":"https://abcnews.go.com/International/wireStory/russia-shot-drones-border-region-after-raid-ukraine-99561565","urlToImage":"https://s.abcnews.com/images/International/wirestory_4f63ade7fb3899b6fa903b562ada0e2c_16x9_992.jpg","publishedAt":"2023-05-24T15:33:45Z","content":"KYIV, Ukraine -- The head of the Russian private army Wagner says his force lost more than 20,000 men in the drawn-out battle for Bakhmut, with about half of those who died in the eastern Ukrainian c… [+6136 chars]"}]
 
  
  const  updateNews=async()=>{
    // props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${page+1}`
    
    let data= await fetch(url)
    let parsedData=await data.json()
    setArticles(parsedData.articles)
    
    setPage(page+1)
    // props.setProgress(70)
    
    settotalResults(parsedData.totalResults)

    // setloading(false)

    // props.setProgress(100)
  }

  useEffect(() => {
    updateNews();
  },[])
  

  // const handlenextclick= async ()=>{
  //   setPage(page+1)
  //   updateNews()
    
  // }

  // const handlepreviousclick= async ()=>{
    
  //   setPage(page-1)
  //   updateNews()
  // }
  const fetchMoreData= async ()=>{
    
    
    setPage(page+1)
    const  url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&pagesize=${props.pagesize}&page=${page+1}`
  
    let data= await fetch(url)
    let parsedData=await data.json()
   
    setArticles(articles.concat(parsedData.articles))
 
    // setPage(page+1)

    
   
    settotalResults(parsedData.totalResults)
    
  }

  

  
    

    return (
      <>
        <h2 className='text-center' >Top News HeadLines --) from {props.category} </h2>
        
        <InfiniteScroll dataLength={articles.length} next={fetchMoreData} hasMore={articles.length!==totalResults} loader={<Spinner />}>
        <div className='container my-3'>
        <div className="row">
          
            { articles.map((element)=>{
            
            return <div className="col-md-4">
              <Newsitem key={element.url} title={element.title?element.title.slice(0,20):""} author={element.author?element.author:""} description={element.description?element.description.slice(0,84):""} publishedAt={element.publishedAt} imageurl={element.urlToImage?element.urlToImage:"https://image.cnbcfm.com/api/v1/image/107221091-1680711937188-gettyimages-1239986799-NY_AUTO_SHOW_2022.jpeg?v=1685118033&w=1920&h=1080"} newsurl={element.url} />
          </div>
          
          
  })}
         
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
        <button type="button" class="btn btn-dark " onClick={this.handlepreviousclick} disabled={page<=1} >&larr; previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handlenextclick} disabled={page>=5}>next &rarr;</button>
        </div> */}
      </>
    )
  }


export default News