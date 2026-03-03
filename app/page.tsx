import { siteConfig } from '@/site.config'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/70 backdrop-blur-md shadow-sm">
        <div className="container mx-auto px-4 py-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-xl">🎵</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                {siteConfig.name}
              </h1>
              <p className="text-sm text-gray-600">{siteConfig.description}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block mb-4 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
              🚀 AI驱动的音乐创作时代
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              探索最强大的
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> AI音乐工具</span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              深度评测、实战教程、工具对比，帮你找到最适合的AI音乐生成平台
            </p>
            
            {/* CTA */}
            <a 
              href={siteConfig.targetProduct.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg"
            >
              ✨ 立即体验 AndMusic.chat
            </a>
          </div>

          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {siteConfig.theme.categories.map((category, index) => {
              const icons = ['🔍', '📚', '⚖️', '💡', '📰', '🎯']
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-indigo-500 to-blue-500',
                'from-violet-500 to-purple-500',
                'from-cyan-500 to-teal-500',
                'from-pink-500 to-rose-500'
              ]
              return (
                <Link
                  key={category}
                  href="/articles"
                  className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradients[index]} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                  <div className="relative">
                    <div className="text-4xl mb-3">{icons[index]}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{category}</h3>
                    <p className="text-sm text-gray-500">查看详细内容 →</p>
                  </div>
                </Link>
              )
            })}
          </div>

          {/* 文章入口 */}
          <div className="text-center mb-16">
            <Link
              href="/articles"
              className="inline-block bg-white px-10 py-4 rounded-xl font-semibold text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-600 hover:text-white transition-all duration-300 shadow-md hover:shadow-xl"
            >
              📖 浏览全部文章
            </Link>
          </div>

          {/* Product Promotion */}
          <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl p-10 text-white mb-16 overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">🎼 想要立即创作专业音乐？</h3>
              <p className="mb-6 text-indigo-100 text-lg max-w-2xl">
                {siteConfig.targetProduct.description}
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span>⚡</span>
                  <span>秒级生成</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span>🎨</span>
                  <span>多种风格</span>
                </div>
                <div className="flex items-center gap-2 bg-white/20 px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span>🎯</span>
                  <span>专业品质</span>
                </div>
              </div>
              <a 
                href={siteConfig.targetProduct.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-xl font-bold hover:bg-indigo-50 transition-colors shadow-lg hover:shadow-xl"
              >
                免费开始创作 →
              </a>
            </div>
          </div>

          {/* Related Sites */}
          <div className="border-t border-gray-200 pt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">🔗 相关推荐</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {siteConfig.relatedSites.map((site) => (
                <a
                  key={site.url}
                  href={site.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-white rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-100 group"
                >
                  <span className="text-base font-semibold text-gray-900 group-hover:text-indigo-600 transition-colors">
                    {site.name}
                  </span>
                  <span className="text-sm text-gray-400 block mt-2 group-hover:text-indigo-500 transition-colors">
                    访问 →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 py-10 bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-gray-600">
          <p className="font-medium">{siteConfig.name} © 2025</p>
          <p className="text-xs text-gray-500 mt-2">专注AI音乐工具评测与教程</p>
        </div>
      </footer>
    </div>
  )
}
