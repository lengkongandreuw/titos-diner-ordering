export type Customizer = "breakfast" | "omelette" | "griddle" | "sandwich" | "burger" | "dressing" | "protein" | "pasta" | "shake" | "seafoodSauce";

export type MenuItem = {
  id: string;
  name: string;
  description: string;
  price: number | null;
  category: string;
  image: string;
  tag?: string;
  customizer?: Customizer;
  vegetarian?: boolean;
};

const img = {
  breakfast: "./titosmenu/hero_pancakes.webp",
  pancake: "./titosmenu/menu_pancakes.webp",
  waffle: "./titosmenu/menu_belgian_waffle.webp",
  omelette: "./titosmenu/menu_omelette.webp",
  burger: "./titosmenu/menu_bacon_burger.webp",
  club: "./titosmenu/menu_club_sandwich.webp",
  steak: "./titosmenu/menu_fried_steak.webp",
  liver: "./titosmenu/liver and onions.webp",
  shake: "./titosmenu/menu_milkshake.webp",
  pie: "./titosmenu/menu_apple_pie.webp",
  seafood: "./titosmenu/titos dinner 3 .webp",
};

export const categories = ["Favorites", "Breakfast", "Griddle", "Appetizers", "Salads", "Sandwiches", "Burgers", "Mediterranean", "Pasta", "Dinner", "Sides", "Drinks & Sweets"];

