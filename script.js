/*
=========================================================
COOKBOOK
MULTI-LANGUAGE INDIAN FOOD RECIPE APPLICATION

SUPPORTED:
English
Telugu
Hindi
Tamil
Malayalam

IMPORTANT:
Put YOUR YouTube API key here.
=========================================================
*/

const YOUTUBE_API_KEY =
  "AIzaSyCQp9Fy5vpJkySQyoKHD1pJWWXMw24GRI4";


/* =====================================================
   BASIC HELPERS
===================================================== */

const $ = selector =>
  document.querySelector(selector);

const $$ = selector =>
  [...document.querySelectorAll(selector)];

function getData(key, fallback) {

  try {

    const value =
      localStorage.getItem(key);

    return value
      ? JSON.parse(value)
      : fallback;

  } catch {

    return fallback;
  }
}

function saveData(key, value) {

  localStorage.setItem(
    key,
    JSON.stringify(value)
  );
}

function escapeHTML(value) {

  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function toast(message) {

  let box = $("#toast");

  if (!box) {

    box =
      document.createElement("div");

    box.id = "toast";
    box.className = "toast";

    document.body.appendChild(box);
  }

  box.textContent = message;

  box.classList.add("show");

  clearTimeout(window.toastTimer);

  window.toastTimer =
    setTimeout(() => {

      box.classList.remove("show");

    }, 2500);
}


/* =====================================================
   COMPLETE UI TRANSLATIONS
===================================================== */

const UI = {

  en: {

    appSubtitle:
      "Indian Food Recipe App",

    login:
      "Login",

    createAccount:
      "Create Account",

    welcome:
      "Welcome Back 👋",

    loginDescription:
      "Login to explore delicious Indian recipes.",

    email:
      "Email",

    password:
      "Password",

    fullName:
      "Full Name",

    user:
      "User",

    admin:
      "Admin",

    demoAdmin:
      "Demo Admin",

    home:
      "Home",

    favorites:
      "Favorites",

    collections:
      "Collections",

    planner:
      "Meal Plan",

    shopping:
      "Shopping List",

    submit:
      "Submit Recipe",

    community:
      "Community",

    profile:
      "Profile",

    logout:
      "Logout",

    discover:
      "Discover Delicious Indian Food 🍛",

    discoverText:
      "Search, save, cook and share your favourite Indian recipes.",

    recipes:
      "Recipes",

    search:
      "Search recipe, ingredient or cuisine...",

    ingredient:
      "Ingredient",

    allCategories:
      "All Categories",

    all:
      "All",

    veg:
      "Veg",

    nonVeg:
      "Non-Veg",

    breakfast:
      "Breakfast",

    lunch:
      "Lunch",

    dinner:
      "Dinner",

    snacks:
      "Snacks",

    desserts:
      "Desserts",

    drinks:
      "Drinks",

    clear:
      "Clear",

    view:
      "View Recipe",

    favorite:
      "Favorite",

    ingredients:
      "Ingredients",

    procedure:
      "Step-by-Step Procedure",

    videos:
      "Cooking Videos",

    share:
      "Share",

    print:
      "Print",

    rate:
      "Rate This Recipe",

    saved:
      "Saved",

    noRecipes:
      "No recipes found.",

    noFavorites:
      "No favorite recipes yet.",

    myCollections:
      "My Collections",

    collectionText:
      "Create your personal recipe collections.",

    newCollection:
      "+ New Collection",

    noCollections:
      "Create your first collection.",

    mealPlanner:
      "Meal Planner",

    mealPlannerText:
      "Plan your meals for the week.",

    add:
      "Add",

    noPlans:
      "No meals planned yet.",

    delete:
      "Delete",

    shoppingText:
      "Add ingredients you need.",

    enterIngredient:
      "Enter ingredient",

    emptyShopping:
      "Your shopping list is empty.",

    submitTitle:
      "Submit New Recipe",

    submitText:
      "Share your own recipe with the CookBook community.",

    recipeName:
      "Recipe Name",

    ingredientsPlaceholder:
      "Ingredients separated by commas",

    stepsPlaceholder:
      "Write one step on each line",

    imageURL:
      "Recipe Image URL (optional)",

    submitButton:
      "Submit Recipe",

    communityTitle:
      "Community Cooking",

    communityText:
      "Recipes shared by CookBook users.",

    communityEmpty:
      "Community recipes will appear here after Admin approval.",

    by:
      "By",

    profileTitle:
      "Profile",

    indianFood:
      "Indian Food",

    noVideo:
      "No embeddable cooking video was found.",

    searching:
      "Searching for cooking videos...",

    youtubeError:
      "YouTube API key is not configured.",

    youtubeSearch:
      "Search on YouTube",

    ratingSaved:
      "Rating saved ⭐",

    favoriteAdded:
      "Added to Favorites ❤️",

    favoriteRemoved:
      "Removed from Favorites",

    collectionCreated:
      "Collection created.",

    addedCollection:
      "Added to collection.",

    mealAdded:
      "Meal added to planner.",

    recipeSubmitted:
      "Recipe submitted for Admin approval.",

    accountCreated:
      "Account created successfully. Please login.",

    invalidLogin:
      "Invalid email or password.",

    blocked:
      "This account is blocked.",

    emailExists:
      "Email already exists.",

    adminDashboard:
      "Admin Dashboard",

    recipeManager:
      "Recipe Manager",

    users:
      "Users",

    submissions:
      "Submissions",

    settings:
      "Settings",

    recipeCount:
      "Recipes",

    userCount:
      "Users",

    submissionCount:
      "Submissions",

    feedback:
      "Feedback",

    features:
      "CookBook Features",

    addRecipe:
      "+ Add Recipe",

    searchRecipe:
      "Search recipe",

    userManager:
      "User Manager",

    block:
      "Block",

    unblock:
      "Unblock",

    approve:
      "Approve",

    reject:
      "Reject",

    youtubeSettings:
      "YouTube Data API",

    youtubeHint:
      "Paste your YouTube Data API v3 key here.",

    saveKey:
      "Save YouTube API Key",

    dataManagement:
      "Data Management",

    exportData:
      "Export Data",

    importData:
      "Import Data",

    recipeDatabase:
      "Recipe Database",

    resetRecipes:
      "Reset 180 Recipes",

    resetConfirm:
      "Reset all seeded recipes?",

    recipeAdded:
      "Recipe added.",

    recipeDeleted:
      "Recipe deleted.",

    recipeApproved:
      "Recipe approved.",

    recipeRejected:
      "Recipe rejected.",

    keySaved:
      "YouTube API key saved.",

    dataImported:
      "Data imported.",

    invalidJSON:
      "Invalid JSON file."

  },


  te: {

    appSubtitle:
      "భారతీయ వంటకాల రెసిపీ యాప్",

    login:
      "లాగిన్",

    createAccount:
      "ఖాతా సృష్టించండి",

    welcome:
      "తిరిగి స్వాగతం 👋",

    loginDescription:
      "రుచికరమైన భారతీయ వంటకాలను చూడటానికి లాగిన్ అవ్వండి.",

    email:
      "ఈమెయిల్",

    password:
      "పాస్‌వర్డ్",

    fullName:
      "పూర్తి పేరు",

    user:
      "యూజర్",

    admin:
      "అడ్మిన్",

    demoAdmin:
      "డెమో అడ్మిన్",

    home:
      "హోమ్",

    favorites:
      "ఇష్టమైనవి",

    collections:
      "కలెక్షన్లు",

    planner:
      "మీల్ ప్లాన్",

    shopping:
      "షాపింగ్ లిస్ట్",

    submit:
      "రెసిపీ పంపండి",

    community:
      "కమ్యూనిటీ",

    profile:
      "ప్రొఫైల్",

    logout:
      "లాగ్ అవుట్",

    discover:
      "రుచికరమైన భారతీయ వంటకాలను కనుగొనండి 🍛",

    discoverText:
      "వెతకండి, సేవ్ చేయండి, వండి, మీకు ఇష్టమైన భారతీయ వంటకాలను షేర్ చేయండి.",

    recipes:
      "రెసిపీలు",

    search:
      "రెసిపీ, పదార్థం లేదా వంటకం వెతకండి...",

    ingredient:
      "పదార్థం",

    allCategories:
      "అన్ని వర్గాలు",

    all:
      "అన్ని",

    veg:
      "శాకాహారం",

    nonVeg:
      "మాంసాహారం",

    breakfast:
      "అల్పాహారం",

    lunch:
      "మధ్యాహ్న భోజనం",

    dinner:
      "రాత్రి భోజనం",

    snacks:
      "స్నాక్స్",

    desserts:
      "తీపి వంటలు",

    drinks:
      "పానీయాలు",

    clear:
      "క్లియర్",

    view:
      "రెసిపీ చూడండి",

    favorite:
      "ఇష్టం",

    ingredients:
      "పదార్థాలు",

    procedure:
      "దశలవారీ విధానం",

    videos:
      "వంట వీడియోలు",

    share:
      "షేర్",

    print:
      "ప్రింట్",

    rate:
      "రెసిపీకి రేటింగ్ ఇవ్వండి",

    saved:
      "సేవ్ చేయబడింది",

    noRecipes:
      "రెసిపీలు కనిపించలేదు.",

    noFavorites:
      "ఇంకా ఇష్టమైన రెసిపీలు లేవు.",

    myCollections:
      "నా కలెక్షన్లు",

    collectionText:
      "మీ వ్యక్తిగత రెసిపీ కలెక్షన్లను సృష్టించండి.",

    newCollection:
      "+ కొత్త కలెక్షన్",

    noCollections:
      "మీ మొదటి కలెక్షన్‌ను సృష్టించండి.",

    mealPlanner:
      "మీల్ ప్లానర్",

    mealPlannerText:
      "వారానికి మీ భోజనాలను ప్లాన్ చేసుకోండి.",

    add:
      "జోడించండి",

    noPlans:
      "ఇంకా భోజనాలు ప్లాన్ చేయలేదు.",

    delete:
      "తొలగించండి",

    shoppingText:
      "మీకు కావాల్సిన పదార్థాలను జోడించండి.",

    enterIngredient:
      "పదార్థాన్ని నమోదు చేయండి",

    emptyShopping:
      "మీ షాపింగ్ లిస్ట్ ఖాళీగా ఉంది.",

    submitTitle:
      "కొత్త రెసిపీ పంపండి",

    submitText:
      "మీ స్వంత రెసిపీని CookBook కమ్యూనిటీతో పంచుకోండి.",

    recipeName:
      "రెసిపీ పేరు",

    ingredientsPlaceholder:
      "పదార్థాలను కామాలతో వేరు చేసి రాయండి",

    stepsPlaceholder:
      "ప్రతి దశను కొత్త లైన్‌లో రాయండి",

    imageURL:
      "రెసిపీ ఇమేజ్ URL (ఐచ్ఛికం)",

    submitButton:
      "రెసిపీ పంపండి",

    communityTitle:
      "కమ్యూనిటీ వంట",

    communityText:
      "CookBook యూజర్లు పంచుకున్న రెసిపీలు.",

    communityEmpty:
      "అడ్మిన్ ఆమోదించిన తర్వాత కమ్యూనిటీ రెసిపీలు ఇక్కడ కనిపిస్తాయి.",

    by:
      "రచయిత",

    profileTitle:
      "ప్రొఫైల్",

    indianFood:
      "భారతీయ వంటకాలు",

    noVideo:
      "ఎంబెడ్ చేయగల వంట వీడియో దొరకలేదు.",

    searching:
      "వంట వీడియోల కోసం వెతుకుతోంది...",

    youtubeError:
      "YouTube API కీ సెట్ చేయలేదు.",

    youtubeSearch:
      "YouTubeలో వెతకండి",

    ratingSaved:
      "రేటింగ్ సేవ్ చేయబడింది ⭐",

    favoriteAdded:
      "ఇష్టమైన వాటిలో జోడించబడింది ❤️",

    favoriteRemoved:
      "ఇష్టమైన వాటి నుండి తొలగించబడింది",

    collectionCreated:
      "కలెక్షన్ సృష్టించబడింది.",

    addedCollection:
      "కలెక్షన్‌లో జోడించబడింది.",

    mealAdded:
      "మీల్ ప్లానర్‌లో జోడించబడింది.",

    recipeSubmitted:
      "రెసిపీ అడ్మిన్ ఆమోదం కోసం పంపబడింది.",

    accountCreated:
      "ఖాతా విజయవంతంగా సృష్టించబడింది. లాగిన్ అవ్వండి.",

    invalidLogin:
      "ఈమెయిల్ లేదా పాస్‌వర్డ్ తప్పుగా ఉంది.",

    blocked:
      "ఈ ఖాతా బ్లాక్ చేయబడింది.",

    emailExists:
      "ఈమెయిల్ ఇప్పటికే ఉంది.",

    adminDashboard:
      "అడ్మిన్ డ్యాష్‌బోర్డ్",

    recipeManager:
      "రెసిపీ మేనేజర్",

    users:
      "యూజర్లు",

    submissions:
      "సమర్పణలు",

    settings:
      "సెట్టింగ్స్",

    recipeCount:
      "రెసిపీలు",

    userCount:
      "యూజర్లు",

    submissionCount:
      "సమర్పణలు",

    feedback:
      "ఫీడ్‌బ్యాక్",

    features:
      "CookBook ఫీచర్లు",

    addRecipe:
      "+ రెసిపీ జోడించండి",

    searchRecipe:
      "రెసిపీ వెతకండి",

    userManager:
      "యూజర్ మేనేజర్",

    block:
      "బ్లాక్",

    unblock:
      "అన్‌బ్లాక్",

    approve:
      "ఆమోదించండి",

    reject:
      "తిరస్కరించండి",

    youtubeSettings:
      "YouTube డేటా API",

    youtubeHint:
      "మీ YouTube Data API v3 కీని ఇక్కడ నమోదు చేయండి.",

    saveKey:
      "YouTube API కీ సేవ్ చేయండి",

    dataManagement:
      "డేటా మేనేజ్‌మెంట్",

    exportData:
      "డేటా ఎగుమతి",

    importData:
      "డేటా దిగుమతి",

    recipeDatabase:
      "రెసిపీ డేటాబేస్",

    resetRecipes:
      "180 రెసిపీలను రీసెట్ చేయండి",

    resetConfirm:
      "అన్ని రెసిపీలను రీసెట్ చేయాలా?",

    recipeAdded:
      "రెసిపీ జోడించబడింది.",

    recipeDeleted:
      "రెసిపీ తొలగించబడింది.",

    recipeApproved:
      "రెసిపీ ఆమోదించబడింది.",

    recipeRejected:
      "రెసిపీ తిరస్కరించబడింది.",

    keySaved:
      "YouTube API కీ సేవ్ చేయబడింది.",

    dataImported:
      "డేటా దిగుమతి చేయబడింది.",

    invalidJSON:
      "చెల్లని JSON ఫైల్."
  },


  hi: {

    appSubtitle: "भारतीय व्यंजन रेसिपी ऐप",
    login: "लॉगिन",
    createAccount: "खाता बनाएं",
    welcome: "वापस स्वागत है 👋",
    loginDescription: "स्वादिष्ट भारतीय रेसिपी देखने के लिए लॉगिन करें।",
    email: "ईमेल",
    password: "पासवर्ड",
    fullName: "पूरा नाम",
    user: "यूज़र",
    admin: "एडमिन",
    demoAdmin: "डेमो एडमिन",
    home: "होम",
    favorites: "पसंदीदा",
    collections: "कलेक्शन",
    planner: "मील प्लान",
    shopping: "शॉपिंग सूची",
    submit: "रेसिपी भेजें",
    community: "कम्युनिटी",
    profile: "प्रोफाइल",
    logout: "लॉगआउट",
    discover: "स्वादिष्ट भारतीय भोजन खोजें 🍛",
    discoverText: "खोजें, सेव करें, पकाएं और अपनी पसंदीदा रेसिपी शेयर करें।",
    recipes: "रेसिपी",
    search: "रेसिपी, सामग्री या व्यंजन खोजें...",
    ingredient: "सामग्री",
    allCategories: "सभी श्रेणियां",
    all: "सभी",
    veg: "शाकाहारी",
    nonVeg: "मांसाहारी",
    breakfast: "नाश्ता",
    lunch: "दोपहर का भोजन",
    dinner: "रात का भोजन",
    snacks: "स्नैक्स",
    desserts: "मिठाई",
    drinks: "पेय",
    clear: "साफ करें",
    view: "रेसिपी देखें",
    favorite: "पसंद",
    ingredients: "सामग्री",
    procedure: "स्टेप-बाय-स्टेप विधि",
    videos: "कुकिंग वीडियो",
    share: "शेयर",
    print: "प्रिंट",
    rate: "रेसिपी को रेट करें",
    saved: "सेव किया गया",
    noRecipes: "कोई रेसिपी नहीं मिली।",
    noFavorites: "अभी कोई पसंदीदा रेसिपी नहीं है।",
    myCollections: "मेरे कलेक्शन",
    collectionText: "अपने व्यक्तिगत रेसिपी कलेक्शन बनाएं।",
    newCollection: "+ नया कलेक्शन",
    noCollections: "अपना पहला कलेक्शन बनाएं।",
    mealPlanner: "मील प्लानर",
    mealPlannerText: "पूरे सप्ताह के भोजन की योजना बनाएं।",
    add: "जोड़ें",
    noPlans: "अभी कोई भोजन प्लान नहीं है।",
    delete: "हटाएं",
    shoppingText: "अपनी जरूरत की सामग्री जोड़ें।",
    enterIngredient: "सामग्री लिखें",
    emptyShopping: "आपकी शॉपिंग सूची खाली है।",
    submitTitle: "नई रेसिपी भेजें",
    submitText: "अपनी रेसिपी CookBook कम्युनिटी के साथ शेयर करें।",
    recipeName: "रेसिपी का नाम",
    ingredientsPlaceholder: "सामग्री को कॉमा से अलग करें",
    stepsPlaceholder: "हर स्टेप को नई लाइन में लिखें",
    imageURL: "रेसिपी इमेज URL (वैकल्पिक)",
    submitButton: "रेसिपी भेजें",
    communityTitle: "कम्युनिटी कुकिंग",
    communityText: "CookBook यूज़र्स द्वारा शेयर की गई रेसिपी।",
    communityEmpty: "एडमिन की मंजूरी के बाद रेसिपी यहां दिखाई देंगी।",
    by: "द्वारा",
    profileTitle: "प्रोफाइल",
    indianFood: "भारतीय भोजन",
    noVideo: "कोई एम्बेड करने योग्य वीडियो नहीं मिला।",
    searching: "कुकिंग वीडियो खोजे जा रहे हैं...",
    youtubeError: "YouTube API key सेट नहीं है।",
    youtubeSearch: "YouTube पर खोजें",
    ratingSaved: "रेटिंग सेव हो गई ⭐",
    favoriteAdded: "पसंदीदा में जोड़ा गया ❤️",
    favoriteRemoved: "पसंदीदा से हटाया गया",
    collectionCreated: "कलेक्शन बनाया गया।",
    addedCollection: "कलेक्शन में जोड़ा गया।",
    mealAdded: "मील प्लानर में जोड़ा गया।",
    recipeSubmitted: "रेसिपी एडमिन की मंजूरी के लिए भेजी गई।",
    accountCreated: "खाता सफलतापूर्वक बनाया गया। लॉगिन करें।",
    invalidLogin: "ईमेल या पासवर्ड गलत है।",
    blocked: "यह खाता ब्लॉक है।",
    emailExists: "ईमेल पहले से मौजूद है।",
    adminDashboard: "एडमिन डैशबोर्ड",
    recipeManager: "रेसिपी मैनेजर",
    users: "यूज़र्स",
    submissions: "सबमिशन",
    settings: "सेटिंग्स",
    recipeCount: "रेसिपी",
    userCount: "यूज़र्स",
    submissionCount: "सबमिशन",
    feedback: "फीडबैक",
    features: "CookBook फीचर्स",
    addRecipe: "+ रेसिपी जोड़ें",
    searchRecipe: "रेसिपी खोजें",
    userManager: "यूज़र मैनेजर",
    block: "ब्लॉक",
    unblock: "अनब्लॉक",
    approve: "मंजूर करें",
    reject: "अस्वीकार करें",
    youtubeSettings: "YouTube Data API",
    youtubeHint: "अपनी YouTube Data API v3 key यहां डालें।",
    saveKey: "YouTube API Key सेव करें",
    dataManagement: "डेटा प्रबंधन",
    exportData: "डेटा एक्सपोर्ट",
    importData: "डेटा इम्पोर्ट",
    recipeDatabase: "रेसिपी डेटाबेस",
    resetRecipes: "180 रेसिपी रीसेट करें",
    resetConfirm: "सभी रेसिपी रीसेट करें?",
    recipeAdded: "रेसिपी जोड़ी गई।",
    recipeDeleted: "रेसिपी हटाई गई।",
    recipeApproved: "रेसिपी मंजूर की गई।",
    recipeRejected: "रेसिपी अस्वीकार की गई।",
    keySaved: "YouTube API key सेव हो गई।",
    dataImported: "डेटा इम्पोर्ट हो गया।",
    invalidJSON: "अमान्य JSON फाइल।"
  },


  ta: {

    appSubtitle: "இந்திய உணவு செய்முறை செயலி",
    login: "உள்நுழைவு",
    createAccount: "கணக்கை உருவாக்கு",
    welcome: "மீண்டும் வரவேற்கிறோம் 👋",
    loginDescription: "சுவையான இந்திய உணவு செய்முறைகளை பார்க்க உள்நுழையுங்கள்.",
    email: "மின்னஞ்சல்",
    password: "கடவுச்சொல்",
    fullName: "முழு பெயர்",
    user: "பயனர்",
    admin: "நிர்வாகி",
    demoAdmin: "டெமோ நிர்வாகி",
    home: "முகப்பு",
    favorites: "விருப்பங்கள்",
    collections: "சேமிப்புகள்",
    planner: "உணவு திட்டம்",
    shopping: "ஷாப்பிங் பட்டியல்",
    submit: "செய்முறை அனுப்பு",
    community: "சமூகம்",
    profile: "சுயவிவரம்",
    logout: "வெளியேறு",
    discover: "சுவையான இந்திய உணவுகளை கண்டுபிடிக்கவும் 🍛",
    discoverText: "தேடுங்கள், சேமியுங்கள், சமைத்து பகிருங்கள்.",
    recipes: "செய்முறைகள்",
    search: "செய்முறை, பொருள் அல்லது உணவு தேடுங்கள்...",
    ingredient: "பொருள்",
    allCategories: "அனைத்து வகைகள்",
    all: "அனைத்தும்",
    veg: "சைவம்",
    nonVeg: "அசைவம்",
    breakfast: "காலை உணவு",
    lunch: "மதிய உணவு",
    dinner: "இரவு உணவு",
    snacks: "சிற்றுண்டி",
    desserts: "இனிப்பு",
    drinks: "பானங்கள்",
    clear: "அழி",
    view: "செய்முறையை காண்க",
    favorite: "விருப்பம்",
    ingredients: "பொருட்கள்",
    procedure: "படிப்படியான செய்முறை",
    videos: "சமையல் வீடியோக்கள்",
    share: "பகிர்",
    print: "அச்சிடு",
    rate: "மதிப்பிடுங்கள்",
    saved: "சேமிக்கப்பட்டது",
    noRecipes: "செய்முறை எதுவும் கிடைக்கவில்லை.",
    noFavorites: "விருப்பமான செய்முறைகள் இல்லை.",
    myCollections: "எனது சேமிப்புகள்",
    collectionText: "உங்கள் தனிப்பட்ட செய்முறை சேமிப்புகளை உருவாக்குங்கள்.",
    newCollection: "+ புதிய சேமிப்பு",
    noCollections: "உங்கள் முதல் சேமிப்பை உருவாக்குங்கள்.",
    mealPlanner: "உணவு திட்டமிடுபவர்",
    mealPlannerText: "வார உணவை திட்டமிடுங்கள்.",
    add: "சேர்",
    noPlans: "உணவு திட்டம் இல்லை.",
    delete: "நீக்கு",
    shoppingText: "தேவையான பொருட்களை சேர்க்கவும்.",
    enterIngredient: "பொருளை உள்ளிடவும்",
    emptyShopping: "ஷாப்பிங் பட்டியல் காலியாக உள்ளது.",
    submitTitle: "புதிய செய்முறை அனுப்பு",
    submitText: "உங்கள் செய்முறையை CookBook சமூகத்துடன் பகிருங்கள்.",
    recipeName: "செய்முறை பெயர்",
    ingredientsPlaceholder: "பொருட்களை காற்புள்ளியால் பிரிக்கவும்",
    stepsPlaceholder: "ஒவ்வொரு படியையும் புதிய வரியில் எழுதவும்",
    imageURL: "செய்முறை பட URL (விருப்பம்)",
    submitButton: "செய்முறை அனுப்பு",
    communityTitle: "சமூக சமையல்",
    communityText: "CookBook பயனர்கள் பகிர்ந்த செய்முறைகள்.",
    communityEmpty: "நிர்வாகி அனுமதித்த பிறகு செய்முறைகள் இங்கே தோன்றும்.",
    by: "மூலம்",
    profileTitle: "சுயவிவரம்",
    indianFood: "இந்திய உணவு",
    noVideo: "சமையல் வீடியோ கிடைக்கவில்லை.",
    searching: "சமையல் வீடியோக்களை தேடுகிறது...",
    youtubeError: "YouTube API key அமைக்கப்படவில்லை.",
    youtubeSearch: "YouTube இல் தேடுங்கள்",
    ratingSaved: "மதிப்பீடு சேமிக்கப்பட்டது ⭐",
    favoriteAdded: "விருப்பங்களில் சேர்க்கப்பட்டது ❤️",
    favoriteRemoved: "விருப்பங்களில் இருந்து நீக்கப்பட்டது",
    collectionCreated: "சேமிப்பு உருவாக்கப்பட்டது.",
    addedCollection: "சேமிப்பில் சேர்க்கப்பட்டது.",
    mealAdded: "உணவு திட்டத்தில் சேர்க்கப்பட்டது.",
    recipeSubmitted: "செய்முறை நிர்வாகி அனுமதிக்க அனுப்பப்பட்டது.",
    accountCreated: "கணக்கு உருவாக்கப்பட்டது. உள்நுழையுங்கள்.",
    invalidLogin: "மின்னஞ்சல் அல்லது கடவுச்சொல் தவறானது.",
    blocked: "இந்த கணக்கு தடுக்கப்பட்டுள்ளது.",
    emailExists: "மின்னஞ்சல் ஏற்கனவே உள்ளது.",
    adminDashboard: "நிர்வாகி டாஷ்போர்டு",
    recipeManager: "செய்முறை மேலாளர்",
    users: "பயனர்கள்",
    submissions: "சமர்ப்பிப்புகள்",
    settings: "அமைப்புகள்",
    recipeCount: "செய்முறைகள்",
    userCount: "பயனர்கள்",
    submissionCount: "சமர்ப்பிப்புகள்",
    feedback: "கருத்து",
    features: "CookBook அம்சங்கள்",
    addRecipe: "+ செய்முறை சேர்",
    searchRecipe: "செய்முறையை தேடு",
    userManager: "பயனர் மேலாளர்",
    block: "தடு",
    unblock: "தடையை நீக்கு",
    approve: "அனுமதி",
    reject: "நிராகரி",
    youtubeSettings: "YouTube Data API",
    youtubeHint: "உங்கள் YouTube Data API v3 key-ஐ இங்கே உள்ளிடவும்.",
    saveKey: "YouTube API Key சேமிக்கவும்",
    dataManagement: "தரவு மேலாண்மை",
    exportData: "தரவு ஏற்றுமதி",
    importData: "தரவு இறக்குமதி",
    recipeDatabase: "செய்முறை தரவுத்தளம்",
    resetRecipes: "180 செய்முறைகளை மீட்டமை",
    resetConfirm: "அனைத்து செய்முறைகளையும் மீட்டமைக்கவா?",
    recipeAdded: "செய்முறை சேர்க்கப்பட்டது.",
    recipeDeleted: "செய்முறை நீக்கப்பட்டது.",
    recipeApproved: "செய்முறை அனுமதிக்கப்பட்டது.",
    recipeRejected: "செய்முறை நிராகரிக்கப்பட்டது.",
    keySaved: "YouTube API key சேமிக்கப்பட்டது.",
    dataImported: "தரவு இறக்குமதி செய்யப்பட்டது.",
    invalidJSON: "தவறான JSON கோப்பு."
  },


  ml: {

    appSubtitle: "ഇന്ത്യൻ ഭക്ഷണ റെസിപ്പി ആപ്പ്",
    login: "ലോഗിൻ",
    createAccount: "അക്കൗണ്ട് സൃഷ്ടിക്കുക",
    welcome: "വീണ്ടും സ്വാഗതം 👋",
    loginDescription: "രുചികരമായ ഇന്ത്യൻ റെസിപ്പികൾ കാണാൻ ലോഗിൻ ചെയ്യുക.",
    email: "ഇമെയിൽ",
    password: "പാസ്‌വേഡ്",
    fullName: "പൂർണ്ണ പേര്",
    user: "യൂസർ",
    admin: "അഡ്മിൻ",
    demoAdmin: "ഡെമോ അഡ്മിൻ",
    home: "ഹോം",
    favorites: "ഇഷ്ടപ്പെട്ടവ",
    collections: "ശേഖരങ്ങൾ",
    planner: "മീൽ പ്ലാൻ",
    shopping: "ഷോപ്പിംഗ് ലിസ്റ്റ്",
    submit: "റെസിപ്പി അയയ്ക്കുക",
    community: "കമ്മ്യൂണിറ്റി",
    profile: "പ്രൊഫൈൽ",
    logout: "ലോഗൗട്ട്",
    discover: "രുചികരമായ ഇന്ത്യൻ ഭക്ഷണം കണ്ടെത്തൂ 🍛",
    discoverText: "തിരയുക, സേവ് ചെയ്യുക, പാചകം ചെയ്യുക, പങ്കിടുക.",
    recipes: "റെസിപ്പികൾ",
    search: "റെസിപ്പി, ചേരുവ അല്ലെങ്കിൽ വിഭവം തിരയുക...",
    ingredient: "ചേരുവ",
    allCategories: "എല്ലാ വിഭാഗങ്ങളും",
    all: "എല്ലാം",
    veg: "വെജ്",
    nonVeg: "നോൺ-വെജ്",
    breakfast: "പ്രഭാതഭക്ഷണം",
    lunch: "ഉച്ചഭക്ഷണം",
    dinner: "അത്താഴം",
    snacks: "സ്നാക്ക്സ്",
    desserts: "മധുരപലഹാരം",
    drinks: "പാനീയങ്ങൾ",
    clear: "മായ്ക്കുക",
    view: "റെസിപ്പി കാണുക",
    favorite: "ഇഷ്ടം",
    ingredients: "ചേരുവകൾ",
    procedure: "ഘട്ടംഘട്ടമായ വിധം",
    videos: "പാചക വീഡിയോകൾ",
    share: "പങ്കിടുക",
    print: "പ്രിന്റ്",
    rate: "റേറ്റിംഗ് നൽകുക",
    saved: "സേവ് ചെയ്തു",
    noRecipes: "റെസിപ്പി കണ്ടെത്തിയില്ല.",
    noFavorites: "ഇഷ്ടപ്പെട്ട റെസിപ്പികൾ ഇല്ല.",
    myCollections: "എന്റെ ശേഖരങ്ങൾ",
    collectionText: "നിങ്ങളുടെ വ്യക്തിഗത റെസിപ്പി ശേഖരങ്ങൾ സൃഷ്ടിക്കുക.",
    newCollection: "+ പുതിയ ശേഖരം",
    noCollections: "നിങ്ങളുടെ ആദ്യ ശേഖരം സൃഷ്ടിക്കുക.",
    mealPlanner: "മീൽ പ്ലാനർ",
    mealPlannerText: "ആഴ്ചയിലെ ഭക്ഷണം പ്ലാൻ ചെയ്യുക.",
    add: "ചേർക്കുക",
    noPlans: "ഭക്ഷണം പ്ലാൻ ചെയ്തിട്ടില്ല.",
    delete: "നീക്കം ചെയ്യുക",
    shoppingText: "ആവശ്യമായ ചേരുവകൾ ചേർക്കുക.",
    enterIngredient: "ചേരുവ നൽകുക",
    emptyShopping: "ഷോപ്പിംഗ് ലിസ്റ്റ് ശൂന്യമാണ്.",
    submitTitle: "പുതിയ റെസിപ്പി അയയ്ക്കുക",
    submitText: "നിങ്ങളുടെ റെസിപ്പി CookBook കമ്മ്യൂണിറ്റിയുമായി പങ്കിടുക.",
    recipeName: "റെസിപ്പിയുടെ പേര്",
    ingredientsPlaceholder: "ചേരുവകൾ കോമ ഉപയോഗിച്ച് വേർതിരിക്കുക",
    stepsPlaceholder: "ഓരോ ഘട്ടവും പുതിയ വരിയിൽ എഴുതുക",
    imageURL: "റെസിപ്പി ഇമേജ് URL (ഓപ്ഷണൽ)",
    submitButton: "റെസിപ്പി അയയ്ക്കുക",
    communityTitle: "കമ്മ്യൂണിറ്റി പാചകം",
    communityText: "CookBook യൂസർമാർ പങ്കിട്ട റെസിപ്പികൾ.",
    communityEmpty: "അഡ്മിൻ അംഗീകരിച്ച ശേഷം റെസിപ്പികൾ ഇവിടെ കാണാം.",
    by: "രചിച്ചത്",
    profileTitle: "പ്രൊഫൈൽ",
    indianFood: "ഇന്ത്യൻ ഭക്ഷണം",
    noVideo: "പാചക വീഡിയോ കണ്ടെത്തിയില്ല.",
    searching: "പാചക വീഡിയോകൾ തിരയുന്നു...",
    youtubeError: "YouTube API key സജ്ജീകരിച്ചിട്ടില്ല.",
    youtubeSearch: "YouTube-ൽ തിരയുക",
    ratingSaved: "റേറ്റിംഗ് സേവ് ചെയ്തു ⭐",
    favoriteAdded: "ഇഷ്ടപ്പെട്ടവയിൽ ചേർത്തു ❤️",
    favoriteRemoved: "ഇഷ്ടപ്പെട്ടവയിൽ നിന്ന് നീക്കി",
    collectionCreated: "ശേഖരം സൃഷ്ടിച്ചു.",
    addedCollection: "ശേഖരത്തിൽ ചേർത്തു.",
    mealAdded: "മീൽ പ്ലാനിൽ ചേർത്തു.",
    recipeSubmitted: "റെസിപ്പി അഡ്മിൻ അംഗീകാരത്തിനായി അയച്ചു.",
    accountCreated: "അക്കൗണ്ട് സൃഷ്ടിച്ചു. ലോഗിൻ ചെയ്യുക.",
    invalidLogin: "ഇമെയിൽ അല്ലെങ്കിൽ പാസ്‌വേഡ് തെറ്റാണ്.",
    blocked: "ഈ അക്കൗണ്ട് ബ്ലോക്ക് ചെയ്തിരിക്കുന്നു.",
    emailExists: "ഇമെയിൽ ഇതിനകം നിലവിലുണ്ട്.",
    adminDashboard: "അഡ്മിൻ ഡാഷ്ബോർഡ്",
    recipeManager: "റെസിപ്പി മാനേജർ",
    users: "യൂസർമാർ",
    submissions: "സമർപ്പിക്കലുകൾ",
    settings: "സെറ്റിംഗ്സ്",
    recipeCount: "റെസിപ്പികൾ",
    userCount: "യൂസർമാർ",
    submissionCount: "സമർപ്പിക്കലുകൾ",
    feedback: "ഫീഡ്ബാക്ക്",
    features: "CookBook ഫീച്ചറുകൾ",
    addRecipe: "+ റെസിപ്പി ചേർക്കുക",
    searchRecipe: "റെസിപ്പി തിരയുക",
    userManager: "യൂസർ മാനേജർ",
    block: "ബ്ലോക്ക്",
    unblock: "അൺബ്ലോക്ക്",
    approve: "അംഗീകരിക്കുക",
    reject: "നിരസിക്കുക",
    youtubeSettings: "YouTube Data API",
    youtubeHint: "നിങ്ങളുടെ YouTube Data API v3 key ഇവിടെ നൽകുക.",
    saveKey: "YouTube API Key സേവ് ചെയ്യുക",
    dataManagement: "ഡാറ്റ മാനേജ്മെന്റ്",
    exportData: "ഡാറ്റ എക്സ്പോർട്ട്",
    importData: "ഡാറ്റ ഇംപോർട്ട്",
    recipeDatabase: "റെസിപ്പി ഡാറ്റാബേസ്",
    resetRecipes: "180 റെസിപ്പികൾ റീസെറ്റ് ചെയ്യുക",
    resetConfirm: "എല്ലാ റെസിപ്പികളും റീസെറ്റ് ചെയ്യണോ?",
    recipeAdded: "റെസിപ്പി ചേർത്തു.",
    recipeDeleted: "റെസിപ്പി നീക്കി.",
    recipeApproved: "റെസിപ്പി അംഗീകരിച്ചു.",
    recipeRejected: "റെസിപ്പി നിരസിച്ചു.",
    keySaved: "YouTube API key സേവ് ചെയ്തു.",
    dataImported: "ഡാറ്റ ഇംപോർട്ട് ചെയ്തു.",
    invalidJSON: "അസാധുവായ JSON ഫയൽ."
  }

};


/* =====================================================
   RECIPE DATA
===================================================== */

const recipeCatalog = {

  Breakfast: [
    "Masala Dosa",
    "Plain Dosa",
    "Rava Dosa",
    "Set Dosa",
    "Neer Dosa",
    "Pesarattu",
    "Adai",
    "Idli",
    "Rava Idli",
    "Kanchipuram Idli",
    "Medu Vada",
    "Ven Pongal",
    "Upma",
    "Vegetable Upma",
    "Poha",
    "Kanda Poha",
    "Sabudana Khichdi",
    "Aloo Paratha",
    "Gobi Paratha",
    "Paneer Paratha",
    "Methi Paratha",
    "Moong Dal Chilla",
    "Besan Chilla",
    "Appam",
    "Puttu",
    "Idiyappam",
    "Misal Pav",
    "Pav Bhaji",
    "Thalipeeth",
    "Akki Roti"
  ],

  Lunch: [
    "Hyderabadi Chicken Biryani",
    "Vegetable Biryani",
    "Paneer Biryani",
    "Egg Biryani",
    "Mutton Biryani",
    "Ambur Biryani",
    "Kolkata Chicken Biryani",
    "Lucknowi Chicken Biryani",
    "Donne Biryani",
    "Thalassery Biryani",
    "Fish Biryani",
    "Prawn Biryani",
    "Tomato Rice",
    "Lemon Rice",
    "Coconut Rice",
    "Tamarind Rice",
    "Curd Rice",
    "Jeera Rice",
    "Peas Pulao",
    "Kashmiri Pulao",
    "Bisibele Bath",
    "Vangi Bath",
    "Sambar Rice",
    "Rasam Rice",
    "Dal Khichdi",
    "Bagara Rice",
    "Matar Pulao",
    "Mushroom Biryani",
    "Chicken Pulao",
    "Mutton Pulao"
  ],

  Dinner: [
    "Paneer Butter Masala",
    "Palak Paneer",
    "Kadai Paneer",
    "Shahi Paneer",
    "Matar Paneer",
    "Paneer Tikka Masala",
    "Chole",
    "Rajma Masala",
    "Dal Makhani",
    "Dal Tadka",
    "Dal Fry",
    "Malai Kofta",
    "Aloo Gobi",
    "Aloo Matar",
    "Baingan Bharta",
    "Bhindi Masala",
    "Dum Aloo",
    "Kashmiri Dum Aloo",
    "Veg Korma",
    "Navratan Korma",
    "Mix Veg Curry",
    "Kerala Vegetable Stew",
    "Avial",
    "Kadhi Pakora",
    "Butter Chicken",
    "Chicken Tikka Masala",
    "Kadai Chicken",
    "Chicken Chettinad",
    "Andhra Chicken Curry",
    "Chicken Korma",
    "Mutton Rogan Josh",
    "Mutton Curry",
    "Mutton Korma",
    "Fish Curry",
    "Goan Fish Curry",
    "Kerala Fish Curry",
    "Andhra Fish Pulusu",
    "Prawn Masala",
    "Egg Curry",
    "Chicken Saag",
    "Butter Naan",
    "Garlic Naan",
    "Tandoori Roti",
    "Roomali Roti",
    "Missi Roti",
    "Lachha Paratha",
    "Kerala Parotta",
    "Malabar Parotta",
    "Bhatura",
    "Phulka"
  ],

  Snacks: [
    "Samosa",
    "Aloo Samosa",
    "Onion Samosa",
    "Kachori",
    "Pyaaz Kachori",
    "Moong Dal Kachori",
    "Bread Pakora",
    "Aloo Pakora",
    "Onion Pakora",
    "Paneer Pakora",
    "Gobi Pakora",
    "Mirchi Bajji",
    "Aloo Bonda",
    "Mysore Bonda",
    "Sabudana Vada",
    "Batata Vada",
    "Vada Pav",
    "Dahi Vada",
    "Pani Puri",
    "Bhel Puri",
    "Sev Puri",
    "Dahi Puri",
    "Ragda Pattice",
    "Aloo Tikki",
    "Corn Chaat",
    "Masala Corn",
    "Paneer Tikka",
    "Chicken 65",
    "Gobi 65",
    "Chilli Paneer",
    "Chilli Chicken"
  ],

  Desserts: [
    "Gulab Jamun",
    "Rasgulla",
    "Rasmalai",
    "Jalebi",
    "Imarti",
    "Kaju Katli",
    "Motichoor Laddu",
    "Besan Laddu",
    "Mysore Pak",
    "Soan Papdi",
    "Gajar Halwa",
    "Moong Dal Halwa",
    "Badam Halwa",
    "Suji Halwa",
    "Rice Kheer",
    "Seviyan Kheer",
    "Payasam",
    "Ada Pradhaman",
    "Shahi Tukda",
    "Kulfi",
    "Mango Shrikhand",
    "Basundi",
    "Modak",
    "Peda",
    "Coconut Ladoo"
  ],

  Drinks: [
    "Masala Chai",
    "Ginger Tea",
    "Cardamom Tea",
    "Filter Coffee",
    "South Indian Filter Coffee",
    "Mango Lassi",
    "Sweet Lassi",
    "Salted Lassi",
    "Rose Lassi",
    "Buttermilk",
    "Masala Buttermilk",
    "Jaljeera",
    "Aam Panna",
    "Nimbu Pani",
    "Kokum Sharbat",
    "Sol Kadhi",
    "Thandai",
    "Badam Milk",
    "Rose Milk",
    "Falooda",
    "Sugarcane Juice",
    "Tender Coconut Water",
    "Panakam",
    "Sattu Sharbat"
  ]

};


const allRecipeNames =
  Object.entries(recipeCatalog)
    .flatMap(([category, names]) =>
      names.map(name => ({
        name,
        category
      }))
    );


/* =====================================================
   RECIPE NAME TRANSLATION
   Common Indian recipe names are translated into
   Telugu / Hindi / Tamil / Malayalam.
===================================================== */

const recipeNames = {

  "Masala Dosa": {
    te: "మసాలా దోస",
    hi: "मसाला डोसा",
    ta: "மசாலா தோசை",
    ml: "മസാല ദോശ"
  },

  "Plain Dosa": {
    te: "ప్లెయిన్ దోస",
    hi: "प्लेन डोसा",
    ta: "பிளைன் தோசை",
    ml: "പ്ലെയിൻ ദോശ"
  },

  "Rava Dosa": {
    te: "రవ్వ దోస",
    hi: "रवा डोसा",
    ta: "ரவா தோசை",
    ml: "റവ ദോശ"
  },

  "Set Dosa": {
    te: "సెట్ దోస",
    hi: "सेट डोसा",
    ta: "செட் தோசை",
    ml: "സെറ്റ് ദോശ"
  },

  "Neer Dosa": {
    te: "నీర్ దోస",
    hi: "नीर डोसा",
    ta: "நீர் தோசை",
    ml: "നീർ ദോശ"
  },

  "Pesarattu": {
    te: "పెసరట్టు",
    hi: "पेसरट्टू",
    ta: "பேசரட்டு",
    ml: "പെസരട്ട്"
  },

  "Adai": {
    te: "అడై",
    hi: "अडई",
    ta: "அடை",
    ml: "അടൈ"
  },

  "Idli": {
    te: "ఇడ్లీ",
    hi: "इडली",
    ta: "இட்லி",
    ml: "ഇഡ്ഡലി"
  },

  "Rava Idli": {
    te: "రవ్వ ఇడ్లీ",
    hi: "रवा इडली",
    ta: "ரவா இட்லி",
    ml: "റവ ഇഡ്ഡലി"
  },

  "Kanchipuram Idli": {
    te: "కాంచీపురం ఇడ్లీ",
    hi: "कांचीपुरम इडली",
    ta: "காஞ்சிபுரம் இட்லி",
    ml: "കാഞ്ചീപുരം ഇഡ്ഡലി"
  },

  "Medu Vada": {
    te: "మెదు వడ",
    hi: "मेदु वड़ा",
    ta: "மெது வடை",
    ml: "മെദു വട"
  },

  "Ven Pongal": {
    te: "వెన్ పొంగల్",
    hi: "वेन पोंगल",
    ta: "வெண் பொங்கல்",
    ml: "വെൺ പൊങ്കൽ"
  },

  "Upma": {
    te: "ఉప్మా",
    hi: "उपमा",
    ta: "உப்புமா",
    ml: "ഉപ്പുമാവ്"
  },

  "Vegetable Upma": {
    te: "వెజిటబుల్ ఉప్మా",
    hi: "सब्जी उपमा",
    ta: "காய்கறி உப்புமா",
    ml: "വെജിറ്റബിൾ ഉപ്പുമാവ്"
  },

  "Poha": {
    te: "పోహా",
    hi: "पोहा",
    ta: "அவல் உப்புமா",
    ml: "അവൽ ഉപ്മാവ്"
  },

  "Kanda Poha": {
    te: "కందా పోహా",
    hi: "कांदा पोहा",
    ta: "வெங்காய அவல்",
    ml: "ഉള്ളി അവൽ"
  },

  "Sabudana Khichdi": {
    te: "సగ్గుబియ్యం ఖిచ్డీ",
    hi: "साबूदाना खिचड़ी",
    ta: "ஜவ்வரிசி கிச்சடி",
    ml: "ചവ്വരി കിച്ചടി"
  },

  "Aloo Paratha": {
    te: "ఆలూ పరాటా",
    hi: "आलू पराठा",
    ta: "உருளைக்கிழங்கு பரோட்டா",
    ml: "ആലു പരാത്ത"
  },

  "Gobi Paratha": {
    te: "గోబీ పరాటా",
    hi: "गोभी पराठा",
    ta: "கோபி பரோட்டா",
    ml: "ഗോബി പരാത്ത"
  },

  "Paneer Paratha": {
    te: "పనీర్ పరాటా",
    hi: "पनीर पराठा",
    ta: "பனீர் பரோட்டா",
    ml: "പനീർ പരാത്ത"
  },

  "Methi Paratha": {
    te: "మెంతి పరాటా",
    hi: "मेथी पराठा",
    ta: "வெந்தய பரோட்டா",
    ml: "ഉലുവ പരാത്ത"
  },

  "Moong Dal Chilla": {
    te: "పెసరపప్పు చిల్లా",
    hi: "मूंग दाल चीला",
    ta: "பாசிப்பருப்பு சில்லா",
    ml: "ചെറുപയർ ദാൽ ചില്ല"
  },

  "Besan Chilla": {
    te: "సెనగపిండి చిల్లా",
    hi: "बेसन चीला",
    ta: "கடலை மாவு சில்லா",
    ml: "കടലമാവ് ചില്ല"
  },

  "Appam": {
    te: "అప్పం",
    hi: "अप्पम",
    ta: "ஆப்பம்",
    ml: "അപ്പം"
  },

  "Puttu": {
    te: "పుట్టు",
    hi: "पुट्टु",
    ta: "புட்டு",
    ml: "പുട്ട്"
  },

  "Idiyappam": {
    te: "ఇడియప్పం",
    hi: "इडियप्पम",
    ta: "இடியப்பம்",
    ml: "ഇടിയപ്പം"
  },

  "Misal Pav": {
    te: "మిసల్ పావ్",
    hi: "मिसल पाव",
    ta: "மிஸல் பாவ்",
    ml: "മിസൽ പാവ്"
  },

  "Pav Bhaji": {
    te: "పావ్ భాజీ",
    hi: "पाव भाजी",
    ta: "பாவ் பாஜி",
    ml: "പാവ് ഭാജി"
  },

  "Thalipeeth": {
    te: "థాలిపీఠ్",
    hi: "थालीपीठ",
    ta: "தாலிபீத்",
    ml: "താലിപീഠ്"
  },

  "Akki Roti": {
    te: "అక్కి రొట్టి",
    hi: "अक्की रोटी",
    ta: "அக்கி ரொட்டி",
    ml: "അക്കി റൊട്ടി"
  },

  "Hyderabadi Chicken Biryani": {
    te: "హైదరాబాదీ చికెన్ బిర్యానీ",
    hi: "हैदराबादी चिकन बिरयानी",
    ta: "ஹைதராபாத் சிக்கன் பிரியாணி",
    ml: "ഹൈദരാബാദി ചിക്കൻ ബിരിയാണി"
  },

  "Vegetable Biryani": {
    te: "వెజిటబుల్ బిర్యానీ",
    hi: "वेजिटेबल बिरयानी",
    ta: "காய்கறி பிரியாணி",
    ml: "വെജിറ്റബിൾ ബിരിയാണി"
  },

  "Paneer Biryani": {
    te: "పనీర్ బిర్యానీ",
    hi: "पनीर बिरयानी",
    ta: "பனீர் பிரியாணி",
    ml: "പനീർ ബിരിയാണി"
  },

  "Egg Biryani": {
    te: "ఎగ్ బిర్యానీ",
    hi: "अंडा बिरयानी",
    ta: "முட்டை பிரியாணி",
    ml: "മുട്ട ബിരിയാണി"
  },

  "Mutton Biryani": {
    te: "మటన్ బిర్యానీ",
    hi: "मटन बिरयानी",
    ta: "மட்டன் பிரியாணி",
    ml: "മട്ടൺ ബിരിയാണി"
  },

  "Tomato Rice": {
    te: "టమాటా రైస్",
    hi: "टमाटर चावल",
    ta: "தக்காளி சாதம்",
    ml: "തക്കാളി ചോറ്"
  },

  "Lemon Rice": {
    te: "నిమ్మకాయ అన్నం",
    hi: "नींबू चावल",
    ta: "எலுமிச்சை சாதம்",
    ml: "നാരങ്ങ ചോറ്"
  },

  "Coconut Rice": {
    te: "కొబ్బరి అన్నం",
    hi: "नारियल चावल",
    ta: "தேங்காய் சாதம்",
    ml: "തേങ്ങ ചോറ്"
  },

  "Tamarind Rice": {
    te: "చింతపండు అన్నం",
    hi: "इमली चावल",
    ta: "புளியோதரை",
    ml: "പുളിയോഗരെ"
  },

  "Curd Rice": {
    te: "పెరుగు అన్నం",
    hi: "दही चावल",
    ta: "தயிர் சாதம்",
    ml: "തൈര് ചോറ്"
  },

  "Jeera Rice": {
    te: "జీరా రైస్",
    hi: "जीरा चावल",
    ta: "சீரக சாதம்",
    ml: "ജീര റൈസ്"
  },

  "Peas Pulao": {
    te: "బఠాణీ పులావ్",
    hi: "मटर पुलाव",
    ta: "பட்டாணி புலாவ்",
    ml: "പട്ടാണി പുലാവ്"
  },

  "Kashmiri Pulao": {
    te: "కాశ్మీరీ పులావ్",
    hi: "कश्मीरी पुलाव",
    ta: "காஷ்மீரி புலாவ்",
    ml: "കാശ്മീരി പുലാവ്"
  },

  "Sambar Rice": {
    te: "సాంబార్ అన్నం",
    hi: "सांभर चावल",
    ta: "சாம்பார் சாதம்",
    ml: "സാമ്പാർ ചോറ്"
  },

  "Rasam Rice": {
    te: "రసం అన్నం",
    hi: "रसम चावल",
    ta: "ரசம் சாதம்",
    ml: "രസം ചോറ്"
  },

  "Dal Khichdi": {
    te: "పప్పు ఖిచ్డీ",
    hi: "दाल खिचड़ी",
    ta: "பருப்பு கிச்சடி",
    ml: "പരിപ്പ് കിച്ചടി"
  },

  "Paneer Butter Masala": {
    te: "పనీర్ బటర్ మసాలా",
    hi: "पनीर बटर मसाला",
    ta: "பனீர் பட்டர் மசாலா",
    ml: "പനീർ ബട്ടർ മസാല"
  },

  "Palak Paneer": {
    te: "పాలక్ పనీర్",
    hi: "पालक पनीर",
    ta: "பசலைக்கீரை பனீர்",
    ml: "പാലക് പനീർ"
  },

  "Kadai Paneer": {
    te: "కడాయి పనీర్",
    hi: "कड़ाही पनीर",
    ta: "கடாய் பனீர்",
    ml: "കടായി പനീർ"
  },

  "Shahi Paneer": {
    te: "షాహీ పనీర్",
    hi: "शाही पनीर",
    ta: "ஷாஹி பனீர்",
    ml: "ഷാഹി പനീർ"
  },

  "Matar Paneer": {
    te: "మటర్ పనీర్",
    hi: "मटर पनीर",
    ta: "பட்டாணி பனீர்",
    ml: "മട്ടർ പനീർ"
  },

  "Chole": {
    te: "చోలే",
    hi: "छोले",
    ta: "சோலே",
    ml: "ചോലെ"
  },

  "Rajma Masala": {
    te: "రాజ్మా మసాలా",
    hi: "राजमा मसाला",
    ta: "ராஜ்மா மசாலா",
    ml: "രാജ്മ മസാല"
  },

  "Dal Makhani": {
    te: "దాల్ మఖానీ",
    hi: "दाल मखनी",
    ta: "தால் மக்கானி",
    ml: "ദാൽ മഖാനി"
  },

  "Dal Tadka": {
    te: "దాల్ తడ్కా",
    hi: "दाल तड़का",
    ta: "தால் தாட்கா",
    ml: "ദാൽ തഡ്ക"
  },

  "Dal Fry": {
    te: "దాల్ ఫ్రై",
    hi: "दाल फ्राई",
    ta: "தால் ஃப்ரை",
    ml: "ദാൽ ഫ്രൈ"
  },

  "Aloo Gobi": {
    te: "ఆలూ గోబీ",
    hi: "आलू गोभी",
    ta: "உருளைக்கிழங்கு காலிஃபிளவர்",
    ml: "ആലു ഗോബി"
  },

  "Aloo Matar": {
    te: "ఆలూ మటర్",
    hi: "आलू मटर",
    ta: "உருளைக்கிழங்கு பட்டாணி",
    ml: "ആലു മട്ടർ"
  },

  "Baingan Bharta": {
    te: "వంకాయ భర్తా",
    hi: "बैंगन भरता",
    ta: "கத்தரிக்காய் பர்த்தா",
    ml: "വഴുതനങ്ങ ഭർത്ത"
  },

  "Bhindi Masala": {
    te: "బెండకాయ మసాలా",
    hi: "भिंडी मसाला",
    ta: "வெண்டைக்காய் மசாலா",
    ml: "വെണ്ടയ്ക്ക മസാല"
  },

  "Dum Aloo": {
    te: "దమ్ ఆలూ",
    hi: "दम आलू",
    ta: "தம் ஆலு",
    ml: "ദം ആലു"
  },

  "Veg Korma": {
    te: "వెజ్ కుర్మా",
    hi: "वेज कोरमा",
    ta: "காய்கறி குருமா",
    ml: "വെജ് കുർമ"
  },

  "Navratan Korma": {
    te: "నవరత్న కుర్మా",
    hi: "नवरत्न कोरमा",
    ta: "நவரத்தின குருமா",
    ml: "നവരത്ന കുർമ"
  },

  "Butter Chicken": {
    te: "బటర్ చికెన్",
    hi: "बटर चिकन",
    ta: "பட்டர் சிக்கன்",
    ml: "ബട്ടർ ചിക്കൻ"
  },

  "Chicken Tikka Masala": {
    te: "చికెన్ టిక్కా మసాలా",
    hi: "चिकन टिक्का मसाला",
    ta: "சிக்கன் டிக்கா மசாலா",
    ml: "ചിക്കൻ ടിക്ക മസാല"
  },

  "Kadai Chicken": {
    te: "కడాయి చికెన్",
    hi: "कड़ाही चिकन",
    ta: "கடாய் சிக்கன்",
    ml: "കടായി ചിക്കൻ"
  },

  "Chicken Chettinad": {
    te: "చెట్టినాడ్ చికెన్",
    hi: "चेट्टीनाड चिकन",
    ta: "செட்டிநாடு சிக்கன்",
    ml: "ചെട്ടിനാട് ചിക്കൻ"
  },

  "Andhra Chicken Curry": {
    te: "ఆంధ్ర చికెన్ కర్రీ",
    hi: "आंध्र चिकन करी",
    ta: "ஆந்திர சிக்கன் கறி",
    ml: "ആന്ധ്ര ചിക്കൻ കറി"
  },

  "Chicken Korma": {
    te: "చికెన్ కోర్మా",
    hi: "चिकन कोरमा",
    ta: "சிக்கன் கோர்மா",
    ml: "ചിക്കൻ കോർമ"
  },

  "Mutton Rogan Josh": {
    te: "మటన్ రోగన్ జోష్",
    hi: "मटन रोगन जोश",
    ta: "மட்டன் ரோகன் ஜோஷ்",
    ml: "മട്ടൺ രോഗൻ ജോഷ്"
  },

  "Mutton Curry": {
    te: "మటన్ కర్రీ",
    hi: "मटन करी",
    ta: "மட்டன் கறி",
    ml: "മട്ടൺ കറി"
  },

  "Fish Curry": {
    te: "చేపల కర్రీ",
    hi: "मछली करी",
    ta: "மீன் குழம்பு",
    ml: "മീൻ കറി"
  },

  "Goan Fish Curry": {
    te: "గోవా ఫిష్ కర్రీ",
    hi: "गोवा फिश करी",
    ta: "கோவா மீன் குழம்பு",
    ml: "ഗോവ ഫിഷ് കറി"
  },

  "Kerala Fish Curry": {
    te: "కేరళ ఫిష్ కర్రీ",
    hi: "केरल फिश करी",
    ta: "கேரள மீன் குழம்பு",
    ml: "കേരള മീൻ കറി"
  },

  "Andhra Fish Pulusu": {
    te: "ఆంధ్ర చేపల పులుసు",
    hi: "आंध्र मछली पुलुसु",
    ta: "ஆந்திர மீன் புளுசு",
    ml: "ആന്ധ്ര മീൻ പുളിശ്ശേരി"
  },

  "Prawn Masala": {
    te: "రొయ్యల మసాలా",
    hi: "झींगा मसाला",
    ta: "இறால் மசாலா",
    ml: "ചെമ്മീൻ മസാല"
  },

  "Egg Curry": {
    te: "గుడ్డు కర్రీ",
    hi: "अंडा करी",
    ta: "முட்டை குழம்பு",
    ml: "മുട്ട കറി"
  },

  "Butter Naan": {
    te: "బటర్ నాన్",
    hi: "बटर नान",
    ta: "பட்டர் நான்",
    ml: "ബട്ടർ നാൻ"
  },

  "Garlic Naan": {
    te: "గార్లిక్ నాన్",
    hi: "गार्लिक नान",
    ta: "பூண்டு நான்",
    ml: "വെളുത്തുള്ളി നാൻ"
  },

  "Tandoori Roti": {
    te: "తందూరీ రొట్టె",
    hi: "तंदूरी रोटी",
    ta: "தந்தூரி ரொட்டி",
    ml: "തന്തൂരി റൊട്ടി"
  },

  "Lachha Paratha": {
    te: "లచ్చా పరాటా",
    hi: "लच्छा पराठा",
    ta: "லச்சா பரோட்டா",
    ml: "ലച്ച പരാത്ത"
  },

  "Kerala Parotta": {
    te: "కేరళ పరాటా",
    hi: "केरल परोट्टा",
    ta: "கேரள பரோட்டா",
    ml: "കേരള പൊറോട്ട"
  },

  "Malabar Parotta": {
    te: "మలబార్ పరాటా",
    hi: "मालाबार परोट्टा",
    ta: "மலபார் பரோட்டா",
    ml: "മലബാർ പൊറോട്ട"
  },

  "Samosa": {
    te: "సమోసా",
    hi: "समोसा",
    ta: "சமோசா",
    ml: "സമോസ"
  },

  "Aloo Samosa": {
    te: "ఆలూ సమోసా",
    hi: "आलू समोसा",
    ta: "உருளைக்கிழங்கு சமோசா",
    ml: "ആലു സമോസ"
  },

  "Onion Samosa": {
    te: "ఉల్లిపాయ సమోసా",
    hi: "प्याज़ समोसा",
    ta: "வெங்காய சமோசா",
    ml: "ഉള്ളി സമോസ"
  },

  "Kachori": {
    te: "కచోరీ",
    hi: "कचौड़ी",
    ta: "கச்சோரி",
    ml: "കച്ചോരി"
  },

  "Bread Pakora": {
    te: "బ్రెడ్ పకోడా",
    hi: "ब्रेड पकौड़ा",
    ta: "பிரெட் பக்கோடா",
    ml: "ബ്രെഡ് പക്കോഡ"
  },

  "Aloo Pakora": {
    te: "ఆలూ పకోడా",
    hi: "आलू पकौड़ा",
    ta: "உருளைக்கிழங்கு பக்கோடா",
    ml: "ആലു പക്കോഡ"
  },

  "Onion Pakora": {
    te: "ఉల్లిపాయ పకోడా",
    hi: "प्याज़ पकौड़ा",
    ta: "வெங்காய பக்கோடா",
    ml: "ഉള്ളി പക്കോഡ"
  },

  "Paneer Pakora": {
    te: "పనీర్ పకోడా",
    hi: "पनीर पकौड़ा",
    ta: "பனீர் பக்கோடா",
    ml: "പനീർ പക്കോഡ"
  },

  "Gobi Pakora": {
    te: "గోబీ పకోడా",
    hi: "गोभी पकौड़ा",
    ta: "காலிஃபிளவர் பக்கோடா",
    ml: "ഗോബി പക്കോഡ"
  },

  "Mirchi Bajji": {
    te: "మిర్చి బజ్జి",
    hi: "मिर्ची बज्जी",
    ta: "மிளகாய் பஜ்ஜி",
    ml: "മുളക് ബജ്ജി"
  },

  "Aloo Bonda": {
    te: "ఆలూ బోండా",
    hi: "आलू बोंडा",
    ta: "உருளைக்கிழங்கு போண்டா",
    ml: "ആലു ബോണ്ട"
  },

  "Mysore Bonda": {
    te: "మైసూర్ బోండా",
    hi: "मैसूर बोंडा",
    ta: "மைசூர் போண்டா",
    ml: "മൈസൂർ ബോണ്ട"
  },

  "Sabudana Vada": {
    te: "సగ్గుబియ్యం వడ",
    hi: "साबूदाना वड़ा",
    ta: "ஜவ்வரிசி வடை",
    ml: "ചവ്വരി വട"
  },

  "Batata Vada": {
    te: "బటాటా వడ",
    hi: "बटाटा वड़ा",
    ta: "படாட்டா வடை",
    ml: "ബട്ടാറ്റ വട"
  },

  "Vada Pav": {
    te: "వడా పావ్",
    hi: "वड़ा पाव",
    ta: "வடை பாவ்",
    ml: "വട പാവ്"
  },

  "Dahi Vada": {
    te: "దహీ వడ",
    hi: "दही वड़ा",
    ta: "தயிர் வடை",
    ml: "തൈര് വട"
  },

  "Pani Puri": {
    te: "పానీ పూరీ",
    hi: "पानी पूरी",
    ta: "பானி பூரி",
    ml: "പാനി പൂരി"
  },

  "Bhel Puri": {
    te: "భేల్ పూరీ",
    hi: "भेल पूरी",
    ta: "பேல் பூரி",
    ml: "ഭേൽ പൂരി"
  },

  "Sev Puri": {
    te: "సేవ్ పూరీ",
    hi: "सेव पूरी",
    ta: "சேவ் பூரி",
    ml: "സേവ് പൂരി"
  },

  "Dahi Puri": {
    te: "దహీ పూరీ",
    hi: "दही पूरी",
    ta: "தயிர் பூரி",
    ml: "തൈര് പൂരി"
  },

  "Aloo Tikki": {
    te: "ఆలూ టిక్కీ",
    hi: "आलू टिक्की",
    ta: "உருளைக்கிழங்கு டிக்கி",
    ml: "ആലു ടിക്കി"
  },

  "Paneer Tikka": {
    te: "పనీర్ టిక్కా",
    hi: "पनीर टिक्का",
    ta: "பனீர் டிக்கா",
    ml: "പനീർ ടിക്ക"
  },

  "Chicken 65": {
    te: "చికెన్ 65",
    hi: "चिकन 65",
    ta: "சிக்கன் 65",
    ml: "ചിക്കൻ 65"
  },

  "Gobi 65": {
    te: "గోబీ 65",
    hi: "गोभी 65",
    ta: "கோபி 65",
    ml: "ഗോബി 65"
  },

  "Chilli Paneer": {
    te: "చిల్లీ పనీర్",
    hi: "चिली पनीर",
    ta: "சில்லி பனீர்",
    ml: "ചില്ലി പനീർ"
  },

  "Chilli Chicken": {
    te: "చిల్లీ చికెన్",
    hi: "चिली चिकन",
    ta: "சில்லி சிக்கன்",
    ml: "ചില്ലി ചിക്കൻ"
  },

  "Gulab Jamun": {
    te: "గులాబ్ జామున్",
    hi: "गुलाब जामुन",
    ta: "குலாப் ஜாமுன்",
    ml: "ഗുലാബ് ജാമുൻ"
  },

  "Rasgulla": {
    te: "రసగుల్లా",
    hi: "रसगुल्ला",
    ta: "ரசகுல்லா",
    ml: "രസഗുല്ല"
  },

  "Rasmalai": {
    te: "రసమలై",
    hi: "रसमलाई",
    ta: "ரசமலை",
    ml: "രസ്മലൈ"
  },

  "Jalebi": {
    te: "జిలేబి",
    hi: "जलेबी",
    ta: "ஜிலேபி",
    ml: "ജിലേബി"
  },

  "Kaju Katli": {
    te: "కాజు కట్లీ",
    hi: "काजू कतली",
    ta: "முந்திரி கட்லி",
    ml: "കശുവണ്ടി കട്ട്ലി"
  },

  "Motichoor Laddu": {
    te: "మోతీచూర్ లడ్డు",
    hi: "मोतीचूर लड्डू",
    ta: "மோதிச்சூர் லட்டு",
    ml: "മോതിച്ചൂർ ലഡ്ഡു"
  },

  "Besan Laddu": {
    te: "సెనగపిండి లడ్డు",
    hi: "बेसन लड्डू",
    ta: "கடலை மாவு லட்டு",
    ml: "കടലമാവ് ലഡ്ഡു"
  },

  "Mysore Pak": {
    te: "మైసూర్ పాక్",
    hi: "मैसूर पाक",
    ta: "மைசூர் பாக்",
    ml: "മൈസൂർ പാക്ക്"
  },

  "Gajar Halwa": {
    te: "క్యారెట్ హల్వా",
    hi: "गाजर का हलवा",
    ta: "கேரட் அல்வா",
    ml: "കാരറ്റ് ഹൽവ"
  },

  "Moong Dal Halwa": {
    te: "పెసరపప్పు హల్వా",
    hi: "मूंग दाल हलवा",
    ta: "பாசிப்பருப்பு அல்வா",
    ml: "ചെറുപയർ ഹൽവ"
  },

  "Badam Halwa": {
    te: "బాదం హల్వా",
    hi: "बादाम हलवा",
    ta: "பாதாம் அல்வா",
    ml: "ബദാം ഹൽവ"
  },

  "Rice Kheer": {
    te: "బియ్యం పాయసం",
    hi: "चावल की खीर",
    ta: "அரிசி பாயசம்",
    ml: "അരി പായസം"
  },

  "Seviyan Kheer": {
    te: "సేమియా పాయసం",
    hi: "सेवई खीर",
    ta: "சேமியா பாயசம்",
    ml: "സേമിയ പായസം"
  },

  "Payasam": {
    te: "పాయసం",
    hi: "पायसम",
    ta: "பாயசம்",
    ml: "പായസം"
  },

  "Shahi Tukda": {
    te: "షాహీ తుక్డా",
    hi: "शाही टुकड़ा",
    ta: "ஷாஹி துண்டா",
    ml: "ഷാഹി തുക്ഡ"
  },

  "Kulfi": {
    te: "కుల్ఫీ",
    hi: "कुल्फी",
    ta: "குல்ஃபி",
    ml: "കുൽഫി"
  },

  "Masala Chai": {
    te: "మసాలా చాయ్",
    hi: "मसाला चाय",
    ta: "மசாலா தேநீர்",
    ml: "മസാല ചായ"
  },

  "Ginger Tea": {
    te: "అల్లం టీ",
    hi: "अदरक वाली चाय",
    ta: "இஞ்சி தேநீர்",
    ml: "ഇഞ്ചി ചായ"
  },

  "Cardamom Tea": {
    te: "యాలకుల టీ",
    hi: "इलायची चाय",
    ta: "ஏலக்காய் தேநீர்",
    ml: "ഏലക്ക ചായ"
  },

  "Filter Coffee": {
    te: "ఫిల్టర్ కాఫీ",
    hi: "फिल्टर कॉफी",
    ta: "ஃபில்டர் காபி",
    ml: "ഫിൽട്ടർ കാപ്പി"
  },

  "Mango Lassi": {
    te: "మామిడి లస్సీ",
    hi: "आम लस्सी",
    ta: "மாம்பழ லஸ்ஸி",
    ml: "മാങ്ങ ലസ്സി"
  },

  "Sweet Lassi": {
    te: "తీపి లస్సీ",
    hi: "मीठी लस्सी",
    ta: "இனிப்பு லஸ்ஸி",
    ml: "മധുര ലസ്സി"
  },

  "Salted Lassi": {
    te: "ఉప్పు లస్సీ",
    hi: "नमकीन लस्सी",
    ta: "உப்பு லஸ்ஸி",
    ml: "ഉപ്പുള്ള ലസ്സി"
  },

  "Buttermilk": {
    te: "మజ్జిగ",
    hi: "छाछ",
    ta: "மோர்",
    ml: "മോര്"
  },

  "Jaljeera": {
    te: "జల్జీరా",
    hi: "जलजीरा",
    ta: "ஜல்ஜீரா",
    ml: "ജൽജീര"
  },

  "Aam Panna": {
    te: "ఆమ్ పన్నా",
    hi: "आम पन्ना",
    ta: "மாங்காய் பன்னா",
    ml: "മാങ്ങ പന്ന"
  },

  "Nimbu Pani": {
    te: "నిమ్మకాయ పానీ",
    hi: "नींबू पानी",
    ta: "எலுமிச்சை பானம்",
    ml: "നാരങ്ങ വെള്ളം"
  },

  "Badam Milk": {
    te: "బాదం పాలు",
    hi: "बादाम दूध",
    ta: "பாதாம் பால்",
    ml: "ബദാം പാൽ"
  },

  "Rose Milk": {
    te: "రోజ్ మిల్క్",
    hi: "रोज़ मिल्क",
    ta: "ரோஸ் மில்க்",
    ml: "റോസ് മിൽക്ക്"
  },

  "Falooda": {
    te: "ఫలూదా",
    hi: "फालूदा",
    ta: "பலூடா",
    ml: "ഫലൂദ"
  },

  "Sugarcane Juice": {
    te: "చెరకు రసం",
    hi: "गन्ने का रस",
    ta: "கரும்புச் சாறு",
    ml: "കരിമ്പിൻ ജ്യൂസ്"
  },

  "Tender Coconut Water": {
    te: "కొబ్బరి నీళ్లు",
    hi: "नारियल पानी",
    ta: "இளநீர்",
    ml: "കരിക്കിൻ വെള്ളം"
  }

};


/* =====================================================
   GENERIC NAME TRANSLATION
   Handles recipes not explicitly listed above.
===================================================== */

const wordTranslations = {

  te: {
    Chicken: "చికెన్",
    Mutton: "మటన్",
    Fish: "ఫిష్",
    Prawn: "రొయ్యల",
    Egg: "గుడ్డు",
    Paneer: "పనీర్",
    Vegetable: "కూరగాయల",
    Rice: "అన్నం",
    Biryani: "బిర్యానీ",
    Curry: "కర్రీ",
    Masala: "మసాలా",
    Dal: "పప్పు",
    Paratha: "పరాటా",
    Naan: "నాన్",
    Roti: "రొట్టె",
    Samosa: "సమోసా",
    Pakora: "పకోడా",
    Pulao: "పులావ్",
    Halwa: "హల్వా",
    Lassi: "లస్సీ",
    Tea: "టీ",
    Coffee: "కాఫీ"
  },

  hi: {
    Chicken: "चिकन",
    Mutton: "मटन",
    Fish: "मछली",
    Prawn: "झींगा",
    Egg: "अंडा",
    Paneer: "पनीर",
    Vegetable: "सब्जी",
    Rice: "चावल",
    Biryani: "बिरयानी",
    Curry: "करी",
    Masala: "मसाला",
    Dal: "दाल",
    Paratha: "पराठा",
    Naan: "नान",
    Roti: "रोटी",
    Samosa: "समोसा",
    Pakora: "पकौड़ा",
    Pulao: "पुलाव",
    Halwa: "हलवा",
    Lassi: "लस्सी",
    Tea: "चाय",
    Coffee: "कॉफी"
  },

  ta: {
    Chicken: "சிக்கன்",
    Mutton: "மட்டன்",
    Fish: "மீன்",
    Prawn: "இறால்",
    Egg: "முட்டை",
    Paneer: "பனீர்",
    Vegetable: "காய்கறி",
    Rice: "சாதம்",
    Biryani: "பிரியாணி",
    Curry: "கறி",
    Masala: "மசாலா",
    Dal: "பருப்பு",
    Paratha: "பரோட்டா",
    Naan: "நான்",
    Roti: "ரொட்டி",
    Samosa: "சமோசா",
    Pakora: "பக்கோடா",
    Pulao: "புலாவ்",
    Halwa: "அல்வா",
    Lassi: "லஸ்ஸி",
    Tea: "தேநீர்",
    Coffee: "காபி"
  },

  ml: {
    Chicken: "ചിക്കൻ",
    Mutton: "മട്ടൺ",
    Fish: "മീൻ",
    Prawn: "ചെമ്മീൻ",
    Egg: "മുട്ട",
    Paneer: "പനീർ",
    Vegetable: "പച്ചക്കറി",
    Rice: "ചോറ്",
    Biryani: "ബിരിയാണി",
    Curry: "കറി",
    Masala: "മസാല",
    Dal: "ദാൽ",
    Paratha: "പരാത്ത",
    Naan: "നാൻ",
    Roti: "റൊട്ടി",
    Samosa: "സമോസ",
    Pakora: "പക്കോഡ",
    Pulao: "പുലാവ്",
    Halwa: "ഹൽവ",
    Lassi: "ലസ്സി",
    Tea: "ചായ",
    Coffee: "കാപ്പി"
  }

};


function localizedRecipeName(name) {

  const lang = getLanguage();

  if (lang === "en") {
    return name;
  }

  if (recipeNames[name]?.[lang]) {
    return recipeNames[name][lang];
  }

  let result = name;

  const words =
    wordTranslations[lang] || {};

  Object.keys(words)
    .sort((a, b) => b.length - a.length)
    .forEach(word => {

      result =
        result.replace(
          new RegExp(word, "gi"),
          words[word]
        );
    });

  return result;
}


/* =====================================================
   LANGUAGE FUNCTIONS
===================================================== */

function getLanguage() {

  return (
    localStorage.getItem(
      "cookbookLanguage"
    ) || "en"
  );
}


function t(key) {

  const lang =
    getLanguage();

  return (
    UI[lang]?.[key] ||
    UI.en[key] ||
    key
  );
}


function applyLanguage() {

  const lang =
    getLanguage();

  document.documentElement.lang =
    lang;

  $$("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;

      element.textContent =
        t(key);

    });

  $$("[data-placeholder]")
    .forEach(element => {

      const key =
        element.dataset.placeholder;

      element.placeholder =
        t(key);

    });

  const selectors =
    ["#authLanguage", "#language"];

  selectors.forEach(selector => {

    const select = $(selector);

    if (select) {
      select.value = lang;
    }

  });

  updateDynamicLanguage();
}


