// Vehicle Data
export const trucks = [
  {
    id: 1,
    name: "AL 4825",
    category: "Heavy Duty Trucks",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&q=80",
    specs: {
      engine: "6-cylinder, 250 HP",
      payload: "25 tonnes",
      fuel: "Diesel",
      transmission: "6-speed Manual"
    },
    description: "Premium heavy-duty truck for long-haul logistics with superior fuel efficiency and reliability."
  },
  {
    id: 2,
    name: "AL 3123",
    category: "Medium Duty Trucks",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80",
    specs: {
      engine: "4-cylinder, 230 HP",
      payload: "16 tonnes",
      fuel: "Diesel",
      transmission: "5-speed Manual"
    },
    description: "Versatile medium-duty truck perfect for distribution and construction applications."
  },
  {
    id: 3,
    name: "AL 2516",
    category: "Light Trucks",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    specs: {
      engine: "4-cylinder, 160 HP",
      payload: "8 tonnes",
      fuel: "Diesel",
      transmission: "5-speed Manual"
    },
    description: "Compact light truck designed for urban delivery and last-mile transportation."
  },
  {
    id: 4,
    name: "AL 4220",
    category: "Construction Trucks",
    image: "https://images.unsplash.com/photo-1570125909517-53cb21c89fe7?w=800&q=80",
    specs: {
      engine: "6-cylinder, 200 HP",
      payload: "20 tonnes",
      fuel: "Diesel",
      transmission: "6-speed Manual"
    },
    description: "Rugged construction-grade truck built for the toughest job sites."
  }
];

export const buses = [
  {
    id: 1,
    name: "Fastrack 12M",
    category: "City Buses",
    image: "https://images.unsplash.com/photo-1570125909232-eb263c188f7e?w=800&q=80",
    specs: {
      capacity: "40-50 passengers",
      engine: "6-cylinder, 225 HP",
      fuel: "CNG/Diesel",
      features: "Low floor, AC"
    },
    description: "Modern city bus designed for maximum passenger comfort and accessibility."
  },
  {
    id: 2,
    name: "Cruiser 13.5M",
    category: "Intercity Buses",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    specs: {
      capacity: "50-55 passengers",
      engine: "6-cylinder, 280 HP",
      fuel: "Diesel",
      features: "Reclining seats, AC"
    },
    description: "Premium intercity coach offering superior comfort for long-distance travel."
  },
  {
    id: 3,
    name: "School Bus 9M",
    category: "School Buses",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80",
    specs: {
      capacity: "30-35 students",
      engine: "4-cylinder, 140 HP",
      fuel: "Diesel",
      features: "Safety belts, CCTV"
    },
    description: "Purpose-built school bus with advanced safety features for student transport."
  },
  {
    id: 4,
    name: "Staff Bus 10M",
    category: "Staff Transport",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    specs: {
      capacity: "35-40 passengers",
      engine: "4-cylinder, 160 HP",
      fuel: "Diesel/CNG",
      features: "Comfort seating"
    },
    description: "Reliable staff transportation solution for corporate and industrial needs."
  }
];

export const defenseVehicles = [
  {
    id: 1,
    name: "Super Stallion",
    category: "Military Trucks",
    image: "https://images.unsplash.com/photo-1544191694-909724978b2e?w=800&q=80",
    specs: {
      payload: "10 tonnes",
      terrain: "All-terrain",
      armor: "Ballistic protection",
      engine: "8-cylinder, 360 HP"
    },
    description: "Heavy-duty military truck designed for extreme conditions and heavy payload transportation."
  },
  {
    id: 2,
    name: "Stallion 4x4",
    category: "Tactical Vehicles",
    image: "https://images.unsplash.com/photo-1535535112387-56ffe8db21ff?w=800&q=80",
    specs: {
      payload: "5 tonnes",
      terrain: "All-terrain",
      armor: "Modular armor",
      engine: "6-cylinder, 215 HP"
    },
    description: "Versatile tactical vehicle providing mobility and protection for armed forces."
  },
  {
    id: 3,
    name: "Mine Protected Vehicle",
    category: "Armored Vehicles",
    image: "https://images.unsplash.com/photo-1595590424283-b8f17842773f?w=800&q=80",
    specs: {
      capacity: "10 personnel",
      protection: "Mine blast",
      armor: "High-grade steel",
      features: "V-shaped hull"
    },
    description: "Specialized vehicle designed to protect personnel from mines and IED threats."
  },
  {
    id: 4,
    name: "Field Artillery Tractor",
    category: "Specialized",
    image: "https://images.unsplash.com/photo-1585664811087-47f65be1bac8?w=800&q=80",
    specs: {
      towing: "15 tonnes",
      terrain: "Off-road",
      engine: "6-cylinder, 280 HP",
      features: "Winch, crane"
    },
    description: "Heavy-duty tractor for artillery and equipment transportation in combat zones."
  }
];

