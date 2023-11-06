import { Link } from "react-router-dom"
import './NotFound.css'

const NotFound = () => {
  return (
    <>
        <div className="bg-emerald-200 notFound h-[100vh]">
            <div className="container mx-auto p-10">
                <Link className="underline" to={'/'}>Go Home</Link>
            </div>
        </div>
    </>
  )
}

export default NotFound