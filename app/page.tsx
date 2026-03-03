import { siteConfig } from '@/site.config'
import Link from 'next/link'
import { Music, Sparkles, Zap, Palette, Target, Search, BookOpen, Scale, Lightbulb, Newspaper, TrendingUp, ArrowRight, ExternalLink } from 'lucide-react'

export default function Home() {
  const categoryIcons = [
    { icon: Search, gradient: 'from-blue-500 to-cyan-500' },
    { icon: BookOpen, gradient: 'from-purple-500 to-pink-500' },
    { icon: Scale, gradient: 'from-indigo-500 to-blue-500' },
    { icon: Lightbulb, gradient: 'from-violet-500 to-purple-500' },
    { icon: Newspaper, gradient: 'from-cyan-500 to-teal-500' },
    { icon: TrendingUp, gradient: 'from-pink-500 to-rose-500' }
  ]

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
              href="/articles"
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-200 cursor-pointer"
            >
              <BookOpen className="w-4 h-4" />
              浏览文章
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Diagonal Split Layout */}
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Hero Content */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
              <div className="space-y-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold">
                  <Sparkles className="w-4 h-4" />
                  AI驱动的音乐创作时代
                </div>
                <h2 className="text-6xl font-bold text-gray-900 leading-tight">
                  探索最强大的
                  <span className="block bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mt-2">
                    AI音乐工具
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  深度评测、实战教程、工具对比，帮你找到最适合的AI音乐生成平台
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href={siteConfig.targetProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 text-lg cursor-pointer"
                  >
                    <Sparkles className="w-5 h-5" />
                    立即体验 AndMusic.chat
                  </a>
                  <Link
                    href="/articles"
                    className="inline-flex items-center justify-center gap-2 bg-white px-8 py-4 rounded-xl font-semibold text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50 transition-all duration-300 shadow-md hover:shadow-xl cursor-pointer"
                  >
                    <BookOpen className="w-5 h-5" />
                    浏览全部文章
                  </Link>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
                <div className="relative bg-white/60 backdrop-blur-md rounded-3xl p-8 border border-white/40 shadow-2xl">
                  <div className="space-y-6">
                    {[
                      { icon: Zap, title: '秒级生成', desc: '快速创作专业音乐' },
                      { icon: Palette, title: '多种风格', desc: '覆盖各类音乐类型' },
                      { icon: Target, title: '专业品质', desc: '商用级音质输出' }
                    ].map((feature, i) => (
                      <div key={i} className="flex items-start gap-4 group cursor-pointer">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                          <feature.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg mb-1">{feature.title}</h3>
                          <p className="text-gray-600">{feature.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Categories - Horizontal Scroll Layout */}
            <div className="mb-24">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">探索内容分类</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {siteConfig.theme.categories.map((category, index) => {
                  const IconComponent = categoryIcons[index].icon
                  return (
                    <Link
                      key={category}
                      href="/articles"
                      className="group relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl hover:shadow-2xl transition-all duration-300 border border-white/40 overflow-hidden cursor-pointer"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${categoryIcons[index].gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                      <div className="relative flex flex-col items-center text-center space-y-3">
                        <div className={`w-14 h-14 bg-gradient-to-br ${categoryIcons[index].gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200`}>
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900">{category}</h3>
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>

            {/* Product Promotion - Asymmetric Layout */}
            <div className="relative bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 rounded-3xl overflow-hidden shadow-2xl mb-24">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-30"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-8 p-10 lg:p-16">
                <div className="text-white space-y-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-sm font-semibold backdrop-blur-sm">
                    <Music className="w-4 h-4" />
                    推荐工具
                  </div>
                  <h3 className="text-4xl font-bold">想要立即创作专业音乐？</h3>
                  <p className="text-indigo-100 text-lg leading-relaxed">
                    {siteConfig.targetProduct.description}
                  </p>
                  <a 
                    href={siteConfig.targetProduct.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold hover:bg-indigo-50 transition-all duration-200 shadow-lg hover:shadow-xl cursor-pointer"
                  >
                    免费开始创作
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: Zap, label: '秒级生成' },
                    { icon: Palette, label: '多种风格' },
                    { icon: Target, label: '专业品质' },
                    { icon: Sparkles, label: 'AI驱动' }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-3 hover:bg-white/30 transition-colors duration-200 cursor-pointer">
                      <item.icon className="w-8 h-8 text-white" />
                      <span className="text-white font-semibold">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Related Sites - Minimal Cards */}
            <div className="border-t border-gray-200 pt-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">相关推荐</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {siteConfig.relatedSites.map((site) => (
                  <a
                    key={site.url}
                    href={site.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-8 bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-2xl transition-all duration-300 border border-white/40 cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors duration-200" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors duration-200 mb-2">
                      {site.name}
                    </h4>
                    <div className="flex items-center gap-2 text-sm text-gray-500 group-hover:text-indigo-500 transition-colors duration-200">
                      <span>访问网站</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </a>
                ))}
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
