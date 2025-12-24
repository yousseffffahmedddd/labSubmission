

const MOCK_SERVER_URL = "http://localhost:3001";

// Fetch all posts
export const getAllPosts = async () => {
  try {
    const response = await fetch(`${MOCK_SERVER_URL}/posts`);
    if (!response.ok) {
      throw new Error(`Failed to fetch posts: ${response.status}`);
    }
    return await response.json(); // array of posts
  } catch (err) {
    console.error("Error in getAllPosts:", err);
    return []; // prevent UI crash
  }
};

// Fetch post details + comments
export const getPostDetails = async (postId) => {
  try {
    const response = await fetch(`${MOCK_SERVER_URL}/posts/${postId}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch post ${postId}`);
    }

    const postData = await response.json();

    // Express backend returns post with nested comments
    return { 
      post: { id: postData.id, name: postData.name, content: postData.content }, 
      comments: postData.comments || [] 
    };
  } catch (err) {
    console.error("Error in getPostDetails:", err);
    return { post: null, comments: [] };
  }
};

// Create new post
export const createNewPost = async (newPostData) => {
  try {
    const response = await fetch(`${MOCK_SERVER_URL}/posts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newPostData),
    });
    if (!response.ok) {
      throw new Error("Failed to create post");
    }
    return await response.json();
  } catch (err) {
    console.error("Error in createNewPost:", err);
  }
};

// Create new comment
export const createNewComment = async (postId, newCommentData) => {
  try {
    const response = await fetch(`${MOCK_SERVER_URL}/posts/${postId}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newCommentData),
    });
    if (!response.ok) {
      throw new Error(`Failed to create comment for post ${postId}`);
    }
    return await response.json();
  } catch (err) {
    console.error("Error in createNewComment:", err);
  }
};
