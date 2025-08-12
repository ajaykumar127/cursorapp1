

const CTA: React.FC = () => {
  return (
    <section className="bg-indigo-600">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="px-6 py-12 sm:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
            <div className="xl:w-0 xl:flex-1">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mt-3 text-lg text-gray-600">
                Join thousands of creators who are already building amazing things. 
                Start your free trial today and see what's possible.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-2 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  14-day free trial
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-2 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  No credit card required
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="flex-shrink-0 mr-2 h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
              <form className="sm:flex xl:block">
                <div className="min-w-0 flex-1">
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="block w-full px-4 py-3 rounded-md border border-gray-300 text-base placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  />
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3 xl:mt-3 xl:ml-0">
                  <button
                    type="submit"
                    className="block w-full bg-indigo-600 border border-transparent rounded-md py-3 px-6 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-white transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    Start Free Trial
                  </button>
                </div>
              </form>
              
              <p className="mt-3 text-sm text-gray-500 xl:mt-4">
                By signing up, you agree to our{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
        
        {/* Testimonial */}
        <div className="mt-12 text-center">
          <div className="max-w-3xl mx-auto">
            <blockquote className="text-xl text-indigo-100 font-medium">
              "This platform has completely transformed how we work. The ease of use and powerful features 
              have helped us ship products faster than ever before."
            </blockquote>
            <div className="mt-6 flex items-center justify-center space-x-3">
              <img
                className="h-12 w-12 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="Alex Johnson"
              />
              <div className="text-left">
                <div className="text-indigo-100 font-medium">Alex Johnson</div>
                <div className="text-indigo-200 text-sm">CEO, TechStart Inc.</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trust indicators */}
        <div className="mt-16 border-t border-indigo-500 pt-12">
          <div className="text-center">
            <p className="text-indigo-200 text-lg font-medium mb-8">
              Trusted by leading companies worldwide
            </p>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <span className="text-white font-bold text-lg">Company A</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <span className="text-white font-bold text-lg">Company B</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <span className="text-white font-bold text-lg">Company C</span>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="bg-white bg-opacity-20 rounded-lg px-6 py-3">
                  <span className="text-white font-bold text-lg">Company D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
