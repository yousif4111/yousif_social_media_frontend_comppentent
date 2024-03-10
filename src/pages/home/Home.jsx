import Stories from "../../components/stories/Stories"
// import Posts from "../../components/posts/Posts"
import "./home.scss"

export const Home = () => {
  return (
    <div className="home">
      <Stories/>
      {/* <Posts/> */}
      <h1>Home</h1>
    </div>
  )
}

export default Home
