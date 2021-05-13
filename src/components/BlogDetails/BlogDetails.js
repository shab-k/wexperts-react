import { useHistory, useParams } from 'react-router-dom';
import useFetch from '../../useFetch';
import {
  Container,
  H2,
  Paragraph,
  Button,
  StyledLink,
} from '../../globalStyles';
import { Wrapper } from '../Create/Create.elements';
import {
  // BlogDetail,
  Article,
} from './BlogDetails.elements';

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    error,
    isPending,
  } = useFetch('http://localhost:8000/blogs/' + id);
  const history = useHistory();

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blog.id, {
      method: 'DELETE',
    }).then(() => {
      history.push('/blog');
    });
  };
  // const handleEdit = (e) => {
  //  e.preventDefault();
  //     history.push(`/blogs/edit/${blog.id}`);
  // }

  return (
    <Wrapper>
      <Container>
        {/* <BlogDetail> */}
        {isPending && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {blog && (
          <Article>
            <H2>{blog.title}</H2>
            <Paragraph>Written by {blog.author}</Paragraph>
            <Paragraph>{blog.body}</Paragraph>
            <br />
            <Paragraph small bold>
              {blog.date}
            </Paragraph>
            <StyledLink to={`/blogs/edit/${blog.id}`}>
              <Button primary>Edit</Button>
            </StyledLink>

            <Button primary onClick={handleClick}>
              Delete
            </Button>
          </Article>
        )}
        {/* </BlogDetail> */}
      </Container>
    </Wrapper>
  );
};

export default BlogDetails;
