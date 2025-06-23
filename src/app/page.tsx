import React from 'react'
import Header from '@/components/Header'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-zinc-50 to-neutral-100 dark:from-zinc-900 dark:via-zinc-800 dark:to-slate-900">
      <Header />
      
      {/* Hero Section */}
      <main className="relative">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-slate-200/50 dark:bg-grid-slate-700/25 bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
        
        <div className="relative container mx-auto px-4 lg:px-8 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Premium Metal Building 
              <span className="bg-gradient-to-r from-zinc-600 to-zinc-900 dark:from-zinc-300 dark:to-zinc-100 bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Engineering excellence in steel construction. From industrial warehouses to 
              commercial complexes, we deliver durable, cost-effective metal building solutions 
              that stand the test of time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-lg font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors">
                View Our Projects
              </button>
              <button className="px-8 py-3 border border-zinc-300 dark:border-zinc-700 text-foreground rounded-lg font-medium hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">
                Get Quote
              </button>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-xl p-6">
              <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white dark:text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Industrial Buildings</h3>
              <p className="text-muted-foreground">Custom-engineered warehouses, manufacturing facilities, and distribution centers built to your specifications.</p>
            </div>
            
            <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-xl p-6">
              <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white dark:text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Quality Assurance</h3>
              <p className="text-muted-foreground">Every structure meets rigorous quality standards with certified materials and expert craftsmanship.</p>
            </div>
            
            <div className="bg-white/50 dark:bg-zinc-800/50 backdrop-blur-sm border border-zinc-200/50 dark:border-zinc-700/50 rounded-xl p-6">
              <div className="w-12 h-12 bg-zinc-900 dark:bg-zinc-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-white dark:text-zinc-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Fast Delivery</h3>
              <p className="text-muted-foreground">Streamlined processes and efficient project management ensure on-time completion of your building project.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HomePage