import { Language } from "@/context/language-context";

export interface NavLink {
  label: string;
  href: string;
}

export interface FlavorProfile {
  spiceLevel: number;
  richness: number;
  crunchiness: number;
}

export interface RendangVariety {
  id: string;
  name: string;
  origin: string;
  regionCategory: "tanah-datar" | "agam" | "limapuluh-kota" | "pesisir";
  description: string;
  tag: string;
  flavorProfile: FlavorProfile;
  pairingSuggestion: string;
  funFact: string;
  cookingSecret: string;
}

export interface Ingredient {
  id: string;
  number: string;
  name: string;
  role: string;
  description: string;
  note: string;
  scriptNote: string;
  icon: string;
  antisepticIndex: number;
  aromaNotes: string[];
  culinaryPurpose: string;
  activeCompound: string;
  preservationMechanism: string;
  proportionPerKg: string;
}

export interface JourneyStage {
  step: number;
  number: string;
  title: string;
  description: string;
  detail: string;
  duration?: string;
  stampText: string;
}

export interface Memory {
  id: string;
  title: string;
  snippet: string;
  fullStory: string;
  authorTag: string;
  handwrittenDate: string;
  postmarkLocation: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  caption: string;
  tag: string;
  handwrittenCaption: string;
  rotation: string;
}

export interface PhilosophySymbol {
  id: string;
  minangName: string;
  translatedName: string;
  symbolizes: string;
  roleTitle: string;
  description: string;
}

export interface QuizQuestionOption {
  label: string;
  category: "tanah-datar" | "agam" | "limapuluh-kota" | "pesisir";
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizQuestionOption[];
}

export interface RendangQuizContent {
  title: string;
  subtitle: string;
  badge: string;
  questions: QuizQuestion[];
  resultButtonText: string;
  restartText: string;
}

export interface SiteContent {
  navigation: {
    brand: string;
    tagline: string;
    subtagline: string;
    links: NavLink[];
    cta: string;
  };
  hero: {
    label: string;
    stampText: string;
    calloutTop: string;
    calloutBottom: string;
    title: string;
    scriptSubtitle: string;
    description: string;
    primaryCta: {
      text: string;
      href: string;
    };
    secondaryCta: {
      text: string;
      href: string;
    };
    imagePath: string;
    bannerImagePath: string;
    imageAlt: string;
    featureTitle: string;
    featureQuote: string;
    featureText: string;
  };
  introduction: {
    label: string;
    title: string;
    scriptAnnotation: string;
    paragraphs: string[];
    quote: string;
    imagePath: string;
    imageAlt: string;
    bannerBadge: string;
    bannerTitle: string;
    bannerSubtitle: string;
  };
  philosophy: {
    label: string;
    title: string;
    scriptSubtitle: string;
    intro: string;
    symbols: PhilosophySymbol[];
  };
  varieties: {
    label: string;
    title: string;
    scriptSubtitle: string;
    intro: string;
    nationalHonorTitle: string;
    nationalHonorText: string;
    disasterReliefTitle: string;
    disasterReliefText: string;
    items: RendangVariety[];
  };
  rendangQuiz: RendangQuizContent;
  ingredients: {
    label: string;
    title: string;
    scriptHeadline: string;
    summary: string;
    items: Ingredient[];
  };
  cookingJourney: {
    label: string;
    title: string;
    scriptSubtitle: string;
    intro: string;
    stages: JourneyStage[];
  };
  memories: {
    label: string;
    title: string;
    scriptSubtitle: string;
    intro: string;
    cards: Memory[];
    extraMemories: Memory[];
  };
  gallery: {
    label: string;
    title: string;
    scriptSubtitle: string;
    intro: string;
    items: GalleryItem[];
  };
  closing: {
    title: string;
    scriptSignature: string;
    description: string;
    cta: string;
  };
  footer: {
    brand: string;
    tagline: string;
    description: string;
    links: NavLink[];
    githubUrl: string;
    devCommunityUrl: string;
    copyright: string;
    disclaimer: string;
  };
}

