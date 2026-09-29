import { useState } from "react";
import postsData from "../data/posts.json";

function Blog() {
  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] = useState("الكل");

  const [viewMode, setViewMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 6;
  const filteredPosts = postsData.posts.filter((post) => {
    const matchesSearch = post.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "الكل" || post.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const startIndex = (currentPage - 1) * postsPerPage;

  const currentPosts = filteredPosts.slice(
    startIndex,
    startIndex + postsPerPage,
  );

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-28 pb-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="text-center mb-10">
          <span className="text-orange-500 text-sm font-medium">
            مدونة عدسة
          </span>

          <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
            استكشف عالم التصوير
          </h1>

          <p className="text-neutral-400 max-w-2xl mx-auto leading-8">
            اكتشف أحدث المقالات والنصائح والتقنيات التي تساعدك على تطوير مهاراتك
            في التصوير الفوتوغرافي.
          </p>
        </div>

        {/* Search */}
        <div className="max-w-xl mx-auto relative">
          <input
            type="text"
            placeholder="ابحث عن مقال..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#161616] border border-[#262626] rounded-2xl py-4 pr-12 pl-4 text-white placeholder:text-neutral-500 outline-none focus:border-orange-500 transition"
          />

          <i className="fa-solid fa-magnifying-glass absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500"></i>
        </div>
        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {["الكل", "إضاءة", "بورتريه", "مناظر طبيعية", "تقنيات", "معدات"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-orange-500 text-white"
                    : "bg-[#161616] text-neutral-400 border border-[#262626] hover:text-white"
                }`}
              >
                {category}
              </button>
            ),
          )}
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-6">
          <p className="text-sm text-neutral-500">
            {filteredPosts.length} مقال
          </p>

          <div className="flex items-center gap-2 bg-[#161616] border border-[#262626] rounded-xl p-1">
            <button
              onClick={() => setViewMode("grid")}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                viewMode === "grid"
                  ? "bg-orange-500 text-white"
                  : "text-neutral-500 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-grip"></i>
            </button>

            <button
              onClick={() => setViewMode("list")}
              className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                viewMode === "list"
                  ? "bg-orange-500 text-white"
                  : "text-neutral-500 hover:text-white"
              }`}
            >
              <i className="fa-solid fa-bars"></i>
            </button>
          </div>
        </div>
        <div
          className={
            viewMode === "grid"
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "flex flex-col gap-6"
          }
        >
          {currentPosts.map((post) => (
            <article
              key={post.id}
              className={`group bg-[#111111] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300 ${
                viewMode === "list" ? "flex flex-col md:flex-row" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list" ? "md:w-80 md:flex-shrink-0" : ""
                }`}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  className={`w-full object-cover group-hover:scale-105 transition-transform duration-500 ${
                    viewMode === "list" ? "h-60 md:h-full" : "h-60"
                  }`}
                />

                <span className="absolute top-4 right-4 bg-orange-500 text-white text-xs font-medium px-3 py-1.5 rounded-full">
                  {post.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1">
                <h2 className="text-xl font-bold leading-8 mb-3 group-hover:text-orange-500 transition-colors">
                  {post.title}
                </h2>

                <p className="text-neutral-400 text-sm leading-7 mb-5">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between border-t border-[#262626] pt-4">
                  <div className="flex items-center gap-3">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-9 h-9 rounded-full object-cover"
                    />

                    <div>
                      <p className="text-sm text-white">{post.author.name}</p>

                      <p className="text-xs text-neutral-500">
                        {post.author.role}
                      </p>
                    </div>
                  </div>

                  <div className="text-xs text-neutral-500 text-left">
                    <p>{post.date}</p>

                    <p className="mt-1">{post.readTime} دقائق</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-2 mt-12">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white disabled:opacity-30 transition"
            >
              <i className="fa-solid fa-chevron-right"></i>
            </button>

            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index + 1}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-10 h-10 rounded-lg transition ${
                  currentPage === index + 1
                    ? "bg-orange-500 text-white"
                    : "bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="w-10 h-10 rounded-lg bg-[#161616] border border-[#262626] text-neutral-400 hover:text-white disabled:opacity-30 transition"
            >
              <i className="fa-solid fa-chevron-left"></i>
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

export default Blog;
