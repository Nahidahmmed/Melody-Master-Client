

const SomeUnfo = () => {
    return (
        <div className="bg-gray-800 py-12 mt-11">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-3xl leading-8 font-extrabold text-white sm:text-4xl">
            Summer Camp Learning School!
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-800 lg:mx-auto">
            Explore a world of fun and learning this summer. Join our camp and unlock your child potential.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {/* Example content */}
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Outdoor Adventures</h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Let your child explore nature with exciting outdoor activities like hiking, camping, and nature walks.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Arts and Crafts</h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Unleash your childe creativity through various arts and crafts projects, including painting, sculpture, and pottery.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">STEM Exploration</h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Engage in hands-on science, technology, engineering, and math activities to foster critical thinking and problem-solving skills.
                </p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg leading-6 font-medium text-gray-900">Sports and Games</h3>
                <p className="mt-2 max-w-2xl text-sm text-gray-500">
                  Develop teamwork, coordination, and sportsmanship with a variety of sports and games, including soccer, basketball, and more.
                </p>
              </div>
            </div>
            {/* End of example content */}
          </div>
        </div>
      </div>
        </div>
        
    );
};

export default SomeUnfo;