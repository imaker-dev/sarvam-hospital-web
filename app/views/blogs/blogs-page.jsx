import { blogs } from "@/app/data/blogs";
import PageHeader from "../layouts/page-header";
import BlogsList from "./components/blogs-list";

export default function BlogPage() {
  return (
    <>
      <PageHeader title="Our Blogs" highlight="Blogs" />
      <BlogsList blogs={blogs} />
    </>
  );
}
