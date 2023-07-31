import { Link } from 'react-router-dom'

export default function NotFOund() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex repudiandae nobis fugiat</p>
      <p>Go to the <Link to="/">Homepage</Link>.</p>
    </div>
  )
}
