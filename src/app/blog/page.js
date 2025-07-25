"use client";
import { useState } from 'react';
import { Calendar, Tag, ArrowRight, Search, Filter } from 'lucide-react';

// Sample blog data - replace with your actual data import
const blogs = [
  {
    slug: 'digital-transformation-2025',
    category: 'Technology',
    title: 'Digital Transformation Trends for 2025',
    excerpt: 'Explore the latest digital transformation strategies that are reshaping businesses worldwide.',
    date: 'July 20, 2025',
    readTime: '5 min read',
    featured: true
  },
  {
    slug: 'sustainable-business-practices',
    category: 'Business',
    title: 'Building Sustainable Business Practices',
    excerpt: 'Learn how companies are implementing eco-friendly strategies for long-term success.',
    date: 'July 18, 2025',
    readTime: '3 min read',
    featured: false
  },
  {
    slug: 'ai-machine-learning-guide',
    category: 'AI/ML',
    title: 'Getting Started with AI and Machine Learning',
    excerpt: 'A comprehensive guide to understanding and implementing AI solutions in your business.',
    date: 'July 15, 2025',
    readTime: '8 min read',
    featured: true
  },
  {
    slug: 'remote-work-productivity',
    category: 'Productivity',
    title: 'Maximizing Remote Work Productivity',
    excerpt: 'Essential tips and tools for maintaining high productivity while working remotely.',
    date: 'July 12, 2025',
    readTime: '6 min read',
    featured: false
  },
  {
    slug: 'cybersecurity-best-practices',
    category: 'Security',
    title: 'Cybersecurity Best Practices for 2025',
    excerpt: 'Protect your business with these essential cybersecurity strategies and tools.',
    date: 'July 10, 2025',
    readTime: '7 min read',
    featured: false
  },
  {
    slug: 'customer-experience-design',
    category: 'Design',
    title: 'Designing Exceptional Customer Experiences',
    excerpt: 'Create memorable customer journeys that drive loyalty and business growth.',
    date: 'July 8, 2025',
    readTime: '4 min read',
    featured: true
  }
];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = ['All', ...new Set(blogs.map(blog => blog.category))];
  
  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const BlogCard = ({ blog, index }) => (
    <div 
      className={`group relative bg-gradient-to-br ${
        blog.featured 
          ? 'from-gray-800/90 to-gray-900/90 border-green-500/30' 
          : 'from-gray-800/60 to-gray-900/60 border-gray-600/30'
      } backdrop-blur-xl border rounded-2xl p-6 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-green-500/10 cursor-pointer overflow-hidden ${
        blog.featured ? 'md:col-span-2' : ''
      }`}
      onMouseEnter={() => setHoveredCard(index)}
      onMouseLeave={() => setHoveredCard(null)}
    >
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 via-green-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Featured badge */}
      {blog.featured && (
        <div className="absolute top-4 right-4 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
          Featured
        </div>
      )}

      {/* Category tag */}
      <div className="flex items-center gap-2 mb-3">
        <div className="flex items-center gap-1 text-green-400 text-xs font-medium">
          <Tag size={12} />
          {blog.category}
        </div>
        <div className="w-1 h-1 bg-gray-500 rounded-full" />
        <div className="flex items-center gap-1 text-gray-400 text-xs">
          <Calendar size={12} />
          {blog.date}
        </div>
      </div>

      {/* Title */}
      <h2 className={`font-bold text-white mb-3 group-hover:text-green-400 transition-colors duration-300 ${
        blog.featured ? 'text-2xl' : 'text-xl'
      }`}>
        {blog.title}
      </h2>

      {/* Excerpt */}
      <p className="text-gray-300 mb-4 leading-relaxed">
        {blog.excerpt}
      </p>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <span className="text-green-400 text-sm font-medium">
          {blog.readTime}
        </span>
        <div className={`flex items-center gap-2 text-green-400 font-medium transition-all duration-300 ${
          hoveredCard === index ? 'translate-x-2' : ''
        }`}>
          <span className="text-sm">Read More</span>
          <ArrowRight size={16} />
        </div>
      </div>

      {/* Hover effect line */}
      <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-green-400 to-emerald-500 w-0 group-hover:w-full transition-all duration-500" />
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-400/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1.5s'}} />
      </div>

      <main className="relative max-w-7xl mx-auto px-4 py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-400 to-emerald-500 rounded-3xl mb-6 shadow-lg shadow-green-500/25">
            <div className="text-white text-2xl font-bold">S</div>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent">
            ShareSetu Blog
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover insights, trends, and expert knowledge to help grow your business and stay ahead of the curve.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          {/* Search Bar */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-green-400 focus:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="pl-12 pr-8 py-3 bg-gray-800/50 border border-gray-600 rounded-xl text-white focus:outline-none focus:border-green-400 focus:bg-gray-800/70 transition-all duration-300 backdrop-blur-sm appearance-none cursor-pointer"
            >
              {categories.map(category => (
                <option key={category} value={category} className="bg-gray-800">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-400">
            Showing <span className="text-green-400 font-semibold">{filteredBlogs.length}</span> articles
            {selectedCategory !== 'All' && (
              <span> in <span className="text-green-400 font-semibold">{selectedCategory}</span></span>
            )}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog, index) => (
            <BlogCard key={blog.slug} blog={blog} index={index} />
          ))}
        </div>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="text-gray-400" size={32} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>
            <p className="text-gray-400">Try adjusting your search terms or filters</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredBlogs.length > 0 && (
          <div className="text-center mt-12">
            <button className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/25">
              <span className="flex items-center gap-2">
                Load More Articles
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </button>
          </div>
        )}
      </main>
    </div>
  );
}