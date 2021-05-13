import BlogList from '../components/BlogList/BlogList';
import useFetch from '../useFetch';
import { H2 } from '../globalStyles';

const Blog = () => {
  const {
    error,
    isPending,
    data: blogs,
  } = useFetch('http://localhost:8000/blogs?_sort=date&_order=desc');

  return (
    <div className="blog">
      {error && <div>{error}</div>}
      {isPending && <H2 center>Loading...</H2>}
      {blogs && <BlogList blogs={blogs} />}
    </div>
  );
};

export default Blog;
