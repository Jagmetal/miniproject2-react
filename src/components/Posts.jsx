import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, ListGroup } from 'react-bootstrap';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <Container>
      <h2>Posts</h2>
      <ListGroup>
        {posts.map(post => (
          <ListGroup.Item key={post.id}>{post.title}</ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
};

export default Posts;
