import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom" // Import Link
import sanityClient from "../../client.js"
import Navbar from "../Home/Navbar"
import { Card, Spin } from "antd"
import RightArrow from "../../assets/icons/right-arrow.svg"
import UserProfile from "../../assets/icons/user-profile.svg"
import BlockContent from "@sanity/block-content-to-react"
import Subscribe from "../Home/Subscribe.js"
import Footer from "../Home/Footer.js"
import CustomLoader from "../Loader/index.jsx"

const { Meta } = Card

const SingleBlogPost = () => {
  const { slug } = useParams()
  const [isLoading, setIsLoading] = useState(false)
  const [blog, setBlog] = useState(null)
  const [suggestedBlogs, setSuggestedBlogs] = useState([])

  useEffect(() => {
    setIsLoading(true)
    sanityClient
      .fetch(
        `*[_type == "post" && slug.current == $slug] {
                _id,
                _type,
                _createdAt,
                _updatedAt,
                title,
                author->,
                mainImage {
                    ...,
                    asset->
                },
                categories[]->,
                publishedAt,
                body
            }`,
        { slug }
      )
      .then((data) => {
        if (data.length > 0) {
          setBlog(data[0])
        } else {
          console.error("Blog post not found")
        }
      })
      .catch(console.error)
      .finally(() => setIsLoading(false))

    sanityClient
      .fetch(
        `*[_type == "post" && slug.current != "${slug}"]{
        title,
        slug,
        _createdAt,
        mainImage{
          asset->{
          _id,
          url
          },
          alt
        }
        }[0...3]`
      )
      .then((data) => setSuggestedBlogs(data))
      .catch(console.error)
  }, [slug])

  const renderLoader = () => <CustomLoader />

  const renderBlogContent = () => (
    <>
      <div className="main-wrapper">
        <Navbar />
        <div className="w-11/12 mx-auto 2xl:max-w-[1154px]">
          <div className="grid grid-cols-12 gap-5 md:gap-8 mt-8 single-blog">
            <div className="col-span-12 xl:col-span-6">
              <ul className=" for-small-screen inline-flex items-center space-x-1">
                <li>
                  <div className="dash-line smallscreen w-[100px] sm:w-[100px] h-[2px] bg-parrot "></div>
                </li>
                <li>
                  <h4 className="pl-2 smscreen small-screen-heading sm:pl-10 f-f-m text-lg  text-white">
                    RAPIDO RELIEF
                  </h4>
                </li>
                <li>
                  <img
                    className="pl-2 sm:pl-4"
                    src="/icons/right-arrow.svg"
                    alt="right-arrow"
                  />
                </li>
                <li>
                  <h4 className="pl-2 sm:pl-4 f-f-m text-lg sm:text-2xl text-white w-full">
                    {blog?.categories[0]?.title}
                  </h4>
                </li>
                <li>
                  <img
                    className="pl-2 sm:pl-4"
                    src="/icons/right-arrow.svg"
                    alt="right-arrow"
                  />
                </li>
                <li>
                  <h4 className="pl-2 sm:pl-4 f-f-m text-lg sm:text-2xl text-white ">
                    {blog?.title}
                  </h4>
                </li>
              </ul>

              <h1 className="f-f-m text-[2.5rem] small-screen-single-blog sm:text-12xl text-green mt-2 flex justify-center">
                {blog?.title}
              </h1>
            </div>
          </div>
          <div className="flex justify-center mt-3 pb-8">
            <img src="/icons/user-profile.svg" alt="user-img" />
            <h3 className=" small-screen-author pl-3">
              Posted by {blog?.author?.name} on {formattedDate}{" "}
            </h3>
          </div>
        </div>
      </div>
      <div className="w-10/12 mx-auto 2xl:max-w-[1154px]">
        <div className="mb-5">
          <img
            className="img-css mt-6"
            src={blog?.mainImage?.asset?.url}
            alt="blog-img"
          />
          <div className="mt-5 ">
            <BlockContent blocks={blog?.body} />
          </div>
        </div>
        <div className="mt-10 w-full h-[2px] primary-color-bg"></div>
        <div className="mt-10 suggested-blogs">
          <h1>Maybe You Want to Read</h1>
          <div className="mt-10 flex flex-col md:flex-row md:justify-between">
            {suggestedBlogs?.map((blog) => (
              <Link
                key={blog?.slug?.current}
                to={`/blog/${blog?.slug?.current}`}
              >
                <Card
                  style={{
                    width: "100%",
                    maxWidth: "350px",
                    marginBottom: "20px",
                  }}
                  cover={
                    <img alt="example" src={blog?.mainImage?.asset?.url} />
                  }
                >
                  <div className="px-4">
                    <div className="pt-5 primary-color">
                      {formatDate(blog._createdAt)}
                    </div>
                    <Meta className="pb-5 pt-3" title={blog?.title} />
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Subscribe />
      <Footer />
    </>
  )

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    })
  }

  const formattedDate = blog ? formatDate(blog._createdAt) : ""

  return <>{isLoading ? renderLoader() : renderBlogContent()}</>
}

export default SingleBlogPost
