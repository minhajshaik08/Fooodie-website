const recipes = {
  indian: {
    title: "Bagara Baingan",
    image: "mc1.png",
    ingredients: [
           "8–10 small eggplants (baingan), slit but kept whole",
    "4 tbsp oil (for frying)",
    "1 tsp mustard seeds",
    "1 tsp cumin seeds",
    "2 medium onions, finely chopped",
    "1 tbsp ginger-garlic paste",
    "2 tbsp peanuts",
    "2 tbsp sesame seeds",
    "2 tbsp desiccated coconut",
    "1 tbsp tamarind paste",
    "1 tsp red chili powder",
    "1/2 tsp turmeric powder",
    "1 tsp coriander powder",
    "Salt to taste",
    "Fresh coriander leaves (for garnish)"
  ],
  steps: [
    "Dry roast peanuts, sesame seeds, and coconut until golden. Let them cool, then grind with a little water into a smooth paste.",
    "Slit the eggplants in a cross (not fully), keeping stems intact.",
    "Heat 2 tbsp oil in a pan and shallow fry the eggplants until soft and browned. Set aside.",
    "In the same pan, heat 2 tbsp more oil. Add mustard seeds and cumin seeds; let them splutter.",
    "Add chopped onions and sauté until golden.",
    "Add ginger-garlic paste and cook until the raw smell disappears.",
    "Add the ground peanut-sesame-coconut paste and sauté for 3–5 minutes.",
    "Mix in red chili powder, turmeric, coriander powder, and salt.",
    "Add tamarind paste and some water to create a thick gravy. Let it simmer.",
    "Add the fried eggplants into the gravy, cover, and cook for 10–15 minutes so the flavors blend.",
    "Garnish with chopped coriander leaves and serve hot with rice or roti."
    ],
  },
  italian: {
    title: "Hyderabadi Dhum Biryani",
    image: "mc2.png",
    ingredients: [ "500g basmati rice (soaked for 30 mins)",
    "500g chicken (bone-in, cut into medium pieces)",
    "1 cup yogurt",
    "2 large onions (thinly sliced and fried till golden)",
    "2 tbsp ginger-garlic paste",
    "2 green chilies (slit)",
    "1/2 cup fresh coriander leaves (chopped)",
    "1/2 cup mint leaves (chopped)",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1 tsp garam masala",
    "Juice of 1 lemon",
    "Saffron strands soaked in 2 tbsp warm milk",
    "Salt to taste",
    "4 tbsp oil or ghee",
    "Whole spices: 1 bay leaf, 4 cloves, 4 green cardamoms, 1-inch cinnamon stick"
  ],
  steps: [
    "In a bowl, marinate chicken with yogurt, ginger-garlic paste, turmeric, chili powder, garam masala, salt, lemon juice, half of the fried onions, and chopped mint-coriander. Marinate for at least 1 hour.",
    "Parboil the soaked rice with salt and whole spices until it's 70% cooked. Drain and set aside.",
    "In a heavy-bottomed pan or handi, spread the marinated chicken at the bottom.",
    "Layer the parboiled rice over the chicken evenly.",
    "Top with remaining fried onions, mint, coriander, saffron milk, and ghee.",
    "Seal the lid using dough or foil to trap the steam.",
    "Cook on high heat for 5 minutes, then on very low heat (dum) for 25–30 minutes.",
    "Turn off the heat and let it rest for 10 minutes before opening.",
    "Gently mix before serving. Serve hot with raita or salan."
    ],
  },
  chinese: {
    title: "Lemon Rice",
    image: "mc3.png.png",
    ingredients: [
        "2 cups cooked rice (cooled)",
    "2 tbsp oil",
    "1 tsp mustard seeds",
    "1 tsp urad dal (split black gram)",
    "1 tsp chana dal (split Bengal gram)",
    "1-2 green chilies (slit)",
    "1 dried red chili (optional)",
    "1/4 tsp turmeric powder",
    "8-10 curry leaves",
    "2 tbsp peanuts or cashews",
    "Salt to taste",
    "Juice of 1 lemon",
    "Fresh coriander leaves (for garnish)"
  ],
  steps: [
    "Heat oil in a pan. Add mustard seeds and let them splutter.",
    "Add urad dal, chana dal, peanuts/cashews, and fry until golden brown.",
    "Add green chilies, red chili, curry leaves, and sauté briefly.",
    "Add turmeric powder and salt. Mix well.",
    "Turn off the heat and add lemon juice.",
    "Add the cooked rice to the pan and mix gently to coat the rice evenly.",
    "Garnish with coriander leaves and serve warm."
    ],
  },
  japanese: {
    title: "Paneer Butter Masala",
    image: "mc4.png",
    ingredients: [
       "200g paneer (cubed)",
    "2 tbsp butter",
    "1 tbsp oil",
    "1 bay leaf",
    "1-inch cinnamon stick",
    "2-3 cloves",
    "2 medium onions (finely chopped)",
    "2 medium tomatoes (pureed)",
    "1 tbsp ginger-garlic paste",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1 tsp coriander powder",
    "1/2 tsp garam masala",
    "1/2 tsp kasuri methi (dried fenugreek leaves)",
    "2 tbsp fresh cream",
    "Salt to taste",
    "Fresh coriander leaves (for garnish)"
  ],
  steps: [
    "Heat butter and oil in a pan. Add bay leaf, cinnamon, and cloves; sauté for a few seconds.",
    "Add onions and cook until golden brown.",
    "Add ginger-garlic paste and sauté until fragrant.",
    "Add tomato puree and cook until oil separates.",
    "Add turmeric, red chili, coriander powder, and salt. Mix well.",
    "Add paneer cubes and gently coat with the masala.",
    "Stir in fresh cream, garam masala, and kasuri methi.",
    "Cook on low heat for 2-3 minutes.",
    "Garnish with fresh coriander leaves and serve hot with naan or rice."
    ],
  },
  breakfast: {
    title: "Prawn Pulao",
    image: "mc5.png",
    ingredients: [
       "500g prawns (cleaned and deveined)",
    "2 cups basmati rice (soaked for 30 mins)",
    "2 tbsp oil or ghee",
    "1 bay leaf",
    "4 cloves",
    "4 green cardamoms",
    "1-inch cinnamon stick",
    "1 medium onion (thinly sliced)",
    "1 tbsp ginger-garlic paste",
    "2 green chilies (slit)",
    "1 tsp red chili powder",
    "1/2 tsp turmeric powder",
    "1 tsp garam masala",
    "1/2 cup yogurt",
    "1/2 cup fresh coriander leaves (chopped)",
    "1/2 cup mint leaves (chopped)",
    "Salt to taste",
    "3 cups water"
  ],
  steps: [
    "Heat oil or ghee in a heavy-bottomed pan. Add bay leaf, cloves, cardamoms, and cinnamon; sauté until fragrant.",
    "Add sliced onions and sauté until golden brown.",
    "Add ginger-garlic paste and green chilies; cook until raw smell disappears.",
    "Add prawns, turmeric, red chili powder, salt, and cook until prawns turn pink.",
    "Add yogurt and cook for 3-4 minutes on medium heat.",
    "Add chopped coriander and mint leaves; mix well.",
    "Add soaked rice and gently mix to combine with the prawn mixture.",
    "Pour in water, check salt, and bring to a boil.",
    "Lower the heat, cover the pan, and cook on simmer until rice is cooked and water is absorbed (about 15-20 minutes).",
    "Turn off heat and let it rest covered for 10 minutes.",
    "Fluff rice gently with a fork and serve hot with raita or salad."
    ],
  },
  brunch: {
    title: "Dal Makhani",
    image: "mc6.png",
    ingredients: [
      "1 cup whole black urad dal (black gram)",
    "1/4 cup rajma (kidney beans)",
    "4 cups water",
    "3 tbsp butter",
    "2 tbsp oil",
    "1 large onion (finely chopped)",
    "2 medium tomatoes (pureed)",
    "1 tbsp ginger-garlic paste",
    "2-3 green chilies (slit)",
    "1 tsp cumin seeds",
    "1 tsp red chili powder",
    "1/2 tsp turmeric powder",
    "1 tsp garam masala",
    "1 tsp dried fenugreek leaves (kasuri methi)",
    "1/2 cup fresh cream",
    "Salt to taste",
    "Fresh coriander leaves (for garnish)"
  ],
  steps: [
    "Soak urad dal and rajma overnight or at least 8 hours.",
    "Pressure cook soaked dals with water and salt until soft (about 6-7 whistles).",
    "Heat butter and oil in a pan. Add cumin seeds and let them splutter.",
    "Add chopped onions and sauté until golden brown.",
    "Add ginger-garlic paste and green chilies; cook until raw smell disappears.",
    "Add tomato puree and cook until oil separates.",
    "Add red chili powder, turmeric powder, and garam masala. Mix well.",
    "Add cooked dal along with some water to adjust consistency.",
    "Simmer on low heat for 30-40 minutes, stirring occasionally.",
    "Add kasuri methi and fresh cream. Cook for another 5 minutes.",
    "Garnish with coriander leaves and serve hot with naan or rice."
    ],
  },
  lunch: {
    title: "Rajma Masala",
    image: "mc7.png",
    ingredients: [
      "1 cup rajma (kidney beans)",
    "3 cups water (for pressure cooking)",
    "2 tbsp oil or ghee",
    "1 tsp cumin seeds",
    "1 bay leaf",
    "1-inch cinnamon stick",
    "2 medium onions (finely chopped)",
    "2 medium tomatoes (pureed)",
    "1 tbsp ginger-garlic paste",
    "1/2 tsp turmeric powder",
    "1 tsp red chili powder",
    "1 tsp coriander powder",
    "1/2 tsp cumin powder",
    "1/2 tsp garam masala",
    "Salt to taste",
    "Fresh coriander leaves (for garnish)"
  ],
  steps: [
    "Soak rajma overnight or for at least 8 hours in water.",
    "Pressure cook soaked rajma with 3 cups of water and some salt until soft (4-5 whistles).",
    "Heat oil or ghee in a pan. Add cumin seeds, bay leaf, and cinnamon stick; let them splutter.",
    "Add chopped onions and sauté until golden brown.",
    "Add ginger-garlic paste and sauté until the raw smell goes away.",
    "Add tomato puree and cook until oil separates.",
    "Add turmeric, red chili powder, coriander powder, cumin powder, and salt. Cook well.",
    "Add the boiled rajma along with some of the cooking liquid. Mix and simmer for 15–20 minutes.",
    "Add garam masala, stir, and cook for another 2 minutes.",
    "Garnish with coriander leaves and serve hot with steamed rice or roti."
    ],
  },
  snacks: {
    title: "Butter Chicken Masala",
    image: "mc8.png",
    ingredients: [
       "500g boneless chicken (cut into chunks)",
    "1/2 cup yogurt",
    "1 tbsp lemon juice",
    "1 tsp red chili powder",
    "Salt to taste",
    "1 tbsp ginger-garlic paste",
    "2 tbsp butter",
    "1 tbsp oil",
    "2 medium onions (finely chopped)",
    "2 medium tomatoes (pureed)",
    "1/2 tsp turmeric powder",
    "1 tsp coriander powder",
    "1/2 tsp cumin powder",
    "1/2 tsp garam masala",
    "1/2 tsp kasuri methi (dried fenugreek leaves)",
    "2 tbsp fresh cream",
    "Fresh coriander leaves (for garnish)"
  ],
  steps: [
    "Marinate the chicken with yogurt, lemon juice, red chili powder, salt, and ginger-garlic paste. Let it sit for at least 1 hour.",
    "Heat oil and 1 tbsp butter in a pan. Add marinated chicken and cook until golden and fully cooked. Set aside.",
    "In the same pan, add remaining butter. Sauté chopped onions until golden brown.",
    "Add ginger-garlic paste (if extra) and cook briefly.",
    "Add tomato puree and cook until oil separates.",
    "Add turmeric, coriander, cumin, salt, and garam masala. Mix and cook for a couple of minutes.",
    "Add the cooked chicken to the masala and mix well.",
    "Add cream and crushed kasuri methi. Simmer for 5 minutes on low heat.",
    "Garnish with fresh coriander and serve hot with naan or rice."
    ],
  },
  dinner: {
    title: "Grilled Salmon",
    image: "images/dinner.jpg",
    ingredients: [
      "Salmon fillets",
      "Lemon juice",
      "Salt and pepper",
      "Olive oil",
    ],
    steps: [
      "Marinate salmon with lemon juice, salt, and pepper.",
      "Grill on medium heat for 6-8 minutes per side.",
      "Drizzle with olive oil and serve.",
    ],
  },
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

  cards.forEach((card, index) => {
    card.addEventListener("click", () => {
      const keys = Object.keys(recipes);
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
