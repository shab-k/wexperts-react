import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {
  CreateContainer,
  Form,
  Input,
  Textarea,
  Select,
  Label,
  Option,
  Wrapper,
} from './Edit.elements';
import { Container, Button, H2 } from '../../globalStyles';
import axios from 'axios';

const Edit = () => {
  const history = useHistory();
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: '',
    body: '',
    author: '',
  });

  const { title, body, author } = blog;
  const onInputChange = (e) => {
    setBlog({ ...blog, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadBlog();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8000/blogs/${id}`, blog);
    history.push('/blog');
  };

  const loadBlog = async () => {
    const result = await axios.get(`http://localhost:8000/blogs/${id}`);
    setBlog(result.data);
  };
  ///////////
  // const Edit = () => {
  //   const [title, setTitle] = useState('');
  //   const [body, setBody] = useState('');
  //   const [author, setAuthor] = useState('John');
  //   const history = useHistory();

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const blog = { title, body, author };

  //     fetch('http://localhost:8000/blogs/', {
  //       method: 'POST',
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(blog)
  //     }).then(() => {
  //       // history.go(-1);
  //       history.push('/blog');
  //     })
  //   }

  return (
    <Wrapper>
      <Container>
        <CreateContainer>
          <H2>Edit Post</H2>
          <Form onSubmit={(e) => onSubmit(e)}>
            <Label>Title:</Label>
            <Input
              type="text"
              required
              value={title}
              name="title"
              onChange={(e) => onInputChange(e)}
            />
            <Label>Body:</Label>
            <Textarea
              required
              value={body}
              name="body"
              onChange={(e) => onInputChange(e)}
            ></Textarea>
            <Label>Author:</Label>
            <Select
              name="author"
              value={author}
              onChange={(e) => onInputChange(e)}
            >
              <Option value="John">John</Option>
              <Option value="Jane">Jane</Option>
            </Select>
            <Button primary>Edit Blog</Button>
          </Form>
        </CreateContainer>
      </Container>
    </Wrapper>
  );
};

export default Edit;
