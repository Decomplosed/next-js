import { withRouter } from 'next/router'

const Post = props => <h1>You are looking at post #</h1>

Post.getInitialProps = async ({ query }) => {
  return query
}

export default withRouter(Post)
