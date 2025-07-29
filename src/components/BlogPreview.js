"use client"
import { useState } from 'react';

// Mock blog data for demonstration
const blogs = [
  {
    slug: 'complete-guide-unclaimed-funds',
    title: 'Complete Guide to Recovering Your Unclaimed Financial Assets',
    excerpt: 'Learn the step-by-step process to identify and claim your dormant bank accounts, forgotten investments, and unclaimed insurance policies with our comprehensive guide.',
    category: 'Guides',
    date: '2024-01-15',
    readTime: '8 min'
  },
  {
    slug: 'iepf-recovery-process',
    title: 'IEPF Recovery: How to Get Your Money Back from Government',
    excerpt: 'Understand the complete process of recovering funds transferred to the Investor Education and Protection Fund, including required documents and timelines.',
    category: 'IEPF',
    date: '2024-01-10',
    readTime: '6 min'
  },
  {
    slug: 'provident-fund-withdrawal',
    title: 'Provident Fund Withdrawal: Common Issues and Solutions',
    excerpt: 'Navigate through common PF withdrawal challenges and learn how to resolve delays, missing documentation, and employer-related complications.',
    category: 'Provident Fund',
    date: '2024-01-05',
    readTime: '7 min'
  }
];

export default function BlogPreview() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categoryColors = {
    'Guides': 'from-green-600 to-green-700',
    'IEPF': 'from-green-500 to-green-600',
    'Provident Fund': 'from-green-700 to-green-800',
    'Insurance': 'from-green-500 to-green-700',
    'Mutual Funds': 'from-green-600 to-green-800',
    'Default': 'from-gray-700 to-gray-800'
  };

  const getCategoryColor = (category) => {
    return categoryColors[category] || categoryColors['Default'];
  };

  const getCategoryIcon = (category) => {
    const icons = {
      'Guides': (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      'IEPF': (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
        </svg>
      ),
      'Provident Fund': (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    };
    return icons[category] || icons['Guides'];
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full text-sm font-bold mb-6 border border-green-200 shadow-sm">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Expert Financial Insights
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">
            Latest from Our
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-800">
              Knowledge Hub
            </span>
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto text-xl leading-relaxed font-medium">
            Discover expert strategies, comprehensive guides, and actionable insights to help you recover and maximize your unclaimed financial assets
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogs.map((blog, index) => (
            <article 
              key={blog.slug} 
              className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 overflow-hidden border-2 border-gray-100 hover:border-green-200 relative"
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Animated Gradient Border */}
              <div className={`absolute inset-0 bg-gradient-to-r ${getCategoryColor(blog.category)} rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10`}></div>
              <div className="absolute inset-[2px] bg-white rounded-3xl z-10"></div>
              
              {/* Card Header with Dynamic Gradient */}
              <div className={`bg-gradient-to-r ${getCategoryColor(blog.category)} h-3 relative z-20`}></div>
              
              {/* Card Content */}
              <div className="p-8 relative z-20">
                {/* Category Badge with Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className={`inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-gradient-to-r ${getCategoryColor(blog.category)} text-white shadow-lg transform group-hover:scale-105 transition-transform duration-300`}>
                    {getCategoryIcon(blog.category)}
                    <span className="ml-2">{blog.category}</span>
                  </span>
                  <div className="text-right">
                    <div className="text-sm text-gray-900 font-bold">
                      {new Date(blog.date).toLocaleDateString('en-IN', { 
                        day: 'numeric', 
                        month: 'short'
                      })}
                    </div>
                    <div className="text-xs text-gray-600 font-medium">
                      {new Date(blog.date).getFullYear()}
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="font-black text-xl text-gray-900 mb-4 leading-tight group-hover:text-green-700 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                {/* Excerpt */}
                <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 font-medium">
                  {blog.excerpt}
                </p>

                {/* Stats and CTA Row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-500 font-medium">
                    <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{blog.readTime} read</span>
                  </div>
                  
                  <a 
                    href={`/blog?slug=${blog.slug}`} 
                    className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-6 py-3 rounded-xl text-sm group/link transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    <span>Read More</span>
                    <svg className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Author Footer */}
              <div className="px-8 pb-6 relative z-20">
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-green-600 to-green-700 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <span className="text-sm text-gray-700 font-bold">ShareSetu Experts</span>
                  </div>
                  
                  <div className="flex items-center text-xs text-gray-500">
                    <svg className="w-4 h-4 mr-1 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                    <span>Verified Expert</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Enhanced CTA Section
        <div className="text-center">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-2xl border-2 border-gray-100 p-12 max-w-2xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            {/* <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-800"></div>
            </div>
            
            <div className="relative z-10">
              <div className="mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-800 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl transform hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C20.832 18.477 19.246 18 17.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-3xl font-black text-gray-900 mb-4">
                  Unlock More Expert Insights
                </h3>
                <p className="text-gray-700 text-lg font-medium leading-relaxed">
                  Dive deeper into our comprehensive library of financial recovery guides, expert analyses, and step-by-step tutorials
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/blog"
                  className="inline-flex items-center justify-center bg-gradient-to-r from-green-600 to-green-800 hover:from-green-700 hover:to-green-900 text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 shadow-xl hover:shadow-2xl text-lg group"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <span>Explore All Articles</span>
                  <svg className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                
                <a
                 href="https://wa.me/918765610216" target="_blank"
                  className="inline-flex items-center justify-center border-3 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-black px-8 py-4 rounded-2xl transition-all duration-300 transform hover:-translate-y-1 text-lg"
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                  <span>Get Expert Help</span>
                </a>
              </div>
              
              {/* Additional Stats */}
              {/* <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-black text-green-700 mb-1">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Expert Articles</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-700 mb-1">10K+</div>
                  <div className="text-sm text-gray-600 font-medium">Success Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-700 mb-1">₹500Cr+</div>
                  <div className="text-sm text-gray-600 font-medium">Funds Recovered</div>
                </div>
              </div>
            </div> */}
           {/* </div>  */}
        {/* </div>  */}
      </div>
    </section>
  );
}