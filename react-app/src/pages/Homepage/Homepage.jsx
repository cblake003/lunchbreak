export default function Homepage() {
    
return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="bg-gray-800 p-4 text-white py-10">
        <div className="max-w-6xl mx-auto">
          <img
            src="/logo.png" // Replace with your logo image source
            alt="LunchBreak Logo"
            className="h-16 mx-auto"
          />
        </div>
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-2xl font-semibold text-white">
            "Deliver Delight, Elevate Efficiency: Your Business, Our Priority!"
          </h1>
          <button className="bg-white text-blue-500 hover:bg-blue-400 hover:text-white mt-6 py-2 px-6 rounded-full">
            Log In
          </button>
        </div>
      </header>

      <section className="bg-gray-100 py-12">
        <div className="imgdiv max-w-3xl mx-auto px-4 mb-6">
          <img
                src="../../StockPics/food2.jpg"
                alt="Food Image"
                className="w-full h-auto rounded"
          />
        </div>
        <div className="textdiv max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-2xl text-left">
            Satisfy apetites and fuel your team's success.
          </h3>
          <p className="text-gray-600 text-lg text-left">
            Connect your business with your favorite local restaurants
          </p>
        <button className="bg-gray-800 text-white hover:bg-blue-400 mt-6 py-2 px-6 rounded-full">
            Order Now
        </button>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="imgdiv max-w-3xl mx-auto px-4 mb-6">
          <img
                src="../../StockPics/food1.jpg"
                alt="Delivery Image"
                className="w-full h-auto rounded"
          />
        </div>
        <div className="textdiv max-w-6xl mx-auto px-6">
          <h3 className="font-bold text-2xl text-left">
            You order. We deliver.
          </h3>
          <h5 className="font-semibold text-xl text-left">
            Convenience, choice, and quality.
          </h5>
          <p className="text-gray-600 text-lg text-left">
            For weekly meals, meetings, or events.
          </p>
        <button className="bg-gray-800 text-white hover:bg-blue-400 mt-6 py-2 px-6 rounded-full">
            Sign Up
        </button>
        </div>
      </section>

      <section className="bg-gray-100 py-12">
        <div className="imgdiv max-w-3xl mx-auto px-4 mb-6">
          <img
                src="../../StockPics/delivery2.jpg"
                alt="Food Image"
                className="w-full h-auto rounded"
          />
        </div>
        <div className="textdiv max-w-6xl mx-auto px-6 mb-20">
          <h3 className="font-bold text-2xl text-left">
            Transform every lunch break into a moment of delight.
          </h3>
          <p className="text-gray-600 text-lg text-left">
            Check out how LunchBreak works.
          </p>
        <button className="bg-gray-800 text-white hover:bg-blue-400 mt-6 py-2 px-6 rounded-full">
            Learn More
        </button>
        </div>
      </section>
      
    </div>
);
};

