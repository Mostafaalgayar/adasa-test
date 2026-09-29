const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#262626]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
          {/* Brand */}
          <div className="md:pl-10 pb-10 md:pb-0">
            <a href="#" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-white text-xl font-bold">ع</span>
              </div>

              <div className="flex flex-col">
                <span className="text-xl font-bold bg-gradient-to-r from-white to-neutral-300 bg-clip-text text-transparent">
                  عدسة
                </span>

                <span className="text-xs text-orange-400/80 tracking-wide">
                  عالم التصوير الفوتوغرافي
                </span>
              </div>
            </a>

            <p className="mt-6 text-sm leading-7 text-neutral-500 max-w-sm">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
              ونصائح عملية لتطوير مهاراتكم.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {/* X */}
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817-5.965 6.817H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>

              {/* GitHub */}
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.54-3.87-1.54-.53-1.33-1.28-1.69-1.28-1.69-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.47.11-3.06 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.77.11 3.06.73.81 1.18 1.84 1.18 3.1 0 4.42-2.69 5.4-5.25 5.68.41.36.78 1.08.78 2.18v3.22c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.25 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 13.42c0-3.47-1.85-5.08-4.32-5.08-1.99 0-2.88 1.1-3.38 1.87V8.5H9.36V20h3.38v-5.7c0-1.5.28-2.95 2.14-2.95 1.83 0 1.85 1.72 1.85 3.05V20h3.38l.33-6.58Z" />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="#"
                className="w-10 h-10 rounded-xl bg-[#161616] border border-[#262626] flex items-center justify-center text-neutral-500 hover:text-white hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.5 6.2a3 3 0 0 0-2.11-2.12C19.52 3.5 12 3.5 12 3.5s-7.52 0-9.39.58A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.11 2.12c1.87.58 9.39.58 9.39.58s7.52 0 9.39-.58a3 3 0 0 0 2.11-2.12A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.75 15.5v-7L16 12l-6.25 3.5Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Explore */}
          <div className="relative pr-8 md:pr-10 pt-8 md:pt-0 border-t md:border-t-0 border-[#262626]">
            <h3 className="text-white font-bold text-base mb-6">استكشف</h3>

            <ul className="space-y-4">
              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    الرئيسية
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    المدونه
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    من نحن
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div className="relative pr-8 md:pr-10 pt-8 md:pt-0 border-t md:border-t-0 border-[#262626]">
            <h3 className="text-white font-bold text-base mb-6">التصنيفات</h3>

            <ul className="space-y-4">
               <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    اضاءه
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>

              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    بورتريه
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    مناظر طبيعيه
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                    تقنيات
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
                
              </li>

              <li>
                <a
                  href="#"
                  className="group flex flex-row-reverse items-center justify-end gap-2 w-fit text-sm text-neutral-500 hover:text-orange-500 transition-all duration-300"
                >
                  <span className="transition-transform duration-300 group-hover:-translate-x-1">
                  معدات
                  </span>
    
                  <i className="fa-solid fa-arrow-left opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-orange-500"></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="relative pr-8 md:pr-10 pt-8 md:pt-0 border-t md:border-t-0 border-[#262626]">
            <h3 className="text-white font-bold text-base mb-3">
              ابقى على اطلاع
            </h3>

            <p className="text-sm text-neutral-500 leading-6 mb-6">
              اشترك في نشرتنا البريدية واحصل على أحدث نصائح التصوير.
            </p>

            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="أدخل بريدك الإلكتروني"
                className="w-full bg-[#161616] border border-[#262626] rounded-xl px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-orange-500/50 transition-all"
              />

              <button className="w-full px-5 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-sm font-medium rounded-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300">
                اشترك الآن
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-14 pt-8 border-t border-[#262626] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-600">
            © 2026 عدسة. صنع بكل
            <span className="text-red-500 mx-1">♥</span>
            جميع الحقوق محفوظة.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors"
            >
              سياسة الخصوصية
            </a>

            <a
              href="#"
              className="text-xs text-neutral-600 hover:text-neutral-300 transition-colors"
            >
              الشروط والأحكام
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
