const recipes = {
  indian: {
    title: "Atta Biscuits (Whole Wheat Cookies)",
    image: "b2.png",
    ingredients: [
      "1 cup whole wheat flour",
      "1/2 cup powdered sugar",
      "1/2 cup ghee or butter",
      "1/4 tsp cardamom powder",
      "1/4 tsp baking soda",
      "Pinch of salt",
      "2 tbsp milk (if needed)"
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Cream together ghee and sugar until light.",
      "Mix in flour, baking soda, salt, and cardamom.",
      "Add milk only if the dough is too dry.",
      "Shape into small discs and place on tray.",
      "Bake for 15–20 mins until golden brown."
    ]
  },
  italian: {
    title: "Sooji Cake",
    image: "b3.png",
    ingredients: [
      "1 cup sooji (semolina)",
      "1/2 cup curd",
      "1/2 cup sugar",
      "1/4 cup oil",
      "1/2 tsp baking powder",
      "1/4 tsp baking soda",
      "1/4 cup milk",
      "1/2 tsp cardamom powder"
    ],
    steps: [
      "Mix curd and sugar until dissolved.",
      "Add oil, cardamom, and sooji. Mix well.",
      "Let it rest for 15 mins.",
      "Add milk, baking powder, and baking soda.",
      "Pour into greased pan and bake at 180°C for 25–30 mins.",
      "Cool before slicing."
    ]
  },
  chinese: {
    title: "Eggless Nankhatai",
    image: "b4.png",
    ingredients: [
      "1 cup all-purpose flour",
      "1/2 cup powdered sugar",
      "1/4 cup ghee",
      "1/4 cup besan (gram flour)",
      "1/4 tsp cardamom powder",
      "1/2 tsp baking powder",
      "Pinch of salt"
    ],
    steps: [
      "Preheat oven to 170°C.",
      "Mix all dry ingredients in a bowl.",
      "Add ghee slowly and knead soft dough.",
      "Shape into small balls and flatten slightly.",
      "Place on tray and bake for 15–20 mins.",
      "Cool and store in air-tight container."
    ]
  },
  snacks: {
    title: "Besan Burfi Brownies",
    image: "b5.png",
    ingredients: [
      "1 cup besan",
      "1/4 cup ghee",
      "1/2 cup condensed milk",
      "1/4 cup cocoa powder",
      "1/2 tsp cardamom powder",
      "Chopped nuts for garnish"
    ],
    steps: [
      "Roast besan in ghee until aromatic.",
      "Add cocoa and cardamom powder.",
      "Mix in condensed milk and stir till thick.",
      "Pour into greased tray and flatten.",
      "Top with chopped nuts.",
      "Refrigerate for 1 hour, then slice."
    ]
  },
  breakfast: {
    title: "Gulab Jamun Cheesecake",
    image: "b6.png",
    ingredients: [
      "8–10 mini gulab jamuns",
      "1.5 cups cream cheese",
      "1/2 cup sugar",
      "1/2 cup whipped cream",
      "1/2 tsp cardamom powder",
      "1 cup biscuit crumbs + 3 tbsp butter"
    ],
    steps: [
      "Mix biscuit crumbs and butter. Press into pan base.",
      "Beat cream cheese and sugar until smooth.",
      "Fold in whipped cream and cardamom powder.",
      "Pour over base and chill for 4 hours.",
      "Top with gulab jamuns before serving."
    ]
  },
  lunch: {
    title: "Kesar Pista Cupcakes",
    image: "b7.png",
    ingredients: [
      "1 cup all-purpose flour",
      "1/2 cup sugar",
      "1/2 cup milk",
      "1/4 cup oil",
      "1 tsp baking powder",
      "Few saffron strands in warm milk",
      "2 tbsp chopped pistachios"
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Mix dry ingredients in one bowl.",
      "Mix wet ingredients including saffron milk in another.",
      "Combine and fold in pistachios.",
      "Spoon into liners and bake 20 mins.",
      "Cool and frost if desired."
    ]
  },
  brunch: {
    title: "Thandai Flavored Cake",
    image: "b8.png",
    ingredients: [
      "1 cup all-purpose flour",
      "1/2 cup thandai mix",
      "1/2 cup sugar",
      "1/2 cup curd",
      "1/4 cup oil",
      "1/2 tsp baking soda",
      "1 tsp baking powder",
      "1/4 cup milk"
    ],
    steps: [
      "Preheat oven to 180°C.",
      "Mix curd, sugar, oil until smooth.",
      "Add thandai mix, flour, baking powder, soda.",
      "Add milk to adjust consistency.",
      "Pour into pan and bake 25–30 mins.",
      "Cool and decorate with thandai glaze."
    ]
  },
  dinner: {
    title: "Paneer Tikka Pizza",
    image: "b9.png",
    ingredients: [
      "1 pizza base",
      "1/2 cup paneer cubes",
      "2 tbsp tikka masala",
      "1/2 cup pizza sauce",
      "1/2 cup cheese",
      "Sliced onion, capsicum",
      "Chili flakes, oregano"
    ],
    steps: [
      "Marinate paneer with tikka masala for 30 mins.",
      "Spread sauce on pizza base.",
      "Add paneer, veggies, cheese.",
      "Bake at 200°C for 10–12 mins.",
      "Sprinkle oregano and chili flakes before serving."
    ]
  }
};

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".recipe .card");

  const modal = document.createElement("div");
  modal.id = "recipeModal";
  modal.style.display = "none";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-button">&times;</span>
      <h2 id="recipeTitle"></h2>
      <img id="recipeImage" alt="" />
      <h3 style="color:black ;font-size: 20px; margin-top: 15px;margin-bottom: 10px">Ingredients</h3>
      <ul id="ingredientsList"></ul><br><br>
      <h3 style="color:black;font-size: 20px; margin-top: 15px;margin-bottom: 10px">Steps</h3>
      <ol id="stepsList"></ol>
    </div>
  `;
  document.body.appendChild(modal);

  const style = document.createElement("style");
  style.innerHTML = `
    #recipeModal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: none;
      background-color: rgba(0, 0, 0, 0.7);
      justify-content: center;
      align-items: center;
      z-index: 9999;
    }
    .modal-content {
      background: #fff;
      padding: 20px;
      max-width: 600px;
      width: 90%;
      max-height: 90%;
      overflow-y: auto;
      border-radius: 10px;
      position: relative;
    }
    .modal-content img {
      width: 100%;
      max-height: 200px;
      object-fit: cover;
      margin: 10px 0;
    }
    .close-button {
      position: absolute;
      top: 10px;
      right: 20px;
      font-size: 24px;
      cursor: pointer;
    }
  `;
  document.head.appendChild(style);

  const keys = Object.keys(recipes);
  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const recipe = recipes[keys[index]];
      if (!recipe) return;

      document.getElementById("recipeTitle").textContent = recipe.title;
      document.getElementById("recipeImage").src = recipe.image;
      document.getElementById("recipeImage").alt = recipe.title;

      const ingredientsList = document.getElementById("ingredientsList");
      ingredientsList.innerHTML = "";
      recipe.ingredients.forEach((ingredient) => {
        const li = document.createElement("li");
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
      });

      const stepsList = document.getElementById("stepsList");
      stepsList.innerHTML = "";
      recipe.steps.forEach((step) => {
        const li = document.createElement("li");
        li.textContent = step;
        stepsList.appendChild(li);
      });

      modal.style.display = "flex";
    });
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("close-button")) {
      modal.style.display = "none";
    }
  });
});
