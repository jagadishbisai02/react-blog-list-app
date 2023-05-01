import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <div className="item-container">
      <li className="blog-item-container">
        <div className="content-container">
          <h1 className="content-title">{title}</h1>
          <p className="content-description">{description}</p>
        </div>
        <p className="published-date">{publishedDate}</p>
      </li>
      <hr className="horizontal-line" />
    </div>
  )
}

export default BlogItem
