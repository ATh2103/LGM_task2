import React from "react";
import Cards from "C:/Users/Dell/Documents/Internship/reactinternship/src/Extra Assets/cards.js";
import "./App.css";

function App() {
  const [isDateLoaded, setIsDateLoaded] = React.useState(false);
  const [userData, setUserData] = React.useState([]);
  const [isButtonClick, setisButtonClick] = React.useState(false);
  const handleClick = () => {
    setisButtonClick(true);
    // To fetch data from https://reqres.in/api/users?page=1
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((res) => {
        setUserData(res.data);
        setInterval(() => {
          setIsDateLoaded(true);
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
        <section className="wholecontainer">
          <div class="topnav" id="myTopnav">
            <a
              rel="noreferrer"
              href="https://lgmvip-sept-task2.netlify.app"
              target="_blank"
              class="active"
            >
              GrowTogether
            </a>
            <a href="#getusers" class="btn" onClick={handleClick}>
              Get Users
            </a>
          </div>

          <div className="container">
            <div className="row justify-content-center ">
              {isButtonClick ? (
                isDateLoaded ? (
                  <Cards userData={userData} />
                ) : (
                  <div class="wrapper">
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="circle"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                        <div class="shadow"></div>
                        <span>Loading</span>
                    </div>
                )
              ) : (
                <div className="instruction">
                  <p>Wanna See a Magic Trick, Click on the 'Get Users' Button.</p>
                </div>
              )}
            </div>
          </div>
        </section>
    </>
  );
}

export default App;