function changeLanguage(lang) {

  localStorage.setItem(
    "cookbookLanguage",
    lang
  );

  applyLanguage();

  if ($("#recipeGrid")) {
    renderHome();
  }

  if ($("#favoriteGrid")) {
    renderFavorites();
  }

  if ($("#collectionList")) {
    renderCollections();
  }

  if ($("#planList")) {
    renderPlanner();
  }

  if ($("#shoppingList")) {
    renderShopping();
  }

  if ($("#communityList")) {
    renderCommunity();
  }

  if ($("#adminRecipeList")) {
    adminRender();
  }
}


function updateDynamicLanguage() {

  const category =
    $("#category");

  if (category) {

    const values = [
      ["all", "allCategories"],
      ["Breakfast", "breakfast"],
      ["Lunch", "lunch"],
      ["Dinner", "dinner"],
      ["Snacks", "snacks"],
      ["Desserts", "desserts"],
      ["Drinks", "drinks"]
    ];

    category.innerHTML =
      values.map(item =>
        `<option value="${item[0]}">
          ${escapeHTML(t(item[1]))}
        </option>`
      ).join("");

    category.value =
      window.currentCategory || "all";
  }


  const diet =
    $("#diet");

  if (diet) {

    diet.innerHTML = `
      <option value="all">${t("all")}</option>
      <option value="Veg">${t("veg")}</option>
      <option value="Non-Veg">${t("nonVeg")}</option>
    `;

    diet.value =
      window.currentDiet || "all";
  }


  const chips =
    $("#categoryChips");

  if (chips) {
    renderCategoryChips();
  }
}


