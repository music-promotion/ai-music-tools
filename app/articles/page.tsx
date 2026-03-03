import { getAllArticles } from '@/lib/articles'
import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { Music, ArrowRight, Calendar, ChevronRight } from 'lucide-react'

export default function ArticlesPage() {
  const articles = getAllArticles()
  
  // 按分类分组
  const categories = Array.from(new Set(articles.map(a => a.category)))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Floating Navigation */}
      <nav className="fixed top-4 left-4 right-4 z-50 mx-auto max-w-7xl">
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3 group cursor-pointer">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-200">
                <Music className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {siteConfig.name}
                </h1>
                <p className="text-xs text-gray-600">{siteConfig.description}</p>
              </div>
            </Link>
            <Link
              href="/"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-white text-indigo-600 rounded-xl font-semibold border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-200 cursor-pointer"
            >
              返回首页
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-gray-900 mb-4">文章列表</h1>
              <p className="text-xl text-gray-600">深度评测与实战教程</p>
            </div>
            
            {/* Category Navigation - Sticky Pills */}
            <div className="sticky top-24 z-40 mb-12 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-white/20 p-4">
              <div className="flex flex-wrap gap-3 justify-center">
                {categories.map(category => (
                  <a
                    key={category}
                    href={`#${category}`}
                    className="px-5 py-2.5 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 rounded-xl text-sm font-semibold hover:from-indigo-200 hover:to-purple-200 transition-all duration-200 cursor-pointer"
                  >
                    {category}
                  </a>
                ))}
              </div>
            </div>

            {/* Articles by Category - Timeline Layout */}
            <div className="space-y-20">
              {categories.map(category => {
                const categoryArticles = articles.filter(a => a.category === category)
                return (
                  <div key={category} id={category} className="scroll-mt-32">
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-1 flex-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                        {category}
                      </h2>
                      <div className="h-1 flex-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full"></div>
                    </div>

                    {/* Articles Grid - Staggered Layout */}
                    <div className="grid md:grid-cols-2 gap-6">
                      {categoryArticles.map((article, index) => (
                        <Link
                          key={article.slug}
                          href={`/articles/${article.slug}`}
                          className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 border border-white/40 cursor-pointer ${
                            index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-8'
                          }`}
                        >
                          {/* Gradient Accent */}
                          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 to-purple-600"></div>
                          
                          <div className="p-8">
                            {/* Date Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-indigo-100 text-indigo-700 rounded-lg text-xs font-semibold mb-4">
                              <Calendar className="w-3.5 h-3.5" />
                              {article.date}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-200 leading-tight">
                              {article.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 mb-6 leading-relaxed">
                              {article.description}
                            </p>

                            {/* Read More Link */}
                            <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-3 transition-all duration-200">
                              <span>阅读全文</span>
                              <ArrowRight className="w-5 h-5" />
                            </div>
                          </div>

                          {/* Hover Effect Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* CTA Section */}
            <div className="mt-24 relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative z-10 text-center p-12 text-white space-y-6">
                <h3 className="text-4xl font-bold">准备好开始创作了吗？</h3>
                <p className="text-indigo-100 text-lg max-w-2xl mx-auto">
                  {siteConfig.targetProduct.description}
                </p>
                <a 
                  href={siteConfig.targetProduct.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                >
                  免费开始创作
                  <ChevronRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-12 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Music className="w-5 h-5 text-indigo-600" />
            <p className="font-bold text-gray-900">{siteConfig.name}</p>
          </div>
          <p className="text-sm text-gray-600">专注AI音乐工具评测与教程 © 2025</p>
        </div>
      </footer>
    </div>
  )
}
