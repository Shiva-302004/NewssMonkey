import React, { Component } from 'react'
import Newsitem from './Newsitem'
import InfiniteScroll from 'react-infinite-scroll-component'
import Spinner from './Spiner'

// import Spinner from './Spiner'
// import { PropTypes } from 'prop-types'

export class News extends Component {
  
  // static defaultProps={
  //   country:"in",
  //   pagesize:"5"
  // }
  // static PropTypes={
  //   country:PropTypes.string
  // }

   articles=[{"source":{"id":"reuters","name":"Reuters"},"author":null,"title":"Target removing some LGBTQ merchandise following customer backlash - Reuters","description":"(This May 23 story has been corrected to fix the spelling of Carnell's first name to Erik, from Eric, in paragraph 8)","url":"https://www.reuters.com/business/retail-consumer/target-remove-some-lbgtq-merchandise-after-facing-customer-backlash-2023-05-23/","urlToImage":"https://www.reuters.com/resizer/Evp_4nO4BTyeixQM-E5QyXBltjU=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/4ZRMT7S52BM5TCBCVNHYPHVC2Q.jpg","publishedAt":"2023-05-24T16:25:00Z","content":"NEW YORK, May 23 (Reuters) - (This May 23 story has been corrected to fix the spelling of Carnell's first name to Erik, from Eric, in paragraph 8)\r\nTarget, which rolled out its Pride Collection at th… [+3001 chars]"},{"source":{"id":"abc-news","name":"ABC News"},"author":"SUSIE BLANN and JOANNA KOZLOWSKA Associated Press","title":"Head of Russian private army Wagner says more than 20,000 of his troops died in Bakhmut battle - ABC News","description":"The head of the Russian private army Wagner says his force lost more than 20,000 men in the drawn-out battle for the eastern Ukrainian city of Bakhmut","url":"https://abcnews.go.com/International/wireStory/russia-shot-drones-border-region-after-raid-ukraine-99561565","urlToImage":"https://s.abcnews.com/images/International/wirestory_4f63ade7fb3899b6fa903b562ada0e2c_16x9_992.jpg","publishedAt":"2023-05-24T15:33:45Z","content":"KYIV, Ukraine -- The head of the Russian private army Wagner says his force lost more than 20,000 men in the drawn-out battle for Bakhmut, with about half of those who died in the eastern Ukrainian c… [+6136 chars]"}]
  constructor(props){
    super(props)
    this.state={
      articles:this.articles,
      loading:false,
      page:1,
      totalResults:0
    }
    document.title=` NewsMonkey- ${this.props.category} `
  }
  async componentDidMount() {
    // this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&page=1&pagesize=${this.props.pagesize}`
    let data= await fetch(url)
    
    let parsedData=await data.json()
    // this.props.setProgress(70)
    this.setState({articles:parsedData.articles})
    // this.props.setProgress(100)
  }
  async updateNews(){
    this.props.setProgress(10)
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}&page=${this.state.page+1}`
    // {this.setState({loading:true})}
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
    this.setState({page:this.state.page+1})
    this.props.setProgress(70)
    this.setState({totalResults:parsedData.totalResults})
    this.props.setProgress(100)
  }

   handlenextclick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}&page=${this.state.page+1}`
    // {this.setState({loading:true})}
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
    this.setState({page:this.state.page+1})
    
  }
  handlepreviousclick= async ()=>{
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}&page=${this.state.page-1}`
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:parsedData.articles})
    this.setState({page:this.state.page-1})
  }
   fetchMoreData= async ()=>{
    
    this.setState({page:this.state.page+1})
    // this.updateNews()
    let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apikey}&pagesize=${this.props.pagesize}&page=${this.state.page+1}`
    // {this.setState({loading:true})}
    let data= await fetch(url)
    let parsedData=await data.json()
    this.setState({articles:this.state.articles.concat(parsedData.articles)})
    this.setState({page:this.state.page+1})
    
    this.setState({totalResults:parsedData.totalResults})
    
  }

  

  render() {
    

    return (
      <>
        <h2 className='text-center' >Top News HeadLines --) from {this.props.category} </h2>
        {/* <div className='text-center'>{this.state.loading && < Spinner/>}</div> */}
        <InfiniteScroll dataLength={this.state.articles.length} next={this.fetchMoreData} hasMore={this.state.articles.length!==this.state.totalResults} loader={<Spinner />}>
        <div className='container my-3'>
        <div className="row">
          
            { this.state.articles.map((element)=>{
            // let a=new Date(element.publishedAt)
            return <div className="col-md-4">
              <Newsitem key={element.url} title={element.title?element.title.slice(0,20):""} author={element.author?element.author:""} description={element.description?element.description.slice(0,84):""} publishedAt={element.publishedAt} imageurl={element.urlToImage?element.urlToImage:"https://image.cnbcfm.com/api/v1/image/107221091-1680711937188-gettyimages-1239986799-NY_AUTO_SHOW_2022.jpeg?v=1685118033&w=1920&h=1080"} newsurl={element.url} />
          </div>
          
          
  })}
         
        </div>
        </div>
        </InfiniteScroll>
        {/* <div className='container d-flex justify-content-between'>
        <button type="button" class="btn btn-dark " onClick={this.handlepreviousclick} disabled={this.state.page<=1} >&larr; previous</button>
        <button type="button" class="btn btn-dark" onClick={this.handlenextclick} disabled={this.state.page>=5}>next &rarr;</button>
        </div> */}
      </>
    )
  }
}

export default News