export const menu: MenuItem[] = [
  { id:"biscuit-gravy", name:"Biscuit & Gravy", description:"Warm biscuits covered in homestyle gravy.", price:6.99, category:"Breakfast", image:img.breakfast },
  { id:"sausage-biscuit-gravy", name:"Sausage, Biscuit & Gravy", description:"Sausage with warm biscuits and homestyle gravy.", price:9.29, category:"Breakfast", image:img.breakfast, tag:"Hearty" },
  { id:"chipped-beef", name:"Chipped Beef Gravy", description:"Chipped beef gravy over two biscuits with home fries or hash browns.", price:10.99, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"fruit-salad-small", name:"Fresh Fruit Salad — Small", description:"Fresh-cut seasonal fruit.", price:5.29, category:"Breakfast", image:img.waffle, vegetarian:true },
  { id:"fruit-salad-large", name:"Fresh Fruit Salad — Large", description:"A generous bowl of fresh-cut seasonal fruit.", price:6.29, category:"Breakfast", image:img.waffle, vegetarian:true },
  { id:"oatmeal", name:"Oatmeal with Low-Fat Milk", description:"Served with brown sugar and raisins.", price:5.99, category:"Breakfast", image:img.breakfast, vegetarian:true },
  { id:"farmers-sandwich", name:"Grilled Farmer’s Sandwich", description:"Ham, turkey, bacon, eggs, lettuce, tomato, mayo, and American cheese.", price:11.99, category:"Breakfast", image:img.club, tag:"House favorite", customizer:"breakfast" },
  { id:"breakfast-meat-sandwich", name:"Bacon, Sausage or Ham Egg & Cheese", description:"Two eggs on grilled bread with American cheese and breakfast meat.", price:9.99, category:"Breakfast", image:img.club, customizer:"breakfast" },
  { id:"egg-cheese-sandwich", name:"Grilled Egg & Cheese Sandwich", description:"Two eggs on grilled bread with melted American cheese.", price:7.99, category:"Breakfast", image:img.club, customizer:"breakfast", vegetarian:true },
  { id:"scrapple-sandwich", name:"Scrapple Egg & Cheese Sandwich", description:"Pork scrapple, eggs, and melted American cheese on grilled bread.", price:9.99, category:"Breakfast", image:img.club, customizer:"breakfast" },
  { id:"farmers-omelette", name:"Farmer’s Omelette", description:"Peppers, onions, tomatoes, mushrooms, ham, bacon, sausage, and cheddar.", price:12.29, category:"Breakfast", image:img.omelette, tag:"House favorite", customizer:"omelette" },
  { id:"vegetarian-omelette", name:"Vegetarian Omelette", description:"Mushrooms, onions, tomatoes, green peppers, and Jack cheese.", price:10.99, category:"Breakfast", image:img.omelette, customizer:"omelette", vegetarian:true },
  { id:"steak-fajita-omelette", name:"Steak Fajita Omelette", description:"Angus sirloin, onions, rainbow peppers, and cheddar cheese.", price:13.29, category:"Breakfast", image:img.omelette, customizer:"omelette" },
  { id:"chicken-fajita-omelette", name:"Chicken Fajita Omelette", description:"Grilled chicken, onions, rainbow peppers, and cheddar cheese.", price:12.29, category:"Breakfast", image:img.omelette, customizer:"omelette" },
  { id:"titos-omelette", name:"Tito’s Omelette", description:"Grilled chicken, peppers, onions, tomato, mushrooms, chili sauce, cheddar, and jalapeños.", price:12.99, category:"Breakfast", image:img.omelette, tag:"Tito’s pick", customizer:"omelette" },
  { id:"plain-omelette", name:"Plain Ole Omelette", description:"Farm-fresh eggs, ready for your choice of cheese.", price:8.29, category:"Breakfast", image:img.omelette, customizer:"omelette", vegetarian:true },
  { id:"ham-swiss-omelette", name:"Ham & Swiss Omelette", description:"Savory ham and Swiss cheese folded into farm-fresh eggs.", price:10.29, category:"Breakfast", image:img.omelette, customizer:"omelette" },
  { id:"bacon-cheese-omelette", name:"Bacon & Cheese Omelette", description:"Crisp bacon with your choice of cheese.", price:11.29, category:"Breakfast", image:img.omelette, customizer:"omelette" },
  { id:"western-omelette", name:"True Western Omelette", description:"Ham, peppers, onions, and Jack cheese.", price:10.99, category:"Breakfast", image:img.omelette, customizer:"omelette" },
  { id:"florentine-omelette", name:"Florentine Omelette", description:"Spinach, feta cheese, and tomato.", price:10.99, category:"Breakfast", image:img.omelette, customizer:"omelette", vegetarian:true },
  { id:"veggie-whites", name:"Veggie Egg Whites", description:"Egg whites, onions, tomatoes, mushrooms, and green peppers.", price:10.99, category:"Breakfast", image:img.omelette, customizer:"omelette", vegetarian:true },
  { id:"seafood-omelette", name:"Seafood Omelette", description:"Shrimp, scallops, mushrooms, onions, tomato, Jack cheese, and Newburg sauce.", price:null, category:"Breakfast", image:img.seafood, customizer:"omelette" },
  { id:"chorizo-omelette", name:"Chorizo Omelette", description:"Eggs, chorizo, onions, mixed peppers, tomato, cheddar, and Jack cheese.", price:11.99, category:"Breakfast", image:img.omelette, customizer:"omelette" },
  { id:"mexican-breakfast", name:"Mexican Breakfast", description:"Hash browns topped with beef chili, cheese, jalapeños, peppers, and eggs your way.", price:11.99, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"grandmas-breakfast", name:"Grandma’s Breakfast", description:"One egg any style with bacon, sausage, or ham.", price:8.99, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"eggs-benedict", name:"Eggs Benedict", description:"Poached eggs, ham, and homemade hollandaise sauce.", price:10.99, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"florentine-benedict", name:"Florentine Eggs Benedict", description:"Classic Benedict with fresh spinach and tomato.", price:11.29, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"scrapple-eggs", name:"Scrapple & Eggs", description:"Two eggs any style served with pork scrapple.", price:10.99, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"country-steak-eggs", name:"Country Fried Steak & Eggs", description:"A true breakfast classic with eggs, potato, and toast or biscuit.", price:12.99, category:"Breakfast", image:img.steak, tag:"Comfort classic", customizer:"breakfast" },
  { id:"two-egg-breakfast", name:"Two Egg Breakfast", description:"Farm-fresh eggs with bacon, sausage, or ham.", price:10.29, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"country-ham-eggs", name:"Country Ham & Eggs", description:"Grilled 4 oz country ham steak with two eggs.", price:11.99, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"new-york-steak-eggs", name:"New York Steak & Eggs", description:"Fresh-cut aged 8 oz Angus steak grilled to your liking.", price:null, category:"Breakfast", image:img.steak, customizer:"breakfast" },
  { id:"scrambled-ham-cheese", name:"Scrambled Ham & Cheese", description:"Scrambled eggs with savory ham and cheddar cheese.", price:10.29, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"smoked-sausage-eggs", name:"Hickory Smoked Sausage & Eggs", description:"Iron-skillet 4 oz smoked sausage with two eggs.", price:12.29, category:"Breakfast", image:img.breakfast, customizer:"breakfast" },
  { id:"corned-hash-eggs", name:"Corned Beef Hash & Eggs", description:"Crispy chopped corned beef and potatoes with eggs.", price:11.29, category:"Breakfast", image:img.breakfast, tag:"House favorite", customizer:"breakfast" },
  { id:"big-breakfast", name:"Big Breakfast", description:"Three eggs, two pancakes, potato, and bacon, sausage, or ham.", price:11.29, category:"Breakfast", image:img.breakfast, tag:"Big plate", customizer:"breakfast" },
  { id:"ribeye-steak-eggs", name:"Ribeye Steak & Eggs", description:"Prime aged 8 oz ribeye grilled to your liking.", price:null, category:"Breakfast", image:img.steak, customizer:"breakfast" },
  { id:"chorizo-skillet", name:"Chorizo Skillet", description:"Eggs, chorizo, onions, mixed peppers, tomato, cheddar, and Jack cheese.", price:11.99, category:"Breakfast", image:img.omelette, customizer:"breakfast" },

  { id:"belgian-waffle", name:"Belgian Waffle", description:"Hot off the iron with butter and syrup. Add your favorite topping.", price:8.29, category:"Griddle", image:img.waffle, customizer:"griddle", vegetarian:true },
  { id:"waffle-eggs", name:"Belgian Waffle & Eggs", description:"Belgian waffle with two farm-fresh eggs any style.", price:8.99, category:"Griddle", image:img.waffle, customizer:"griddle" },
  { id:"sunbelt-waffles", name:"Sunbelt Waffles", description:"Belgian waffle with bananas, strawberries, blueberries, and whipped cream.", price:10.99, category:"Griddle", image:img.waffle, tag:"Fresh fruit", customizer:"griddle", vegetarian:true },
  { id:"chicken-waffles", name:"Chicken & Waffles", description:"Crispy fried chicken and waffle topped with white gravy.", price:11.99, category:"Griddle", image:img.waffle, tag:"Tito’s pick", customizer:"griddle" },
  { id:"french-toast", name:"French Toast", description:"Cinnamon, honey, and egg batter with syrup and confectioners’ sugar.", price:7.99, category:"Griddle", image:img.pancake, customizer:"griddle", vegetarian:true },
  { id:"french-toast-eggs", name:"French Toast with Two Eggs", description:"French toast with two farm-fresh eggs any style.", price:8.99, category:"Griddle", image:img.pancake, customizer:"griddle" },
  { id:"stuffed-french-toast", name:"Stuffed French Toast", description:"Mixed fruit with custard or Nutella filling, topped with pecans.", price:12.99, category:"Griddle", image:img.pancake, customizer:"griddle", vegetarian:true },
  { id:"sunbelt-pancakes", name:"Sunbelt Pancakes", description:"Pancakes with bananas, strawberries, blueberries, and whipped cream.", price:10.99, category:"Griddle", image:img.pancake, tag:"House favorite", customizer:"griddle", vegetarian:true },
  { id:"buttermilk-pancakes", name:"Old Fashioned Buttermilk Pancakes", description:"Stack of three made from scratch, served with butter and syrup.", price:7.99, category:"Griddle", image:img.pancake, customizer:"griddle", vegetarian:true },
  { id:"pancakes-eggs", name:"Pancakes & Eggs", description:"Three pancakes with two eggs any style.", price:8.99, category:"Griddle", image:img.pancake, customizer:"griddle" },
  { id:"cinnamon-pancakes", name:"Cinnamon Pancakes", description:"A warm cinnamon-spiced stack with butter and syrup.", price:9.99, category:"Griddle", image:img.pancake, customizer:"griddle", vegetarian:true },
  { id:"cinnamon-pancakes-eggs", name:"Cinnamon Pancakes & Eggs", description:"Cinnamon pancakes with two eggs any style.", price:10.99, category:"Griddle", image:img.pancake, customizer:"griddle" },

  { id:"philly-egg-rolls", name:"Philly Steak & Cheese Egg Rolls", description:"Two golden Angus steak and provolone egg rolls with onion Sriracha and pico de gallo.", price:9.99, category:"Appetizers", image:img.club, tag:"Crispy" },
  { id:"med-meatballs", name:"Mediterranean Meatballs", description:"Beef and lamb meatballs in cinnamon-scented tomato sauce with grilled bread.", price:10.99, category:"Appetizers", image:img.steak },
  { id:"quesadilla", name:"Quesadilla", description:"Caramelized onions and cheddar-Jack with sour cream, jalapeños, salsa, and guacamole.", price:8.99, category:"Appetizers", image:img.omelette, customizer:"protein", vegetarian:true },
  { id:"mozzarella-sticks", name:"Fried Mozzarella Sticks", description:"Six golden-fried sticks with tangy marinara.", price:9.99, category:"Appetizers", image:img.club, vegetarian:true },
  { id:"fried-calamari", name:"Fried Calamari", description:"Golden crispy calamari with tartar sauce or marinara.", price:10.99, category:"Appetizers", image:img.seafood, customizer:"seafoodSauce" },
  { id:"hummus", name:"Hummus", description:"House-made Mediterranean garbanzo dip with seasoned crispy pita chips.", price:8.99, category:"Appetizers", image:img.club, vegetarian:true },
  { id:"nachos", name:"Nachos", description:"Fresh corn chips, chili, cheese sauce, sour cream, salsa, and guacamole.", price:9.79, category:"Appetizers", image:img.club, customizer:"protein" },

  { id:"cobb-salad", name:"Cobb Salad", description:"Greens, bacon, chicken, tomato, egg, vegetables, feta, guacamole, and ranch.", price:14.99, category:"Salads", image:img.club, customizer:"dressing" },
  { id:"soup-salad", name:"Soup & Salad", description:"A bowl of soup, house salad, and garlic bread.", price:10.99, category:"Salads", image:img.club, customizer:"dressing" },
  { id:"soup-cup", name:"Soup of the Day — Cup", description:"Ask about today’s fresh house-made soup.", price:4.29, category:"Salads", image:img.club },
  { id:"soup-bowl", name:"Soup of the Day — Bowl", description:"A full bowl of today’s fresh house-made soup.", price:5.99, category:"Salads", image:img.club },
  { id:"caesar-regular", name:"Caesar Salad — Regular", description:"Romaine, Caesar dressing, Parmesan, croutons, and garlic toast.", price:7.99, category:"Salads", image:img.club, customizer:"dressing", vegetarian:true },
  { id:"caesar-large", name:"Caesar Salad — Large", description:"A large romaine Caesar with Parmesan, croutons, and garlic toast.", price:9.99, category:"Salads", image:img.club, customizer:"dressing", vegetarian:true },
  { id:"house-salad", name:"House Salad", description:"Spring mix, carrots, tomato, cucumber, olives, croutons, and grilled garlic bread.", price:7.99, category:"Salads", image:img.club, customizer:"dressing", vegetarian:true },
  { id:"spinach-framboise", name:"Spinach Framboise", description:"Baby spinach, raspberry vinaigrette, pickled onion, strawberries, pecans, and goat cheese.", price:10.99, category:"Salads", image:img.waffle, customizer:"dressing", vegetarian:true },
  { id:"greek-salad", name:"Greek Salad", description:"Romaine, feta, onion, olives, tomato, cucumber, pepperoncini, and croutons.", price:10.99, category:"Salads", image:img.club, customizer:"dressing", vegetarian:true },

  { id:"marinated-chicken", name:"Marinated Chicken Breast", description:"Grilled chicken on challah with lettuce, tomato, pickle, onion, and honey mustard.", price:9.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"blt", name:"B.L.T. The Classic", description:"Bacon, lettuce, and tomato. Better. Love. This.", price:9.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"chicken-fajita-sub", name:"Chicken Fajita Sub", description:"Grilled chicken, rainbow peppers, and ranch dressing.", price:12.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"reuben", name:"Reuben", description:"Toasted rye, turkey or corned beef, sauerkraut, Thousand Island, and Swiss.", price:11.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"haddock-sub", name:"Beer-Battered Haddock Sub", description:"Crispy haddock with lettuce, tomato, and tartar sauce.", price:12.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"fried-chicken-sub", name:"Crispy Fried Chicken Sub", description:"Fried chicken, chipotle mayo, lettuce, tomato, and American cheese.", price:12.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"philly-sub", name:"Philly Cheese Steak Sub", description:"Angus Philly steak, grilled onion, mayo, and provolone.", price:12.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"grilled-cheese", name:"Grilled Cheese", description:"Griddled bread and plenty of melted cheese.", price:7.99, category:"Sandwiches", image:img.club, customizer:"sandwich", vegetarian:true },
  { id:"gyro", name:"Gyro", description:"Slow-roasted beef and lamb, lettuce, tomato, onion, and tzatziki in warm pita.", price:9.99, category:"Sandwiches", image:img.club, tag:"Messy. Worth it.", customizer:"sandwich" },
  { id:"chicken-salad", name:"Chicken Salad Sandwich", description:"House chicken salad served as a classic diner sandwich.", price:10.29, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"tuna-salad", name:"Tuna Salad Sandwich", description:"House tuna salad served as a classic diner sandwich.", price:10.29, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"crabcake-sandwich", name:"Crab Cake Sandwich", description:"House lump crab cake on challah with tartar sauce, coleslaw, and fries.", price:null, category:"Sandwiches", image:img.seafood, customizer:"sandwich" },
  { id:"tuna-melt", name:"Tuna Melt", description:"Toasted rye, tuna, tomato, lettuce, and American cheese.", price:10.99, category:"Sandwiches", image:img.club, customizer:"sandwich" },
  { id:"caprese", name:"Caprese Sandwich", description:"Mozzarella, Sicilian red pepper pesto, tomato, and basil on ciabatta.", price:12.99, category:"Sandwiches", image:img.club, customizer:"sandwich", vegetarian:true },
  { id:"club", name:"Club Sandwich", description:"Turkey, ham, bacon, lettuce, tomato, mayo, and American cheese, stacked high.", price:11.99, category:"Sandwiches", image:img.club, tag:"Stacked", customizer:"sandwich" },

  { id:"cheeseburger", name:"Cheeseburger", description:"Half-pound fresh ground chuck, cheese, lettuce, tomato, onion, and pickle.", price:11.29, category:"Burgers", image:img.burger, customizer:"burger" },
  { id:"city-burger", name:"City Burger", description:"Swiss cheese and caramelized onion on a half-pound burger.", price:11.99, category:"Burgers", image:img.burger, customizer:"burger" },
  { id:"garden-burger", name:"Garden Burger", description:"Vegetarian burger with your choice of dressing.", price:10.99, category:"Burgers", image:img.burger, customizer:"burger", vegetarian:true },
  { id:"patty-melt", name:"Patty Melt", description:"Signature cheeseburger and grilled onions on grilled rye.", price:11.99, category:"Burgers", image:img.burger, customizer:"burger" },
  { id:"spicy-burger", name:"Spicy Burger", description:"Cheddar, jalapeños, guacamole, and salsa on the side.", price:12.99, category:"Burgers", image:img.burger, tag:"Bring the heat", customizer:"burger" },
  { id:"titos-burger", name:"Tito’s Burger", description:"Fresh ground beef, mozzarella, red pepper pesto, and chipotle mayo.", price:12.99, category:"Burgers", image:img.burger, tag:"Signature", customizer:"burger" },

  { id:"shish-kebab-sandwich", name:"Shish Kebab Traditional", description:"Marinated Mediterranean beef kebab in pita with tahini, hummus, and fries.", price:13.99, category:"Mediterranean", image:img.steak, customizer:"sandwich" },
  { id:"shish-kofta-sandwich", name:"Shish Kofta Sandwich", description:"Ground beef and lamb in pita with tahini, hummus, and fries.", price:12.99, category:"Mediterranean", image:img.steak, customizer:"sandwich" },
  { id:"shish-tawook-sandwich", name:"Shish Tawook Sandwich", description:"Marinated grilled chicken cubes in pita with garlic mayo, hummus, and fries.", price:12.99, category:"Mediterranean", image:img.steak, customizer:"sandwich" },
  { id:"falafel", name:"Falafel Sandwich", description:"Spiced chickpea patties with hummus and tahini sauce.", price:10.99, category:"Mediterranean", image:img.club, customizer:"sandwich", vegetarian:true },
  { id:"shish-kebab-dinner", name:"Shish Kebab Dinner", description:"Grilled Angus beef kebabs, tahini, vegetables, rice pilaf, hummus, and pita.", price:19.99, category:"Mediterranean", image:img.steak },
  { id:"shish-tawook-dinner", name:"Shish Tawook Dinner", description:"Grilled chicken kebabs, tahini, vegetables, rice pilaf, hummus, and pita.", price:18.99, category:"Mediterranean", image:img.steak },
  { id:"shish-kofta-dinner", name:"Shish Kofta Dinner", description:"Grilled ground beef and lamb, tahini, vegetables, rice, hummus, and pita.", price:18.99, category:"Mediterranean", image:img.steak },
  { id:"kebab-tawook", name:"Shish Kebab & Tawook", description:"Two favorites together with tahini, vegetables, rice, hummus, and pita.", price:18.99, category:"Mediterranean", image:img.steak },
  { id:"mixed-grill", name:"Mixed Grill Platter", description:"Beef kebab, tawook, and kofta with vegetables, rice, hummus, and pita.", price:22.99, category:"Mediterranean", image:img.steak, tag:"Try it all" },

  { id:"fettuccini-alfredo", name:"Fettuccini Alfredo", description:"Fettuccini in rich creamy Alfredo with garlic bread and house salad.", price:13.99, category:"Pasta", image:img.club, customizer:"pasta", vegetarian:true },
  { id:"chicken-parmigiana", name:"Chicken Parmigiana", description:"Chicken, marinara, melted mozzarella, spaghetti, garlic bread, and salad.", price:16.99, category:"Pasta", image:img.club, customizer:"dressing" },
  { id:"chicken-penne-alfredo", name:"Grilled Chicken Penne Alfredo", description:"Penne, spinach, peppers, mushrooms, Parmesan cream, and grilled chicken.", price:16.99, category:"Pasta", image:img.club, customizer:"dressing" },
  { id:"seafood-cioppino", name:"Seafood Cioppino", description:"Shrimp, scallops, tilapia, and calamari in spicy tomato broth over angel hair.", price:24.99, category:"Pasta", image:img.seafood, tag:"Seafood favorite", customizer:"dressing" },
  { id:"shrimp-scampi", name:"Shrimp Scampi", description:"Roma tomato, scallion, basil, white wine, and angel hair in garlic butter.", price:18.99, category:"Pasta", image:img.seafood, customizer:"dressing" },

  { id:"chicken-teriyaki", name:"Chicken Teriyaki", description:"Teriyaki chicken over vegetables with rice pilaf.", price:14.99, category:"Dinner", image:img.steak },
  { id:"open-roast-beef", name:"Open-Faced Roast Beef", description:"Roast beef and gravy over toast with mashed potatoes and vegetables.", price:14.99, category:"Dinner", image:img.steak },
  { id:"haddock-platter", name:"Beer-Battered Haddock Platter", description:"Crispy haddock, coleslaw, French fries, and tartar sauce.", price:17.99, category:"Dinner", image:img.seafood, customizer:"sandwich" },
  { id:"fried-shrimp", name:"Fried Shrimp", description:"Hand-battered black tiger shrimp with vegetables and fries.", price:17.99, category:"Dinner", image:img.seafood, customizer:"seafoodSauce" },
  { id:"meatloaf", name:"Meatloaf", description:"House meatloaf with mashed potatoes, beef gravy, and vegetables.", price:14.99, category:"Dinner", image:img.steak },
  { id:"country-fried-steak", name:"Country Fried Steak Dinner", description:"Country-fried steak, mashed potatoes, white gravy, and vegetables.", price:12.99, category:"Dinner", image:img.steak, tag:"Comfort classic" },
  { id:"ribeye", name:"Ribeye Steak", description:"Angus 12 oz center cut with mashed potatoes and daily vegetables.", price:null, category:"Dinner", image:img.steak },
  { id:"new-york-steak", name:"New York Steak", description:"Angus 12 oz center cut with mashed potatoes and daily vegetables.", price:null, category:"Dinner", image:img.steak },
  { id:"teriyaki-salmon", name:"Teriyaki Salmon", description:"Atlantic salmon glazed with teriyaki over vegetables and rice pilaf.", price:19.99, category:"Dinner", image:img.seafood },
  { id:"herb-salmon", name:"Herb Grilled Salmon", description:"Herb-rubbed Atlantic salmon with vegetables and rice pilaf.", price:19.99, category:"Dinner", image:img.seafood },
  { id:"chicken-fajita", name:"Chicken Fajita Platter", description:"Sizzling grilled chicken, vegetables, and Spanish rice.", price:17.99, category:"Dinner", image:img.steak },
  { id:"beef-fajita", name:"Beef Fajita Platter", description:"Sizzling Angus sirloin, grilled vegetables, and Spanish rice.", price:18.99, category:"Dinner", image:img.steak },
  { id:"crab-cakes", name:"Crab Cakes", description:"Two lump crab cakes with slaw and fries.", price:null, category:"Dinner", image:img.seafood, customizer:"sandwich" },
  { id:"chicken-tenders", name:"Chicken Tenders", description:"Crispy tenders with your choice of sauce and fries.", price:12.99, category:"Dinner", image:img.club, customizer:"sandwich" },
  { id:"liver-onions", name:"Liver & Onions", description:"Grilled beef liver, onion, roasted tomato sauce, mashed potatoes, and vegetables.", price:12.99, category:"Dinner", image:img.liver, tag:"Diner classic" },
  { id:"turkey-dinner", name:"Turkey Dinner", description:"Roast turkey, mashed potatoes, vegetables, cranberry, stuffing, and gravy.", price:15.99, category:"Dinner", image:img.steak },

  { id:"fries", name:"French Fries", description:"Golden and crisp.", price:3.49, category:"Sides", image:img.burger, vegetarian:true },
  { id:"sweet-fries", name:"Sweet Potato Fries", description:"Crisp sweet potato fries.", price:4.49, category:"Sides", image:img.burger, vegetarian:true },
  { id:"onion-rings", name:"Onion Rings", description:"Thick-cut, battered, and fried golden.", price:4.99, category:"Sides", image:img.burger, vegetarian:true },
  { id:"coleslaw", name:"Coleslaw", description:"Cool, creamy diner slaw.", price:3.49, category:"Sides", image:img.club, vegetarian:true },
  { id:"rice", name:"Rice", description:"Warm seasoned rice.", price:3.49, category:"Sides", image:img.steak, vegetarian:true },
  { id:"loaded-potato", name:"Loaded Baked Potato", description:"Baked potato with the works.", price:3.49, category:"Sides", image:img.steak },
  { id:"mashed-gravy", name:"Mashed Potatoes & Gravy", description:"Creamy mashed potatoes with gravy.", price:3.49, category:"Sides", image:img.steak, vegetarian:true },
  { id:"garlic-bread", name:"Garlic Bread", description:"Hot, toasted garlic bread.", price:2.99, category:"Sides", image:img.club, vegetarian:true },
  { id:"corned-hash", name:"Corned Beef Hash", description:"Crispy chopped corned beef and potatoes.", price:4.49, category:"Sides", image:img.breakfast },
  { id:"vegetables", name:"Steamed Vegetables", description:"A colorful mix of steamed vegetables.", price:3.49, category:"Sides", image:img.steak, vegetarian:true },
  { id:"scrapple", name:"Scrapple", description:"Classic grilled pork scrapple.", price:3.49, category:"Sides", image:img.breakfast },
  { id:"side-salad", name:"House Side Salad", description:"A smaller version of our house salad.", price:4.49, category:"Sides", image:img.club, customizer:"dressing", vegetarian:true },

  { id:"soda", name:"Coca-Cola Fountain Drink", description:"Your choice of Coca-Cola fountain beverage.", price:3.40, category:"Drinks & Sweets", image:"./icon/titosmenu2.png" },
  { id:"iced-tea", name:"Fresh-Brewed Iced Tea", description:"Sweetened or unsweetened.", price:3.40, category:"Drinks & Sweets", image:"./icon/titosmenu2.png" },
  { id:"milk", name:"2% Milk", description:"Cold 2% milk.", price:3.40, category:"Drinks & Sweets", image:img.shake },
  { id:"chocolate-milk", name:"Chocolate Milk", description:"Cold, rich chocolate milk.", price:3.40, category:"Drinks & Sweets", image:img.shake },
  { id:"juice", name:"Juice", description:"Orange, apple, peach, or cranberry.", price:3.99, category:"Drinks & Sweets", image:"./icon/titosmenu2.png" },
  { id:"shake", name:"Hand-Dipped Shake", description:"Made with Hershey’s Ice Cream. Make it malted for $0.79.", price:6.99, category:"Drinks & Sweets", image:img.shake, tag:"Hand dipped", customizer:"shake" },
  { id:"coffee", name:"Fresh-Brewed Coffee", description:"Regular or decaf, hot and ready for a refill.", price:3.29, category:"Drinks & Sweets", image:img.breakfast },
  { id:"hot-chocolate", name:"Hot Chocolate", description:"Warm and chocolatey.", price:3.99, category:"Drinks & Sweets", image:img.shake },
  { id:"tea", name:"Quality Hot Tea", description:"Black, Earl Grey, English Breakfast, green, or herbal.", price:3.99, category:"Drinks & Sweets", image:img.breakfast },
  { id:"cappuccino", name:"Cappuccino", description:"Espresso with steamed and foamed milk.", price:4.29, category:"Drinks & Sweets", image:img.breakfast },
  { id:"latte", name:"Latte", description:"Espresso with steamed milk. Flavor shot available for $0.25.", price:4.29, category:"Drinks & Sweets", image:img.breakfast },
  { id:"mocha", name:"Mocha", description:"Espresso, chocolate, and steamed milk.", price:4.29, category:"Drinks & Sweets", image:img.breakfast },
  { id:"espresso-single", name:"Espresso — Single", description:"A single shot of espresso.", price:1.99, category:"Drinks & Sweets", image:img.breakfast },
  { id:"espresso-double", name:"Espresso — Double", description:"A double shot of espresso.", price:2.99, category:"Drinks & Sweets", image:img.breakfast },
  { id:"apple-pie", name:"House Apple Pie", description:"A warm diner classic. Ask about today’s other house-made desserts.", price:null, category:"Drinks & Sweets", image:img.pie, tag:"Dessert" },
];

