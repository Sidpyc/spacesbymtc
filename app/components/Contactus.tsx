const Contactus = () => {
  return (
      <section id="contactus" className="bg-[#202020] h-auto py-16">
          <div className="container mx-auto px-4 lg:flex lg:justify-between items-center">
              {/* Left side - Text */}
              <div className="lg:w-1/2 mb-10 lg:mb-0">
                  <h2 className="text-4xl font-bold text-white mb-4">
                      Transform Your Space
                  </h2>
                  <p className="text-gray-400 text-lg">
                      Consult us for a new modern decor and turn your space into a masterpiece.
                  </p>
              </div>

              {/* Right side - Form */}
              <div className="lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg">
                  <form className="space-y-6">
                      <div>
                          <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-gray-300">
                              Full Name
                          </label>
                          <input
                              type="text"
                              id="fullname"
                              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your full name"
                              required
                          />
                      </div>
                      <div>
                          <label htmlFor="mobile" className="block mb-2 text-sm font-medium text-gray-300">
                              Mobile
                          </label>
                          <input
                              type="text"
                              id="mobile"
                              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your mobile number"
                              required
                          />
                      </div>
                      <div>
                          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-300">
                              Email
                          </label>
                          <input
                              type="email"
                              id="email"
                              className="block w-full p-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Enter your email address"
                              required
                          />
                      </div>
                      <div>
                          <label htmlFor="query" className="block mb-2 text-sm font-medium text-gray-300">
                              Your Query
                          </label>
                          <textarea
                              id="query"
                              rows={4}
                              className="block w-full p-3 bg-gray-700 border  resize-none border-gray-600 rounded-lg text-white placeholder-gray-400 min-h-[200px] max-h-[200px] focus:ring-blue-500 focus:border-blue-500"
                              placeholder="Describe your query"
                              required
                          ></textarea>
                      </div>
                      <button
                          type="submit"
                          className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300"
                      >
                          Book your appointment
                      </button>
                  </form>
              </div>
          </div>

          {/* Get in touch section */}
          <div className="mt-16 text-center border-t border-gray-700 pt-8">
              <h3 className="text-white text-xl mb-4">Get in touch with us</h3>
              <div className="flex justify-center space-x-8">
                  <div className="flex items-center space-x-2">
                      <span className="text-white text-lg">
                          <i className="fas fa-phone"></i>
                      </span>
                      <span className="text-gray-400">+91 000 000 000 0</span>
                  </div>
                  <div className="flex items-center space-x-2">
                      <span className="text-white text-lg">
                          <i className="fas fa-envelope"></i>
                      </span>
                      <span className="text-gray-400">spacesbyMTC@gmail.com</span>
                  </div>
              </div>
          </div>
      </section>
  );
};

export default Contactus;
