import { getBlogDetails } from "@/app/data/blogs";
import BlogDetailsPage from "@/app/views/blog-details/blog-details-page";
import React from "react";


const Page = async ({ params }) => {
  const { slug } = await params;
  const data = getBlogDetails(slug);

  return <BlogDetailsPage blog={data} />;
};

export default Page;