export type OptionChoice = { label: string; price: number };
export type OptionGroup = { name: string; required?: boolean; choices: OptionChoice[] };

const sideSwap: OptionGroup = { name:"Choose your side", required:true, choices:[{label:"French fries",price:0},{label:"Sweet potato fries",price:.99},{label:"Onion rings",price:1.49}] };
const dressings: OptionGroup = { name:"Choose dressing", required:true, choices:["Blue Cheese","Ranch","Italian","Black Pepper Parmesan","Honey Mustard","Balsamic Vinaigrette","Thousand Island","Raspberry Vinaigrette","Greek"].map(label=>({label,price:0})) };

export const optionSets: Record<Customizer, OptionGroup[]> = {
  breakfast:[
    { name:"Egg style", choices:["Scrambled","Over easy","Over medium","Sunny side up","Poached"].map(label=>({label,price:0})) },
    { name:"Potato", choices:["Home fries","Hash browns","Grits"].map(label=>({label,price:0})) },
    { name:"Bread", choices:["White toast","Wheat toast","Rye toast","Biscuit"].map(label=>({label,price:0})) },
    { name:"Breakfast meat", choices:["Bacon","Sausage","Ham","No meat"].map(label=>({label,price:0})) },
  ],
  omelette:[
    { name:"Egg choice", required:true, choices:[{label:"Farm-fresh eggs",price:0},{label:"Egg whites",price:.99},{label:"Egg Beaters",price:.99}] },
    { name:"Potato", required:true, choices:[{label:"Home fries",price:0},{label:"Hash browns",price:0}] },
    { name:"Toast", required:true, choices:["White","Wheat","Rye","Biscuit"].map(label=>({label,price:0})) },
    { name:"Add cheese", choices:[{label:"No extra cheese",price:0},{label:"American",price:.99},{label:"Cheddar",price:.99},{label:"Swiss",price:.99},{label:"Jack",price:.99}] },
  ],
  griddle:[
    { name:"Fruit or flavor topping", choices:[{label:"Plain",price:0},...['Wild Maine blueberry','Strawberry','Banana','Pecan','Chocolate chip','Chocolate fudge'].map(label=>({label,price:1.49}))] },
    { name:"Add breakfast meat", choices:[{label:"No meat",price:0},{label:"Bacon",price:2.99},{label:"Sausage",price:2.99},{label:"Ham",price:2.99}] },
    { name:"Batter", choices:[{label:"Classic",price:0},{label:"Gluten-free",price:0}] },
  ],
  sandwich:[sideSwap,{ name:"Add-ons", choices:[{label:"No add-on",price:0},{label:"Cheese",price:.99},{label:"Bacon",price:1.99},{label:"Cheese + bacon",price:2.98}] }],
  burger:[sideSwap,{ name:"Add bacon", choices:[{label:"No bacon",price:0},{label:"Add bacon",price:1.99}] },{ name:"Cooking temperature", choices:["Medium rare","Medium","Medium well","Well done"].map(label=>({label,price:0})) }],
  dressing:[dressings,{ name:"Add protein", choices:[{label:"No protein",price:0},{label:"Grilled chicken",price:3.99},{label:"Blackened salmon",price:7.99}] }],
  protein:[{ name:"Add protein", required:true, choices:[{label:"No protein",price:0},{label:"Chicken",price:3.99},{label:"Steak",price:4.99}] }],
  pasta:[dressings,{ name:"Add protein", choices:[{label:"No addition",price:0},{label:"Grilled chicken breast",price:3.99}] }],
  shake:[{ name:"Choose flavor", required:true, choices:["Vanilla","Chocolate","Strawberry","Banana","Peach","Toffee","Piña colada"].map(label=>({label,price:0})) },{ name:"Make it malted", choices:[{label:"Classic shake",price:0},{label:"Malted",price:.79}] }],
  seafoodSauce:[sideSwap,{ name:"Choose sauce", required:true, choices:[{label:"Tartar sauce",price:0},{label:"Cocktail sauce",price:0},{label:"Marinara",price:0}] }],
};
