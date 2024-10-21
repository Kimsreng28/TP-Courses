<template>
  <div class="add">
    <div class="categories">
      <CategoryCard
        v-for="(category, index) in categories"
        :key="index"
        :title="category.title"
        :itemCount="category.itemCount"
        :imageSrc="category.imageSrc"
        :backgroundColor="category.backgroundColor"
      />
    </div>

    <div class="promotion">
      <Promotion
        v-for="(promo, index) in promotions"
        :key="index"
        :title="promo.title"
        :buttonText="promo.buttonText"
        :imageSrc="promo.imageSrc"
        :backgroundColor="promo.backgroundColor"
        :buttonBackgroundColor="promo.buttonBackgroundColor"
      />
    </div>
  </div>
</template>

<script>
import CategoryCard from "./components/Category_component.vue";
import Promotion from "./components/Promotion_component.vue";

export default {
  name: "App",
  components: {
    CategoryCard,
    Promotion,
  },
  data() {
    return {
      categories: [
        {
          title: "Cake & Milk",
          itemCount: 14,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230216/ourmid/pngtree-juicy-burgers-with-a-transparent-background-png-image_6603069.png",
          backgroundColor: "#F2FCE4",
        },
        {
          title: "Peach",
          itemCount: 17,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230417/original/pngtree-yellow-peach-fruit-leaves-transparent-png-image_9059837.png",
          backgroundColor: "#FFFCEB",
        },
        {
          title: "Organic Kiwi",
          itemCount: 21,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20220818/ourmid/pngtree-kiwi-fruits-png-image_6114318.png",
          backgroundColor: "#ECFFEC",
        },
        {
          title: "Red Apple",
          itemCount: 68,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230110/ourmid/pngtree-fresh-red-apple-png-image_6558046.png",
          backgroundColor: "#FEEFEA",
        },
        {
          title: "Snack",
          itemCount: 16,
          imageSrc:
            "https://www.pngplay.com/wp-content/uploads/13/Snack-Transparent-Background.png",
          backgroundColor: "#FFF3EB",
        },
        {
          title: "Black Plum",
          itemCount: 25,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20220303/original/pngtree-black-plum-green-leaf-half-plum-hand-drawn-png-image_7386586.png",
          backgroundColor: "#FFF3FF",
        },
        {
          title: "Vegetables",
          itemCount: 65,
          imageSrc:
            "https://static.vecteezy.com/system/resources/thumbnails/035/047/756/small_2x/ai-generated-high-quality-photo-of-fresh-green-cabbage-vegetable-png.png",
          backgroundColor: "#F2FCE4",
        },
        {
          title: "Headphone",
          itemCount: 33,
          imageSrc:
            "https://i.pinimg.com/originals/86/c1/ac/86c1ac8bac43ea337f7fe9da5c87a7fd.png",
          backgroundColor: "#FFFCEB",
        },
        {
          title: "Cake & Milk",
          itemCount: 54,
          imageSrc:
            "https://png.pngtree.com/png-clipart/20230927/original/pngtree-covered-cake-milk-sweet-png-image_13146191.png",
          backgroundColor: "#F2FCE4",
        },
        {
          title: "Orange",
          itemCount: 63,
          imageSrc: "https://pngimg.com/d/orange_PNG792.png",
          backgroundColor: "#FFF3FF",
        },
      ],
      promotions: [
        {
          title: "Everyday Fresh & Clean with Our Products",
          buttonText: "Shop Now",
          imageSrc: "https://pngimg.com/uploads/onion/onion_PNG3821.png",
          backgroundColor: "#F0E8D5",
          buttonBackgroundColor: "#3BB77E",
        },
        {
          title: "Make your Breakfast Healthy and Easy",
          buttonText: "Shop Now",
          imageSrc:
            "https://png.pngtree.com/png-clipart/20221107/ourmid/pngtree-kawaii-strawberry-milk-png-image_6427767.png",
          backgroundColor: "#F3E8E8",
          buttonBackgroundColor: "#3BB77E",
        },
        {
          title: "The best Organic Products Online",
          buttonText: "Shop Now",
          imageSrc:
            "https://png.pngtree.com/png-vector/20240708/ourmid/pngtree-fresh-vegetables-with-wicker-basket-png-image_13008114.png",
          backgroundColor: "#E7EAF3",
          buttonBackgroundColor: "#FDC040",
        },
      ],
    };
  },
};
</script>

<style scoped>
.add {
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  margin-left: -10%;
}

/* Categories Section */
.categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  gap: 0.5%;
  margin: 1%;
}

/* Promotions Section */
.promotion {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 1%;
}
</style>
