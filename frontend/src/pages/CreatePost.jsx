import React, { useState } from "react";
import api from "../libs/axios";
import { useNavigate, Link } from "react-router";
import toast from "react-hot-toast";
import { ArrowLeftIcon } from "lucide-react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("");
  const [file, setFile] = useState(null)
  const [preview, setPreview] = useState(null)
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const f = e.target.files[0]
    setFile(f)
    if (f) setPreview(URL.createObjectURL(f))
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !body.trim() || !author.trim()) {
      console.error("All fields are required!");
      toast.error('All fields are required!')
      return;
    }

    try {
      await api.post("/posts", { title, body, author, file });

      toast.success('Note successfully created!')
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-gray-100 px-4">
      <div className="w-full h-full bg-gray-800 rounded-2xl shadow-lg p-8 mt-0">
        {/* Back to Home Button */}
        <div className="absolute ">
          <Link to="/" className="flex items-center gap-2 text-white hover:text-primary-dull transition-colors duration-300">
            <ArrowLeftIcon className="w-5 h-5" />
            Back to Home
          </Link>
        </div>

        {/* Form Title */}
        <h1 className=" text-3xl text-primary-dull font-bold mb-8 mt-5 text-center ">
          Create New Post
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="Enter post title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-primary-dull focus:outline-none"
            />
          </div>

          {/* Body */}
          <div>
            <label
              htmlFor="body"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Body
            </label>
            <textarea
              type="text"
              id="body"
              placeholder="Write your post content..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows="10"
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-primary-dull focus:outline-none resize-none"
            />
          </div>

          {/* Author */}
          <div>
            <label
              htmlFor="author"
              className="block mb-2 text-sm font-medium text-gray-300"
            >
              Author
            </label>
            <input
              id="author"
              type="text"
              placeholder="Enter author name..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="w-full px-4 py-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-primary-dull focus:outline-none"
            />
          </div>
          <div>
            <input type="file" accept="image/*" onChange={handleFileChange} />
            {preview && <img src={preview} alt="preview" style={{ width: 180 }} />}
          </div>

          {/* Submit Button */}
          <div className="pt-4 w-80 mx-auto text-center">
            <button type="submit" className="mr-2 btn btn-primary rounded-2xl">Save Post</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
