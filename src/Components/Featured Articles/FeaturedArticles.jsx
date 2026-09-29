function FeaturedArticles() {
  const articles = [
    {
      title: "إتقان تصوير الساعة الذهبية: دليل شامل",
      category: "إضاءة",
      readTime: "8 دقائق للقراءة",
      author: "سالم أحمد",
      date: "١٥ يناير ٢٠٢٦",
      description:
        "اكتشف أسرار التصوير في الساعة الذهبية وكيف تستغل الضوء الطبيعي للحصول على صور سينمائية مذهلة.",
      image:
        "https://images.unsplash.com/photo-1500835556837-99ac94a94552?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "أسرار تصوير البورتريه: كيف تلتقط روح الشخصية",
      category: "بورتريه",
      readTime: "6 دقائق للقراءة",
      author: "محمد علي",
      date: "١٢ يناير ٢٠٢٦",
      description:
        "تعلم كيفية التعامل مع الإضاءة والتكوين والتعبير لالتقاط صور بورتريه تحكي قصة وتظهر شخصية الإنسان.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1200&q=80",
    },
    {
      title: "دليل تصوير المناظر الطبيعية: من المبتدئ إلى المحترف",
      category: "مناظر طبيعية",
      readTime: "10 دقائق للقراءة",
      author: "إبراهيم حسن",
      date: "١٠ يناير ٢٠٢٦",
      description:
        "كل ما تحتاج معرفته لتصوير المناظر الطبيعية، من اختيار المكان والوقت إلى إعدادات الكاميرا والتكوين.",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <span className="text-orange-500 text-sm font-medium">
              محتوى مميز
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              مقالات مختارة
            </h2>

            <p className="text-neutral-400 mt-3">
              محتوى منتقى لبدء رحلة تعلمك
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
          >
            عرض الكل

            <svg
              className="w-5 h-5 rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

        </div>


        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {articles.map((article, index) => (

            <article
              key={index}
              className="group bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Featured Badge */}
                <div className="absolute top-4 right-4">

                  <span className="px-3 py-1.5 bg-orange-500 text-white text-xs font-medium rounded-full">
                    مميز
                  </span>

                </div>

                {/* Category */}
                <div className="absolute bottom-4 right-4">

                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-orange-400 text-xs font-medium rounded-lg border border-white/10">
                    {article.category}
                  </span>

                </div>

              </div>


              {/* Content */}
              <div className="p-6">

                {/* Reading Time */}
                <div className="flex items-center gap-2 text-neutral-500 text-sm mb-4">

                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>

                  <span>{article.readTime}</span>

                </div>


                {/* Title */}
                <h3 className="text-xl font-bold text-white leading-relaxed mb-3 group-hover:text-orange-400 transition-colors duration-300">
                  {article.title}
                </h3>


                {/* Description */}
                <p className="text-neutral-400 text-sm leading-7 mb-6">
                  {article.description}
                </p>


                {/* Author */}
                <div className="flex items-center justify-between pt-5 border-t border-[#262626]">

                  <div className="flex items-center gap-3">

                    <div className="w-9 h-9 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center">
                      <span className="text-white text-sm font-bold">
                        {article.author.charAt(0)}
                      </span>
                    </div>

                    <div>
                      <p className="text-white text-sm font-medium">
                        {article.author}
                      </p>

                      <p className="text-neutral-500 text-xs">
                        {article.date}
                      </p>
                    </div>

                  </div>


                  {/* Arrow */}
                  <div className="w-9 h-9 rounded-full border border-[#262626] flex items-center justify-center text-neutral-500 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300">

                    <svg
                      className="w-4 h-4 rotate-180"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14m-7-7l7 7-7 7"
                      />
                    </svg>

                  </div>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default FeaturedArticles;