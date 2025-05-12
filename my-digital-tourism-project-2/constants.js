// USER PROMPTS (bilingue)
const prompts = [
  // Saluti
  ["hello", "hi", "good morning", "good afternoon", "ciao", "buongiorno", "salve"],
  // Opinioni su città
  ["what do you think of monte compatri", "what do you think of segni", "what do you think of genazzano", "cosa ne pensi di monte compatri", "cosa ne pensi di segni", "cosa ne pensi di genazzano"],
  // Curiosità su Monte Compatri
  ["curiosity about monte compatri", "curiosità su monte compatri"],
  // Curiosità su Segni
  ["curiosity about segni", "curiosità su segni"],
  // Curiosità su Genazzano
  ["curiosity about genazzano", "curiosità su genazzano"],
  // Eventi e tradizioni
  ["local festivals", "traditional events", "feste locali", "eventi tradizionali"],
  // Natura e riserve
  ["nature around fiuggi", "riserva di paliano", "natura vicino fiuggi", "riserva naturale paliano"],
  // Fiuggi terme
  ["fiuggi water", "thermal water fiuggi", "acqua di fiuggi", "terme di fiuggi"],
  // Popolazione Fiuggi
  ["inhabitants of fiuggi", "popolazione di fiuggi"],
  // Storia Monte Compatri, Segni, Genazzano
  ["history of monte compatri", "history of segni", "history of genazzano", "storia di monte compatri", "storia di segni", "storia di genazzano"]
];

// RISPOSTE
const replies = [
  // Saluti
  [
    "Hello! Welcome to our digital tourism project.",
    "Hi there! How can I assist you today?",
    "Greetings! Ready to explore Lazio?",
    "Ciao! Benvenuto nel nostro progetto di turismo digitale.",
    "Salve! In cosa posso aiutarti oggi?",
    "Benvenuto! Pronto a scoprire il Lazio?"
  ],
  // Opinioni su città
  [
    "Monte Compatri is a scenic hill town near Rome, known for its historic center and panoramic views.",
    "Segni is an ancient town with remarkable Roman and medieval architecture, including its famous polygonal walls.",
    "Genazzano is charming and artistic, famous for its medieval aqueduct and the Sanctuary of Our Lady of Good Counsel.",
    "Monte Compatri è un pittoresco borgo collinare vicino Roma, famoso per il centro storico e i panorami mozzafiato.",
    "Segni è una città antichissima, celebre per le sue architetture romane e medievali.",
    "Genazzano è affascinante e artistica, nota per l'acquedotto medievale e il Santuario della Madonna del Buon Consiglio."
  ],
  // Curiosità Monte Compatri
  [
    "Monte Compatri has ancient origins, possibly dating back to pre-Roman times.",
    "Monte Compatri is part of the Castelli Romani wine district, known for Frascati DOCG wines.",
    "A curious tradition is the Focaracci, large bonfires lit in honor of Saint Joseph in March.",
    "Monte Compatri ha origini antichissime, forse risalenti all'epoca preromana.",
    "Monte Compatri fa parte del territorio del vino Frascati DOCG.",
    "Una tradizione curiosa è quella dei Focaracci, falò accesi in onore di San Giuseppe."
  ],
  // Curiosità Segni
  [
    "Segni's polygonal walls were built with massive stone blocks without mortar — a true ancient engineering marvel.",
    "The Temple of Juno Moneta is believed to have inspired the word 'money'.",
    "Segni hosts a chestnut festival every October.",
    "Le mura poligonali di Segni furono costruite con enormi blocchi di pietra senza malta.",
    "Il Tempio di Giunone Moneta avrebbe ispirato il termine 'moneta'.",
    "Segni ospita ogni ottobre la Sagra della Castagna."
  ],
  // Curiosità Genazzano
  [
    "Genazzano is famous for the Infiorata, a flower festival in July.",
    "The Castello Colonna now hosts modern art exhibitions.",
    "Its artistic charm makes it a cultural hub in Lazio.",
    "Genazzano è famosa per l'Infiorata, una festa floreale a luglio.",
    "Il Castello Colonna ospita mostre d’arte contemporanea.",
    "Il suo fascino artistico la rende un centro culturale del Lazio."
  ],
  // Eventi e tradizioni
  [
    "Monte Compatri celebrates Saint Joseph’s Day with bonfires and local food.",
    "Segni’s chestnut festival is a must in October.",
    "Genazzano’s Infiorata attracts tourists with its floral art.",
    "Paliano hosts a medieval Palio with jousts and parades.",
    "Monte Compatri celebra San Giuseppe con falò e piatti tipici.",
    "La Sagra della Castagna di Segni è imperdibile a ottobre.",
    "L’Infiorata di Genazzano attira migliaia di turisti.",
    "Paliano ospita un Palio medievale con sfilate storiche."
  ],
  // Natura e riserve
  [
    "The Paliano Nature Reserve is perfect for hiking and birdwatching.",
    "Fiuggi is near the Ernici Mountains, great for trekking.",
    "L'area intorno a Paliano è perfetta per escursioni e natura.",
    "La Riserva Naturale di Paliano è ideale per il birdwatching.",
    "Fiuggi è vicina ai Monti Ernici, ideali per escursioni.",
    "L'area verde intorno a Paliano e Fiuggi è ricca di sentieri."
  ],
  // Fiuggi terme
  [
    "Fiuggi is known for its thermal waters with purifying properties.",
    "The springs Fonte Bonifacio VIII and Fonte Anticolana are famous.",
    "Even Michelangelo used Fiuggi water for healing.",
    "Fiuggi è nota per le sue acque termali depurative.",
    "Le fonti Bonifacio VIII e Anticolana sono molto rinomate.",
    "Anche Michelangelo usò l'acqua di Fiuggi per curarsi."
  ],
  // Popolazione Fiuggi
  [
    "Fiuggi has about 9,000 inhabitants.",
    "Fiuggi ha circa 9.000 abitanti."
  ],
  // Storia dei comuni
  [
    "Monte Compatri may be on the site of ancient Labicum.",
    "Segni was a Roman colony with a temple to Juno.",
    "The Colonna Castle in Genazzano now hosts art events.",
    "Monte Compatri potrebbe sorgere sull'antica Labico.",
    "Segni fu colonia romana con un tempio dedicato a Giunone.",
    "Il Castello Colonna di Genazzano oggi ospita eventi culturali."
  ]
];

// RISPOSTE GENERICHE
const alternative = [
  "I'm sorry, I didn't understand that. Could you rephrase?",
  "Can you clarify your question?",
  "I'm not sure I understand. Could you provide more details?",
  "Please be more specific so I can assist you better.",
  "Mi dispiace, non ho capito. Puoi riformulare?",
  "Puoi chiarire meglio la tua domanda?",
  "Non sono sicuro di aver capito. Puoi fornire più dettagli?"
];

// COVID info
const coronavirus = [
  "Please follow local health guidelines and stay safe.",
  "Remember to wear a mask and maintain social distancing.",
  "Travel responsibly and prioritize your health.",
  "Segui le linee guida sanitarie locali e rimani al sicuro.",
  "Ricorda di indossare la mascherina e mantenere le distanze.",
  "Viaggia in modo responsabile e metti la salute al primo posto."
];