/* =====================================================
   RECIPE PROCEDURES
===================================================== */

function translatedSteps(name) {

  const lang =
    getLanguage();

  if (lang === "en") {

    return [
      `Wash and prepare all ingredients needed for ${name}.`,
      "Measure the ingredients carefully before cooking.",
      "Heat a suitable pan or cooking vessel on medium heat.",
      "Add oil or ghee and allow it to become hot.",
      "Add the main ingredients and cook them properly.",
      "Add the required spices and salt.",
      "Mix everything well and cook until the ingredients become tender.",
      "Adjust the consistency and taste before finishing.",
      "Garnish with fresh coriander, herbs or suitable toppings.",
      "Serve hot and enjoy."
    ];

  }


  if (lang === "te") {

    return [
      `${localizedRecipeName(name)} కోసం కావాల్సిన అన్ని పదార్థాలను శుభ్రంగా సిద్ధం చేయండి.`,
      "అన్ని పదార్థాలను సరైన పరిమాణంలో ముందుగా కొలిచి సిద్ధంగా ఉంచండి.",
      "సరైన పాత్రను తీసుకుని మధ్యస్థ మంటపై వేడి చేయండి.",
      "నూనె లేదా నెయ్యి వేసి వేడయ్యే వరకు ఉంచండి.",
      "ప్రధాన పదార్థాలను వేసి సరిగ్గా ఉడికించండి.",
      "అవసరమైన మసాలాలు మరియు ఉప్పు వేయండి.",
      "అన్నింటినీ బాగా కలిపి పదార్థాలు మెత్తగా అయ్యే వరకు ఉడికించండి.",
      "రుచి మరియు చిక్కదనాన్ని అవసరానికి అనుగుణంగా సరిచేయండి.",
      "కొత్తిమీర, ఆకుకూరలు లేదా సరైన గార్నిష్‌తో అలంకరించండి.",
      "వేడిగా వడ్డించి ఆనందించండి."
    ];

  }


  if (lang === "hi") {

    return [
      `${localizedRecipeName(name)} के लिए सभी सामग्री को साफ करके तैयार करें।`,
      "सभी सामग्री को सही मात्रा में पहले से तैयार रखें।",
      "उपयुक्त बर्तन को मध्यम आंच पर गर्म करें।",
      "तेल या घी डालकर गर्म होने दें।",
      "मुख्य सामग्री डालकर अच्छी तरह पकाएं।",
      "आवश्यक मसाले और नमक डालें।",
      "सभी सामग्री को अच्छी तरह मिलाकर नरम होने तक पकाएं।",
      "स्वाद और गाढ़ापन अपनी जरूरत के अनुसार ठीक करें।",
      "धनिया या उपयुक्त सामग्री से सजाएं।",
      "गरम परोसें और आनंद लें।"
    ];

  }


  if (lang === "ta") {

    return [
      `${localizedRecipeName(name)} செய்ய தேவையான அனைத்து பொருட்களையும் சுத்தம் செய்து தயாராக வைக்கவும்.`,
      "அனைத்து பொருட்களையும் சரியான அளவில் முன்கூட்டியே தயாரிக்கவும்.",
      "சரியான பாத்திரத்தை மிதமான தீயில் சூடாக்கவும்.",
      "எண்ணெய் அல்லது நெய் சேர்த்து சூடாக்கவும்.",
      "முக்கிய பொருட்களை சேர்த்து நன்றாக சமைக்கவும்.",
      "தேவையான மசாலா மற்றும் உப்பு சேர்க்கவும்.",
      "அனைத்தையும் நன்றாக கலந்து பொருட்கள் மென்மையாகும் வரை சமைக்கவும்.",
      "சுவை மற்றும் பதத்தை தேவைக்கேற்ப சரிசெய்யவும்.",
      "கொத்தமல்லி அல்லது பொருத்தமான அலங்கார பொருட்களை சேர்க்கவும்.",
      "சூடாக பரிமாறி மகிழுங்கள்."
    ];

  }


  return [
    `${localizedRecipeName(name)} തയ്യാറാക്കാൻ ആവശ്യമായ എല്ലാ ചേരുവകളും വൃത്തിയാക്കി തയ്യാറാക്കുക.`,
    "എല്ലാ ചേരുവകളും ശരിയായ അളവിൽ മുൻകൂട്ടി തയ്യാറാക്കുക.",
    "ശരിയായ പാത്രം മിതമായ തീയിൽ ചൂടാക്കുക.",
    "എണ്ണയോ നെയ്യോ ചേർത്ത് ചൂടാക്കുക.",
    "പ്രധാന ചേരുവകൾ ചേർത്ത് നന്നായി പാകം ചെയ്യുക.",
    "ആവശ്യമായ മസാലകളും ഉപ്പും ചേർക്കുക.",
    "എല്ലാം നന്നായി കലക്കി ചേരുവകൾ മൃദുവാകുന്നതുവരെ പാകം ചെയ്യുക.",
    "രുചിയും കട്ടിയും ആവശ്യത്തിന് ക്രമീകരിക്കുക.",
    "മല്ലിയില അല്ലെങ്കിൽ അനുയോജ്യമായ അലങ്കാരം ചേർക്കുക.",
    "ചൂടോടെ വിളമ്പി ആസ്വദിക്കുക."
  ];
}


