import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Elon Musk",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLk7aInS9JpWCIXsKx1OqyfvoJ4SJcVHsUcA&usqp=CAU",
    },
    {
      name: "Jeff Bezos",
      url:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcReRN4gYB4fddlHDSm1sFFFALOXGytRJBfkLA&usqp=CAU",
    },
  ]);

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
