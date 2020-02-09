import axios from 'axios'

// import React, { Component } from 'react'

// class Index extends Component {
//   constructor(props) {
//     super(props)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Index Page!!!</h1>
//       </div>
//     )
//   }
// }

const Index = ({ posts }) => {
  return (
    <div>
      <h1>Index Page!!!</h1>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
  const { data } = res

  return { posts: data }
}

export default Index