/* =====================================================
   INGREDIENT TRANSLATION
===================================================== */

const ingredientTranslations = {

  te: {
    "Main ingredient": "ప్రధాన పదార్థం",
    "Onion": "ఉల్లిపాయ",
    "Tomato": "టమాటా",
    "Ginger-garlic paste": "అల్లం వెల్లుల్లి పేస్ట్",
    "Green chilli": "పచ్చిమిర్చి",
    "Whole spices": "గరం మసాలా దినుసులు",
    "Turmeric powder": "పసుపు",
    "Red chilli powder": "కారం",
    "Garam masala": "గరం మసాలా",
    "Coriander leaves": "కొత్తిమీర",
    "Mint leaves": "పుదీనా ఆకులు",
    "Oil": "నూనె",
    "Salt": "ఉప్పు",
    "Water": "నీరు",
    "Rice": "బియ్యం",
    "Basmati rice": "బాస్మతి బియ్యం",
    "Potato": "బంగాళాదుంప",
    "Paneer": "పనీర్",
    "Chicken": "చికెన్",
    "Mutton": "మటన్",
    "Fish": "చేప",
    "Prawns": "రొయ్యలు",
    "Egg": "గుడ్డు",
    "Milk": "పాలు",
    "Sugar": "చక్కెర",
    "Cardamom powder": "యాలకుల పొడి",
    "Nuts": "డ్రై ఫ్రూట్స్",
    "Ghee": "నెయ్యి"
  },

  hi: {
    "Main ingredient": "मुख्य सामग्री",
    "Onion": "प्याज़",
    "Tomato": "टमाटर",
    "Ginger-garlic paste": "अदरक-लहसुन पेस्ट",
    "Green chilli": "हरी मिर्च",
    "Whole spices": "साबुत मसाले",
    "Turmeric powder": "हल्दी",
    "Red chilli powder": "लाल मिर्च पाउडर",
    "Garam masala": "गरम मसाला",
    "Coriander leaves": "धनिया पत्ती",
    "Mint leaves": "पुदीना",
    "Oil": "तेल",
    "Salt": "नमक",
    "Water": "पानी",
    "Rice": "चावल",
    "Basmati rice": "बासमती चावल",
    "Potato": "आलू",
    "Paneer": "पनीर",
    "Chicken": "चिकन",
    "Mutton": "मटन",
    "Fish": "मछली",
    "Prawns": "झींगा",
    "Egg": "अंडा",
    "Milk": "दूध",
    "Sugar": "चीनी",
    "Cardamom powder": "इलायची पाउडर",
    "Nuts": "मेवे",
    "Ghee": "घी"
  },

  ta: {
    "Main ingredient": "முக்கிய பொருள்",
    "Onion": "வெங்காயம்",
    "Tomato": "தக்காளி",
    "Ginger-garlic paste": "இஞ்சி பூண்டு விழுது",
    "Green chilli": "பச்சை மிளகாய்",
    "Whole spices": "முழு மசாலா",
    "Turmeric powder": "மஞ்சள் தூள்",
    "Red chilli powder": "மிளகாய் தூள்",
    "Garam masala": "கரம் மசாலா",
    "Coriander leaves": "கொத்தமல்லி",
    "Mint leaves": "புதினா",
    "Oil": "எண்ணெய்",
    "Salt": "உப்பு",
    "Water": "தண்ணீர்",
    "Rice": "அரிசி",
    "Basmati rice": "பாஸ்மதி அரிசி",
    "Potato": "உருளைக்கிழங்கு",
    "Paneer": "பனீர்",
    "Chicken": "சிக்கன்",
    "Mutton": "மட்டன்",
    "Fish": "மீன்",
    "Prawns": "இறால்",
    "Egg": "முட்டை",
    "Milk": "பால்",
    "Sugar": "சர்க்கரை",
    "Cardamom powder": "ஏலக்காய் தூள்",
    "Nuts": "பருப்புகள்",
    "Ghee": "நெய்"
  },

  ml: {
    "Main ingredient": "പ്രധാന ചേരുവ",
    "Onion": "ഉള്ളി",
    "Tomato": "തക്കാളി",
    "Ginger-garlic paste": "ഇഞ്ചി വെളുത്തുള്ളി പേസ്റ്റ്",
    "Green chilli": "പച്ചമുളക്",
    "Whole spices": "മുഴുവൻ മസാലകൾ",
    "Turmeric powder": "മഞ്ഞൾപ്പൊടി",
    "Red chilli powder": "മുളകുപൊടി",
    "Garam masala": "ഗരം മസാല",
    "Coriander leaves": "മല്ലിയില",
    "Mint leaves": "പുതിന",
    "Oil": "എണ്ണ",
    "Salt": "ഉപ്പ്",
    "Water": "വെള്ളം",
    "Rice": "അരി",
    "Basmati rice": "ബസ്മതി അരി",
    "Potato": "ഉരുളക്കിഴങ്ങ്",
    "Paneer": "പനീർ",
    "Chicken": "ചിക്കൻ",
    "Mutton": "മട്ടൺ",
    "Fish": "മീൻ",
    "Prawns": "ചെമ്മീൻ",
    "Egg": "മുട്ട",
    "Milk": "പാൽ",
    "Sugar": "പഞ്ചസാര",
    "Cardamom powder": "ഏലക്ക പൊടി",
    "Nuts": "നട്സ്",
    "Ghee": "നെയ്യ്"
  }

};