export const evVehicles = [
  {
    id: 1,
    name: "EV Truck 12T",
    category: "Electric Trucks",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80",
    specs: {
      range: "200 km",
      battery: "300 kWh",
      payload: "12 tonnes",
      charging: "Fast charge 2hrs"
    },
    description: "Zero-emission electric truck for sustainable urban freight transportation."
  },
  {
    id: 2,
    name: "EV Bus 9M",
    category: "Electric Buses",
    image: "https://images.unsplash.com/photo-1570125909517-53cb21c89fe7?w=800&q=80",
    specs: {
      range: "250 km",
      battery: "350 kWh",
      capacity: "35 passengers",
      charging: "Opportunity charging"
    },
    description: "Silent, emission-free electric bus for modern urban public transport."
  },
  {
    id: 3,
    name: "EV LCV 3.5T",
    category: "Electric LCV",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    specs: {
      range: "180 km",
      battery: "150 kWh",
      payload: "3.5 tonnes",
      charging: "Standard/DC fast"
    },
    description: "Compact electric commercial vehicle perfect for last-mile delivery."
  },
  {
    id: 4,
    name: "Hydrogen Bus 12M",
    category: "Fuel Cell",
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
    specs: {
      range: "400 km",
      fuel: "Hydrogen",
      capacity: "45 passengers",
      refuel: "10 minutes"
    },
    description: "Next-generation hydrogen fuel cell bus with extended range capability."
  }
];

export const stats = [
  { value: "75+", label: "Years of Excellence" },
  { value: "50+", label: "Countries Served" },
  { value: "2M+", label: "Vehicles Sold" },
  { value: "9", label: "Manufacturing Plants" }
];

export const timeline = [
  {
    year: "1948",
    title: "Foundation",
    description: "Ashok Leyland was established as Ashok Motors for assembly of Austin Cars."
  },
  {
    year: "1955",
    title: "First Indian Truck",
    description: "Produced India's first indigenous truck in collaboration with Leyland Motors UK."
  },
  {
    year: "1987",
    title: "Hinduja Group",
    description: "Became part of the Hinduja Group, marking a new era of growth."
  },
  {
    year: "2016",
    title: "Electric Future",
    description: "Launched first electric bus, pioneering sustainable mobility in India."
  },
  {
    year: "2024",
    title: "Global Leader",
    description: "Expanded to 50+ countries with focus on innovation and sustainability."
  }
];

export const leadership = [
  {
    name: "Dheeraj Hinduja",
    role: "Chairman",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
    bio: "Leading the strategic vision and growth of Ashok Leyland."
  },
  {
    name: "Shenu Agarwal",
    role: "Managing Director & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
    bio: "Driving operational excellence and innovation across all business verticals."
  },
  {
    name: "Gopal Mahadevan",
    role: "Executive Director",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    bio: "Overseeing finance and strategic business development initiatives."
  }
];

export const news = [
  {
    id: 1,
    title: "Ashok Leyland Unveils New Electric Truck Lineup",
    date: "March 15, 2024",
    category: "Innovation",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=600&q=80",
    excerpt: "Revolutionary electric trucks with 300km range set to transform logistics industry."
  },
  {
    id: 2,
    title: "Record Breaking Export to African Markets",
    date: "February 28, 2024",
    category: "Business",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80",
    excerpt: "Landmark order of 500 vehicles strengthens presence in African continent."
  },
  {
    id: 3,
    title: "New State-of-the-Art Manufacturing Facility",
    date: "January 10, 2024",
    category: "Expansion",
    image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=600&q=80",
    excerpt: "Advanced facility to boost production capacity by 25% annually."
  }
];

export const locations = [
  {
    city: "Chennai",
    address: "1, Sardar Patel Road, Guindy, Chennai - 600032",
    phone: "+91-44-2220-6000",
    type: "Headquarters"
  },
  {
    city: "Hosur",
    address: "Hosur Industrial Complex, Krishnagiri District",
    phone: "+91-4344-276000",
    type: "Manufacturing"
  },
  {
    city: "Alwar",
    address: "Matsya Industrial Area, Alwar, Rajasthan",
    phone: "+91-144-2330000",
    type: "Manufacturing"
  },
  {
    city: "Pantnagar",
    address: "Integrated Industrial Estate, Pantnagar, Uttarakhand",
    phone: "+91-5947-281000",
    type: "Manufacturing"
  }
];
