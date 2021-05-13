import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  CreateContainer,
  Form,
  Input,
  Textarea,
  Select,
  Label,
  Option,
  Wrapper,
} from './Create.elements';
import { Container, Button, H1, Paragraph } from '../../globalStyles';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('John');
  const [date, setDate] = useState(new Date().toString().substring(0, 24));
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author, date };

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(blog),
    }).then(() => {
      // history.go(-1);
      history.push('/blog');
    });
  };

  return (
    <Wrapper>
      <Container>
        <CreateContainer>
          <H1 lightText>Add a Blog Post</H1>
          <Form onSubmit={handleSubmit}>
            {/* <Label>Date:</Label> */}
            <Label>Title:</Label>
            <Input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <Label>Body:</Label>
            <Textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}
            ></Textarea>
            <Label>Author:</Label>
            <Select value={author} onChange={(e) => setAuthor(e.target.value)}>
              <Option value="John">John</Option>
              <Option value="Jane">Jane</Option>
            </Select>
            <Paragraph white small onSubmit={(date) => setDate(date)}>
              {date}
            </Paragraph>
            <Button primary>Add Blog</Button>
          </Form>
        </CreateContainer>
      </Container>
    </Wrapper>
  );
};

export default Create;
