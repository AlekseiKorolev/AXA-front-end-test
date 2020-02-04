import React from "react";
import App from "./App";

import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import pretty from "pretty";
import { fireEvent } from "@testing-library/react";

const inhabitants = {
  Brastlewark: [
    {
      id: 1,
      name: "Jake Green",
      thumbnail: "http://www.amazon.com",
      age: 99,
      weight: 43.506973,
      height: 101.6974,
      hair_color: "Black",
      professions: ["Actor", " Singer"],
      friends: ["Luc Besson", "Bruce Willis"]
    },
    {
      id: 2,
      name: "Dorothy Macha",
      thumbnail: "http://www.carryishere.com",
      age: 77,
      weight: 73.506973,
      height: 81.6974,
      hair_color: "White",
      professions: ["Actor", "Arist"],
      friends: []
    },
    {
      id: 13,
      name: "Zach"
    },
    {
      id: 14,
      name: "Avi"
    },
    {
      id: 15,
      name: "Paul"
    },
    {
      id: 16,
      name: "Billy"
    },
    {
      id: 17,
      name: "Sorter"
    },
    {
      id: 18,
      name: "Lily"
    },
    {
      id: 19,
      name: "Rachel"
    },
    {
      id: 20,
      name: "Doreen"
    },
    {
      id: 21,
      name: "Teddy"
    }
  ]
};

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});
afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders full cyrcle", async () => {
  // fetcing data
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      json: () => Promise.resolve(inhabitants)
    })
  );
  await act(async () => {
    render(<App />, container);
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"\\"></div><button>Search</button>
        <div class=\\"hint\\">Loading done, let's search</div>
      </header>
    </div>"
  `);
  // select filter by id
  const li = document.querySelectorAll("li");
  act(() => {
    li[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"\\"></div><button>Search</button>
        <div class=\\"hint\\">You can set the interval if you use a dash between numbers</div>
      </header>
    </div>"
  `);
  // input change value to 1-100
  const input = document.querySelector("input");
  fireEvent.change(input, { target: { value: "1-100" } });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"1-100\\"></div><button>Search</button>
        <div class=\\"hint\\">You can set the interval if you use a dash between numbers</div>
      </header>
    </div>"
  `);
  // click on Search button
  let button = document.querySelector("button");
  expect(button.innerHTML).toEqual("Search");
  expect(button.disabled).toEqual(false);
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  let card = document.querySelectorAll(".card");
  expect(card.length).toEqual(10);
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"1-100\\"></div><button>Search</button>
        <div class=\\"hint\\">Found 11 inhabitants</div>
      </header>
      <main>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.amazon.com\\" alt=\\"Jake Green\\">
            <div class=\\"card-id\\">1</div>
          </div>
          <div class=\\"card-name\\">Jake Green</div>
          <div class=\\"card-age\\">Age: <i>99</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>43</i></div>
          <div class=\\"card-height\\">Height: <i>101</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>Black</i> <span style=\\"background-color: Black;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Singer</i></div>
          <div class=\\"card-friends\\">Friends: <i>Luc Besson, Bruce Willis</i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.carryishere.com\\" alt=\\"Dorothy Macha\\">
            <div class=\\"card-id\\">2</div>
          </div>
          <div class=\\"card-name\\">Dorothy Macha</div>
          <div class=\\"card-age\\">Age: <i>77</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>73</i></div>
          <div class=\\"card-height\\">Height: <i>81</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>White</i> <span style=\\"background-color: White;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Arist</i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Zach\\">
            <div class=\\"card-id\\">13</div>
          </div>
          <div class=\\"card-name\\">Zach</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Avi\\">
            <div class=\\"card-id\\">14</div>
          </div>
          <div class=\\"card-name\\">Avi</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Paul\\">
            <div class=\\"card-id\\">15</div>
          </div>
          <div class=\\"card-name\\">Paul</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Billy\\">
            <div class=\\"card-id\\">16</div>
          </div>
          <div class=\\"card-name\\">Billy</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Sorter\\">
            <div class=\\"card-id\\">17</div>
          </div>
          <div class=\\"card-name\\">Sorter</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Lily\\">
            <div class=\\"card-id\\">18</div>
          </div>
          <div class=\\"card-name\\">Lily</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Rachel\\">
            <div class=\\"card-id\\">19</div>
          </div>
          <div class=\\"card-name\\">Rachel</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Doreen\\">
            <div class=\\"card-id\\">20</div>
          </div>
          <div class=\\"card-name\\">Doreen</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
      </main>
      <nav><button>Show more</button> | <a href=\\"#start\\">Up</a> | <button>Clear</button></nav>
    </div>"
  `);
  // click on Show more button
  button = document.querySelectorAll("nav button");
  expect(button[0].innerHTML).toEqual("Show more");
  act(() => {
    button[0].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"1-100\\"></div><button>Search</button>
        <div class=\\"hint\\">Found 11 inhabitants</div>
      </header>
      <main>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.amazon.com\\" alt=\\"Jake Green\\">
            <div class=\\"card-id\\">1</div>
          </div>
          <div class=\\"card-name\\">Jake Green</div>
          <div class=\\"card-age\\">Age: <i>99</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>43</i></div>
          <div class=\\"card-height\\">Height: <i>101</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>Black</i> <span style=\\"background-color: Black;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Singer</i></div>
          <div class=\\"card-friends\\">Friends: <i>Luc Besson, Bruce Willis</i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.carryishere.com\\" alt=\\"Dorothy Macha\\">
            <div class=\\"card-id\\">2</div>
          </div>
          <div class=\\"card-name\\">Dorothy Macha</div>
          <div class=\\"card-age\\">Age: <i>77</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>73</i></div>
          <div class=\\"card-height\\">Height: <i>81</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>White</i> <span style=\\"background-color: White;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Arist</i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Zach\\">
            <div class=\\"card-id\\">13</div>
          </div>
          <div class=\\"card-name\\">Zach</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Avi\\">
            <div class=\\"card-id\\">14</div>
          </div>
          <div class=\\"card-name\\">Avi</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Paul\\">
            <div class=\\"card-id\\">15</div>
          </div>
          <div class=\\"card-name\\">Paul</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Billy\\">
            <div class=\\"card-id\\">16</div>
          </div>
          <div class=\\"card-name\\">Billy</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Sorter\\">
            <div class=\\"card-id\\">17</div>
          </div>
          <div class=\\"card-name\\">Sorter</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Lily\\">
            <div class=\\"card-id\\">18</div>
          </div>
          <div class=\\"card-name\\">Lily</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Rachel\\">
            <div class=\\"card-id\\">19</div>
          </div>
          <div class=\\"card-name\\">Rachel</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Doreen\\">
            <div class=\\"card-id\\">20</div>
          </div>
          <div class=\\"card-name\\">Doreen</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Teddy\\">
            <div class=\\"card-id\\">21</div>
          </div>
          <div class=\\"card-name\\">Teddy</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
      </main>
      <nav><button>Show more</button> | <a href=\\"#start\\">Up</a> | <button>Clear</button></nav>
    </div>"
  `);
  // click on card
  card = document.querySelectorAll(".card");
  expect(card.length).toEqual(11);
  act(() => {
    card[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"1-100\\"></div><button>Search</button>
        <div class=\\"hint\\">Found 11 inhabitants</div>
      </header>
      <main>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.amazon.com\\" alt=\\"Jake Green\\">
            <div class=\\"card-id\\">1</div>
          </div>
          <div class=\\"card-name\\">Jake Green</div>
          <div class=\\"card-age\\">Age: <i>99</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>43</i></div>
          <div class=\\"card-height\\">Height: <i>101</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>Black</i> <span style=\\"background-color: Black;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Singer</i></div>
          <div class=\\"card-friends\\">Friends: <i>Luc Besson, Bruce Willis</i></div>
        </div>
        <div class=\\"card selectedCard\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.carryishere.com\\" alt=\\"Dorothy Macha\\">
            <div class=\\"card-id\\">2</div><button>Find all friends</button>
          </div>
          <div class=\\"card-name\\">Dorothy Macha</div>
          <div class=\\"card-age\\">Age: <i>77</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>73</i></div>
          <div class=\\"card-height\\">Height: <i>81</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>White</i> <span style=\\"background-color: White;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Arist</i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Zach\\">
            <div class=\\"card-id\\">13</div>
          </div>
          <div class=\\"card-name\\">Zach</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Avi\\">
            <div class=\\"card-id\\">14</div>
          </div>
          <div class=\\"card-name\\">Avi</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Paul\\">
            <div class=\\"card-id\\">15</div>
          </div>
          <div class=\\"card-name\\">Paul</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Billy\\">
            <div class=\\"card-id\\">16</div>
          </div>
          <div class=\\"card-name\\">Billy</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Sorter\\">
            <div class=\\"card-id\\">17</div>
          </div>
          <div class=\\"card-name\\">Sorter</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Lily\\">
            <div class=\\"card-id\\">18</div>
          </div>
          <div class=\\"card-name\\">Lily</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Rachel\\">
            <div class=\\"card-id\\">19</div>
          </div>
          <div class=\\"card-name\\">Rachel</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Doreen\\">
            <div class=\\"card-id\\">20</div>
          </div>
          <div class=\\"card-name\\">Doreen</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img alt=\\"Teddy\\">
            <div class=\\"card-id\\">21</div>
          </div>
          <div class=\\"card-name\\">Teddy</div>
          <div class=\\"card-age\\">Age: <i></i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i></i></div>
          <div class=\\"card-height\\">Height: <i></i></div>
          <div class=\\"card-hair_color\\">Hair color: <i></i> </div>
          <div class=\\"card-professions\\">Professions: <i></i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
      </main>
      <nav><button>Show more</button> | <a href=\\"#start\\">Up</a> | <button>Clear</button></nav>
    </div>"
  `);
  // click on Find all friends button
  button = document.querySelector("main button");
  expect(button.innerHTML).toEqual("Find all friends");
  act(() => {
    button.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  card = document.querySelectorAll(".card");
  expect(card.length).toEqual(1);
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"1-100\\"></div><button>Search</button>
        <div class=\\"hint\\">Found 0 friends</div>
      </header>
      <main>
        <div class=\\"card\\">
          <div class=\\"card-thumbnail\\"><img src=\\"http://www.carryishere.com\\" alt=\\"Dorothy Macha\\">
            <div class=\\"card-id\\">2</div>
          </div>
          <div class=\\"card-name\\">Dorothy Macha</div>
          <div class=\\"card-age\\">Age: <i>77</i></div>
          <div class=\\"card-gender\\">Gender: <i>Male</i></div>
          <div class=\\"card-weight\\">Weight: <i>73</i></div>
          <div class=\\"card-height\\">Height: <i>81</i></div>
          <div class=\\"card-hair_color\\">Hair color: <i>White</i> <span style=\\"background-color: White;\\">&nbsp;&nbsp;&nbsp;</span></div>
          <div class=\\"card-professions\\">Professions: <i>Actor, Arist</i></div>
          <div class=\\"card-friends\\">Friends: <i></i></div>
        </div>
      </main>
      <nav><button>Show more</button> | <a href=\\"#start\\">Up</a> | <button>Clear</button></nav>
    </div>"
  `);
  // click on Clear button
  button = document.querySelectorAll("nav button");
  expect(button[1].innerHTML).toEqual("Clear");
  act(() => {
    button[1].dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });
  card = document.querySelectorAll(".card");
  expect(card.length).toEqual(0);
  expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
    "<div class=\\"app\\">
      <h1 id=\\"start\\">Brastlewark city population</h1>
      <header>
        <div class=\\"\\">
          <ul>
            <li class=\\"\\">name</li>
            <li class=\\"selected\\">id</li>
            <li class=\\"\\">age</li>
            <li class=\\"\\">weight</li>
            <li class=\\"\\">height</li>
            <li class=\\"\\">hair color</li>
            <li class=\\"\\">profession</li>
          </ul>
        </div>
        <div class=\\"searchInput\\"><input type=\\"text\\" placeholder=\\"Who are you looking for\\" value=\\"1-100\\"></div><button>Search</button>
        <div class=\\"hint\\">Select a filter type, fill in the field and click \\"Search\\"</div>
      </header>
    </div>"
  `);
  global.fetch.mockRestore();
});
