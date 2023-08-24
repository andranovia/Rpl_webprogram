import NavApp from "../Nav-App/NavApp-Page";
import "./HomeApp.css";
const HomeApp = () => {
  /**const slides = [
    {
      url: "../../../public/img/photo-class1.jpg",
    },
    {
      url: "../../../public/img/photo-class2.jpg",
    },
  ];**/

  return (
    <div>
      <NavApp />
      <section className="py-40 relative ">
        <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
          <div className="flex flex-col justify-center md:items-start w-full px-2 py-0">
            <p className="text-2xl">Welcome to</p>
            <h1 className="py-3 text-5xl md: text-7xl font-bold">RPLGRAM</h1>
            <p className="text-2xl">SMKN 1 Purwosari </p>
            <button className="py-3 px-4 bg-blue-500 rounded-full mt-4">View More!</button>

          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 1</h3>
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 2</h3>
              <p className="text-gray-600">
                Praesent tincidunt ante non tortor accumsan, eget fermentum
                dolor auctor.
              </p>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Feature 3</h3>
              <p className="text-gray-600">
                Fusce venenatis odio ut massa luctus, sit amet volutpat purus
                posuere.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                eu dictum libero.
              </p>
              <p className="font-semibold">- John Doe</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                Pellentesque efficitur arcu id libero consequat, at posuere quam
                vehicula.
              </p>
              <p className="font-semibold">- Jane Smith</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-8">
            Have questions or want to get in touch? Fill out the form below!
          </p>
          <form className="max-w-md mx-auto">
            <div className="mb-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full border-gray-300 border p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full border-gray-300 border p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              />
            </div>
            <div className="mb-4">
              <textarea
                placeholder="Message"
                rows="5"
                className="w-full border-gray-300 border p-3 rounded focus:outline-none focus:ring focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-500 transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomeApp;
