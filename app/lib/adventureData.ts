export type AdventureData = {
	id: string;
	title: string;
	overview: string[];
	overviewImages: string[];
};

export const adventureData: AdventureData[] = [
	{
		id: 'blue-whale-watching',
		title: 'Blue Whale Watching',
		overview: [
			'Sri Lanka is a popular destination to observe whales and dolphins. Dondra Point, located in southern Sri Lanka, is the main whale watching port in Sri Lanka from December to April. December, January, and April are the most significant months of these months.',
			'During these months, there is a 95% chance of seeing sperm whales and large blue whale species, their flyway being close to Dondra Point. In addition, there is a good chance to see Spinner Dolphins also next to Dondra. Mirissa is the closest point to Dondra Point with good accommodation options.'
		],
		overviewImages: [
			'https://images.unsplash.com/photo-1547382442-d17c21625a44?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1568430462989-44163eb1752f?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
	{
		id: 'hiking-trekking',
		title: 'Hiking and Trekking',
		overview: [
			'Explore the unmatched beauty of Sri Lanka’s central highlands through world-class treks. From the lush tea fields and hidden waterfalls of the mountains to the cultural trails of Kandy—including Hanthana, Alagalla, and the Udawattakelle Forest Reserve—every path offers a unique journey through traditional villages and vibrant forest reserves.',
			'Experience the unique landscapes of Nuwara Eliya and Ella through their iconic trails. Explore the high-altitude meadows of Horton Plains, or head to Ella to conquer the 1,000-meter summit of Ella Rock. For a lighter trek, Little Adam’s Peak offers breathtaking views of rolling hills and tea plantations with minimal effort.',
			'Ascend the 5,200 steps of Adam’s Peak for a world-renowned sunrise pilgrimage standing over 2,000 meters high. For a mix of history and adventure, scale the rugged terrain of Pidurangala, Ritigala, and Mihintale, where breathtaking views meet the ancient heritage of Sri Lanka’s cultural triangle.',
		],
		overviewImages: [
			'https://plus.unsplash.com/premium_photo-1661883853185-165f5869e6d3?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1597120590849-a1d5a743d155?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
	{
		id: 'jeep-safari',
		title: 'Jeep Safari',
		overview: [
			'Sri Lanka’s vast network of reserves, from Wilpattu to Yala, offers diverse safari experiences tailored to your interests. These parks provide a front-row seat to the island’s incredible biodiversity, ensuring safe and immersive encounters with wildlife in their natural habitats.',
			'Yala is the premier spot for leopard sightings, especially during the golden hours, while Udawalawe is famous for its vast herds of free-roaming elephants. Both parks offer extensive 4-5 hour jeep safaris that showcase everything from sloth bears to endemic macaques.',
			'For unique seasonal events, Minneriya hosts the world-famous elephant gathering between May and October. Alternatively, Wilpattu offers a rugged wilderness experience perfect for spotting elusive predators and endemic birds during half-day expeditions.',
		],
		overviewImages: [
			'https://plus.unsplash.com/premium_photo-1661870399335-f5efe423b78d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1674556275189-e78fd6223e6d?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
    {
		id: 'kite-surfing',
		title: 'Kite Surfing',
		overview: [
			'Go kitesurfing in Sri Lanka: run along the turquoise sea or swim through the waters of a tranquil lagoon, either in the popular town of Negombo or in the quieter Kalpitiya retreat. Sri Lanka has excellent kitesurfing sites for beginners, as well as places suitable for the more experienced.',
			'The best season for kite surfing on the northwest coast of Sri Lanka runs from May to December. The Kalpitiya lagoon, sandbanks, isolated islets, reef, and ocean are ideal kitesurfing spots in Kalpitiya.'
		],
		overviewImages: [
			'https://images.unsplash.com/photo-1607537825952-48c2142007ae?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1650127252884-80de29641e4d?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
    {
		id: 'mountain-biking',
		title: 'Mountain Biking',
		overview: [
			'Cycling and mountain biking are ideal ways to explore Sri Lanka’s diverse landscapes. With a vast network of paved roads, gravel tracks, and jungle trails, the island is fully accessible to riders of all levels, offering scenic routes and rewarding challenges for both beginners and experts.',
			'Sri Lanka’s central highlands offer a premier mountain biking experience set against a crisp, cool climate. Cyclists can navigate a network of rugged tracks through seamless tea plantations, connecting historic tea factories, remote villages, and charming hill towns.',
			'Cycle through the Cultural Triangle, starting from Habarana and pedaling toward the heritage icons of Dambulla and Sigiriya. Alternatively, begin in Polonnaruwa to explore the scenic vistas of the Giritale Sanctuary and Wasgamuwa National Park.',
		],
		overviewImages: [
			'https://images.unsplash.com/photo-1633707167699-cdd893b84441?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1575548393466-0df1618ba410?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
    {
		id: 'scuba-diving',
		title: 'Scuba Diving',
		overview: [
			'Sri Lanka is a premier year-round destination for scuba diving, featuring diverse sites across the west, south, and east coasts. From vibrant coral reefs teeming with tropical fish to fascinating historic shipwrecks, the island offers unforgettable underwater adventures for both beginners and experienced divers.',
			'Hikkaduwa and Weligama are top spots on the southwest coast for diving and spotting dolphins and sharks. On the southeast coast, Kirinda serves as the gateway to the legendary Great Basses wreck and its spectacular reef systems.',
			'On the east coast, Trincomalee features premier sites like Swami Rock, the Irrakkakandi wreck, and Pigeon Island Marine Park. To ensure calm waters, dive the west coast from November to April and the east coast from April to September.',
		],
		overviewImages: [
			'https://images.unsplash.com/photo-1682687982141-0143020ed57a?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1517627043994-b991abb62fc8?q=80&w=717&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
    {
		id: 'surfing',
		title: 'Surfing',
		overview: [
			'Sri Lanka is a world-class, year-round surfing destination catering to all skill levels. From gentle beginner waves to challenging reef breaks for the experienced, it remains one of the most reliable spots in the Indian Ocean for consistent surf.',
			'Since the 1960s, Sri Lanka has been a global surfing magnet. While Hikkaduwa and Arugam Bay are the most famous hubs, "hidden gems" like Unawatuna, Weligama, and Mirissa offer excellent, uncomplicated waves along the south and east coasts.',
			'Although there is are two surf seasons, November-April in down south and May-October in the east coast, you can find a good session outside the seasons if you follow up with the locals.',
		],
		overviewImages: [
			'https://plus.unsplash.com/premium_photo-1661813583584-bbb3ac4ade09?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1566787265949-25a073201890?q=80&w=742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
    {
		id: 'white-water-rafting',
		title: 'White Water Rafting',
		overview: [
			'White-water rafting is one of Sri Lanka’s most exhilarating adventures, with Kitulgala serving as the premier hub. Beyond the rapids, the area offers high-adrenaline activities like waterfall abseiling, confidence jumps, canyoning slides, and scenic night camping.',
			'This white-water adventure on the Kelani River caters to both beginners and pros, carving through a stunning rocky gorge near Kitulgala. Experience the raw adrenaline of navigating rapids and the euphoria of the wild while surrounded by a pristine nature reserve.',
			'Beyond the river, Kitulgala offers waterfall abseiling and canyoning for those seeking an extra adrenaline rush. These activities allow you to descend jagged rock faces and slide into natural rock pools, providing a unique perspective of the rainforest\'s hidden depths.',
		],
		overviewImages: [
			'https://images.unsplash.com/photo-1599443380179-33737c17ca81?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1629248457649-b082812aea6c?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
    {
		id: 'wind-surfing',
		title: 'Wind Surfing',
		overview: [
			'Sri Lanka’s dual monsoon system ensures year-round windsurfing. On the west coast, Bentota and Negombo are the top spots from November to April, offering both open sea and calm lagoon options.',
			'Between July and August, the focus shifts to the east coast. Trincomalee, particularly Nilaveli and Uppuveli, provides the best wind conditions during these months for high-energy sessions.',
			'For those preferring flatter water, the lagoons of Negombo, Bolgoda, and Bentota offer excellent inland windsurfing opportunities throughout their respective seasons.',
		],
		overviewImages: [
			'https://images.unsplash.com/photo-1602856746039-7362d19f6d25?q=80&w=1361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
			'https://images.unsplash.com/photo-1569819814368-0778dfe025a9?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		],
	},
];