function localIngredient(value) {

  const lang =
    getLanguage();

  if (lang === "en") {
    return value;
  }

  return (
    ingredientTranslations[lang]?.[value] ||
    value
  );
}


/* =====================================================
   IMAGE SEARCH
===================================================== */

function fallbackImage(name) {

  return (
    "https://loremflickr.com/900/600/" +
    encodeURIComponent(
      name + ",indian-food"
    ) +
    "?lock=" +
    Math.floor(
      Math.random() * 90000
    )
  );
}


async function findRecipeImage(name) {

  const cache =
    getData(
      "cookbookImageCache",
      {}
    );

  if (cache[name]) {
    return cache[name];
  }

  try {

    const url =
      "https://commons.wikimedia.org/w/api.php" +
      "?action=query" +
      "&generator=search" +
      "&gsrnamespace=6" +
      "&gsrlimit=1" +
      "&prop=imageinfo" +
      "&iiprop=url" +
      "&iiurlwidth=900" +
      "&format=json" +
      "&origin=*" +
      "&gsrsearch=" +
      encodeURIComponent(
        name + " Indian food"
      );

    const response =
      await fetch(url);

    const data =
      await response.json();

    const pages =
      data.query?.pages;

    if (pages) {

      const page =
        Object.values(pages)[0];

      const image =
        page?.imageinfo?.[0]?.thumburl ||
        page?.imageinfo?.[0]?.url;

      if (image) {

        cache[name] = image;

        saveData(
          "cookbookImageCache",
          cache
        );

        return image;
      }
    }

  } catch (error) {

    console.log(
      "Image search failed",
      name
    );
  }

  return fallbackImage(name);
}


