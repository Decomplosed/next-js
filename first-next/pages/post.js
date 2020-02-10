import { withRouter } from 'next/router'

const Post = withRouter(({ id }) => <h1>You are looking at post #{id}</h1>)

Post.getInitialProps = async ({ query }) => {
  return query
}

export default Post
