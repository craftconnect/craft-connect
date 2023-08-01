
function showProductDetails(productName) {
    const products = {
      'Wooden-1': {
        name: 'Ganesha Wall Hanging',
        title: 'Lord Ganesha Wall Hanging Decorative Showpiece',
        image: 'assets/images/Wooden/wooden1.webp',
        price: '₹1000.00 <del>₹2000.00</del> [50% OFF]',
        rating: '🌕🌕🌕🌗🌑',
        size: ' 25Cm x 3Cm x 25Cm / 9.9"x1.5"x9.9" ',
        material: 'Wooden',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Lord Ganesha Wall Hanging Decorative Showpiece',
        color: 'Brown & Yellow',
        description: 'Enlighten your home with this decorative wall piece having Lord Ganesha made from Wooden which reflects the artistic brilliance and adds elegance to your decor. Style your home and office with this Wooden wall hanging; sure to be admired by your guests. It serves as a great gift, especially around religious celebrations and festivities. This handicraft has been made by skilled artisans using various traditional techniques'
      },

      'Wooden-2': {
        name: 'Ganesha Wall Hanging',
        title: 'Lord Ganesha Wall Hanging Decorative Showpiece',
        image: 'assets/images/Wooden/wooden2.webp',
        price: '₹999.00',
        rating: '🌕🌕🌕🌕🌑',
        size: ' 23Cm x 2Cm x 30Cm / 9.2"x0.8"x11.9" ',
        material: 'Wooden',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Lord Ganesha Wall Hanging Decorative Showpiece',
        color: 'Brown & Yellow',
        description: 'Dedicate and show your love towards the hard work of your mother with this beautiful Moms Cafe Wall Hanging. You can use this wall hanging in your kitchen or hang it ourside kitchen. It serves as a great gift for your mother, especially around religious celebrations and festivities. This wall hanging is diligently handcrafted by skilled artisans using various traditional techniques.'
      },

      'Wooden-3': {
        name: 'Ganesha Wall Hanging',
        title: 'Wood And Polyresin Shree Ashtavinayak Lord Ganesha Wall Hanging',
        image: 'assets/images/Wooden/wooden3.webp',
        price: '₹1099.00 <del>₹1399.00</del>',
        rating: '🌕🌕🌕🌕🌕',
        size: ' 22Cm x 33Cm x 3Cm / 9"x13"x1.5" ',
        material: 'Synthetic Fiber & Wood',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Wooden Wall hanging with 9 variants of Lord Ganesha',
        color: 'Orange and Brown',
        description: 'Bring goodluck and ward off all your Vighnas with this auspious wall hanging having 9 variants of lord Ganesha. It is made from Papier-Mache which reflects the artistic brilliance and it adds elegance to your decor. Style your home and office with this Papie-Mache Door Hanging; sure to be admired by your guests. It serves as a great gift, especially around religious celebrations and festivities. This wall hanging has been made by skilled artisans using various traditional techniques.'
      },

      'Bronze-1':{
        name: 'Lord Hanuman Idol',
        title: 'Brown Polyresin and Bronze Meditating Lord Hanuman Idol',
        image: 'assets/images/Bronze/bronze1.webp',
        price: '₹5995.00 <del>₹8995.00</del>',
        rating: '🌕🌕🌕🌕🌗',
        size: '16.5Cm x 14.5Cm x 19.5Cm / 6.49"x5.7"x7.67"',
        material: 'Polyresin and Bronze',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Meditating Lord Hanuman Idol Cold Cast Bronze Resin Decorative Figurine',
        color: 'Brown',
        description: 'It is said that Hanuman used to meditate for hours at a stretch, thinking only and only about his Lord Ram and the meditation helped him bring a sense of calm and quiet strength. You too can bring home the same Brown meditating Lord Hanuman cold cast bronze idol, with this handcrafted decorative figurine– this figurine has been made using high-quality bronze and polyresin. The detailing on the Hanuman is incredible– from the facial features, the half-closed eyes, and the accessories, everything is close to perfection. Whether you choose this piece for your own home or as a gift, you can be sure of plenty of attention and good vibes. This showpiece is handcrafted intricately by our skilled artisans.'
      },

      'Bronze-2':{
        name: 'Lord Buddha Decorative',
        title: 'Bronze Brown Fine Finish Decorative Meditating Lord Buddha Idol',
        image: 'assets/images/Bronze/bronze2.webp',
        price: '₹3,195.00',
        rating: '🌕🌕🌕🌗🌑',
        size: ' 13Cm x 7Cm x 15Cm / 5.11"x2.75"x5.9"',
        material: 'Polyresin and Bronze',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Fine Finish Meditating Lord Buddha Cold Cast Bronze Resin Decorative Figurine',
        color: 'Silver',
        description: 'If you thought that you have seen all types of Lord Buddha statues and figurines, then think again, because we have a silver meditating Buddha cold cast bronze resin decorative statue that is truly unique and incredibly special. This particular Buddha figurine has been made using cold cast bronze and polyresin, which gives it a certain kind of sophisticated allure. A peaceful-looking Buddha sits on an unfurled lotus and meditates and there is something resembling a radiant sun behind him. This is the perfect piece for you to adorn your living room, your office space, or even your yoga or meditation studio! Exquisitely designed and intricately crafted, it makes for a perfect gifting option. This showpiece is handcrafted intricately by our skilled artisans.'
      },

      'Bronze-3':{
        name: 'Lion Showpiece Decorative',
        title: 'Polyresin and Bronze Black Carved Brave Lion Showpiece Decorative Animal Figurine',
        image: 'assets/images/Bronze/bronze3.webp',
        price: '₹6,995.00',
        rating: '🌕🌕🌕🌕🌗',
        size: ' 31Cm x 15Cm x 26Cm / 12.2"x5.9"x10.23"',
        material: 'Polyresin and Bronze',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Carved Brave Lion Cold Cast Bronze Resin Decorative Animal Figurine Showpiece',
        color: 'Black',
        description: 'The king of the jungle is here!! Imagine a black polyresin and bronze showpiece that depicts the stately and majestic lion, sitting in your living room or on your office workstation. This handcrafted lion has been crafted to show the magnificence of this animal and it would make for a wonderful addition to your interiors. Alternately, you could consider this as a gift for friends or family members on special occasions. Exquisitely designed and intricately crafted, it makes for a perfect gifting option.'
      },

      'Marble-1': {
        name: 'Lord Ganesha With Chowki',
        title: 'Marble Lord Ganesha Idol With Crown Peacock Design Chowki',
        image: 'assets/images/Marble/marble1.webp',
        price: '₹399.00 <del>₹649.00</del>',
        rating: '🌕🌕🌕🌑🌑',
        size: '10Cm x 10Cm x 10Cm / 4"x4"x4"',
        material: 'Marble and Polyresin',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Ganesha Chowki',
        color: 'White, Blue, Red and Green',
        description: 'Bring Riddhi Siddhi to your home with the blessings of the Lord Ganesha statue on Marble Chowki. Lord Ganesha is seated on a marble chowki that is beautifully hand crafted with Green and Red color and studded with white crystals. Ganesha chowki surely brings blessing and happiness to your home. For its incredible appeal, it serves as a great gift for your loved ones. This Marble Chowki is diligently handcrafted by skilled artisans using various traditional techniques.'
      },

      'Marble-2': {
        name: 'Ridhi Sidhi On Chowki',
        title: 'Ridhi Sidhi with Swastik on Marble chowki',
        image: 'assets/images/Marble/marble2.webp',
        price: '₹399.00',
        rating: '🌕🌕🌕🌑🌑',
        size: '10Cm x 10Cm x 10Cm / 4"x4"x4"',
        material: 'Makrana Marble',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Marble Lord Ganesha Statue and One marble Chowki',
        color: 'Red',
        description: 'Bring Riddhi Siddhi to your home with the blessings of the Lord Ganesha statue on Marble Chowki. Lord Ganesha is seated on a marble chowki having Swastik that is beautifully enameled with Red color and studded with white crystals. Ganesha chowki surely brings blessing and happiness to your home. For its incredible appeal, it serves as a great gift for your loved ones. This Marble Chowki is diligently handcrafted by skilled artisans using various traditional techniques.'
      },

      'Marble-3':{
        name: 'Lord Ganesha Chowki',
        title: 'Marble Crystal Studded Lord Ganesha Idol Chowki With Peacock And Kalash',
        image: 'assets/images/Marble/marble3.webp',
        price: '₹399.00',
        rating: '🌕🌕🌕🌑🌑',
        size: '10Cm x 10Cm x 10Cm / 4"x4"x4"',
        material: 'Makrana Marble',
        care: "Don't wash, use dry/wet cotton cloth to remove dirt",
        Content: 'One Piece Marble Ganesh Chowki',
        color: 'Green, Red and Golden',
        description: 'Bring Riddhi Siddhi to your home with the blessings of the Lord Ganesha statue on Marble Chowki. Lord Ganesha is seated on a marble chowki that is beautifully hand crafted with Red, and Green color and studded with white crystals. Ganesha chowki surely brings blessing and happiness to your home. For its incredible appeal, it serves as a great gift for your loved ones. This Marble Chowki is diligently handcrafted by skilled artisans using various traditional techniques.'
      },

      'Iron-1':{
        name: 'Radha Krishna Hanging',
        title: 'Wrought Iron Radha Krishna on Swing Wall Hanging Decorative Showpiece',
        image: 'assets/images/Iron/iron1.webp',
        price: '₹2,999.00',
        rating: '🌕🌕🌕🌕🌕',
        size: '43Cm x 2Cm x 58Cm / 17"x1"x23"',
        material: 'Wrought Iron',
        care: "Don't wash, use dry and cotton cloth to remove dirt. Keep away from direct Sunlight.",
        Content: 'One Radha Krishna on Swing Wall Hanging',
        color: 'Yellow, Orange, Green and Brown',
        description: 'Wall hangings have always been seen in almost everyones home and forever will be. Our Yellow, orange, green & brown Wrought iron Radha Krishna on Swing Wall Hanging is the best kind of religious wall hanging that you can find on our online portal that comes in yellow, orange, green, and brown colors. This wall hanging has Radha Krishna on a swing making it an eye-catching wall decor for your home. This handmade article is made by our skilled artists and is also a great gifting option for your friends and family. You can find many such religious wall decor in many different avatars on our online portal that your guests are sure to adore. Exquisitely designed and intricately crafted, it makes for a perfect gifting option. You can find many more wall hangings in different patterns on our online portal in various colors that suit your home or office interior.'
      },

      'Iron-2':{
        name: 'Musician Ganesha Wall Hanging',
        title: 'Orange Musician Lord Ganesha Playing Veena Iron Wall Hanging/Art',
        image: 'assets/images/Iron/iron2.webp',
        price: '₹1,199.00 <del>₹1,999.00</del>',
        rating: '🌕🌕🌕🌕🌗',
        size: '27Cm x 1Cm x 40Cm / 11"x0.5"x16"',
        material: 'Iron',
        care: "Don't wash, use dry and cotton cloth to remove dirt.",
        Content: 'One Musician Ganesha Playing Veena Wall Hanging',
        color: 'Orange, Silver and Black',
        description: 'Lord Ganesha has a close tie with music-it is said that all the rhythms in the universe are channeled through him, which is why there are always images and figurines depicting him with a musical instrument. You would have seen figurines where you see Ganesha playing a tabla or shehnai, but how many times would you have seen him playing the veena? With our Orange, Silver & Black iron Lord Ganesha playing veena wall hanging, you can see his semi-form playing the dholak with aplomb-although there is no torso to this Ganesha, the detailing is intricate and impressive! Exquisitely designed and intricately crafted, it makes for a perfect gifting option for friends & family. You can find many more wall hangings in different patterns on our online portal in various colors that suit your home or office interior.'
      },

      'Iron-3':{
        name: 'Tribal Man Wall Hanging',
        title: 'Musician Tribal Man Playing Tambourine/dafli Iron Wall Hanging/Art',
        image: 'assets/images/Iron/iron3.webp',
        price: '₹995.00 <del>₹1,295.00</del>',
        rating: '🌕🌕🌕🌕🌕',
        size: '22Cm x 2Cm x 35Cm / 9"x1"x14"',
        material: 'Iron',
        care: "Don't wash, use dry and cotton cloth to remove dirt.",
        Content: 'One Musician Tribal Man Playing Tapli Wall Hanging',
        color: 'Orange, Blue, Black and Green',
        description: 'If you like the tribal and folk arts of our country, chances are that you will like this wall-hanging too-this musician playing the tambourine/dafli in a vibrant color combination, while this one is devoid of any facial features, the detailing on their outfits, and turbans is extremely intricate. The wall hanging comes as individual pieces, but you can further create your combinations on your wall with our other musician wall hangings that you can find playing different instruments-or how about two on one wall and the other two on another? These stand as a great housewarming gift option for your friends & family too.'
      },

      'Brass-1':{
        name: 'Goddess Durga Maa',
        title: 'Colorful Stone Work Handcrafted Brass Goddess Durga Maa on Lion Statue',
        image: 'assets/images/Brass/brass1.webp',
        price: '₹9,995.00 <del>₹11,000.00</del>',
        rating: '🌕🌕🌕🌕🌕',
        size: '19Cm x 8Cm x 21Cm / 7.48"x3.14"x8.26"',
        material: 'Brass',
        care: "Don't wash, use dry and cotton cloth to remove dirt.",
        Content: 'One Colorful Goddess Durga Maa On Lion Handcrafted Brass Statue with Stone Work',
        color: 'Golden, Red and Green',
        description: 'Give a royal touch to your home decor with this golden, red & green Brass Goddess Durga Maa on a lion statue with Stone Work. Featuring an excellent finish, this statue looks extremely classy and elegant. This royal piece of art simply shows how can a simple work of art turns into a masterpiece of craftsmanship. It can also serve as a great gifting option for your loved ones, family, and friends. This statue has been diligently handcrafted by skilled artisans using various conventional techniques. Exquisitely designed and intricately crafted, it makes for a perfect gifting option. '
      },

      'Brass-2':{
        name: 'Dhoop Incense Burner',
        title: 'Golden Antique Dhoop Incense Burner with Handle for Pooja Purpose',
        image: 'assets/images/Brass/brass2.webp',
        price: '₹6,499.00 <del>₹7,999.00</del>',
        rating: '🌕🌕🌕🌕🌑',
        size: '25Cm x 10Cm x 20Cm / 9.84"x3.93"x7.87"',
        material: 'Brass',
        care: "Don't wash, use dry and cotton cloth to remove dirt.",
        Content: 'One Antique Finish Brass Dhoop Incense Burner for Pooja Purpose',
        color: 'Golden',
        description: 'Every pooja ghar needs to be purified every day with dhoop, right? Now, you can give an antique touch to your home decor with our Antique Finish Golden Brass Dhoop Incense Burner for home. Featuring an excellent finish, this pooja dhoop holder looks extremely religious, classy, and elegant. This antique piece of art simply shows how can a simple work of art turns into a masterpiece of craftsmanship and can be kept in your pooja room or temple. It can also stand as a great gifting option for your loved ones, family, and friends. This showpiece has been diligently handcrafted by skilled artisans using various inherited methods.'
      },

      'Brass-3':{
        name: '2 Men In Boat Decorative',
        title: 'Brown Brass Antique Finish 2 Men in Boat Decorative Showpiece',
        image: 'assets/images/Brass/brass3.webp',
        price: '₹3,295.00 <del>₹3,995.00</del>',
        rating: '🌕🌕🌕🌕🌕',
        size: '32.5Cm x 5Cm x 12Cm / 12.79"x1.96"x4.72"',
        material: 'Brass',
        care: "Don't wash, use dry and cotton cloth to remove dirt.",
        Content: 'One Antique Finish 2 Men in Boat Brass Decorative Showpiece',
        color: 'Brown',
        description: 'On a quaint rowboat, are seated two men, busy rowing away to some faraway land, or at least, that is what you can imagine or think of when you look at this showpiece. This brass décor piece is ideal for your living space and is sophisticated and understated enough for your office too. The detailing is incredible and can be seen not only on the figurines but also on the boat itself which is surely going to make a stylish statement. This is a wonderful choice for gifting too– choose one for your friends, family, or even colleagues. The beautiful piece of art will make a stylish statement wherever you will place it. Gift these to your loved ones to delight them.'
      }


    };

    const product = products[productName];

    const productContent = `
    <div class="product">
      <div class="product-top">
        <h2>${product.name}</h2>
        <h3>${product.title}</h3>
        <hr>
        <img src="${product.image}" alt="${productName}">
      </div>
      <div class="product-bottom">
        <table>
        <tr>
          <td class="label">Price :</td>
          <td class="text">${product.price}</td>
        </tr>
        <tr>
          <td class="label">Rating :</td>
          <td class="text">${product.rating}</td>
        </tr>
        <tr>
          <td class="label">Size :</td>
          <td class="text">${product.size}</td>
        </tr>
        <tr>
          <td class="label">Material :</td>
          <td class="text">${product.material}</td>
        </tr>
        <tr>
          <td class="label">Care :</td>
          <td class="text">${product.care}</td>
        </tr>
        <tr>
          <td class="label">Content :</td>
          <td class="text">${product.Content}</td>
        </tr>
        <tr>
          <td class="label">Color :</td>
          <td class="text">${product.color}</td>
        </tr>
        <tr>
          <td class="label">Description</td>
          <td class="text">${product.description}</td>
        </tr>
      </table>
      <div class="btn">
          <button>Shop Now <ion-icon name="bag-handle-outline" id="openPopupButton4"></ion-icon></button>
          <button>Add to cart <ion-icon name="cart-outline" id="openPopupButton4"></ion-icon></button>
      <div>
    </div>

    </div>
  `;

    document.getElementById('productDetails').innerHTML = productContent;
}



function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

window.addEventListener("DOMContentLoaded", function() {
  var productName = getParameterByName('product');
  if (productName) {
      showProductDetails(productName);
  }
});
