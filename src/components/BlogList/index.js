import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props

  return (
    <div className="blog-list-container">
      <ul className="blog-list">
        {blogsList.map(eachItem => (
          <BlogItem key={eachItem.id} blogDetails={eachItem} />
        ))}
      </ul>
    </div>
  )
}

export default BlogList
