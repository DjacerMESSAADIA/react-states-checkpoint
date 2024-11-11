import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Djacer Messaadia",
        bio: "A passionate web developer with years of experience",
        imgSrc: "https://via.placeholder.com/150",
        profession: "Full Stack Developer",
      },
      shows: false,
      timeInterval: 0,
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState((prevState) => ({
        timeInterval: prevState.timeInterval + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      shows: !prevState.shows,
    }));
  };

  render() {
    const { person, shows, timeInterval } = this.state;

    return (
      <div className="flex flex-col items-center justify-center h-screen p-5 text-center bg-neutral-100">
        <button
          onClick={this.toggleShow}
          className="px-5 py-2.5 m-5 bg-blue-500 text-white w-40 rounded-lg hover:bg-blue-600 transition-colors duration-200 cursor-pointer"
        >
          {shows ? "Hide Profile" : "Show Profile"}
        </button>

        <p className="text-gray-600">
          Time since this component was mounted: {timeInterval} seconds
        </p>

        {shows && (
          <div className="max-w-md p-5 mx-auto mt-5 border border-gray-200 rounded-lg shadow-md">
            <img
              src={person.imgSrc}
              alt={person.fullName}
              className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
            />
            <h2 className="mb-3 text-2xl font-bold text-gray-800">
              {person.fullName}
            </h2>
            <p className="mb-3 leading-relaxed text-gray-600">{person.bio}</p>
            <p className="text-gray-700">
              <span className="font-semibold">Profession:</span>{" "}
              {person.profession}
            </p>
          </div>
        )}
      </div>
    );
  }
}

export default App;
