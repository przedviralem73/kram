import React from 'react';
import Category from '../../components/Category/Category';
import PopularPost from '../../components/PopularPost/PopularPost';
import './PostPage.css';
import PostContent from '../../components/PostContent/PostContent';
import { useLocation } from 'react-router-dom';
import PostsClass from '../../store/PostsClass';

const PostPage = () => {
  const location = useLocation();
  const postId = location.pathname[location.pathname.length - 1];
  const { posts } = PostsClass;

  return (
    <div className="post">
      <div className="container">
        <main className="post-content">
          <PostContent
            postInfoImg={posts[postId - 1].img}
            postInfoTitle={posts[postId - 1].title}
            postInfoDescription={posts[postId - 1].description}
          />
          <nav className="left-navbar">
            <Category />
          </nav>
        </main>
      </div>
    </div>
  );
};

export default PostPage;