export const SITE_CONTENT: Record<Language, SiteContent> = {
  en: {
    navigation: {
      brand: "Raso Pulang",
      tagline: "A taste that feels like home.",
      subtagline: "Authentic Minangkabau Culinary Heritage",
      links: [
        { label: "The Story", href: "#story" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Varieties", href: "#varieties" },
        { label: "The Ingredients", href: "#ingredients" },
        { label: "The Journey", href: "#journey" },
        { label: "Memories", href: "#memories" },
        { label: "Gallery", href: "#gallery" },
      ],
      cta: "Discover the Story",
    },

    hero: {
      label: "FROM THE KITCHENS OF MINANGKABAU",
      stampText: "Bukittinggi • Heritage",
      calloutTop: "ORIGINATING FROM MINANGKABAU, WEST SUMATRA",
      calloutBottom: "CNN WORLD'S 50 BEST FOODS (NO. 11)",
      title: "Some flavors bring you home.",
      scriptSubtitle: "Slow-cooked with patience, layered with memory.",
      description:
        "Born from the ancient Minangkabau tradition of Merantau. Rendang is a culinary masterpiece of hand-pounded spices, fresh coconut milk, and wood-fire caramelization — preserving taste, nutrition, and home across long journeys.",
      primaryCta: {
        text: "Begin the Journey",
        href: "#journey",
      },
      secondaryCta: {
        text: "Explore the story",
        href: "#story",
      },
      imagePath: "/images/hero-rendang.jpg",
      bannerImagePath: "/images/hero-rendang.jpg",
      imageAlt: "Authentic Minangkabau Rendang simmered slowly over wood fire hearth",
      featureTitle: "Slow-Cooked Mahogany Rendang",
      featureQuote: "Patience, Honor & Slow Fire",
      featureText:
        "Crafted through 4-5 hours of steady wood fire, embodying Musyawarah & Mufakat, family harmony, and hospitality passed down through centuries.",
    },

    introduction: {
      label: "MORE THAN A DISH",
      title: "Every pot carries a story of Merantau.",
      scriptAnnotation: "Heritage of Traditional Woks & Wood-Fired Hearths",
      paragraphs: [
        "In Minangkabau tradition, Rendang (randang in Minang) was born out of the historic behavior of Merantau — young Minang villagers traveling far across rivers and seas in search of knowledge and livelihood. They needed nutrient-dense provisions that could stay fresh for weeks without spoiling.",
        "Originally crafted using wild deer meat (daging rusa) before transitioning to beef and buffalo, Rendang is created over 4 to 5 hours of gentle slow-cooking ('merendang'). Fresh coconut milk and vibrant aromatics simmer down until natural coconut oils caramelize into dark mahogany crusts around tender cuts of meat.",
        "Crucially, the natural spices — garlic, shallots, ginger, galangal, lemongrass, and chili — possess powerful natural antiseptic properties. This antimicrobial synergy preserves Rendang naturally for 3 to 4 weeks at room temperature without synthetic preservatives.",
        "Beyond the kitchen hearth, Rendang is officially ranked No. 11 in CNN's 2021 World's 50 Best Foods list and designated as one of Indonesia's 5 National Dishes (2018). It serves as an anchor for traditional ceremonies, Eid celebrations, and vital emergency disaster relief food across Indonesia.",
      ],
      quote: "Home is sometimes a place. Sometimes, it is a familiar flavor carried across oceans.",
      imagePath: "/images/intro-kitchen.jpg",
      imageAlt: "Authentic traditional Minangkabau kitchen hearth setup with fresh spices and coconut milk",
      bannerBadge: "Traditional Hearth",
      bannerTitle: "Minangkabau Kitchen Hearth",
      bannerSubtitle: "Slow-Cooked Rendang Heritage",
    },

    philosophy: {
      label: "CULTURAL SYMBOLISM",
      title: "The Four Sacred Pillars of Rendang",
      scriptSubtitle: "Embodying Musyawarah & Mufakat in Every Pot",
      intro:
        "In Minangkabau culture, Rendang is not just food — it represents the philosophy of consensus (Musyawarah & Mufakat). The four essential ingredients symbolize the complete harmony of Minang society.",
      symbols: [
        {
          id: "dagiang",
          minangName: "Dagiang",
          translatedName: "Beef / Meat",
          symbolizes: "Niniak Mamak",
          roleTitle: "Tribal Elders & Leaders",
          description:
            "Represents the tribal leaders and elders who provide wisdom, protection, and dignity to the community.",
        },
        {
          id: "karambia",
          minangName: "Karambia",
          translatedName: "Coconut Milk",
          symbolizes: "Cadiak Pandai",
          roleTitle: "Intellectuals & Scholars",
          description:
            "Represents the intellectuals, scholars, and thinkers who bind and enrich society with knowledge and smooth resolution.",
        },
        {
          id: "lado",
          minangName: "Lado",
          translatedName: "Red Chili",
          symbolizes: "Alim Ulama",
          roleTitle: "Religious Scholars",
          description:
            "Represents the religious leaders and scholars who stand firm, providing sharp moral guidance and sacred law.",
        },
        {
          id: "pemasak",
          minangName: "Pemasak",
          translatedName: "Spice Blend",
          symbolizes: "Masyarakat Minangkabau",
          roleTitle: "Minangkabau Community",
          description:
            "Represents the entire Minangkabau society, harmonizing all elements into a rich, unified, and enduring bond.",
        },
      ],
    },

    varieties: {
      label: "HERITAGE & VARIATIONS",
      title: "Diverse Rendang Across Minangkabau",
      scriptSubtitle: "From Coastal Clams to Crispy Egg Rendang",
      intro:
        "While beef rendang is globally famous, every region of West Sumatra crafts unique rendang varieties using local ingredients from mountain lakes to coastal waters.",
      nationalHonorTitle: "CNN 2021 World's 50 Best Foods (No. 11 Rendang, Indonesia)",
      nationalHonorText:
        "Ranked No. 11 in CNN's World's 50 Best Foods list and officially designated as one of Indonesia's 5 National Dishes (2018). Popularized globally in Padang restaurants from Jakarta to London, Amsterdam, and New York.",
      disasterReliefTitle: "Disaster Relief Food of Honor",
      disasterReliefText:
        "Because of its natural shelf life and high nutritional value, the West Sumatra Government traditionally sends tons of freshly cooked Rendang as immediate emergency food relief for disaster victims across Indonesia (Lombok, Palu, Selat Sunda, Cianjur).",
      items: [
        {
          id: "randang-dagiang",
          name: "Randang Dagiang",
          origin: "Luhak Tanah Datar",
          regionCategory: "tanah-datar",
          description:
            "The quintessential beef or buffalo rendang slow-simmered to mahogany perfection. Rich, tender, and intensely aromatic.",
          tag: "Classic Core",
          flavorProfile: { spiceLevel: 4, richness: 5, crunchiness: 1 },
          pairingSuggestion: "Warm Steamed Rice, Sambal Lado Mudo & Cassava Leaves",
          funFact: "Traditionally cut thick from deer or buffalo to survive 5 hours over wood fire during long journeys.",
          cookingSecret: "Patience in caramelization: coconut milk turns to oil, coating each fiber in deep spice crust.",
        },
        {
          id: "randang-itiak",
          name: "Randang Itiak",
          origin: "Bukittinggi & Agam",
          regionCategory: "agam",
          description:
            "Duck rendang simmered over low fire until gamey duck meat absorbs dark caramelized spice oils and turns melt-in-the-mouth tender.",
          tag: "Poultry Special",
          flavorProfile: { spiceLevel: 4, richness: 5, crunchiness: 2 },
          pairingSuggestion: "Nasi Kapau, Gulai Nangka & Warm Jasmine Tea",
          funFact: "Uses duck raised in high mountain rice paddies of Agam, pre-roasted over rice husks to eliminate excess gamey fat.",
          cookingSecret: "Duck meat is smoke-roasted prior to simmering so fat renders into rich savory aromatic oil.",
        },
        {
          id: "randang-talua",
          name: "Randang Talua",
          origin: "Payakumbuh",
          regionCategory: "limapuluh-kota",
          description:
            "A unique crispy egg rendang from Payakumbuh crafted into crisp savory chip-like bites coated in dry spicy rendang reduction.",
          tag: "Crispy Specialty",
          flavorProfile: { spiceLevel: 3, richness: 4, crunchiness: 5 },
          pairingSuggestion: "Snack on its own or tossed over hot jasmine rice",
          funFact: "Payakumbuh artisans pour whisked egg batter into hot oil to create paper-thin crispy square chips.",
          cookingSecret: "Eggs are turned into ultra-crispy wafers first, then tossed gently into bone-dry caramelized spice dust.",
        },
        {
          id: "randang-lokan",
          name: "Randang Lokan",
          origin: "Pesisir Selatan & Pariaman",
          regionCategory: "pesisir",
          description:
            "Fresh coastal clam rendang harvested from estuary mudflats, combining ocean sweetness with dark roasted coconut spice paste.",
          tag: "Coastal Seafood",
          flavorProfile: { spiceLevel: 5, richness: 4, crunchiness: 2 },
          pairingSuggestion: "Hot Rice with Squeezed Kaffir Lime Juice",
          funFact: "Harvested by hand by coastal women diving into coastal rivers near Pariaman.",
          cookingSecret: "Lokan clams are added late into thick dark Kalio reduction so they stay plump and juicy.",
        },
        {
          id: "randang-suir",
          name: "Randang Suir",
          origin: "Payakumbuh",
          regionCategory: "limapuluh-kota",
          description:
            "Shredded beef or chicken rendang with thick savory fibers similar to floss but layered in rich caramelized rendang dry spice crumbs.",
          tag: "Shredded Delight",
          flavorProfile: { spiceLevel: 3, richness: 4, crunchiness: 4 },
          pairingSuggestion: "Travel Provisions, Lontong Sayur & Breakfast Toast",
          funFact: "Created specifically for travelers (Merantau) as a durable high-protein ration.",
          cookingSecret: "Beef is boiled with spices then hand-shredded fine before undergoing final dry-roasting.",
        },
        {
          id: "randang-paru",
          name: "Randang Paru",
          origin: "Payakumbuh & Tanah Datar",
          regionCategory: "tanah-datar",
          description:
            "Deep-fried beef lung rendang cooked until crispy on the outside, tossed in fragrant dry dark rendang spices.",
          tag: "Crispy Delicacy",
          flavorProfile: { spiceLevel: 4, richness: 4, crunchiness: 5 },
          pairingSuggestion: "Nasi Padang & Hot Teh Talua",
          funFact: "Boiled with galangal and turmeric before slice-frying, making every bite crisp and savory.",
          cookingSecret: "Thin slicing and double-frying lung produces light airy crunch coated in mahogany spices.",
        },
      ],
    },

    rendangQuiz: {
      title: "Find Your Ideal Rendang Match",
      subtitle: "Answer 3 quick flavor preference questions to discover your Minang soul dish.",
      badge: "INTERACTIVE CULINARY MATCHER",
      questions: [
        {
          id: "q1",
          question: "What texture calls to your palate?",
          options: [
            { label: "Deep, melt-in-your-mouth tender meat", category: "tanah-datar" },
            { label: "Crispy, crackling savory chips or bite-sized crunch", category: "limapuluh-kota" },
            { label: "Rich poultry or gamey mountain flavor", category: "agam" },
            { label: "Sweet coastal seafood & estuary ocean notes", category: "pesisir" },
          ],
        },
        {
          id: "q2",
          question: "What dining occasion fits your current mood?",
          options: [
            { label: "Traditional family feast with warm rice & cassava leaves", category: "tanah-datar" },
            { label: "Crunchy evening snack with tea or travel ration", category: "limapuluh-kota" },
            { label: "Festive mountain banquet (Baralek)", category: "agam" },
            { label: "Coastal seafood feast by the breeze", category: "pesisir" },
          ],
        },
        {
          id: "q3",
          question: "How do you prefer your spice & aroma profile?",
          options: [
            { label: "Deep mahogany wood-fire caramel aroma", category: "tanah-datar" },
            { label: "Crispy dry spice crumbs with balanced heat", category: "limapuluh-kota" },
            { label: "Rich herbal oil reduction with smoky notes", category: "agam" },
            { label: "Sharp fiery chili balanced by ocean sweetness", category: "pesisir" },
          ],
        },
      ],
      resultButtonText: "Explore Matches",
      restartText: "Retake Quiz",
    },

    ingredients: {
      label: "THE HEART OF THE FLAVOR",
      title: "Layers of flavor, made with time.",
      scriptHeadline: "Natural Antiseptic Spices & Creamy Coconut Reduction",
      summary:
        "The true depth of Rendang comes from six fundamental ingredients slowly caramelizing together. Garlic, ginger, and galangal act as natural antimicrobial preservatives.",
      items: [
        {
          id: "beef",
          number: "01",
          name: "Beef / Buffalo",
          role: "The Core (Niniak Mamak)",
          description:
            "Selected cuts with tender fibers that absorb the spice reduction over hours, turning deeply tender without losing structure.",
          note: "Originally deer meat (daging rusa), traditionally cut thick to withstand 5 hours over wood fire.",
          scriptNote: "Selected cuts absorbing 5 hours of spice reduction",
          icon: "01",
          antisepticIndex: 30,
          aromaNotes: ["Savory", "Rich Protein", "Deep Umami"],
          culinaryPurpose: "Absorbs spice reduction & caramelized coconut oil crust over slow wood-fire simmer.",
          activeCompound: "Myoglobin & Muscle Protein Fibers",
          preservationMechanism: "Dehydration during slow simmer removes moisture, preventing bacterial growth.",
          proportionPerKg: "1.0 kg (Main Foundation)",
        },
        {
          id: "coconut-milk",
          number: "02",
          name: "Coconut Milk (Karambia)",
          role: "The Vessel (Cadiak Pandai)",
          description:
            "Freshly pressed coconut cream that releases natural coconut oils as it simmers down, serving as cooking liquid and natural caramelizer.",
          note: "Transitions from liquid curry (Gulai) to thick Kalio, then to dark mahogany coconut oil crust.",
          scriptNote: "Pure rich coconut cream caramelization",
          icon: "02",
          antisepticIndex: 50,
          aromaNotes: ["Creamy", "Nutty Caramel", "Lauric Acid Shield"],
          culinaryPurpose: "Cooking medium & natural frying oil; caramelizes into mahogany coconut crust.",
          activeCompound: "Lauric Acid & Natural Coconut Oil Fats",
          preservationMechanism: "Lauric acid creates antimicrobial lipids that protect cooked meat fibers.",
          proportionPerKg: "3 Coconuts (approx 1,000ml thick cream + 500ml thin milk)",
        },
        {
          id: "chili",
          number: "03",
          name: "Red Chili (Lado)",
          role: "The Warmth (Alim Ulama)",
          description:
            "Balanced red chilies that build a gentle, enduring warmth rather than overwhelming heat, complementing the rich coconut oils.",
          note: "Ground finely into a paste to weave warmth and vibrant color into every drop.",
          scriptNote: "Ground red chilies weaving subtle enduring warmth",
          icon: "03",
          antisepticIndex: 75,
          aromaNotes: ["Capsaicin Warmth", "Vibrant Red", "Earthy Heat"],
          culinaryPurpose: "Imparts deep red-brown hue, enduring warmth, and balances heavy coconut richness.",
          activeCompound: "Capsaicin & Carotenoids",
          preservationMechanism: "Capsaicin acts as a natural antioxidant and inhibits bacterial reproduction.",
          proportionPerKg: "250 gram finely ground red chili paste",
        },
        {
          id: "galangal",
          number: "04",
          name: "Galangal & Ginger",
          role: "Natural Antiseptic",
          description:
            "Peppery and woodsy, galangal and ginger possess potent natural antimicrobial properties that preserve Rendang naturally for weeks.",
          note: "Bruised and ground finely, eliminating bacteria while imparting deep resinous fragrance.",
          scriptNote: "Bruised galangal providing natural preservation",
          icon: "04",
          antisepticIndex: 98,
          aromaNotes: ["Gingerol Shield", "Pinene Resin", "Woodsy Antiseptic"],
          culinaryPurpose: "Eliminates gamey meat odors while creating woodsy peppery fragrance notes.",
          activeCompound: "Gingerol, Shogaol & Galangin",
          preservationMechanism: "Potent antimicrobial agents destroy cell membranes of food spoilage bacteria.",
          proportionPerKg: "100g bruised galangal + 50g ginger paste",
        },
        {
          id: "lemongrass",
          number: "05",
          name: "Lemongrass",
          role: "The Brightness",
          description:
            "Fresh bruised stalks that introduce citrusy top notes, balancing the heavy richness of coconut cream and meat.",
          note: "Knotted and simmered whole to slowly release fragrant essential oils.",
          scriptNote: "Knotted lemongrass releasing citrus notes",
          icon: "05",
          antisepticIndex: 85,
          aromaNotes: ["Citral Oil", "Zesty Freshness", "Aromatic Lift"],
          culinaryPurpose: "Infuses zesty citrus fragrance to lift heavy coconut milk and spice paste.",
          activeCompound: "Citral & Geraniol Essential Oils",
          preservationMechanism: "Citral oil exerts antifungal & antibacterial inhibition during reduction.",
          proportionPerKg: "3 stalks (bruised & knotted whole)",
        },
        {
          id: "kaffir-lime",
          number: "06",
          name: "Kaffir Lime Leaves",
          role: "The Aromatic Lift",
          description:
            "Torn fresh leaves that perfume the entire pot with a sharp, vibrant aroma that lingers softly in every bite.",
          note: "Added alongside turmeric leaves to complete the signature scent of the pot.",
          scriptNote: "Fresh kaffir lime leaves perfuming the pot",
          icon: "06",
          antisepticIndex: 80,
          aromaNotes: ["Citronellal Perfume", "Fresh Herbal", "Vibrant Scent"],
          culinaryPurpose: "Perfumes the cauldron steam and leaves a lingering citrus herbal finish.",
          activeCompound: "Citronellal & Turmerone",
          preservationMechanism: "Essential leaf oils prevent rancidity in simmering coconut oils.",
          proportionPerKg: "5 fresh leaves (torn along mid-rib) + 1 turmeric leaf",
        },
      ],
    },

    cookingJourney: {
      label: "THE SLOW JOURNEY",
      title: "Nothing meaningful is rushed.",
      scriptSubtitle: "From Gulai to Kalio, and final Mahogany Rendang Kering.",
      intro:
        "Cooking Rendang is a 4 to 5 hour ritual of slow reduction — shifting through three distinct stages: Gulai (curry), Kalio (moist), and Rendang Kering (dry caramelized).",
      stages: [
        {
          step: 1,
          number: "01",
          title: "Gathering & Pounding",
          description:
            "Preparation of fresh coconut milk and hand-pounded natural spice paste.",
          detail:
            "Fresh coconut cream is pressed, spice pastes are hand-pounded on granite stones, and thick beef cuts are prepared for extended wood fire cooking.",
          duration: "Preparation",
          stampText: "MORNING MARKET • 05:00 AM",
        },
        {
          step: 2,
          number: "02",
          title: "Gulai Phase (Curry)",
          description:
            "Rolling boil of coconut milk, spices, and meat forming vibrant liquid curry.",
          detail:
            "The pot reaches a rolling boil. Fragrant steam fills the house with lemongrass and galangal, calling family to the hearth as coconut milk simmers.",
          duration: "1 - 2 Hours",
          stampText: "GULAI CURRY PHASE • 09:30 AM",
        },
        {
          step: 3,
          number: "03",
          title: "Kalio Phase (Thickening)",
          description:
            "Liquid evaporates into thick golden brown Kalio as coconut oil separates.",
          detail:
            "Moisture evaporates into thick golden-brown Kalio. Coconut oils separate and continuous gentle stirring caramelizes spice pastes around beef fibers.",
          duration: "3 - 4 Hours",
          stampText: "KALIO TO REDUCTION • 02:00 PM",
        },
        {
          step: 4,
          number: "04",
          title: "Rendang Kering (Mahogany)",
          description:
            "Final dry mahogany caramelization — rich, tender, and naturally shelf-stable.",
          detail:
            "The Rendang reaches its signature dark mahogany color with zero liquid remaining. Served warm with steamed rice, preserved naturally for weeks of journeying.",
          duration: "4 - 5 Hours",
          stampText: "FAMILY TABLE FEAST • 06:00 PM",
        },
      ],
    },

    memories: {
      label: "MEMORIES SERVED WARM",
      title: "What does home taste like to you?",
      scriptSubtitle: "Short love letters from family dining tables and travel perbekalan.",
      intro:
        "Rendang is inseparable from the memories of Merantau and homecomings. Here are stories from family tables and distant journeys.",
      cards: [
        {
          id: "mem-1",
          title: "Sunday Morning",
          snippet: "The kitchen was already awake before the rest of the house.",
          fullStory:
            "Long before sunrise, the rhythmic sound of a stone pestle grinding lado and galangal echoed down the hallway. By seven in the morning, the scent of serai carried through open windows, signalling a day meant for gathering.",
          authorTag: "Minang Household Memory",
          handwrittenDate: "Sunday Morning, 1998",
          postmarkLocation: "Padang, West Sumatra",
        },
        {
          id: "mem-2",
          title: "The Long Way Home",
          snippet:
            "After hours on the road, one familiar aroma made the distance disappear.",
          fullStory:
            "Traveling back to the village after months away, weariness melted as soon as the door swung open. Wrapped in banana leaves on the table was a batch made especially for the long journey home.",
          authorTag: "Rantau Return Story",
          handwrittenDate: "The Journey Home, 2012",
          postmarkLocation: "Bukittinggi Journey",
        },
        {
          id: "mem-3",
          title: "One More Spoonful",
          snippet:
            "Everyone said they were full, but the pot still found a way to empty.",
          fullStory:
            "No matter how heavy the feast, someone always reached back into the wok for the dark, caramelized spice crumbs at the bottom — the prized reward of a dish made with time.",
          authorTag: "Family Table Reflection",
          handwrittenDate: "Celebration Eve, 2021",
          postmarkLocation: "Mom's Kitchen",
        },
      ],
      extraMemories: [
        {
          id: "mem-4",
          title: "The Woven Box & Merantau",
          snippet:
            "Packed with care for long journeys, a taste of home in distant places.",
          fullStory:
            "Because Rendang preserves naturally through its slow oil caramelization and natural antiseptic spices, mothers packed it in tightly bound containers for children moving away to Merantau. Opening it weeks later in distant cities felt like standing in mom's kitchen.",
          authorTag: "Tradition of Merantau",
          handwrittenDate: "Traveler's Woven Box, 2005",
          postmarkLocation: "Distant Horizons",
        },
        {
          id: "mem-5",
          title: "Disaster Relief of Warmth",
          snippet:
            "Tons of fresh Rendang sent as warm comfort to earthquake survivors.",
          fullStory:
            "During major natural disasters in Lombok, Palu, and Cianjur, West Sumatran kitchens cooked tons of Rendang to send across islands. Unspoiled by heat, it brought nourishing food and emotional comfort to thousands in need.",
          authorTag: "Relief & Solidarity",
          handwrittenDate: "West Sumatra Relief, 2018",
          postmarkLocation: "Humanitarian Aid",
        },
      ],
    },

    gallery: {
      label: "FROM THE TABLE",
      title: "Made slowly. Remembered forever.",
      scriptSubtitle: "Warm moments & Minangkabau heritage album.",
      intro: "Glimpses of textures, warm fires, spice pastes, and shared meals.",
      items: [
        {
          id: "gal-1",
          src: "/images/gallery/rendang-1.jpg",
          alt: "Authentic Minangkabau mahogany Rendang Daging simmered over wood fire",
          title: "Mahogany Rendang Daging",
          caption: "Rich mahogany beef rendang slow-simmered over traditional wood-fire hearth.",
          tag: "Culinary",
          handwrittenCaption: "Authentic Slow-Cooked Rendang Daging",
          rotation: "-rotate-2",
        },
        {
          id: "gal-2",
          src: "/images/gallery/rendang-2.jpg",
          alt: "Freshly ground aromatics: lemongrass, galangal, red chili, and turmeric root",
          title: "Aromatics & Spices",
          caption: "Hand-pounded fresh herbs ready to infuse the rich coconut cream.",
          tag: "Ingredients",
          handwrittenCaption: "Fresh aromatics pounded on granite stone",
          rotation: "rotate-2",
        },
        {
          id: "gal-3",
          src: "/images/gallery/rendang-3.jpg",
          alt: "Large cast-iron wok simmering over traditional wood fire kitchen hearth",
          title: "The Hearth",
          caption: "Patience and steady heat turning simple elements into a beloved masterpiece.",
          tag: "Process",
          handwrittenCaption: "Low embers under a slow-simmering wok",
          rotation: "-rotate-1",
        },
        {
          id: "gal-4",
          src: "/images/gallery/rendang-4.jpg",
          alt: "Rendang served over fragrant white rice on a banana leaf platter",
          title: "Served with Love",
          caption: "Shared around the family table alongside warm steamed rice and sambal.",
          tag: "Gathering",
          handwrittenCaption: "Served warm over fresh banana leaves",
          rotation: "rotate-3",
        },
      ],
    },

    closing: {
      title: "May every journey lead you home.",
      scriptSignature: "With love and warmth, from the Minangkabau Kitchen.",
      description:
        "Some recipes are written down. Others are remembered through aroma, laughter, and the people gathered around the table.",
      cta: "Return to the Beginning",
    },

    footer: {
      brand: "Raso Pulang",
      tagline: "A Digital Love Letter to Rendang",
      description:
        "Celebrating food, family, and Minangkabau culinary heritage through warm editorial web experiences.",
      links: [
        { label: "The Story", href: "#story" },
        { label: "Philosophy", href: "#philosophy" },
        { label: "Varieties", href: "#varieties" },
        { label: "The Ingredients", href: "#ingredients" },
        { label: "The Journey", href: "#journey" },
        { label: "Memories", href: "#memories" },
        { label: "Gallery", href: "#gallery" },
      ],
      githubUrl: "https://github.com",
      devCommunityUrl: "https://dev.to",
      copyright: "© 2026 Raso Pulang • Built for Frontend Challenge. Engineered with Next.js 16, TypeScript & Tailwind CSS.",
      disclaimer: "Architected with modern Web Audio API and responsive editorial design principles.",
    },
  },

  id: {
    navigation: {
      brand: "Raso Pulang",
      tagline: "Rasa yang membawa Anda pulang.",
      subtagline: "Warisan Kuliner Autentik Minangkabau",
      links: [
        { label: "Kisah", href: "#story" },
        { label: "Filosofi", href: "#philosophy" },
        { label: "Ragam", href: "#varieties" },
        { label: "Bahan", href: "#ingredients" },
        { label: "Perjalanan", href: "#journey" },
        { label: "Kenangan", href: "#memories" },
        { label: "Galeri", href: "#gallery" },
      ],
      cta: "Jelajahi Kisah",
    },

    hero: {
      label: "DARI DAPUR TRADISIONAL MINANGKABAU",
      stampText: "Bukittinggi • Warisan Kuliner",
      calloutTop: "BERASAL DARI MINANGKABAU, SUMATERA BARAT",
      calloutBottom: "CNN 50 KULINER TERBAIK DUNIA (NO. 11)",
      title: "Rasa yang selalu membawa pulang.",
      scriptSubtitle: "Dimasak perlahan dengan kesabaran, kaya akan kenangan.",
      description:
        "Lahir dari tradisi merantau suku Minangkabau yang membutuhkan perbekalan tahan lama. Rendang adalah mahakarya kuliner dari rempah tumbuk, santan kelapa murni, dan karamelisasi kayu bakar — menjaga kelezatan dan gizi selama perjalanan jauh.",
      primaryCta: {
        text: "Mulai Perjalanan",
        href: "#journey",
      },
      secondaryCta: {
        text: "Jelajahi Kisah",
        href: "#story",
      },
      imagePath: "/images/hero-rendang.jpg",
      bannerImagePath: "/images/hero-rendang.jpg",
      imageAlt: "Dapur tradisional Minangkabau dan Rendang yang dimasak perlahan",
      featureTitle: "Rendang Daging Mahogani",
      featureQuote: "Kesabaran, Kehormatan & Api Perlahan",
      featureText:
        "Dibuat 4-5 jam di atas tungku kayu bakar, melambangkan filosofi Musyawarah & Mufakat, keharmonisan keluarga, dan keramahan Minangkabau.",
    },

    introduction: {
      label: "LEBIH DARI SEKADAR HIDANGAN",
      title: "Setiap kuali menyimpan cerita merantau.",
      scriptAnnotation: "Warisan Kuali Tradisional & Tungku Kayu Bakar",
      paragraphs: [
        "Dalam tradisi Minangkabau, Rendang (randang) terlahir akibat perilaku merantau suku Minangkabau yang gemar berlayar dan menjelajah ke berbagai penjuru negeri. Mereka membutuhkan perbekalan makanan bergizi yang awet dan tahan lama tanpa membusuk di perjalanan panjang.",
        "Awal mula olahan rendang menggunakan daging rusa sebelum beralih menjadi daging sapi atau kerbau. Rendang dibuat melalui proses pemanasan perlahan selama 4 hingga 5 jam ('merendang') — santan segar dan bumbu halus mendidih hingga minyak kelapa terkaramelisasi menjadi kerak cokelat kehitaman yang melapisi daging.",
        "Keunikan rendang terletak pada bumbu rempah alaminya (bawang putih, bawang merah, jahe, lengkuas, serai, cabai) yang bersifat antiseptik dan antimikroba alami. Kombinasi ini bertindak sebagai pengawet alami sehingga rendang tahan disimpan 3 hingga 4 minggu pada suhu ruangan.",
        "Rendang secara resmi menduduki No. 11 dalam daftar 50 Kuliner Terbaik Dunia versi CNN 2021 dan ditetapkan sebagai salah satu dari 5 Makanan Nasional Indonesia (2018). Selain disajikan dalam upacara adat dan perayaan Idul Fitri/Idul Adha, rendang juga menjadi bantuan pangan utama saat terjadi bencana alam.",
      ],
      quote: "Rumah terkadang berupa tempat. Terkadang, ia berupa rasa akrab yang dibawa melintasi lautan.",
      imagePath: "/images/intro-kitchen.jpg",
      imageAlt: "Bahan dan rempah dapur tradisional Minangkabau",
      bannerBadge: "Tungku Tradisional",
      bannerTitle: "Dapur Rendang Tradisional",
      bannerSubtitle: "Mahakarya Rendang Dimasak Perlahan",
    },

    philosophy: {
      label: "SIMBOLISME BUDAYA",
      title: "Empat Pilar Filosofi Budaya Rendang",
      scriptSubtitle: "Wujud Musyawarah & Mufakat Dalam Setiap Kuali",
      intro:
        "Bagi masyarakat Minangkabau, Rendang memiliki filosofi mendalam tentang Musyawarah dan Mufakat. Empat bahan pokok utamanya melambangkan keutuhan dan keharmonisan struktur masyarakat Minang.",
      symbols: [
        {
          id: "dagiang",
          minangName: "Dagiang",
          translatedName: "Daging Sapi / Kerbau",
          symbolizes: "Niniak Mamak",
          roleTitle: "Para Pemimpin Adat",
          description:
            "Melambangkan Niniak Mamak (pemimpin suku adat) yang memberikan pengayoman, kearifan, dan martabat bagi masyarakat.",
        },
        {
          id: "karambia",
          minangName: "Karambia",
          translatedName: "Santan Kelapa",
          symbolizes: "Cadiak Pandai",
          roleTitle: "Kaum Intelektual",
          description:
            "Melambangkan Cadiak Pandai (kaum intelektual dan pemikir) yang merekatkan masyarakat dengan ilmu dan solusi bijak.",
        },
        {
          id: "lado",
          minangName: "Lado",
          translatedName: "Cabai Merah",
          symbolizes: "Alim Ulama",
          roleTitle: "Tokoh Agama",
          description:
            "Melambangkan Alim Ulama yang tegas dalam mengajarkan syariat agama dan bimbingan moral yang lurus.",
        },
        {
          id: "pemasak",
          minangName: "Pemasak",
          translatedName: "Bumbu Rempah",
          symbolizes: "Masyarakat Minangkabau",
          roleTitle: "Keseluruhan Masyarakat",
          description:
            "Melambangkan keseluruhan masyarakat Minangkabau yang menyatukan seluruh elemen menjadi persatuan yang kaya dan harmonis.",
        },
      ],
    },

    varieties: {
      label: "WARISAN & KEANEKARAGAMAN",
      title: "Ragam Rendang Khas Ranah Minang",
      scriptSubtitle: "Dari Rendang Telur Payakumbuh Hingga Rendang Lokan Pesisir",
      intro:
        "Meskipun rendang daging sapi paling terkenal di dunia, berbagai daerah di Sumatera Barat memiliki variasi rendang yang unik sesuai hasil alam setempat.",
      nationalHonorTitle: "Daftar 50 Kuliner Terbaik Dunia versi CNN 2021 (No. 11 Rendang, Indonesia)",
      nationalHonorText:
        "Berada di peringkat No. 11 dalam daftar 50 Kuliner Terbaik Dunia versi CNN 2021 serta secara resmi ditetapkan sebagai salah satu dari 5 Makanan Nasional Indonesia (2018). Dipopulerkan oleh Rumah Makan Padang hingga ke Eropa dan Amerika.",
      disasterReliefTitle: "Bantuan Pangan Bencana Alam",
      disasterReliefText:
        "Karena daya simpan alami dan kandungan gizinya yang tinggi, Pemprov Sumbar rutin mendistribusikan berintonn-ton Rendang siap saji sebagai bantuan darurat bencana (Lombok, Palu, Selat Sunda, Cianjur).",
      items: [
        {
          id: "randang-dagiang",
          name: "Randang Dagiang",
          origin: "Luhak Tanah Datar",
          regionCategory: "tanah-datar",
          description:
            "Rendang daging sapi atau kerbau yang dimasak hingga karamel cokelat pekat. Empuk, gurih, dan beraroma rempah dalam.",
          tag: "Rendang Utama",
          flavorProfile: { spiceLevel: 4, richness: 5, crunchiness: 1 },
          pairingSuggestion: "Nasi Hangat, Sambal Lado Mudo & Daun Singkong Rebus",
          funFact: "Dahulu dipotong tebal dari daging rusa/kerbau agar tahan 5 jam penanakan di atas kayu bakar untuk perbekalan merantau.",
          cookingSecret: "Kunci karamelisasi: santan mendidih hingga berubah jadi minyak dan melapisi tiap serat daging.",
        },
        {
          id: "randang-itiak",
          name: "Randang Itiak",
          origin: "Bukittinggi & Agam",
          regionCategory: "agam",
          description:
            "Rendang daging bebek yang dimasak api kecil hingga daging empuk meresap minyak rempah karamel.",
          tag: "Unggas Khas",
          flavorProfile: { spiceLevel: 4, richness: 5, crunchiness: 2 },
          pairingSuggestion: "Nasi Kapau, Gulai Nangka & Teh Hangat",
          funFact: "Menggunakan bebek sawah Agam yang diasap dengan sekut sekali sebelum ditanak agar minyaknya harum.",
          cookingSecret: "Bebek panggang asap terlebih dahulu agar lemaknya luruh menjadi minyak aromatik gurih.",
        },
        {
          id: "randang-talua",
          name: "Randang Talua",
          origin: "Payakumbuh",
          regionCategory: "limapuluh-kota",
          description:
            "Rendang telur khas Payakumbuh berbentuk kripik renyah gurih yang dibalut bumbu rendang kering halus.",
          tag: "Renyah Khas",
          flavorProfile: { spiceLevel: 3, richness: 4, crunchiness: 5 },
          pairingSuggestion: "Camilan renyah atau ditabur di atas nasi hangat",
          funFact: "Pengrajin Payakumbuh mendadar telur menjadi lembaran tipis renyah sebelum dicampur bumbu rendang kering.",
          cookingSecret: "Telur didadar garing kripik terlebih dahulu, lalu diuleni perlahan dalam bumbu rendang serbuk kering.",
        },
        {
          id: "randang-lokan",
          name: "Randang Lokan",
          origin: "Pesisir Selatan & Pariaman",
          regionCategory: "pesisir",
          description:
            "Rendang kerang muara khas pesisir pantai Minang yang memadukan kesegaran laut dan karamel bumbu rendang.",
          tag: "Olahan Pesisir",
          flavorProfile: { spiceLevel: 5, richness: 4, crunchiness: 2 },
          pairingSuggestion: "Nasi Panas & Perasan Jeruk Purut",
          funFact: "Ditimba langsung oleh wanita pesisir Pariaman dari dasar muara sungai bermuara laut.",
          cookingSecret: "Kerang lokan dimasukkan saat Kalio sudah pekat agar daging kerang tetap kenyal dan manis.",
        },
        {
          id: "randang-suir",
          name: "Randang Suir",
          origin: "Payakumbuh",
          regionCategory: "limapuluh-kota",
          description:
            "Rendang daging sapi atau ayam yang disuir halus mirip abon dengan serat renyah berbumbu rendang pekat.",
          tag: "Daging Suir",
          flavorProfile: { spiceLevel: 3, richness: 4, crunchiness: 4 },
          pairingSuggestion: "Perbekalan Merantau, Lontong Sayur & Roti Panggang",
          funFact: "Diciptakan khusus sebagai bekal praktis pemuda Minang yang pergi merantau jauh.",
          cookingSecret: "Daging direbus bumbu lalu disuir serat tipis sebelum disangrai kering bersama bumbu rendang.",
        },
        {
          id: "randang-paru",
          name: "Randang Paru",
          origin: "Payakumbuh & Tanah Datar",
          regionCategory: "tanah-datar",
          description:
            "Rendang paru sapi yang digoreng hingga renyah di luar, dibalut bumbu rendang hitam beraroma tajam.",
          tag: "Olahan Paru",
          flavorProfile: { spiceLevel: 4, richness: 4, crunchiness: 5 },
          pairingSuggestion: "Nasi Padang & Teh Talua",
          funFact: "Direbus dengan kunyit dan lengkuas sebelum diiris tipis garing, menghasilkan tekstur renyah berserat.",
          cookingSecret: "Irisan tipis paru digoreng dua kali agar renyah tahan lama lalu dibalur bumbu karamel.",
        },
      ],
    },

    rendangQuiz: {
      title: "Temukan Rendang Impianmu",
      subtitle: "Jawab 3 pertanyaan preferensi rasa singkat untuk menemukan hidangan rendang khas Minang pilihanmu.",
      badge: "KUIS INTERAKTIF KULINER MINANG",
      questions: [
        {
          id: "q1",
          question: "Tekstur rendang seperti apa yang paling kamu sukai?",
          options: [
            { label: "Daging empuk meresap lembut yang meleleh di mulut", category: "tanah-datar" },
            { label: "Kripik renyah gurih atau serat kering krunchy", category: "limapuluh-kota" },
            { label: "Daging unggas beraroma asap pegunungan yang kaya", category: "agam" },
            { label: "Olahan laut manis gurih khas muara pesisir", category: "pesisir" },
          ],
        },
        {
          id: "q2",
          question: "Momen makan seperti apa yang sedang kamu bayangkan?",
          options: [
            { label: "Makan siang hangat keluarga dengan nasi hangat & daun singkong", category: "tanah-datar" },
            { label: "Camilan renyah sore hari ditemani teh hangat / bekal perjalanan", category: "limapuluh-kota" },
            { label: "Pesta adat perjamuan Baralek di ranah Minang", category: "agam" },
            { label: "Makan di tepi pantai berangin sepoi-sepoi", category: "pesisir" },
          ],
        },
        {
          id: "q3",
          question: "Aroma dan rasa seperti apa yang memikat lidahmu?",
          options: [
            { label: "Aroma karamel kayu bakar cokelat pekat mahogani", category: "tanah-datar" },
            { label: "Bumbu rendang serbuk kering dengan kepedasan sedang", category: "limapuluh-kota" },
            { label: "Minyak rempah herbal pekat beraroma khas", category: "agam" },
            { label: "Pedas mantap menyegarkan berpadu manisnya hasil laut", category: "pesisir" },
          ],
        },
      ],
      resultButtonText: "Lihat Rekomendasi",
      restartText: "Ulangi Kuis",
    },

    ingredients: {
      label: "INTI DARI RASA",
      title: "Lapisan rasa, dibentuk oleh waktu.",
      scriptHeadline: "Rempah Antiseptik Alami & Karamelisasi Santan",
      summary:
        "Kedalaman rasa Rendang berasal dari enam bahan utama yang terkaramelisasi selama 5 jam. Bawang, jahe, dan lengkuas bertindak sebagai pengawet alami.",
      items: [
        {
          id: "beef",
          number: "01",
          name: "Daging Sapi / Kerbau",
          role: "Inti Utama (Niniak Mamak)",
          description:
            "Potongan daging berkualitas yang menyerap reduksi rempah berjam-jam, menjadi sangat empuk tanpa kehilangan seratnya.",
          note: "Awalnya daging rusa, dipotong tebal agar tahan dalam proses penanakan 5 jam di atas api kecil.",
          scriptNote: "Potongan daging empuk meresap rempah",
          icon: "01",
          antisepticIndex: 30,
          aromaNotes: ["Gurih Daging", "Protein Tinggi", "Umami Pekat"],
          culinaryPurpose: "Menyerap reduksi bumbu & minyak karamel santan selama 5 jam penanakan api kayu.",
          activeCompound: "Miofibril & Serat Protein Daging",
          preservationMechanism: "Dehidrasi cair selama perendangan menghilangkan kadar air penyebab pembusukan.",
          proportionPerKg: "1,0 kg (Daging Paha / Gandik)",
        },
        {
          id: "coconut-milk",
          number: "02",
          name: "Santan Kelapa (Karambia)",
          role: "Pelebur Rasa (Cadiak Pandai)",
          description:
            "Perasan santan murni yang mengeluarkan minyak alami saat mendidih, menjadi cairan memasak sekaligus karamel pembungkus.",
          note: "Melalui fase Gulai (cair), Kalio (basah), hingga Rendang Kering (mahogani pekat).",
          scriptNote: "Perasan santan kental murni",
          icon: "02",
          antisepticIndex: 50,
          aromaNotes: ["Gurih Creamy", "Karamel Kelapa", "Asam Laurat"],
          culinaryPurpose: "Media penanak & minyak penggoreng alami; terkaramelisasi menjadi kerak cokelat mahogani.",
          activeCompound: "Asam Laurat & Lemak Kelapa Alami",
          preservationMechanism: "Asam laurat membentuk lapisan lipid antimikroba yang melindungi serat daging.",
          proportionPerKg: "3 Butir Kelapa Tua (sekitar 1.000ml santan kental + 500ml santan cair)",
        },
        {
          id: "chili",
          number: "03",
          name: "Cabai Merah (Lado)",
          role: "Kehangatan (Alim Ulama)",
          description:
            "Cabai merah pilihan yang menghasilkan kehangatan lembut dan tahan lama di lidah, menyatu dengan kelezatan santan.",
          note: "Ditumbuk halus agar rasa hangat merata di setiap gigitan.",
          scriptNote: "Cabai merah giling penjalin hangat",
          icon: "03",
          antisepticIndex: 75,
          aromaNotes: ["Kapsaicin Hangat", "Merah Menyala", "Pedas Alami"],
          culinaryPurpose: "Memberikan warna merah mahogani pekat, kehangatan bertahan lama, dan menyeimbangkan lemak santan.",
          activeCompound: "Kapsaicin & Karotenoid Alami",
          preservationMechanism: "Kapsaicin bertindak sebagai antioksidan kuat yang menekan perkembangbiakan bakteri.",
          proportionPerKg: "250 gram cabai merah giling halus",
        },
        {
          id: "galangal",
          number: "04",
          name: "Lengkuas & Jahe",
          role: "Antiseptik Alami",
          description:
            "Memberikan keharuman segar sekaligus memiliki aktivitas antimikroba alami yang membuat rendang tahan disimpan berminggu-minggu.",
          note: "Ditumbuk dan dikeprek bersama bumbu halus untuk membunuh bakteri pembusuk.",
          scriptNote: "Lengkuas geprek penambah harum & awet",
          icon: "04",
          antisepticIndex: 98,
          aromaNotes: ["Perisai Gingerol", "Resin Pinena", "Antiseptik Kayu"],
          culinaryPurpose: "Menghilangkan bau amis daging serta memberikan aroma kayu pedas menyegarkan.",
          activeCompound: "Gingerol, Shogaol & Galangin",
          preservationMechanism: "Senyawa antimikroba kuat merusak membran sel bakteri pembusuk makanan.",
          proportionPerKg: "100g lengkuas geprek + 50g jahe giling",
        },
        {
          id: "lemongrass",
          number: "05",
          name: "Serai",
          role: "Kesegaran",
          description:
            "Batang serai segar yang memberikan sentuhan sitrus aromatik, menyeimbangkan kegurihan santan dan daging.",
          note: "Diikat dan disimpulkan dalam kuali untuk perlahan melepas aroma.",
          scriptNote: "Serai wangi penyeimbang rasa",
          icon: "05",
          antisepticIndex: 85,
          aromaNotes: ["Minyak Sitral", "Kesegaran Sitrus", "Penyeimbang Aromatik"],
          culinaryPurpose: "Memberikan aroma sitrus segar untuk mengangkat kepekatan santan dan bumbu giling.",
          activeCompound: "Minyak Atsiri Sitral & Geraniol",
          preservationMechanism: "Minyak sitral memberikan efek antijamur dan antibakteri selama perendangan.",
          proportionPerKg: "3 batang serai (memar & simpulkan)",
        },
        {
          id: "kaffir-lime",
          number: "06",
          name: "Daun Jeruk Purut",
          role: "Penyegar Tajam",
          description:
            "Daun segar yang disobek untuk mengharumkan seluruh kuali dengan aroma segar yang tertinggal lembut.",
          note: "Dimasukkan bersama daun kunyit untuk menyempurnakan keharuman kuali.",
          scriptNote: "Daun jeruk purut pengharum kuali",
          icon: "06",
          antisepticIndex: 80,
          aromaNotes: ["Aroma Sitronelal", "Herbal Segar", "Penyegar Kuali"],
          culinaryPurpose: "Mengharumkan uap kuali dan memberikan sentuhan kesegaran herbal yang bertahan di lidah.",
          activeCompound: "Sitronelal & Turmeron",
          preservationMechanism: "Minyak atsiri daun mencegah tengiknya minyak kelapa saat disimpan lama.",
          proportionPerKg: "5 lembar daun jeruk purut (sobek tulang daun) + 1 lembar daun kunyit",
        },
      ],
    },

    cookingJourney: {
      label: "PERJALANAN PERLAHAN",
      title: "Tidak ada hal berharga yang terburu-buru.",
      scriptSubtitle: "Dari Gulai, Kalio, hingga Rendang Kering Mahogani.",
      intro:
        "Memasak Rendang adalah ritual pengurangan cairan selama 4-5 jam — melewati 3 tahapan: Gulai (cair), Kalio (basah), dan Rendang Kering (hitam pekat).",
      stages: [
        {
          step: 1,
          number: "01",
          title: "Menumbuk & Menyiapkan",
          description: "Persiapan santan murni dan tumbukan rempah antiseptik alami di atas batu giling.",
          detail: "Kelapa diparut segar, bumbu ditumbuk tangan di batu giling, dan daging dipotong tebal siap menyerap rasa.",
          duration: "Persiapan",
          stampText: "PASAR SUBUH • 05:00 WIB",
        },
        {
          step: 2,
          number: "02",
          title: "Fase Gulai (Mendidihkan)",
          description: "Mendidihnya santan, rempah, dan daging membentuk kuah gulai cair yang harum.",
          detail: "Kuali mulai mendidih membentuk Gulai. Aroma serai dan lengkuas memenuhi rumah, memanggil keluarga ke dapur.",
          duration: "1 - 2 Jam",
          stampText: "FASE GULAI • 09:30 WIB",
        },
        {
          step: 3,
          number: "03",
          title: "Fase Kalio (Mengental)",
          description: "Cairan menguap menjadi Kalio keemasan seiring terpisahnya minyak kelapa murni.",
          detail: "Gulai mengental menjadi Kalio, minyak kelapa terpisah, dan adukan perlahan mengkaramelkan bumbu di serat daging.",
          duration: "3 - 4 Jam",
          stampText: "FASE KALIO KE REDUKSI • 14:00 WIB",
        },
        {
          step: 4,
          number: "04",
          title: "Rendang Kering (Mahogani)",
          description: "Karamelisasi akhir berwarna mahogani pekat — empuk, gurih, dan tahan disimpan berminggu-minggu.",
          detail: "Rendang mencapai warna cokelat kehitaman khas tanpa sisa kuah. Disajikan hangat bersama nasi, awet untuk bekal merantau.",
          duration: "4 - 5 Jam",
          stampText: "SANTAP KALUARGA • 18:00 WIB",
        },
      ],
    },

    memories: {
      label: "KENANGAN HANGAT",
      title: "Seperti apa rasa rumah bagi Anda?",
      scriptSubtitle: "Surat cinta dari meja makan keluarga dan bekal merantau.",
      intro:
        "Rendang tak terpisahkan dari kenangan merantau dan perjalanan pulang. Inilah kisah dari meja makan keluarga.",
      cards: [
        {
          id: "mem-1",
          title: "Minggu Pagi di Dapur",
          snippet: "Dapur sudah terbangun sebelum seluruh isi rumah terbangun.",
          fullStory:
            "Jauh sebelum matahari terbit, suara tutuk batu lado dan batu penggiling bumbu terdengar di lorong. Jam tujuh pagi, aroma serai dan lengkuas sudah tercium dari jendela terbuka.",
          authorTag: "Kenangan Rumah Minang",
          handwrittenDate: "Minggu Pagi, 1998",
          postmarkLocation: "Padang, Sumatera Barat",
        },
        {
          id: "mem-2",
          title: "Perjalanan Pulang",
          snippet: "Setelah berjam-jam di jalan, satu aroma akrab menghapuskan lelah.",
          fullStory:
            "Pulang ke kampung halaman setelah berbulan-bulan di perantauan, rasa lelah menguap begitu pintu terbuka. Terbungkus daun pisang di atas meja adalah rendang buatan ibu.",
          authorTag: "Kisah Anak Rantau",
          handwrittenDate: "Perjalanan Pulang, 2012",
          postmarkLocation: "Perjalanan Bukittinggi",
        },
        {
          id: "mem-3",
          title: "Satu Sendok Lagi",
          snippet: "Semua orang berkata sudah kenyang, tapi kuali selalu habis.",
          fullStory:
            "Sebanyak apapun hidangan pesta, selalu ada yang mengambil remahan bumbu karamel di dasar kuali — hadiah paling berharga dari masakan yang dibuat dengan waktu.",
          authorTag: "Renungan Meja Makan",
          handwrittenDate: "Malam Perayaan, 2021",
          postmarkLocation: "Dapur Ibu",
        },
      ],
      extraMemories: [
        {
          id: "mem-4",
          title: "Bekal Keranjang Merantau",
          snippet: "Bungkus bekal penuh kasih untuk perjalanan jauh anak rantau.",
          fullStory:
            "Karena Rendang awet alami melalui karamelisasi dan rempah antiseptik, para ibu membungkusnya dalam keranjang tertutup untuk anak yang merantau sekolah atau bekerja. Membukanya di tanah perantauan terasa seperti berada di dapur rumah.",
          authorTag: "Tradisi Merantau",
          handwrittenDate: "Bekal Merantau, 2005",
          postmarkLocation: "Tanah Perantauan",
        },
        {
          id: "mem-5",
          title: "Kehangatan Bantuan Bencana",
          snippet: "Berintonn-ton Rendang dikirim sebagai penghangat korban bencana.",
          fullStory:
            "Saat bencana gempa di Lombok, Palu, dan Cianjur, dapur-dapur di Sumbar memasak berintonn-ton Rendang untuk dikirimkan. Tahan panas tanpa basi, Rendang memberikan gizi dan kehangatan emosional bagi para korban.",
          authorTag: "Solidaritas Kemanusiaan",
          handwrittenDate: "Bantuan Pangan Sumbar, 2018",
          postmarkLocation: "Bantuan Kemanusiaan",
        },
      ],
    },

    gallery: {
      label: "DARI MEJA MAKAN",
      title: "Dibuat perlahan. Dikenang selamanya.",
      scriptSubtitle: "Momen hangat & album warisan Minangkabau.",
      intro: "Sekilas tekstur, kehangatan api, bumbu rempah, dan santapan bersama.",
      items: [
        {
          id: "gal-1",
          src: "/images/gallery/rendang-1.jpg",
          alt: "Rendang Daging Minangkabau dimasak perlahan di kuali",
          title: "Rendang Daging Minang",
          caption: "Rendang daging sapi pekat yang dimasak perlahan di atas tungku kayu bakar.",
          tag: "Kuliner",
          handwrittenCaption: "Rendang Daging Minang nan Kaledat",
          rotation: "-rotate-2",
        },
        {
          id: "gal-2",
          src: "/images/gallery/rendang-2.jpg",
          alt: "Rempah-rempah segar: serai, lengkuas, cabai merah, dan kunyit",
          title: "Rempah & Aromatik",
          caption: "Bumbu segar tumbuk tangan siap disatukan dengan santan kental.",
          tag: "Bahan",
          handwrittenCaption: "Rempah segar ditumbuk di atas batu",
          rotation: "rotate-2",
        },
        {
          id: "gal-3",
          src: "/images/gallery/rendang-3.jpg",
          alt: "Kuali besi besar mendidih di atas tungku kayu bakar",
          title: "Tungku Api",
          caption: "Kesabaran dan panas yang stabil mengubah bahan sederhana menjadi mahakarya lezat.",
          tag: "Proses",
          handwrittenCaption: "Api tenang di bawah kuali perlahan",
          rotation: "-rotate-1",
        },
        {
          id: "gal-4",
          src: "/images/gallery/rendang-4.jpg",
          alt: "Rendang disajikan dengan nasi hangat di atas sajian daun pisang",
          title: "Disajikan Berdua",
          caption: "Dinikmati bersama keluarga di atas piring bermerek daun pisang dan sambal.",
          tag: "Kebersamaan",
          handwrittenCaption: "Disajikan hangat di atas daun pisang",
          rotation: "rotate-3",
        },
      ],
    },

    closing: {
      title: "Semoga setiap perjalanan membawamu pulang.",
      scriptSignature: "Dengan kasih dan kehangatan, dari Dapur Minangkabau.",
      description:
        "Sebagian resep tertulis di kertas. Sebagian lagi dikenang lewat aroma, tawa, dan kebersamaan di sekeliling meja makan.",
      cta: "Kembali ke Awal",
    },

    footer: {
      brand: "Raso Pulang",
      tagline: "Surat Cinta Digital untuk Rendang",
      description:
        "Merayakan hidangan, keluarga, dan warisan kuliner Minangkabau melalui pengalaman web yang hangat.",
      links: [
        { label: "Kisah", href: "#story" },
        { label: "Filosofi", href: "#philosophy" },
        { label: "Ragam", href: "#varieties" },
        { label: "Bahan", href: "#ingredients" },
        { label: "Perjalanan", href: "#journey" },
        { label: "Kenangan", href: "#memories" },
        { label: "Galeri", href: "#gallery" },
      ],
      githubUrl: "https://github.com",
      devCommunityUrl: "https://dev.to",
      copyright: "© 2026 Raso Pulang • Dikembangkan untuk Frontend Challenge. Diarsitekturi dengan Next.js 16, TypeScript & Tailwind CSS.",
      disclaimer: "Diarsitekturi dengan Web Audio API modern dan prinsip desain editorial responsif.",
    },
  },
};
