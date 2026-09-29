import { Link } from "react-router-dom";
import postsData from "../data/posts.json";

function About() {
  const authors = [
    ...new Map(
      postsData.posts.map((post) => [
        post.author.name,
        post.author,
      ])
    ).values(),
  ];

  return (
    <main className="bg-[#0a0a0a] text-white">

      {/* ==================== Hero Section ==================== */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-[#0a0a0a]"></div>

        <div className="absolute inset-0 bg-[linear-gradient(rgba(38,38,38,0.5)_1px,transparent_1px),linear-gradient(90deg,rgba(38,38,38,0.5)_1px,transparent_1px)] bg-[size:60px_60px]"></div>

        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-orange-500/20 rounded-full blur-[100px]"></div>

          <div className="absolute bottom-20 right-20 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <span className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            من نحن
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            مهمتنا هي{" "}
            <span className="bg-gradient-to-r from-orange-400 to-yellow-500 bg-clip-text text-transparent">
              الإعلام والإلهام
            </span>
          </h1>

          <p className="text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed mb-12">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">

            {/* Stat 1 */}
            <div className="bg-[#161616]/80 backdrop-blur-md border border-[#262626] rounded-2xl p-6">
              <i className="fa-solid fa-users text-orange-500 text-2xl mb-4"></i>

              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                +2مليون
              </div>

              <div className="text-neutral-500 text-sm">
                قارئ شهرياً
              </div>
            </div>

            {/* Stat 2 */}
            <div className="bg-[#161616]/80 backdrop-blur-md border border-[#262626] rounded-2xl p-6">
              <i className="fa-solid fa-newspaper text-orange-500 text-2xl mb-4"></i>

              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                +500
              </div>

              <div className="text-neutral-500 text-sm">
                مقالة منشورة
              </div>
            </div>

            {/* Stat 3 */}
            <div className="bg-[#161616]/80 backdrop-blur-md border border-[#262626] rounded-2xl p-6">
              <i className="fa-solid fa-pen-nib text-orange-500 text-2xl mb-4"></i>

              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                +50
              </div>

              <div className="text-neutral-500 text-sm">
                كاتب خبير
              </div>
            </div>

            {/* Stat 4 */}
            <div className="bg-[#161616]/80 backdrop-blur-md border border-[#262626] rounded-2xl p-6">
              <i className="fa-solid fa-book-open text-orange-500 text-2xl mb-4"></i>

              <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                +15
              </div>

              <div className="text-neutral-500 text-sm">
                تصنيف
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== Values Section ==================== */}
      <section className="py-20 bg-[#111111] border-y border-[#262626]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">

              <span className="w-1.5 h-8 bg-gradient-to-b from-orange-500 to-yellow-500 rounded-full"></span>

              قيمنا

              <span className="w-1.5 h-8 bg-gradient-to-b from-yellow-500 to-orange-500 rounded-full"></span>

            </h2>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Value 1 */}
            <div className="group relative bg-[#161616] rounded-2xl p-6 border border-[#262626] hover:border-orange-500/30 transition-all duration-300 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">

                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  <i className="fa-solid fa-bullseye text-orange-500 text-xl"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  الجودة أولاً
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  محتوى مدروس ومكتوب بخبرة
                </p>

              </div>
            </div>

            {/* Value 2 */}
            <div className="group relative bg-[#161616] rounded-2xl p-6 border border-[#262626] hover:border-orange-500/30 transition-all duration-300 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">

                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  <i className="fa-solid fa-bolt text-orange-500 text-xl"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  تركيز عملي
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  أمثلة واقعية يمكنك تطبيقها اليوم
                </p>

              </div>
            </div>

            {/* Value 3 */}
            <div className="group relative bg-[#161616] rounded-2xl p-6 border border-[#262626] hover:border-orange-500/30 transition-all duration-300 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">

                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  <i className="fa-solid fa-handshake text-orange-500 text-xl"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  المجتمع
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  تعلم مع آلاف المصورين
                </p>

              </div>
            </div>

            {/* Value 4 */}
            <div className="group relative bg-[#161616] rounded-2xl p-6 border border-[#262626] hover:border-orange-500/30 transition-all duration-300 overflow-hidden">

              <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">

                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center mb-5">
                  <i className="fa-solid fa-arrows-rotate text-orange-500 text-xl"></i>
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  دائماً محدث
                </h3>

                <p className="text-neutral-400 leading-relaxed">
                  أحدث الاتجاهات وأفضل الممارسات
                </p>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ==================== Team Section ==================== */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-16">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-sm mb-4">
              فريقنا
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              تعرف على كتابنا
            </h2>

            <p className="text-lg text-neutral-400 max-w-2xl mx-auto">
              فريقنا من المصورين والكتاب ذوي الخبرة شغوفون بمشاركة معرفتهم
              مع المجتمع.
            </p>

          </div>

          {/* Dynamic Authors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {authors.map((author) => (

              <div
                key={author.name}
                className="group bg-[#161616] rounded-2xl p-6 text-center border border-[#262626] hover:border-orange-500/30 transition-all duration-300"
              >

                {/* Avatar */}
                <div className="relative inline-block mb-4">

                  <img
                    src={author.avatar}
                    alt={author.name}
                    className="w-24 h-24 rounded-full object-cover ring-4 ring-[#262626] group-hover:ring-orange-500/30 transition-all"
                  />

                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-orange-500 rounded-full border-2 border-[#161616] flex items-center justify-center">
                    <i className="fa-solid fa-check text-white text-xs"></i>
                  </div>

                </div>

                {/* Author Info */}
                <h3 className="font-bold text-white text-lg">
                  {author.name}
                </h3>

                <p className="text-orange-500 text-sm font-medium mb-4">
                  {author.role}
                </p>

                {/* Social Icons */}
                <div className="flex justify-center gap-3">

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>

                  <a
                    href="#"
                    className="w-9 h-9 rounded-full bg-[#262626] flex items-center justify-center text-neutral-400 hover:bg-orange-500 hover:text-white transition-all"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* ==================== Contact CTA ==================== */}
      <section className="py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 relative overflow-hidden">

        <div className="absolute inset-0 opacity-30">

          <div className="absolute top-10 right-10 w-64 h-64 bg-white/20 rounded-full blur-[100px]"></div>

          <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/20 rounded-full blur-[80px]"></div>

        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>

          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            نحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة،
            أو تريد فقط إلقاء التحية، لا تتردد في التواصل.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">

            {/* Contact */}
            <a
              href="mailto:hello@adasah.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0a0a0a] text-white rounded-xl font-medium hover:bg-[#161616] transition-all"
            >
              <i className="fa-solid fa-envelope"></i>
              تواصل معنا
            </a>

            {/* Blog */}
            <Link
              to="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-xl font-medium hover:bg-white/20 transition-all"
            >
              تصفح المقالات
              <i className="fa-solid fa-arrow-left"></i>
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export default About;