/* =====================================================
   RECIPE CREATION
===================================================== */

function createRecipe(
  name,
  category,
  index
) {

  const nonVeg =
    /chicken|mutton|fish|prawn|egg/i
      .test(name);

  let ingredients;

  if (
    /biryani|rice|pulao|khichdi|bath/i
      .test(name)
  ) {

    ingredients = [
      "Basmati rice",
      "Onion",
      "Tomato",
      "Ginger-garlic paste",
      "Green chilli",
      "Whole spices",
      "Turmeric powder",
      "Red chilli powder",
      "Garam masala",
      "Coriander leaves",
      "Mint leaves",
      "Oil",
      "Salt",
      "Water"
    ];

  } else if (
    /dosa|idli|vada|adai|chilla|upma|poha|pongal|paratha|naan|roti|parotta|bhatura/i
      .test(name)
  ) {

    ingredients = [
      "Rice",
      "Main ingredient",
      "Onion",
      "Green chilli",
      "Coriander leaves",
      "Oil",
      "Salt",
      "Water"
    ];

  } else if (
    /gulab|rasgulla|rasmalai|jalebi|laddu|halwa|kheer|payasam|kulfi|peda|katli|modak|basundi|shahi tukda/i
      .test(name)
  ) {

    ingredients = [
      "Milk",
      "Sugar",
      "Cardamom powder",
      "Nuts",
      "Ghee",
      "Water"
    ];

  } else {

    ingredients = [
      "Main ingredient",
      "Onion",
      "Tomato",
      "Ginger-garlic paste",
      "Green chilli",
      "Turmeric powder",
      "Red chilli powder",
      "Garam masala",
      "Coriander leaves",
      "Oil",
      "Salt",
      "Water"
    ];
  }

  return {

    id:
      "recipe_" +
      (index + 1),

    name,

    category,

    diet:
      nonVeg
        ? "Non-Veg"
        : "Veg",

    cuisine:
      "Indian",

    ingredients,

    steps:
      translatedSteps(name),

    image:
      fallbackImage(name),

    rating:
      4.2 + ((index % 8) / 10),

    ratingCount:
      100 + index * 5,

    chef:
      "CookBook Kitchen",

    featured:
      index < 10

  };
}


/* =====================================================
   SEED RECIPES
===================================================== */

async function seedRecipes() {

  const old =
    getData(
      "cookbookRecipes",
      []
    );

  if (
    old.length >= 130 &&
    localStorage.getItem(
      "cookbookSeedVersion"
    ) === "language-v4"
  ) {

    return;
  }

  const list =
    allRecipeNames.map(
      (item, index) =>
        createRecipe(
          item.name,
          item.category,
          index
        )
    );

  saveData(
    "cookbookRecipes",
    list
  );

  localStorage.setItem(
    "cookbookSeedVersion",
    "language-v4"
  );
}


/* =====================================================
   CURRENT USER
===================================================== */

function currentUser() {

  return getData(
    "cookbookCurrentUser",
    null
  );
}


function userKey(name) {

  const email =
    currentUser()?.email ||
    "guest";

  return (
    name +
    "_" +
    encodeURIComponent(email)
  );
}


/* =====================================================
   AUTH
===================================================== */

function initAuth() {

  let users =
    getData(
      "cookbookUsers",
      []
    );

  if (
    !users.some(
      user =>
        user.email ===
        "admin@cookbook.com"
    )
  ) {

    users.push({

      name:
        "CookBook Admin",

      email:
        "admin@cookbook.com",

      password:
        "admin123",

      role:
        "admin",

      blocked:
        false
    });

    saveData(
      "cookbookUsers",
      users
    );
  }


  $$("[data-auth-tab]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          $$("[data-auth-tab]")
            .forEach(x =>
              x.classList.remove(
                "active"
              )
            );

          button.classList.add(
            "active"
          );

          $("#loginBox")
            .classList.toggle(
              "hidden",
              button.dataset.authTab !==
              "login"
            );

          $("#signupBox")
            .classList.toggle(
              "hidden",
              button.dataset.authTab !==
              "signup"
            );

        }
      );

    });


  $("#authLanguage")
    ?.addEventListener(
      "change",
      event => {

        changeLanguage(
          event.target.value
        );

      }
    );


  $("#loginForm")
    ?.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const email =
          $("#loginEmail")
            .value
            .trim()
            .toLowerCase();

        const password =
          $("#loginPassword")
            .value;

        const user =
          getData(
            "cookbookUsers",
            []
          ).find(
            item =>
              item.email === email &&
              item.password === password
          );

        if (!user) {

          $("#authMessage")
            .textContent =
            t("invalidLogin");

          return;
        }

        if (user.blocked) {

          $("#authMessage")
            .textContent =
            t("blocked");

          return;
        }

        saveData(
          "cookbookCurrentUser",
          user
        );

        location.href =
          user.role === "admin"
            ? "admin.html"
            : "user.html";

      }
    );


  $("#signupForm")
    ?.addEventListener(
      "submit",
      event => {

        event.preventDefault();

        const name =
          $("#signupName")
            .value
            .trim();

        const email =
          $("#signupEmail")
            .value
            .trim()
            .toLowerCase();

        const password =
          $("#signupPassword")
            .value;

        const role =
          $("#signupRole")
            .value;

        const users =
          getData(
            "cookbookUsers",
            []
          );

        if (
          users.some(
            user =>
              user.email === email
          )
        ) {

          $("#authMessage")
            .textContent =
            t("emailExists");

          return;
        }

        users.push({

          name,
          email,
          password,
          role,
          blocked: false

        });

        saveData(
          "cookbookUsers",
          users
        );

        $("#authMessage")
          .textContent =
          t("accountCreated");

        event.target.reset();

        $(
          "[data-auth-tab='login']"
        )?.click();

      }
    );

}


/* =====================================================
   PROTECTION
===================================================== */

function protect(role) {

  const user =
    currentUser();

  if (!user) {

    location.href =
      "index.html";

    return false;
  }

  if (
    role &&
    user.role !== role
  ) {

    location.href =
      user.role === "admin"
        ? "admin.html"
        : "user.html";

    return false;
  }

  return true;
}


