import React from "react";
import NameProp from "../Props/NameProp";

function Main() {
  return (
    <div>
      <main>
        <div className="helper">
          {/*
            Here we will send property name: John doe
         */}
          <NameProp name={"John Doe"} />
          <span>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Consectetur culpa porro nihil quidem unde suscipit veniam eum
            voluptatem officiis quod saepe fugiat natus sed ut sunt libero odit,
            repellat ipsam!
          </span>
        </div>
      </main>
    </div>
  );
}

export default Main;
