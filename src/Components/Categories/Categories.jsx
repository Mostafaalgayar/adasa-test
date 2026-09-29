function Categories() {
  const categories = [
    {
      name: "إضاءة",
      count: "3 مقالة",
      icon: "☀️",
    },
    {
      name: "بورتريه",
      count: "3 مقالة",
      icon: "👤",
    },
    {
      name: "مناظر طبيعية",
      count: "2 مقالة",
      icon: "🏔️",
    },
    {
      name: "تقنيات",
      count: "5 مقالة",
      icon: "⚙️",
    },
    {
      name: "معدات",
      count: "3 مقالة",
      icon: "📷",
    },
  ];

  return (
    <section className="bg-[#111111] py-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">

          <span className="text-orange-500 text-sm font-medium">
            استكشف
          </span>

          <h2 className="text-3xl md:text-4xl font-bold text-white mt-3">
            استكشف حسب الموضوع
          </h2>

          <p className="text-neutral-400 mt-4">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>

        </div>


        {/* Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">

          {categories.map((category, index) => (

            <a
              href="#"
              key={index}
              className="group relative bg-[#161616] border border-[#262626] rounded-2xl p-6 text-center overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1"
            >

              {/* Orange Glow */}
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>


              {/* Icon */}
              <div className="relative w-14 h-14 mx-auto mb-5 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">

                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>

              </div>


              {/* Name */}
              <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-orange-400 transition-colors duration-300">
                {category.name}
              </h3>


              {/* Count */}
              <p className="relative text-sm text-neutral-500">
                {category.count}
              </p>

            </a>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Categories;