function logout() {

  localStorage.removeItem(
    "cookbookCurrentUser"
  );

  location.href =
    "index.html";
}


/* =====================================================
   FAVORITES
===================================================== */

function recipes() {

  return getData(
    "cookbookRecipes",
    []
  );
}


function favorites() {

  return getData(
    userKey("cookbookFavorites"),
    []
  );
}


function isFavorite(id) {

  return favorites()
    .includes(id);
}


function toggleFavorite(id) {

  let list =
    favorites();

  if (
    list.includes(id)
  ) {

    list =
      list.filter(
        item =>
          item !== id
      );

    toast(
      t("favoriteRemoved")
    );

  } else {

    list.push(id);

    toast(
      t("favoriteAdded")
    );
  }

  saveData(
    userKey("cookbookFavorites"),
    list
  );

  renderHome();
  renderFavorites();
}


/* =====================================================
   RECIPE CARD
===================================================== */

function recipeCard(recipe) {

  return `

    <article class="recipe-card">

      <img
        class="recipe-img"
        src="${escapeHTML(recipe.image)}"
        data-image-name="${escapeHTML(recipe.name)}"
        alt="${escapeHTML(
          localizedRecipeName(
            recipe.name
          )
        )}"
        loading="lazy"
      >

      <div class="recipe-body">

        <div class="meta">

          <span class="tag">
            ${escapeHTML(
              categoryName(
                recipe.category
              )
            )}
          </span>

          <span class="tag ${
            recipe.diet === "Non-Veg"
              ? "nonveg"
              : ""
          }">

            ${recipe.diet === "Veg"
              ? t("veg")
              : t("nonVeg")}

          </span>

        </div>

        <h3>
          ${escapeHTML(
            localizedRecipeName(
              recipe.name
            )
          )}
        </h3>

        <div class="meta">
          ⭐ ${recipe.rating.toFixed(1)}
          · ${recipe.ratingCount}
        </div>

        <div class="card-actions">

          <button
            class="view"
            data-view="${recipe.id}">
            ${t("view")}
          </button>

          <button
            data-favorite="${recipe.id}">
            ${
              isFavorite(recipe.id)
                ? "❤️"
                : "♡"
            }
          </button>

        </div>

      </div>

    </article>
  `;
}


function categoryName(category) {

  const map = {

    Breakfast: "breakfast",
    Lunch: "lunch",
    Dinner: "dinner",
    Snacks: "snacks",
    Desserts: "desserts",
    Drinks: "drinks"

  };

  return t(
    map[category] ||
    category
  );
}


/* =====================================================
   FILTERING
===================================================== */

function filteredRecipes() {

  const search =
    (
      $("#search")?.value ||
      ""
    )
      .toLowerCase()
      .trim();

  const category =
    $("#category")?.value ||
    "all";

  const diet =
    $("#diet")?.value ||
    "all";

  const ingredient =
    (
      $("#ingredient")?.value ||
      ""
    )
      .toLowerCase()
      .trim();

  return recipes()
    .filter(recipe => {

      const text =
        (
          recipe.name +
          " " +
          recipe.ingredients.join(" ") +
          " " +
          recipe.cuisine
        ).toLowerCase();

      return (

        (
          category === "all" ||
          recipe.category === category
        ) &&

        (
          diet === "all" ||
          recipe.diet === diet
        ) &&

        (
          !search ||
          text.includes(search)
        ) &&

        (
          !ingredient ||
          recipe.ingredients
            .join(" ")
            .toLowerCase()
            .includes(ingredient)
        )

      );

    });
}


/* =====================================================
   HOME
===================================================== */

function renderHome() {

  const grid =
    $("#recipeGrid");

  if (!grid) return;

  const list =
    filteredRecipes();

  if ($("#recipeCount")) {

    $("#recipeCount")
      .textContent =
      recipes().length;
  }

  grid.innerHTML =
    list
      .map(recipeCard)
      .join("") ||
    `
      <div class="form-card">
        ${t("noRecipes")}
      </div>
    `;

  renderCategoryChips();

  updateRecipeImages();
}


function renderCategoryChips() {

  const box =
    $("#categoryChips");

  if (!box) return;

  const categories = [
    ["all", "all"],
    ["Breakfast", "breakfast"],
    ["Lunch", "lunch"],
    ["Dinner", "dinner"],
    ["Snacks", "snacks"],
    ["Desserts", "desserts"],
    ["Drinks", "drinks"]
  ];

  box.innerHTML =
    categories.map(
      item => `

        <button
          class="chip ${
            (
              $("#category")
                ?.value ||
              "all"
            ) === item[0]
              ? "active"
              : ""
          }"
          data-category-chip="${item[0]}">

          ${t(item[1])}

        </button>

      `
    ).join("");
}


/* =====================================================
   IMAGES
===================================================== */

async function updateRecipeImages() {

  const images =
    $$("[data-image-name]");

  for (
    const image of images
  ) {

    const name =
      image.dataset.imageName;

    const better =
      await findRecipeImage(
        name
      );

    if (better) {
      image.src =
        better;
    }
  }
}


/* =====================================================
   YOUTUBE
===================================================== */

async function searchYouTubeVideos(
  recipeName
) {

  const storedKey =
    localStorage.getItem(
      "cookbookYouTubeKey"
    );

  const key =
    storedKey ||
    YOUTUBE_API_KEY;

  if (
    !key ||
    key ===
    "PASTE_YOUR_YOUTUBE_API_KEY_HERE"
  ) {

    return {
      error:
        t("youtubeError")
    };
  }

  const cache =
    getData(
      "cookbookYouTubeCache",
      {}
    );

  if (cache[recipeName]) {

    return cache[recipeName];
  }

  try {

    const url =
      "https://www.googleapis.com/youtube/v3/search" +
      "?part=snippet" +
      "&type=video" +
      "&videoEmbeddable=true" +
      "&safeSearch=strict" +
      "&maxResults=3" +
      "&regionCode=IN" +
      "&q=" +
      encodeURIComponent(
        recipeName +
        " Indian recipe cooking"
      ) +
      "&key=" +
      encodeURIComponent(key);

    const response =
      await fetch(url);

    const data =
      await response.json();

    if (data.error) {
      throw new Error(
        data.error.message
      );
    }

    const result =
      (data.items || [])
        .filter(
          item =>
            item.id?.videoId
        )
        .map(item => ({

          id:
            item.id.videoId,

          title:
            item.snippet.title

        }));

    cache[recipeName] =
      result;

    saveData(
      "cookbookYouTubeCache",
      cache
    );

    return result;

  } catch {

    return {
      error:
        t("youtubeError")
    };
  }
}


/* =====================================================
   OPEN RECIPE
===================================================== */

async function openRecipe(id) {

  const recipe =
    recipes().find(
      item =>
        item.id === id
    );

  if (!recipe) return;

  const modal =
    $("#recipeModal");

  const detail =
    $("#recipeDetail");

  if (!modal || !detail) {
    return;
  }

  const displayName =
    localizedRecipeName(
      recipe.name
    );

  detail.innerHTML = `

    <div class="detail-grid">

      <div>

        <img
          id="detailImage"
          class="detail-img"
          src="${escapeHTML(recipe.image)}"
          alt="${escapeHTML(displayName)}"
        >

        <h1 class="detail-title">
          ${escapeHTML(displayName)}
        </h1>

        <div class="meta">

          <span class="tag">
            ${escapeHTML(
              categoryName(
                recipe.category
              )
            )}
          </span>

          <span class="tag ${
            recipe.diet === "Non-Veg"
              ? "nonveg"
              : ""
          }">

            ${
              recipe.diet === "Veg"
                ? t("veg")
                : t("nonVeg")
            }

          </span>

          <span>
            ⭐ ${recipe.rating.toFixed(1)}
          </span>

        </div>

      </div>


      <div>

        <h2>
          ${t("ingredients")}
        </h2>

        <ul>

          ${recipe.ingredients
            .map(
              ingredient =>
                `<li>
                  ${escapeHTML(
                    localIngredient(
                      ingredient
                    )
                  )}
                </li>`
            )
            .join("")}

        </ul>


        <div class="detail-actions">

          <button
            class="primary"
            data-favorite="${recipe.id}">

            ${
              isFavorite(recipe.id)
                ? "❤️ " + t("saved")
                : "♡ " + t("favorite")
            }

          </button>


          <button
            class="secondary"
            data-share="${recipe.id}">

            ${t("share")}

          </button>


          <button
            class="secondary"
            onclick="window.print()">

            ${t("print")}

          </button>

        </div>

      </div>

    </div>


    <hr>


    <h2>
      ${t("procedure")}
    </h2>


    <ol class="steps">

      ${translatedSteps(
        recipe.name
      )
        .map(
          step =>
            `<li>
              ${escapeHTML(step)}
            </li>`
        )
        .join("")}

    </ol>


    <hr>


    <h2>
      ${t("videos")}
    </h2>


    <div
      id="videoArea"
      class="video-grid">

      <div class="form-card">
        ${t("searching")}
      </div>

    </div>


    <hr>


    <h2>
      ${t("rate")}
    </h2>


    <div>

      ${
        [1, 2, 3, 4, 5]
          .map(
            number =>
              `<button
                data-rate="${number}"
                style="
                  background:none;
                  font-size:28px;
                ">
                ☆
              </button>`
          )
          .join("")
      }

    </div>

  `;

  modal.classList.remove(
    "hidden"
  );


  const image =
    await findRecipeImage(
      recipe.name
    );

  if ($("#detailImage")) {
    $("#detailImage").src =
      image;
  }


  const videos =
    await searchYouTubeVideos(
      recipe.name
    );

  const videoArea =
    $("#videoArea");

  if (!videoArea) return;


  if (videos.error) {

    videoArea.innerHTML = `

      <div class="form-card">

        <p>
          ${escapeHTML(
            videos.error
          )}
        </p>

        <a
          target="_blank"
          href="https://www.youtube.com/results?search_query=${encodeURIComponent(
            recipe.name +
            " Indian recipe cooking"
          )}">

          ${t("youtubeSearch")}

        </a>

      </div>
    `;

    return;
  }


  if (!videos.length) {

    videoArea.innerHTML = `

      <div class="form-card">

        ${t("noVideo")}

      </div>

    `;

    return;
  }


  videoArea.innerHTML =
    videos.map(
      video => `

        <div class="video-card">

          <iframe
            src="https://www.youtube.com/embed/${encodeURIComponent(video.id)}"
            title="${escapeHTML(video.title)}"
            loading="lazy"
            allowfullscreen>
          </iframe>

          <h4>
            ${escapeHTML(
              video.title
            )}
          </h4>

        </div>

      `
    ).join("");
}


/* =====================================================
   SHARE
===================================================== */

async function shareRecipe(id) {

  const recipe =
    recipes().find(
      item =>
        item.id === id
    );

  if (!recipe) return;

  const title =
    localizedRecipeName(
      recipe.name
    );

  if (
    navigator.share
  ) {

    await navigator.share({

      title,

      text:
        title +
        " - CookBook"

    });

  } else if (
    navigator.clipboard
  ) {

    await navigator.clipboard.writeText(
      title
    );

    toast(title);
  }
}


/* =====================================================
   RATING
===================================================== */

function rateRecipe(
  id,
  rating
) {

  const data =
    getData(
      "cookbookRatings",
      {}
    );

  if (!data[id]) {
    data[id] = [];
  }

  data[id].push({

    email:
      currentUser()?.email ||
      "guest",

    rating,

    date:
      new Date().toISOString()

  });

  saveData(
    "cookbookRatings",
    data
  );

  toast(
    t("ratingSaved")
  );
}


/* =====================================================
   COLLECTIONS
===================================================== */

function renderCollections() {

  const box =
    $("#collectionList");

  if (!box) return;

  const data =
    getData(
      userKey(
        "cookbookCollections"
      ),
      {}
    );

  box.innerHTML =
    Object.entries(data)
      .map(
        ([name, ids]) => `

          <div class="collection-card">

            <h3>
              📁 ${escapeHTML(name)}
            </h3>

            <p>
              ${ids.length}
              ${t("recipes")}
            </p>

          </div>

        `
      )
      .join("") ||

    `
      <div class="form-card">
        ${t("noCollections")}
      </div>
    `;
}


function createCollection() {

  const name =
    prompt(
      getLanguage() === "te"
        ? "కలెక్షన్ పేరు నమోదు చేయండి:"
        : getLanguage() === "hi"
          ? "कलेक्शन का नाम लिखें:"
          : getLanguage() === "ta"
            ? "சேமிப்பு பெயரை உள்ளிடவும்:"
            : getLanguage() === "ml"
              ? "ശേഖരത്തിന്റെ പേര് നൽകുക:"
              : "Enter collection name:"
    );

  if (!name) return;

  const data =
    getData(
      userKey(
        "cookbookCollections"
      ),
      {}
    );

  if (!data[name]) {
    data[name] = [];
  }

  saveData(
    userKey(
      "cookbookCollections"
    ),
    data
  );

  renderCollections();

  toast(
    t("collectionCreated")
  );
}


/* =====================================================
   PLANNER
===================================================== */

function renderPlanner() {

  const select =
    $("#planRecipe");

  if (select) {

    select.innerHTML =
      recipes()
        .map(
          recipe => `

            <option value="${recipe.id}">
              ${escapeHTML(
                localizedRecipeName(
                  recipe.name
                )
              )}
            </option>

          `
        )
        .join("");
  }


  const box =
    $("#planList");

  if (!box) return;

  const plans =
    getData(
      userKey(
        "cookbookMealPlans"
      ),
      []
    );

  box.innerHTML =
    plans.map(
      (item, index) => {

        const recipe =
          recipes().find(
            r =>
              r.id ===
              item.recipe
          );

        return `

          <div class="plan-card">

            <div>

              <b>
                ${escapeHTML(
                  item.day
                )}
                ·
                ${escapeHTML(
                  item.meal
                )}
              </b>

              <div>
                ${escapeHTML(
                  recipe
                    ? localizedRecipeName(
                        recipe.name
                      )
                    : ""
                )}
              </div>

            </div>

            <button
              class="danger-btn"
              data-plan-delete="${index}">

              ${t("delete")}

            </button>

          </div>
        `;
      }
    ).join("") ||

    `
      <div class="form-card">
        ${t("noPlans")}
      </div>
    `;
}


function addMealPlan() {

  const plans =
    getData(
      userKey(
        "cookbookMealPlans"
      ),
      []
    );

  plans.push({

    day:
      $("#planDay").value,

    meal:
      $("#planMeal").value,

    recipe:
      $("#planRecipe").value

  });

  saveData(
    userKey(
      "cookbookMealPlans"
    ),
    plans
  );

  renderPlanner();

  toast(
    t("mealAdded")
  );
}


/* =====================================================
   SHOPPING
===================================================== */

function renderShopping() {

  const box =
    $("#shoppingList");

  if (!box) return;

  const list =
    getData(
      userKey(
        "cookbookShoppingList"
      ),
      []
    );

  box.innerHTML =
    list.map(
      (item, index) => `

        <div class="shop-item">

          <span>
            🛒 ${escapeHTML(item)}
          </span>

          <button
            class="danger-btn"
            data-shop-delete="${index}">

            ×

          </button>

        </div>
      `
    ).join("") ||

    `
      <div class="form-card">
        ${t("emptyShopping")}
      </div>
    `;
}


function addShoppingItem(
  value
) {

  if (!value) return;

  const list =
    getData(
      userKey(
        "cookbookShoppingList"
      ),
      []
    );

  list.push(value);

  saveData(
    userKey(
      "cookbookShoppingList"
    ),
    list
  );

  renderShopping();
}


/* =====================================================
   FAVORITES PAGE
===================================================== */

function renderFavorites() {

  const grid =
    $("#favoriteGrid");

  if (!grid) return;

  const ids =
    favorites();

  const list =
    recipes().filter(
      recipe =>
        ids.includes(
          recipe.id
        )
    );

  grid.innerHTML =
    list
      .map(recipeCard)
      .join("") ||

    `
      <div class="form-card">
        ${t("noFavorites")}
      </div>
    `;

  updateRecipeImages();
}


/* =====================================================
   COMMUNITY
===================================================== */

