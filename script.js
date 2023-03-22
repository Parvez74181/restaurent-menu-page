const navLink = document.querySelectorAll("nav ul li a");
const main = document.querySelector("main");
const food = [
  {
    id: 1,
    img: `https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    title: `cheeseburger`,
    desc: `There is some saturated fat in cheeseburgers. The beef in the burger contributes to the saturated fat count and the cheese adds saturated fat calories as well. But a cheeseburger provides no sugar and it is a good source of iron, vitamin B6 and B12`,
    categorie: [`Snakes`],
  },
  {
    id: 2,
    img: `https://images.unsplash.com/photo-1606851682837-019baf2e8da4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmFjb258ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60`,
    title: "bacon",
    desc: `Making these bacon burgers is easy! You simply mix ground raw bacon into the ground beef. You can go for a 50/50 ratio if you wish, mixing 8 oz ground beef with 8 oz ground bacon. But I like to keep things a bit less fatty and salty (though still delicious!)`,
    categorie: [`Snakes`],
  },
  {
    id: 3,
    img: `https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
    title: `Cheese Pizza`,
    desc: `Deceptively simple, the Margherita pizza is made with basil, fresh mozzarella, and tomatoes. There's a reason it's an Italian staple and one of the most popular types of pizza in the country`,
    categorie: [`Snakes`],
  },
  {
    id: 4,
    img: `https://images.unsplash.com/photo-1516684732162-798a0062be99?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: `Rice With Sesam`,
    desc: `Since the average fiber intake in the United States is only half of the RDI, eating sesame seeds regularly could help increase your fiber intake ( 4 ). Fiber is well known for supporting digestive health`,
    categorie: [`Dinner`, `Lunch`],
  },
  {
    id: 5,
    img: `https://images.unsplash.com/photo-1577110058859-74547db40bc0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: `Coocked Rice`,
    desc: `Look no further than a healthy plate of rice! Because rice has low amounts of sodium, fat, and cholesterol, it is a great aid in reducing obesity. It's rich in nutrients and has no significant negative impacts on a person's health. Of course, its high-levels in fiber also help to reduce obesity.`,
    categorie: [`Dinner`, `Lunch`],
  },
  {
    id: 6,
    img: `https://images.unsplash.com/photo-1512058564366-18510be2db19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHJpY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
    title: `Fried Rice`,
    desc: `Contains Powerful Antioxidant: Many types of vegetables like carrots and capsicum are also used in it, having the right amount of antioxidants and helping the body fight against many harmful bacteria.`,
    categorie: [`Dinner`, `Lunch`],
  },
  {
    id: 7,
    img: `https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c291cHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60`,
    title: `Soup`,
    desc: `Since soups are mostly liquid, they're a great way to stay hydrated and full. They give your immune system a boost. Soups can help you stave off cold and flu, and they're a great antidote for times when you are sick, too! Most soups are loaded with disease-fighting nutrients.`,
    categorie: [`Breakfast`, `Snackes`],
  },
  {
    id: 8,
    img: `https://images.unsplash.com/photo-1617611647086-bccca8c2cf84?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Ym9pbGVkJTIwZWdnfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    title: `Boiled Egg`,
    desc: `Hard-boiled eggs are an excellent source of lean protein. They'll fill you up without packing in too many calories, which is helpful if you want to lose weight. The protein in hard-boiled eggs also works alongside vitamin D to promote prenatal development.`,
    categorie: [`Breakfast`, `Snackes`],
  },
  {
    id: 9,
    img: `https://images.unsplash.com/photo-1549931319-a545dcf3bc73?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YnJlYWR8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60`,
    title: `Bread`,
    desc: `Bread contains a wide range of vitamins and minerals including B group vitamins thiamine (B1), Niacin (B3) which are important for releasing energy from food and maintaining healthy skin, eyes and nails.`,
    categorie: [`Breakfast`, `Snackes`],
  },
];

const content = (categorie) => {
  main.innerHTML = ""; // clearing the full content
  food.forEach((item) => {
    if (item.categorie.includes(categorie)) {
      const html = `<div class="box">
                              <div class="img-box">
                                        <img src="${item.img}">
                              </div>
                              <div class="content">
                                        <h4 class="title">${item.title}</h4>
                                        <p class="desc">${item.desc}</p>
                              </div>
                              <button type="button">Read More</button>
                    </div>`;
      main.innerHTML += html;
    }
    if (categorie === "All") {
      const html = `<div class="box">
                              <div class="img-box">
                                        <img src="${item.img}">
                              </div>
                              <div class="content">
                                        <h4 class="title">${item.title}</h4>
                                        <p class="desc">${item.desc}</p>
                              </div>
                              <button type="button">Read More</button>
                </div>`;
      main.innerHTML += html;
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  content("All");
});

// all navLink button click event
navLink.forEach((item) => {
  item.addEventListener("click", () => {
    // removing all the active class from the navLink and then add active class ti the clicked navLink
    for (let i = 0; i < navLink.length; i++) {
      navLink[i].classList.remove("active");
    }
    item.classList.add("active");
    content(item.id);
  });
});
