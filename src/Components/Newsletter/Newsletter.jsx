function Newsletter() {
  return (
    <section className="bg-[#111111] py-24">

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="relative overflow-hidden bg-[#161616] border border-[#262626] rounded-3xl p-8 md:p-12">

          {/* Orange Glow */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl"></div>

          <div className="relative text-center max-w-2xl mx-auto">

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">

              <svg
                className="w-8 h-8 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>

            </div>


            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              اشترك في نشرتنا الإخبارية
            </h2>

            <p className="text-neutral-400 leading-7 mb-8">
              احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
            </p>


            {/* Form */}
            <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">

              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="flex-1 px-5 py-3.5 bg-[#0a0a0a] border border-[#262626] rounded-xl text-white placeholder:text-neutral-600 outline-none focus:border-orange-500 transition-colors text-right"
              />

              <button
                type="submit"
                className="px-6 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300"
              >
                اشترك الآن
              </button>

            </form>


            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-neutral-500">

              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <span>انضم لـ +10,000 مصور</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <span>بدون إزعاج</span>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-orange-500">✓</span>
                <span>إلغاء الاشتراك في أي وقت</span>
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Newsletter;