function renderCommunity() {

  const box =
    $("#communityList");

  if (!box) return;

  const list =
    getData(
      "cookbookSubmissions",
      []
    )
    .filter(
      item =>
        item.status ===
        "approved"
    );

  box.innerHTML =
    list.map(
      item => `

        <div class="community-card">

          <h3>
            ${escapeHTML(
              localizedRecipeName(
                item.name
              )
            )}
          </h3>

          <p>
            ${t("by")}:
            ${escapeHTML(
              item.author
            )}
          </p>

        </div>

      `
    ).join("") ||

    `
      <div class="form-card">
        ${t("communityEmpty")}
      </div>
    `;
}


/* =====================================================
   PROFILE
===================================================== */

function renderProfile() {

  const user =
    currentUser();

  if (!user) return;

  if ($("#profileName")) {
    $("#profileName")
      .textContent =
      user.name;
  }

  if ($("#profileEmail")) {
    $("#profileEmail")
      .textContent =
      user.email;
  }

  if ($("#profileFavorites")) {
    $("#profileFavorites")
      .textContent =
      favorites().length;
  }

  if ($("#profileRecipes")) {
    $("#profileRecipes")
      .textContent =
      recipes().length;
  }
}


/* =====================================================
   SUBMIT RECIPE
===================================================== */

function submitRecipe(
  event
) {

  event.preventDefault();

  const submission = {

    id:
      "submission_" +
      Date.now(),

    name:
      $("#submitName")
        .value
        .trim(),

    category:
      $("#submitCategory")
        .value,

    ingredients:
      $("#submitIngredients")
        .value
        .split(",")
        .map(
          x =>
            x.trim()
        )
        .filter(Boolean),

    steps:
      $("#submitSteps")
        .value
        .split("\n")
        .map(
          x =>
            x.trim()
        )
        .filter(Boolean),

    image:
      $("#submitImage")
        .value
        .trim(),

    author:
      currentUser()?.name ||
      "User",

    email:
      currentUser()?.email ||
      "",

    status:
      "pending"

  };

  const list =
    getData(
      "cookbookSubmissions",
      []
    );

  list.push(
    submission
  );

  saveData(
    "cookbookSubmissions",
    list
  );

  event.target.reset();

  toast(
    t("recipeSubmitted")
  );
}


/* =====================================================
   USER APP
===================================================== */

function initUser() {

  if (!protect("user")) {
    return;
  }

  applyLanguage();

  renderHome();
  renderFavorites();
  renderCollections();
  renderPlanner();
  renderShopping();
  renderCommunity();
  renderProfile();


  $("#language")
    ?.addEventListener(
      "change",
      event => {

        changeLanguage(
          event.target.value
        );

      }
    );


  $("#search")
    ?.addEventListener(
      "input",
      renderHome
    );


  $("#ingredient")
    ?.addEventListener(
      "input",
      renderHome
    );


  $("#category")
    ?.addEventListener(
      "change",
      event => {

        window.currentCategory =
          event.target.value;

        renderHome();
      }
    );


  $("#diet")
    ?.addEventListener(
      "change",
      event => {

        window.currentDiet =
          event.target.value;

        renderHome();
      }
    );


  $("#clearFilters")
    ?.addEventListener(
      "click",
      () => {

        $("#search").value =
          "";

        $("#ingredient").value =
          "";

        window.currentCategory =
          "all";

        window.currentDiet =
          "all";

        renderHome();

      }
    );


  $$("[data-section]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          $$("[data-section]")
            .forEach(
              item =>
                item.classList
                  .remove("active")
            );

          button.classList.add(
            "active"
          );

          $$(".page-section")
            .forEach(
              section =>
                section.classList
                  .remove("active")
            );

          const target =
            $(
              "#" +
              button.dataset.section
            );

          if (target) {
            target.classList.add(
              "active"
            );
          }

        }
      );

    });


  $("#categoryChips")
    ?.addEventListener(
      "click",
      event => {

        const button =
          event.target.closest(
            "[data-category-chip]"
          );

        if (!button) return;

        window.currentCategory =
          button.dataset.categoryChip;

        renderHome();

      }
    );


  $("#newCollection")
    ?.addEventListener(
      "click",
      createCollection
    );


  $("#addPlan")
    ?.addEventListener(
      "click",
      addMealPlan
    );


  $("#addShopping")
    ?.addEventListener(
      "click",
      () => {

        const input =
          $("#shoppingInput");

        addShoppingItem(
          input.value.trim()
        );

        input.value = "";

      }
    );


  $("#submitForm")
    ?.addEventListener(
      "submit",
      submitRecipe
    );


  $("[data-action='logout']")
    ?.addEventListener(
      "click",
      logout
    );


  $("#closeRecipe")
    ?.addEventListener(
      "click",
      () => {

        $("#recipeModal")
          .classList.add(
            "hidden"
          );

      }
    );


  $("#recipeModal")
    ?.addEventListener(
      "click",
      event => {

        if (
          event.target.id ===
          "recipeModal"
        ) {

          event.currentTarget
            .classList.add(
              "hidden"
            );
        }

      }
    );


  document.addEventListener(
    "click",
    userClickHandler
  );
}


/* =====================================================
   USER CLICK HANDLER
===================================================== */

function userClickHandler(
  event
) {

  const view =
    event.target.closest(
      "[data-view]"
    );

  if (view) {

    openRecipe(
      view.dataset.view
    );

    return;
  }


  const fav =
    event.target.closest(
      "[data-favorite]"
    );

  if (fav) {

    toggleFavorite(
      fav.dataset.favorite
    );

    return;
  }


  const share =
    event.target.closest(
      "[data-share]"
    );

  if (share) {

    shareRecipe(
      share.dataset.share
    );

    return;
  }


  const rate =
    event.target.closest(
      "[data-rate]"
    );

  if (rate) {

    const favButton =
      $("#recipeDetail")
        ?.querySelector(
          "[data-favorite]"
        );

    if (favButton) {

      rateRecipe(
        favButton.dataset.favorite,
        Number(
          rate.dataset.rate
        )
      );
    }

    return;
  }


  const planDelete =
    event.target.closest(
      "[data-plan-delete]"
    );

  if (planDelete) {

    const plans =
      getData(
        userKey(
          "cookbookMealPlans"
        ),
        []
      );

    plans.splice(
      Number(
        planDelete.dataset.planDelete
      ),
      1
    );

    saveData(
      userKey(
        "cookbookMealPlans"
      ),
      plans
    );

    renderPlanner();

    return;
  }


  const shopDelete =
    event.target.closest(
      "[data-shop-delete]"
    );

  if (shopDelete) {

    const list =
      getData(
        userKey(
          "cookbookShoppingList"
        ),
        []
      );

    list.splice(
      Number(
        shopDelete.dataset.shopDelete
      ),
      1
    );

    saveData(
      userKey(
        "cookbookShoppingList"
      ),
      list
    );

    renderShopping();
  }
}


/* =====================================================
   ADMIN
===================================================== */

function adminRender() {

  const recipeList =
    recipes();

  const users =
    getData(
      "cookbookUsers",
      []
    );

  const submissions =
    getData(
      "cookbookSubmissions",
      []
    );

  if ($("#aRecipes")) {
    $("#aRecipes")
      .textContent =
      recipeList.length;
  }

  if ($("#aUsers")) {
    $("#aUsers")
      .textContent =
      users.length;
  }

  if ($("#aSubs")) {
    $("#aSubs")
      .textContent =
      submissions.length;
  }


  const box =
    $("#adminRecipeList");

  if (box) {

    const search =
      (
        $("#adminRecipeSearch")
          ?.value ||
        ""
      )
        .toLowerCase();

    box.innerHTML =
      recipeList
        .filter(
          recipe =>
            recipe.name
              .toLowerCase()
              .includes(search)
        )
        .map(
          recipe => `

            <div class="admin-row">

              <div>

                <b>
                  ${escapeHTML(
                    localizedRecipeName(
                      recipe.name
                    )
                  )}
                </b>

                <small>
                  · ${escapeHTML(
                    categoryName(
                      recipe.category
                    )
                  )}
                </small>

              </div>

              <div class="row-actions">

                <button
                  class="secondary"
                  data-admin-feature="${recipe.id}">
                  ⭐
                </button>

                <button
                  class="danger-btn"
                  data-admin-delete="${recipe.id}">
                  ${t("delete")}
                </button>

              </div>

            </div>

          `
        )
        .join("");
  }


  const userBox =
    $("#adminUserList");

  if (userBox) {

    userBox.innerHTML =
      users
        .map(
          (user, index) => `

            <div class="admin-row">

              <div>

                <b>
                  ${escapeHTML(
                    user.name
                  )}
                </b>

                <small>
                  · ${escapeHTML(
                    user.email
                  )}
                </small>

              </div>

              ${
                user.email !==
                "admin@cookbook.com"
                  ? `
                    <button
                      class="secondary"
                      data-user-block="${index}">

                      ${
                        user.blocked
                          ? t("unblock")
                          : t("block")
                      }

                    </button>
                  `
                  : ""
              }

            </div>

          `
        )
        .join("");
  }


  const subBox =
    $("#adminSubmissionList");

  if (subBox) {

    subBox.innerHTML =
      submissions
        .map(
          (item, index) => `

            <div class="admin-row">

              <div>

                <b>
                  ${escapeHTML(
                    localizedRecipeName(
                      item.name
                    )
                  )}
                </b>

                <small>
                  · ${escapeHTML(
                    item.author
                  )}
                </small>

              </div>

              <div class="row-actions">

                <button
                  class="primary"
                  data-sub-approve="${index}">
                  ${t("approve")}
                </button>

                <button
                  class="danger-btn"
                  data-sub-reject="${index}">
                  ${t("reject")}
                </button>

              </div>

            </div>

          `
        )
        .join("");
  }
}


/* =====================================================
   ADMIN INITIALIZATION
===================================================== */

function initAdmin() {

  if (!protect("admin")) {
    return;
  }

  applyLanguage();

  adminRender();


  $("#language")
    ?.addEventListener(
      "change",
      event => {

        changeLanguage(
          event.target.value
        );

      }
    );


  $("#adminRecipeSearch")
    ?.addEventListener(
      "input",
      adminRender
    );


  $("#saveYoutubeKey")
    ?.addEventListener(
      "click",
      () => {

        const key =
          $("#youtubeApiKey")
            .value
            .trim();

        localStorage.setItem(
          "cookbookYouTubeKey",
          key
        );

        toast(
          t("keySaved")
        );

      }
    );


  if ($("#youtubeApiKey")) {

    $("#youtubeApiKey")
      .value =
      localStorage.getItem(
        "cookbookYouTubeKey"
      ) || "";
  }


  $("#addRecipeAdmin")
    ?.addEventListener(
      "click",
      () => {

        const name =
          prompt(
            t("recipeName")
          );

        if (!name) return;

        const category =
          prompt(
            t("allCategories") +
            ": Breakfast / Lunch / Dinner / Snacks / Desserts / Drinks",
            "Dinner"
          );

        if (!category) return;

        const list =
          recipes();

        list.push(
          createRecipe(
            name,
            category,
            list.length
          )
        );

        saveData(
          "cookbookRecipes",
          list
        );

        adminRender();

        toast(
          t("recipeAdded")
        );

      }
    );


  $("#resetRecipes")
    ?.addEventListener(
      "click",
      async () => {

        if (
          !confirm(
            t("resetConfirm")
          )
        ) {
          return;
        }

        localStorage.removeItem(
          "cookbookRecipes"
        );

        localStorage.removeItem(
          "cookbookSeedVersion"
        );

        await seedRecipes();

        adminRender();

      }
    );


  $("#exportData")
    ?.addEventListener(
      "click",
      () => {

        const data = {

          recipes:
            getData(
              "cookbookRecipes",
              []
            ),

          users:
            getData(
              "cookbookUsers",
              []
            ),

          submissions:
            getData(
              "cookbookSubmissions",
              []
            )

        };

        const blob =
          new Blob(
            [
              JSON.stringify(
                data,
                null,
                2
              )
            ],
            {
              type:
                "application/json"
            }
          );

        const url =
          URL.createObjectURL(
            blob
          );

        const link =
          document.createElement(
            "a"
          );

        link.href =
          url;

        link.download =
          "cookbook-data.json";

        link.click();

        URL.revokeObjectURL(
          url
        );

      }
    );


  $("#importData")
    ?.addEventListener(
      "change",
      event => {

        const file =
          event.target.files[0];

        if (!file) return;

        const reader =
          new FileReader();

        reader.onload =
          () => {

            try {

              const data =
                JSON.parse(
                  reader.result
                );

              if (data.recipes) {

                saveData(
                  "cookbookRecipes",
                  data.recipes
                );
              }

              if (data.users) {

                saveData(
                  "cookbookUsers",
                  data.users
                );
              }

              if (data.submissions) {

                saveData(
                  "cookbookSubmissions",
                  data.submissions
                );
              }

              adminRender();

              toast(
                t("dataImported")
              );

            } catch {

              toast(
                t("invalidJSON")
              );
            }

          };

        reader.readAsText(
          file
        );

      }
    );


  $$("[data-admin-section]")
    .forEach(button => {

      button.addEventListener(
        "click",
        () => {

          $$("[data-admin-section]")
            .forEach(
              item =>
                item.classList
                  .remove("active")
            );

          button.classList.add(
            "active"
          );

          $$(".admin-section")
            .forEach(
              section =>
                section.classList
                  .remove("active")
            );

          $(
            "#admin-" +
            button.dataset.adminSection
          )
            ?.classList.add(
              "active"
            );

        }
      );

    });


  document.addEventListener(
    "click",
    adminClickHandler
  );


  $("[data-action='logout']")
    ?.addEventListener(
      "click",
      logout
    );
}


/* =====================================================
   ADMIN CLICK HANDLER
===================================================== */

function adminClickHandler(
  event
) {

  const deleteButton =
    event.target.closest(
      "[data-admin-delete]"
    );

  if (deleteButton) {

    const list =
      recipes().filter(
        recipe =>
          recipe.id !==
          deleteButton.dataset.adminDelete
      );

    saveData(
      "cookbookRecipes",
      list
    );

    adminRender();

    toast(
      t("recipeDeleted")
    );

    return;
  }


  const block =
    event.target.closest(
      "[data-user-block]"
    );

  if (block) {

    const users =
      getData(
        "cookbookUsers",
        []
      );

    const index =
      Number(
        block.dataset.userBlock
      );

    users[index].blocked =
      !users[index].blocked;

    saveData(
      "cookbookUsers",
      users
    );

    adminRender();

    return;
  }


  const approve =
    event.target.closest(
      "[data-sub-approve]"
    );

  if (approve) {

    const submissions =
      getData(
        "cookbookSubmissions",
        []
      );

    const index =
      Number(
        approve.dataset.subApprove
      );

    const item =
      submissions[index];

    if (!item) return;

    item.status =
      "approved";

    const list =
      recipes();

    const recipe =
      createRecipe(
        item.name,
        item.category,
        list.length
      );

    recipe.ingredients =
      item.ingredients;

    recipe.steps =
      item.steps;

    if (item.image) {
      recipe.image =
        item.image;
    }

    list.push(recipe);

    saveData(
      "cookbookRecipes",
      list
    );

    saveData(
      "cookbookSubmissions",
      submissions
    );

    adminRender();

    toast(
      t("recipeApproved")
    );

    return;
  }


  const reject =
    event.target.closest(
      "[data-sub-reject]"
    );

  if (reject) {

    const submissions =
      getData(
        "cookbookSubmissions",
        []
      );

    const index =
      Number(
        reject.dataset.subReject
      );

    if (submissions[index]) {

      submissions[index].status =
        "rejected";
    }

    saveData(
      "cookbookSubmissions",
      submissions
    );

    adminRender();

    toast(
      t("recipeRejected")
    );
  }
}


/* =====================================================
   START
===================================================== */

function updateDynamicPageText() {

  $$("[data-dynamic]")
    .forEach(element => {

      const key =
        element.dataset.dynamic;

      element.textContent =
        t(key);

    });
}


document.addEventListener(
  "DOMContentLoaded",
  async () => {

    await seedRecipes();

    const file =
      location.pathname
        .split("/")
        .pop()
        .toLowerCase();

    applyLanguage();

    if (
      file === "user.html"
    ) {

      initUser();

    } else if (
      file === "admin.html"
    ) {

      initAdmin();

    } else {

      initAuth();
    }

  }
);