export type DestinationCategory = 'Nature' | 'City' | 'Beach';

export type Destination = {
	id: string;
	name: string;
	category: DestinationCategory;
	img: string;
    infoImg: string;
	description: string;
	overview: string[];
	rating: number;
	durationDays: number;
	fromPrice: number;
	isPopular: boolean;
};

export const destinationTabs: Array<'All' | DestinationCategory> = ['All', 'Nature', 'City', 'Beach'];

export const destinationsData: Destination[] = [
	{
		id: 'bentota',
		name: 'Bentota',
		category: 'City',
		img: 'https://images.unsplash.com/photo-1724031948257-8b3c68232ccc?q=80&w=670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1765002173689-74db58a92420?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Discover Bentota Sri Lanka – A Paradise of Beaches, Water Sports & Cultural Wonders',
		overview: [
			'Experience the irresistible allure of Bentota, Sri Lanka\'s coastal gem. With its pristine beaches, vibrant water sports scene, and rich cultural heritage, Bentota offers an unforgettable blend of relaxation and adventure. Whether you\'re seeking tranquil shores or thrilling activities, Bentota has something for every traveler.',
			'Bentota\'s golden beaches stretch for miles along the southwestern coast, offering the perfect setting for sunbathing, swimming, and beachside relaxation. The calm waters of the Bentota River provide excellent opportunities for water sports including jet skiing, banana boat rides, windsurfing, and parasailing.',
			'Beyond the beaches, explore the Brief Garden, designed by renowned landscape architect Bevis Bawa, or visit the historic Galapata Vihara temple. The Bentota Turtle Hatchery offers a chance to witness conservation efforts and see baby turtles up close. With luxury resorts, authentic cuisine, and warm hospitality, Bentota promises an unforgettable Sri Lankan coastal experience.'
		],
		rating: 4.5,
		durationDays: 2,
		fromPrice: 160,
		isPopular: false,
	},
    {
		id: 'adams-peak',
		name: 'Adam’s Peak',
		category: 'Nature',
		img: 'https://images.unsplash.com/photo-1755099343217-649527cd07e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1755099343217-649527cd07e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Experience a spiritual and scenic pilgrimage to one of Sri Lanka\'s most sacred peaks. This challenging climb rewards you with panoramic sunrise views.',
		overview: [
			'Adam\'s Peak, also known as Sri Pada, stands as one of Sri Lanka\'s most sacred mountains, revered by multiple religions. Rising 2,243 meters above sea level, this conical peak is crowned with a footprint-shaped depression that Buddhists believe to be the footprint of Buddha, while other faiths attribute it to Adam, Shiva, or St. Thomas.',
			'The pilgrimage season runs from December to May, when thousands of devotees and adventurers climb the 5,500 steps to reach the summit before dawn. The journey typically begins around midnight, with the trail illuminated by lights and lined with tea shops offering refreshments. The climb takes 3-4 hours depending on fitness levels.',
			'Reaching the summit for sunrise is a transcendent experience. Watch as the first rays of light pierce the darkness, revealing a breathtaking 360-degree panorama of misty mountains, verdant valleys, and distant coastlines. The unique triangular shadow cast by the peak at sunrise is a phenomenon that captivates all who witness it. This spiritual journey combines physical challenge with profound natural beauty and cultural significance.'
		],
		rating: 4.9,
		durationDays: 2,
		fromPrice: 180,
		isPopular: true,
	},
	{
		id: 'anuradhapura',
		name: 'Anuradhapura',
		category: 'Nature',
		img: 'https://images.unsplash.com/photo-1709729508706-87741ec2d50a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1709729508706-87741ec2d50a?q=80&w=1025&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Discover ancient Buddhist temples and magnificent dagobas in Sri Lanka\'s first kingdom. Walk through 2,000 years of history in this UNESCO World Heritage Site.',
		overview: [
			'Anuradhapura, Sri Lanka\'s first capital and a UNESCO World Heritage Site, offers an extraordinary journey through 2,000 years of Buddhist civilization. Founded in the 4th century BCE, this sacred city flourished for over 1,400 years and remains one of the world\'s longest continuously inhabited cities. Today, its sprawling archaeological complex spans over 40 square kilometers filled with ancient monasteries, palaces, and monuments.',
			'The city\'s centerpiece is the sacred Sri Maha Bodhi tree, believed to be the oldest documented tree in the world, grown from a cutting of the original tree under which Buddha attained enlightenment. Massive dagobas (stupas) dominate the skyline, including the imposing Ruwanwelisaya, the towering Jetavanarama (once among the world\'s tallest structures), and the elegant Abhayagiri monastery complex.',
			'Explore intricate moonstone carvings, marvel at the sophisticated ancient irrigation systems including vast reservoirs, and witness the Samadhi Buddha statue in deep meditation. Visit the sacred Isurumuniya temple with its famous rock carvings, and the Twin Ponds showcasing advanced hydraulic engineering. Cycling through these ruins at sunset offers a mystical experience as golden light bathes the ancient stones. Anuradhapura is not just an archaeological site but a living spiritual center where pilgrims continue to worship, making it a profound destination for history enthusiasts and spiritual seekers alike.'
		],
		rating: 4.8,
		durationDays: 3,
		fromPrice: 210,
		isPopular: true,
	},
	{
		id: 'colombo',
		name: 'Colombo',
		category: 'City',
		img: 'https://images.unsplash.com/photo-1561426802-392f5b6290cf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1561426802-392f5b6290cf?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Explore Sri Lanka\'s vibrant capital where colonial charm meets modern energy. Experience bustling markets, contemporary dining, and rich cultural heritage.',
		overview: [
			'Colombo, Sri Lanka\'s bustling capital and commercial hub, is a city of fascinating contrasts where colonial architecture stands alongside gleaming skyscrapers, and traditional markets coexist with upscale shopping malls. This vibrant metropolis on the western coast serves as the country\'s gateway and offers visitors an exciting introduction to Sri Lankan culture, cuisine, and contemporary life.',
			'Explore the historic Fort area with its colonial-era buildings including the Old Parliament, then wander through the Pettah bazaar where narrow lanes overflow with spices, textiles, and electronics. Visit the serene Gangaramaya Temple, a beautiful Buddhist temple showcasing Sinhalese, Thai, Indian, and Chinese architecture. The National Museum houses fascinating artifacts chronicling Sri Lanka\'s history, while Independence Square commemorates the nation\'s freedom from colonial rule.',
			'Stroll along Galle Face Green, a popular ocean-side promenade perfect for watching spectacular sunsets while enjoying local street food. The trendy Cinnamon Gardens neighborhood offers upscale dining, art galleries, and the stunning Viharamahadevi Park. From rooftop bars with panoramic city views to authentic street food stalls serving kottu roti and hoppers, Colombo\'s culinary scene is diverse and exciting. With its blend of history, culture, shopping, and nightlife, Colombo provides a dynamic urban experience that captures the essence of modern Sri Lanka.'
		],
		rating: 4.7,
		durationDays: 2,
		fromPrice: 190,
		isPopular: true,
	},
	{
		id: 'galle',
		name: 'Galle',
		category: 'Beach',
		img: 'https://images.unsplash.com/photo-1643896093807-15842d79b128?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1643896093807-15842d79b128?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Step inside the magnificent Dutch Fort and wander cobbled streets lined with boutiques and cafes. Galle seamlessly blends European architecture with tropical charm.',
		overview: [
			'Galle Fort, a UNESCO World Heritage Site, stands as the finest example of a fortified city built by Europeans in South Asia. Constructed by the Portuguese in the 16th century and substantially fortified by the Dutch in the 17th century, this 36-hectare living fort remains remarkably well-preserved and continues to thrive as a vibrant community of residents, businesses, and cultural institutions.',
			'Wander the atmospheric cobblestone streets lined with colonial-era buildings that now house boutique hotels, art galleries, antique shops, and charming cafes. Walk along the massive ramparts where waves crash against ancient walls, offering spectacular views of the Indian Ocean. Visit the iconic lighthouse, the historic Dutch Reformed Church, and the National Maritime Museum. The fort\'s architecture showcases a fascinating blend of European styles adapted to tropical conditions, with features like wide verandas and high ceilings.',
			'Beyond the fort walls, Galle offers beautiful beaches including Unawatuna and Jungle Beach, perfect for swimming and snorkeling. The city is also a hub for Sri Lankan art and culture, hosting the renowned Galle Literary Festival annually. Shop for authentic Sri Lankan handicrafts, sample delicious seafood fresh from the ocean, and experience the magical atmosphere as golden hour light bathes the ancient ramparts. Whether exploring historical sites, browsing boutiques, or simply watching the sunset from the ramparts, Galle captivates with its unique blend of history, culture, and coastal beauty.'
		],
		rating: 4.8,
		durationDays: 4,
		fromPrice: 240,
		isPopular: true,
	},
	{
		id: 'ella',
		name: 'Ella',
		category: 'Nature',
		img: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1566296314736-6eaac1ca0cb9?q=80&w=1228&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Trek through misty mountains, tea plantations, and cascading waterfalls in this hill country gem. Ella is a backpacker\'s paradise with breathtaking views.',
		overview: [
			'Ella, nestled in Sri Lanka\'s scenic hill country, is a small mountain village that has become one of the island\'s most beloved destinations for travelers seeking natural beauty and outdoor adventure. Perched at 1,041 meters elevation, Ella offers cool mountain air, stunning vistas, and a relaxed atmosphere that makes it difficult to leave. The village maintains its laid-back charm despite growing popularity, with friendly locals and a tight-knit community of cafes and guesthouses.',
			'The area is a trekker\'s paradise with spectacular hikes including Little Adam\'s Peak (a relatively easy climb with panoramic views), Ella Rock (a challenging ascent through tea estates and forests), and the iconic Nine Arch Bridge, an architectural marvel set amid lush greenery where trains pass through at specific times daily. The dramatic Ella Gap offers breathtaking views across the southern plains, best experienced at sunrise or sunset. Visit Ravana Falls, a picturesque cascade where you can take a refreshing dip.',
			'Ella\'s tea plantations provide opportunities to learn about Ceylon tea production with tours available at several estates. The village itself offers charming cafes serving international cuisine, cozy guesthouses with mountain views, and a welcoming backpacker vibe. Take the scenic train journey from Kandy or Nuwara Eliya to Ella, considered one of the world\'s most beautiful rail routes, winding through tea estates, mountains, and waterfalls. With its perfect combination of natural beauty, outdoor activities, and relaxed atmosphere, Ella captures the hearts of all who visit.'
		],
		rating: 4.6,
		durationDays: 3,
		fromPrice: 220,
		isPopular: false,
	},
	{
		id: 'sigiriya',
		name: 'Sigiriya',
		category: 'Nature',
		img: 'https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://plus.unsplash.com/premium_photo-1730145749791-28fc538d7203?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Climb the iconic Lion Rock fortress and marvel at ancient frescoes and water gardens. This UNESCO site showcases remarkable 5th-century engineering and artistry.',
		overview: [
			'Sigiriya, also known as Lion Rock, stands as one of Asia\'s most remarkable archaeological sites and a UNESCO World Heritage treasure. This ancient rock fortress rises 200 meters above the surrounding plains, crowned by the ruins of a 5th-century palace built by King Kashyapa. The site showcases extraordinary urban planning, advanced hydraulic technology, and stunning artistic achievements that continue to astound visitors and researchers alike.',
			'The journey to the summit takes you through meticulously designed water gardens, terraced gardens, and boulder gardens that demonstrate sophisticated ancient landscaping. Climb the steep staircase carved into the rock face, passing the famous Sigiriya Frescoes – vibrant 5th-century paintings of celestial maidens that display remarkable artistic skill. Continue through the Mirror Wall, once polished so smooth it reflected the king\'s image, now covered with ancient graffiti dating back over a thousand years.',
			'At the gateway to the final ascent, massive lion paws carved from rock mark what was once an enormous lion sculpture (hence "Lion Rock"). The final climb rewards you with breathtaking panoramic views across the Cultural Triangle and the ruins of the sky palace. The sophisticated engineering includes a complex irrigation system, ancient air conditioning, and advanced construction techniques. Visit nearby Pidurangala Rock for an alternative climb and spectacular views of Sigiriya itself. The site is best visited early morning or late afternoon to avoid heat and crowds while enjoying optimal lighting for photography.'
		],
		rating: 4.7,
		durationDays: 3,
		fromPrice: 230,
		isPopular: true,
	},
	{
		id: 'polonnaruwa',
		name: 'Polonnaruwa',
		category: 'City',
		img: 'https://images.unsplash.com/photo-1566299589192-bdf059d4b0be?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1566299589192-bdf059d4b0be?q=80&w=727&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Cycle through well-preserved ruins of Sri Lanka\'s medieval capital. Admire magnificent Buddha statues and ancient palace complexes in this archaeological wonder.',
		overview: [
			'Polonnaruwa, Sri Lanka\'s second ancient capital and a UNESCO World Heritage Site, flourished from the 11th to 13th centuries as a thriving center of commerce and Buddhism. Today, its remarkably well-preserved ruins offer a more compact and accessible archaeological experience compared to Anuradhapura, making it ideal for exploration by bicycle. The ancient city showcases the height of Sinhalese civilization with magnificent architecture, intricate stone carvings, and sophisticated urban planning.',
			'The highlight of Polonnaruwa is the Gal Vihara, featuring four magnificent Buddha statues carved from a single granite wall – a standing Buddha, a seated Buddha in meditation, and a 14-meter reclining Buddha entering parinirvana, all displaying extraordinary craftsmanship and serene expressions. Visit the Quadrangle, a compact area housing eight important structures including the exquisite Vatadage (circular relic house), the Thuparama image house, and the unique Sat Mahal Prasada, a seven-story pyramid structure.',
			'Explore the ruins of King Parakramabahu\'s Royal Palace, which once stood seven stories tall, and see the statue believed to depict this great king. The Parakrama Samudra, a massive 12th-century reservoir, demonstrates advanced hydraulic engineering and provides a scenic backdrop. The Lankathilaka and Tivanka image houses feature remarkable wall paintings and massive Buddha statues. Cycling through the shaded paths between monuments offers a leisurely way to absorb the history while enjoying the peaceful atmosphere. Visit early morning to avoid heat and capture beautiful light illuminating the ancient stones.'
		],
		rating: 4.6,
		durationDays: 2,
		fromPrice: 175,
		isPopular: false,
	},
	{
		id: 'trincomalee',
		name: 'Trincomalee',
		category: 'Beach',
		img: 'https://images.unsplash.com/photo-1558446791-ac5fec3caddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1558446791-ac5fec3caddf?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Dive into crystal-clear waters and spot blue whales in this pristine coastal haven. Trincomalee offers some of Sri Lanka\'s best beaches and marine life.',
		overview: [
			'Trincomalee, located on Sri Lanka\'s northeastern coast, boasts some of the finest natural harbors in the world and the island\'s most pristine beaches. This historic port city remained relatively untouched by mass tourism, offering an authentic coastal experience with crystal-clear turquoise waters, powdery white sand beaches, and exceptional marine biodiversity. The area is blessed with year-round warm weather, with the best conditions from May to September when the southwest monsoon affects the western and southern coasts.',
			'The crown jewel of Trincomalee is its stunning beaches. Nilaveli Beach stretches for miles with shallow, calm waters perfect for swimming and snorkeling. Nearby Uppuveli Beach offers a more local atmosphere with fewer crowds. Take a boat to Pigeon Island National Park, a protected marine sanctuary where you can snorkel among vibrant coral reefs and swim alongside sea turtles, reef sharks, and countless tropical fish. From March to August, Trincomalee becomes one of the world\'s best locations for whale and dolphin watching, with opportunities to spot the magnificent blue whale, the largest animal on Earth.',
			'Beyond beaches, visit the ancient Koneswaram Temple perched on Swami Rock, offering spectacular ocean views and rich history dating back thousands of years. Explore the historic Fort Frederick, built by the Portuguese and later fortified by the Dutch and British. The natural hot springs at Kanniya provide a unique experience with seven wells of varying temperatures. Dive enthusiasts will appreciate numerous wreck dive sites around the harbor. With its combination of pristine beaches, incredible marine life, historical sites, and authentic local culture, Trincomalee offers a perfectly balanced coastal escape.'
		],
		rating: 4.7,
		durationDays: 4,
		fromPrice: 260,
		isPopular: true,
	},
	{
		id: 'kandy',
		name: 'Kandy',
		category: 'Nature',
		img: 'https://images.unsplash.com/photo-1665849050430-5e8c16bacf7e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1755099343217-649527cd07e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Visit the sacred Temple of the Tooth Relic and experience vibrant cultural performances. Kandy is the heart of Sri Lankan Buddhism and traditional arts.',
		overview: [
			'Kandy, Sri Lanka\'s last royal capital and a UNESCO World Heritage Site, is the cultural and spiritual heart of the island. Nestled among misty hills at 500 meters elevation, this sacred city surrounds a picturesque lake and houses the Temple of the Sacred Tooth Relic, one of Buddhism\'s most revered sites. Kandy successfully blends its rich royal heritage with modern life while maintaining its deeply spiritual atmosphere and serving as the guardian of traditional Sinhalese culture.',
			'The magnificent Temple of the Sacred Tooth Relic (Sri Dalada Maligawa) dominates the city\'s lakefront and attracts Buddhist pilgrims from around the world. The temple houses a tooth relic of the Buddha and is the site of daily rituals and ceremonies. Visit during puja (prayer times) to experience the drums, incense, and devotees offering flowers. Walk around the scenic Kandy Lake at sunset, visit the Royal Palace complex, and explore the fascinating Kandy National Museum. Every July or August, the city hosts the spectacular Esala Perahera, a 10-day festival featuring elaborately decorated elephants, traditional dancers, fire performers, and drummers in one of Asia\'s most magnificent cultural celebrations.',
			'Beyond the city center, visit the Royal Botanic Gardens at Peradeniya, Asia\'s finest tropical gardens showcasing over 4,000 plant species including a famous orchid collection and a giant Javan fig tree. Watch traditional Kandyan dance performances featuring acrobatic dancers, fire walkers, and drummers. Explore local gem museums and workshops, as the surrounding hills are famous for precious stones. Take a scenic train journey through tea plantations to Nuwara Eliya or Ella. Visit nearby tea estates for plantation tours and tastings. With its perfect blend of spirituality, culture, natural beauty, and history, Kandy offers an unforgettable window into Sri Lanka\'s soul.'
		],
		rating: 4.9,
		durationDays: 3,
		fromPrice: 280,
		isPopular: true,
	},
	{
		id: 'negombo',
		name: 'Negombo',
		category: 'Beach',
		img: 'https://images.unsplash.com/photo-1682091052512-18b00e81105c?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1682091052512-18b00e81105c?q=80&w=777&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Experience authentic fishing village life and explore Dutch colonial architecture. Negombo is the perfect gateway with its lagoon and fresh seafood markets.',
		overview: [
			'Negombo, located just 10 kilometers from Bandaranaike International Airport, serves as the perfect first or last stop on your Sri Lankan journey. This historic fishing town on the west coast combines authentic local culture, colonial heritage, and beach relaxation in an accessible package. Known as "Little Rome" due to its strong Catholic influence from Portuguese colonial times, Negombo offers a fascinating blend of fishing village authenticity and tourist-friendly amenities.',
			'The town\'s fishing industry remains its lifeblood, and the beach comes alive early morning when colorful outrigger boats return with the night\'s catch. Visit the bustling fish market, one of Sri Lanka\'s largest, where you can witness the vibrant auction process and see an incredible variety of seafood. The Negombo Lagoon, connected to the sea by a narrow canal, offers boat tours through mangroves where you can observe diverse birdlife and traditional fishing methods. Explore the remnants of Dutch Fort, wander the atmospheric Dutch Canal, and visit historic churches including St. Mary\'s Church with its impressive ceiling paintings.',
			'Negombo Beach, while not the most pristine in Sri Lanka, offers a pleasant stretch of sand with numerous beachfront hotels, restaurants, and water sports facilities. The town\'s culinary scene excels in fresh seafood – enjoy lobster, prawns, crab, and fish prepared in authentic Sri Lankan styles at reasonable prices. Take a boat tour of the lagoon, try kite surfing, or simply relax by the sea. The town\'s proximity to the airport makes it ideal for arriving late or departing early, offering a relaxed introduction or conclusion to your Sri Lankan adventure. With its authentic fishing culture, colonial history, and easy-going beach vibe, Negombo provides a genuine taste of coastal Sri Lankan life.'
		],
		rating: 4.5,
		durationDays: 3,
		fromPrice: 210,
		isPopular: false,
	},
	{
		id: 'nuwara-eliya',
		name: 'Nuwara Eliya',
		category: 'City',
		img: 'https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1708338914870-797de586672d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Escape to "Little England" with its cool climate, rolling tea plantations, and colonial bungalows. Nuwara Eliya offers a refreshing mountain retreat.',
		overview: [
			'Nuwara Eliya, situated at 1,868 meters elevation in Sri Lanka\'s hill country, is affectionately known as "Little England" for its cool climate, misty mountains, and distinctly British colonial character. Founded in the 19th century as a retreat for British colonials seeking respite from tropical heat, the town retains its Victorian atmosphere with colonial-era bungalows, an old-fashioned post office, English-style gardens, and even a golf course. The climate here is markedly different from the rest of Sri Lanka, with temperatures sometimes dropping to 10°C at night, requiring sweaters and jackets.',
			'The town is the heart of Sri Lanka\'s tea country, surrounded by endless carpets of emerald green tea plantations covering the hillsides. Visit working tea estates like Pedro or Mackwoods (now Damro Labookellie) for guided tours that explain the tea-making process from plucking to packaging, followed by tastings of world-famous Ceylon tea while enjoying spectacular mountain views. Watch skilled tea pluckers working the slopes, identifiable by their colorful saris and large baskets. The area produces some of the world\'s finest teas, and you can purchase fresh tea directly from estates.',
			'Explore Victoria Park, a beautifully maintained botanical garden perfect for picnics and bird watching. Visit Gregory Lake where you can enjoy boat rides and pony rides along the shore. The town comes alive during April when the annual Nuwara Eliya Season features horse races, flower shows, and social events harking back to colonial times. Hike to Horton Plains National Park to witness World\'s End, a dramatic cliff with a 870-meter drop, and Baker\'s Falls. Take the scenic train journey from Kandy or continue to Ella through breathtaking mountain scenery. With its unique character, cool climate, and tea culture, Nuwara Eliya offers a completely different side of Sri Lanka.'
		],
		rating: 4.6,
		durationDays: 2,
		fromPrice: 170,
		isPopular: false,
	},
    {
		id: 'yala',
		name: 'Yala',
		category: 'City',
		img: 'https://images.unsplash.com/photo-1635728695734-365b13844d86?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		infoImg: 'https://images.unsplash.com/photo-1635728695734-365b13844d86?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		description: 'Embark on thrilling safari adventures and spot leopards, elephants, and exotic birds. Yala National Park boasts one of the highest leopard densities in the world.',
		overview: [
			'Yala National Park, Sri Lanka\'s most visited and second-largest national park, offers one of Asia\'s premier wildlife experiences. Located in the southeastern region of the island, this 979 square kilometer wilderness combines diverse ecosystems including forests, grasslands, lagoons, and coastal beaches. Yala is world-renowned for having one of the highest densities of leopards globally, making it arguably the best place on Earth to spot these magnificent big cats in their natural habitat.',
			'Safari drives through Yala provide thrilling opportunities to encounter an impressive array of wildlife. Besides the famous Sri Lankan leopard, the park is home to elephants, sloth bears, water buffalo, crocodiles, and numerous deer species. Bird enthusiasts will be delighted by over 200 bird species including painted storks, pelicans, peacocks, and various eagles. The diverse landscapes range from dense jungle to open plains dotted with rocky outcrops, ancient reservoirs (tanks), and pristine beaches. Early morning and late afternoon safaris offer the best wildlife viewing opportunities and spectacular lighting for photography.',
			'The park holds historical significance as well, with ancient ruins scattered throughout including the Sithulpawwa Rock Temple dating back 2,000 years. While Block 1 is the most popular safari zone with the highest leopard density, Block 2 and other zones offer more secluded experiences with fewer vehicles. Stay at one of the nearby safari camps or luxury lodges that offer comfortable accommodations and expert guides. Visit during the dry season (February to July) when animals congregate around water sources, increasing sighting opportunities. A safari at Yala provides an unforgettable adventure into Sri Lanka\'s wild heart, combining wildlife thrills with stunning natural beauty.'
		],
		rating: 4.6,
		durationDays: 2,
		fromPrice: 170,
		isPopular: false,
	},
];

export function getDestinationById(id: string): Destination | undefined {
	return destinationsData.find((dest) => dest.id === id);
}
