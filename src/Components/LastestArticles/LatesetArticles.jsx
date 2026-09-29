function LatestArticles() {
  const articles = [
    {
      title: "أساسيات إعدادات الكاميرا: مثلث التعريض الضوئي",
      category: "تقنيات",
      readTime: "7 دقائق",
      date: "٨ يناير ٢٠٢٦",
      author: "داود خالد",
      role: "مدرب تصوير",
      image:
        "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=1200&q=80",
      description:
        "تعرف على مثلث التعريض الضوئي وكيفية التحكم في فتحة العدسة وسرعة الغالق وحساسية ISO.",
    },
    {
      title: "قواعد التكوين الفوتوغرافي: كيف تجعل صورك أكثر جاذبية",
      category: "تقنيات",
      readTime: "9 دقائق",
      date: "٥ يناير ٢٠٢٦",
      author: "ليث محمود",
      role: "فنان بصري",
      image:
        "https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&w=1200&q=80",
      description:
        "اكتشف أهم قواعد التكوين التي تساعدك على ترتيب عناصر الصورة وجعلها أكثر توازناً وجاذبية.",
    },
    {
      title: "تصوير الهاتف المحمول: كيف تلتقط صوراً احترافية بهاتفك",
      category: "معدات",
      readTime: "8 دقائق",
      date: "٣ يناير ٢٠٢٦",
      author: "جمال عبدالله",
      role: "مصور ومراجع تقني",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",
      description:
        "نصائح عملية لتحسين صور الهاتف واستخدام الإضاءة والتكوين وإعدادات الكاميرا بشكل أفضل.",
    },
  ];

  return (
    <section className="bg-[#0a0a0a] py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">

          <div>
            <span className="text-orange-500 text-sm font-medium">
              جديدنا
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
              أحدث المقالات
            </h2>

            <p className="text-neutral-400 mt-3">
              محتوى جديد طازج من المطبعة
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-2 text-orange-500 hover:text-orange-400 transition-colors"
          >
            عرض جميع المقالات

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


        {/* Articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {articles.map((article, index) => (

            <article
              key={index}
              className="group bg-[#161616] border border-[#262626] rounded-2xl overflow-hidden hover:border-orange-500/40 transition-all duration-300"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>

                {/* Category */}
                <div className="absolute top-4 right-4">

                  <span className="px-3 py-1.5 bg-black/60 backdrop-blur-sm text-orange-400 text-xs font-medium rounded-lg border border-white/10">
                    {article.category}
                  </span>

                </div>

              </div>


              {/* Content */}
              <div className="p-6">

                {/* Meta */}
                <div className="flex items-center justify-between mb-4">

                  <div className="flex items-center gap-2 text-neutral-500 text-sm">

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

                  <span className="text-neutral-600 text-xs">
                    {article.date}
                  </span>

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
                <div className="flex items-center gap-3 pt-5 border-t border-[#262626]">

                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-500 to-orange-700 flex items-center justify-center shrink-0">

                    <span className="text-white font-bold text-sm">
                      {article.author.charAt(0)}
                    </span>

                  </div>

                  <div>
                    <p className="text-white text-sm font-medium">
                      {article.author}
                    </p>

                    <p className="text-neutral-500 text-xs mt-1">
                      {article.role}
                    </p>
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

export default LatestArticles;