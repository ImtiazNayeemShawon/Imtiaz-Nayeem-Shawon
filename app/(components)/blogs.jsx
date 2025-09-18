"use client";
import { useEffect, useState } from "react";
import { Calendar, ExternalLink, BookOpen } from "lucide-react";

export default function MediumPosts() {
  const [allPosts, setAllPosts] = useState([]);
  const [displayedPosts, setDisplayedPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [postsToShow, setPostsToShow] = useState(6);

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true);
        const res = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imtiaznayim95"
        );
        const data = await res.json();
        setAllPosts(data.items || []);
        setDisplayedPosts(data.items?.slice(0, postsToShow) || []);
      } catch (err) {
        console.error("Failed to fetch Medium posts", err);
      } finally {
        setLoading(false);
      }
    }
    fetchPosts();
  }, []);

  const loadMorePosts = () => {
    setLoadingMore(true);
    setTimeout(() => {
      const newPostsToShow = postsToShow + 6;
      setDisplayedPosts(allPosts.slice(0, newPostsToShow));
      setPostsToShow(newPostsToShow);
      setLoadingMore(false);
    }, 500);
  };

  // 🟢 Extract plain text from HTML
  const stripHtml = (html) => {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  };

  // 🟢 Extract first <img> src from description
  const getImageFromDescription = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    const img = div.querySelector("img");
    return img ? img.src : null;
  };

  if (loading) {
    return (
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-center space-x-2 text-blue-400">
            <BookOpen className="w-6 h-6 animate-pulse" />
            <span className="text-lg">Loading posts...</span>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="blogs" className="py-8 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="flex items-center space-x-3 mb-8">
          <h2 className="text-3xl font-bold text-white">
            Latest Medium Blogs
          </h2>
          <div className="flex-1 h-px bg-gradient-to-r from-blue-500 to-transparent"></div>
        </div>

        {/* Posts Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {displayedPosts.map((post, index) => {
            const fallbackImage = getImageFromDescription(post.description);
            const imageUrl = post.thumbnail || fallbackImage;

            return (
              <article
                key={`${post.link}-${index}`}
                className="group bg-gray-800 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/10"
              >
                {/* Thumbnail */}
                {imageUrl && (
                  <div className="relative overflow-hidden h-40">
                    <img
                      src={imageUrl}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-60"></div>
                  </div>
                )}

                {/* Content */}
                <div className="p-4">
                  {/* Title */}
                  <h3 className="text-white font-semibold text-sm leading-tight mb-3 line-clamp-2 group-hover:text-blue-400 transition-colors">
                    {post.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center space-x-2 text-gray-400 text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    <time dateTime={post.pubDate}>
                      {new Date(post.pubDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-xs leading-relaxed line-clamp-3 mb-4">
                    {stripHtml(post.description)}
                  </p>

                  {/* Read More Link */}
                  <a
                    href={post.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex cursor-pointer items-center space-x-2 text-blue-400 hover:text-blue-300 text-xs font-medium transition-colors group/link"
                  >
                    <span>Read more</span>
                    <ExternalLink className="w-3 h-3 transition-transform group-hover/link:translate-x-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* Load More Button */}
        {displayedPosts.length < allPosts.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={loadMorePosts}
              disabled={loadingMore}
              className="group relative px-8 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl hover:shadow-blue-500/25 hover:transform hover:scale-105"
            >
              {loadingMore ? (
                <div className="flex items-center space-x-2">
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                  <span>Loading...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2">
                  <span>Load More Posts</span>
                  <div className="transform transition-transform group-hover:translate-y-0.5">
                    ↓
                  </div>
                </div>
              )}
            </button>
          </div>
        )}

        {/* Footer Info */}
        {displayedPosts.length === allPosts.length && allPosts.length > 0 && (
          <div className="text-center mt-8">
            <p className="text-gray-400 text-sm">
              Showing all {allPosts.length} posts
            </p>
          </div>
        )}

        {/* No Posts Message */}
        {allPosts.length === 0 && !loading && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <p className="text-gray-400 text-lg">No posts found</p>
          </div>
        )}
      </div>
    </section>
  );
}
