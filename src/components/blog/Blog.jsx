import React, { useState, useEffect } from "react";
import "./blog.css";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://fakerapi.it/api/v1/texts?_quantity=5&_characters=200")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setPosts(data.data); // Fixing API response structure
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="blog-container">
      <h2 className="blog-title">Latest Insights & IT Trends</h2>
      {loading ? (
        <p>Loading blogs...</p>
      ) : (
        <div className="blog-list">
          {posts.map((post, index) => (
            <div key={index} className="blog-card">
              {/* Using a placeholder image */}
              <img
                src={`https://source.unsplash.com/400x250/?technology,ai,${index}`}
                alt={post.title}
                className="blog-image"
              />
              <h3 className="blog-heading">{post.title || "No Title"}</h3>
              <p className="blog-description">
                {post.content.substring(0, 150)}...
              </p>
              <button className="read-more">Read More</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
