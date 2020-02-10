import axios from 'axios'

const Post = ({ id, comments }) => <h1>You are looking at post #{id}</h1>

Post.getInitialProps = async ({ query }) => {
  const res = await axios.get(
    'https://jsonplaceholder.typicode.com/comments?postId=3'
  )
  const { data } = res
  return { ...query, comments: data }
}

export default Post
