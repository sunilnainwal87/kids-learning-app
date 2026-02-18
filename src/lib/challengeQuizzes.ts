import { Quiz } from '@/types';

export const challengeQuizzes: Quiz[] = [
  {
    subjectId: 'math',
    title: 'Math Challenge',
    questions: [
      {
        id: 1,
        question: 'What is 5 + 3?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '5 + 3 = 8'
      },
      {
        id: 2,
        question: 'How many sides does a triangle have?',
        options: ['2', '3', '4', '5'],
        correctAnswer: 1,
        explanation: 'A triangle has 3 sides'
      },
      {
        id: 3,
        question: 'What is 12 - 7?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        explanation: '12 - 7 = 5'
      },
      {
        id: 4,
        question: 'Which number comes after 19?',
        options: ['18', '20', '21', '22'],
        correctAnswer: 1,
        explanation: '19, 20, 21...'
      },
      {
        id: 5,
        question: 'What is 2 × 4?',
        options: ['6', '8', '10', '12'],
        correctAnswer: 1,
        explanation: '2 × 4 = 8'
      },
      {
        id: 6,
        question: 'How many corners does a square have?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 1,
        explanation: 'A square has 4 corners'
      },
      {
        id: 7,
        question: 'What is half of 10?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'Half of 10 is 5'
      },
      {
        id: 8,
        question: 'Which is the smallest number?',
        options: ['15', '8', '12', '20'],
        correctAnswer: 1,
        explanation: '8 is the smallest number'
      },
      {
        id: 9,
        question: 'What is 6 + 6?',
        options: ['10', '11', '12', '13'],
        correctAnswer: 2,
        explanation: '6 + 6 = 12'
      },
      {
        id: 10,
        question: 'How many days are in a week?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'There are 7 days in a week'
      },
      {
        id: 11,
        question: 'What is 15 + 5?',
        options: ['18', '19', '20', '21'],
        correctAnswer: 2,
        explanation: '15 + 5 = 20'
      },
      {
        id: 12,
        question: 'What is 3 × 3?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 3,
        explanation: '3 × 3 = 9'
      },
      {
        id: 13,
        question: 'What is 18 - 9?',
        options: ['7', '8', '9', '10'],
        correctAnswer: 2,
        explanation: '18 - 9 = 9'
      },
      {
        id: 14,
        question: 'How many sides does a pentagon have?',
        options: ['4', '5', '6', '7'],
        correctAnswer: 1,
        explanation: 'A pentagon has 5 sides'
      },
      {
        id: 15,
        question: 'What is 7 + 8?',
        options: ['13', '14', '15', '16'],
        correctAnswer: 2,
        explanation: '7 + 8 = 15'
      },
      {
        id: 16,
        question: 'What is half of 20?',
        options: ['8', '9', '10', '11'],
        correctAnswer: 2,
        explanation: 'Half of 20 is 10'
      },
      {
        id: 17,
        question: 'What is 4 × 2?',
        options: ['6', '7', '8', '9'],
        correctAnswer: 2,
        explanation: '4 × 2 = 8'
      },
      {
        id: 18,
        question: 'What comes before 50?',
        options: ['48', '49', '50', '51'],
        correctAnswer: 1,
        explanation: '48, 49, 50...'
      },
      {
        id: 19,
        question: 'What is 25 - 10?',
        options: ['13', '14', '15', '16'],
        correctAnswer: 2,
        explanation: '25 - 10 = 15'
      },
      {
        id: 20,
        question: 'What is 5 × 5?',
        options: ['20', '25', '30', '35'],
        correctAnswer: 1,
        explanation: '5 × 5 = 25'
      }
    ]
  },
  {
    subjectId: 'science',
    title: 'Science Challenge',
    questions: [
      {
        id: 1,
        question: 'What do plants need to grow?',
        options: ['Only water', 'Water, sunlight, and air', 'Only sunlight', 'Only air'],
        correctAnswer: 1,
        explanation: 'Plants need water, sunlight, and air to grow'
      },
      {
        id: 2,
        question: 'Which animal can fly?',
        options: ['Dog', 'Cat', 'Bird', 'Fish'],
        correctAnswer: 2,
        explanation: 'Birds can fly'
      },
      {
        id: 3,
        question: 'What is the color of the sky on a clear day?',
        options: ['Green', 'Blue', 'Red', 'Yellow'],
        correctAnswer: 1,
        explanation: 'The sky is blue on a clear day'
      },
      {
        id: 4,
        question: 'How many legs does a spider have?',
        options: ['6', '8', '10', '4'],
        correctAnswer: 1,
        explanation: 'Spiders have 8 legs'
      },
      {
        id: 5,
        question: 'What do we use to see things?',
        options: ['Ears', 'Eyes', 'Nose', 'Mouth'],
        correctAnswer: 1,
        explanation: 'We use our eyes to see'
      },
      {
        id: 6,
        question: 'Which season is the coldest?',
        options: ['Summer', 'Spring', 'Fall', 'Winter'],
        correctAnswer: 3,
        explanation: 'Winter is the coldest season'
      },
      {
        id: 7,
        question: 'What do bees make?',
        options: ['Milk', 'Honey', 'Water', 'Juice'],
        correctAnswer: 1,
        explanation: 'Bees make honey'
      },
      {
        id: 8,
        question: 'Where do fish live?',
        options: ['In trees', 'In water', 'In the sky', 'Underground'],
        correctAnswer: 1,
        explanation: 'Fish live in water'
      },
      {
        id: 9,
        question: 'What gives us light during the day?',
        options: ['Moon', 'Stars', 'Sun', 'Candle'],
        correctAnswer: 2,
        explanation: 'The Sun gives us light during the day'
      },
      {
        id: 10,
        question: 'What do we breathe in?',
        options: ['Water', 'Air', 'Food', 'Soil'],
        correctAnswer: 1,
        explanation: 'We breathe in air'
      },
      {
        id: 11,
        question: 'What makes the sound of thunder?',
        options: ['Wind', 'Rain', 'Lightning', 'Clouds'],
        correctAnswer: 2,
        explanation: 'Lightning creates thunder'
      },
      {
        id: 12,
        question: 'What is the largest planet in our solar system?',
        options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
        correctAnswer: 2,
        explanation: 'Jupiter is the largest planet'
      },
      {
        id: 13,
        question: 'What do caterpillars turn into?',
        options: ['Birds', 'Butterflies', 'Bees', 'Beetles'],
        correctAnswer: 1,
        explanation: 'Caterpillars turn into butterflies'
      },
      {
        id: 14,
        question: 'Which organ pumps blood in our body?',
        options: ['Brain', 'Lungs', 'Heart', 'Stomach'],
        correctAnswer: 2,
        explanation: 'The heart pumps blood'
      },
      {
        id: 15,
        question: 'What do plants make using sunlight?',
        options: ['Water', 'Food', 'Air', 'Soil'],
        correctAnswer: 1,
        explanation: 'Plants make their own food using sunlight'
      },
      {
        id: 16,
        question: 'What are baby frogs called?',
        options: ['Kittens', 'Puppies', 'Tadpoles', 'Chicks'],
        correctAnswer: 2,
        explanation: 'Baby frogs are called tadpoles'
      },
      {
        id: 17,
        question: 'Which sense do we use to smell?',
        options: ['Eyes', 'Ears', 'Nose', 'Tongue'],
        correctAnswer: 2,
        explanation: 'We use our nose to smell'
      },
      {
        id: 18,
        question: 'What is water made of?',
        options: ['Only oxygen', 'Hydrogen and oxygen', 'Only hydrogen', 'Carbon'],
        correctAnswer: 1,
        explanation: 'Water is made of hydrogen and oxygen (H2O)'
      },
      {
        id: 19,
        question: 'What do owls do at night?',
        options: ['Sleep', 'Hunt', 'Swim', 'Hide'],
        correctAnswer: 1,
        explanation: 'Owls hunt at night'
      },
      {
        id: 20,
        question: 'What gas do plants give out?',
        options: ['Carbon dioxide', 'Nitrogen', 'Oxygen', 'Hydrogen'],
        correctAnswer: 2,
        explanation: 'Plants give out oxygen'
      }
    ]
  },
  {
    subjectId: 'geography',
    title: 'Geography Challenge',
    questions: [
      {
        id: 1,
        question: 'How many continents are there in the world?',
        options: ['5', '6', '7', '8'],
        correctAnswer: 2,
        explanation: 'There are 7 continents: Africa, Antarctica, Asia, Europe, North America, Australia, and South America'
      },
      {
        id: 2,
        question: 'What is the largest ocean?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
        correctAnswer: 2,
        explanation: 'The Pacific Ocean is the largest ocean'
      },
      {
        id: 3,
        question: 'Which is the tallest mountain in the world?',
        options: ['Mount Kilimanjaro', 'Mount Everest', 'Mount Fuji', 'Rocky Mountains'],
        correctAnswer: 1,
        explanation: 'Mount Everest is the tallest mountain'
      },
      {
        id: 4,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 1,
        explanation: 'Paris is the capital of France'
      },
      {
        id: 5,
        question: 'Which planet do we live on?',
        options: ['Mars', 'Venus', 'Earth', 'Jupiter'],
        correctAnswer: 2,
        explanation: 'We live on Earth'
      },
      {
        id: 6,
        question: 'What is the biggest desert in the world?',
        options: ['Sahara Desert', 'Gobi Desert', 'Arabian Desert', 'Antarctic Desert'],
        correctAnswer: 3,
        explanation: 'The Antarctic Desert is the biggest desert'
      },
      {
        id: 7,
        question: 'What do we call a piece of land surrounded by water?',
        options: ['Mountain', 'Island', 'Desert', 'Forest'],
        correctAnswer: 1,
        explanation: 'An island is land surrounded by water'
      },
      {
        id: 8,
        question: 'Which direction does the sun rise?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 2,
        explanation: 'The sun rises in the East'
      },
      {
        id: 9,
        question: 'What is the longest river in the world?',
        options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],
        correctAnswer: 1,
        explanation: 'The Nile River is the longest river'
      },
      {
        id: 10,
        question: 'Which country has the Eiffel Tower?',
        options: ['Italy', 'France', 'Spain', 'Germany'],
        correctAnswer: 1,
        explanation: 'The Eiffel Tower is in France'
      },
      {
        id: 11,
        question: 'What is the capital of the United States?',
        options: ['New York', 'Los Angeles', 'Washington D.C.', 'Chicago'],
        correctAnswer: 2,
        explanation: 'Washington D.C. is the capital of the United States'
      },
      {
        id: 12,
        question: 'Which is the smallest continent?',
        options: ['Europe', 'Australia', 'Antarctica', 'Africa'],
        correctAnswer: 1,
        explanation: 'Australia is the smallest continent'
      },
      {
        id: 13,
        question: 'Where is the Great Wall located?',
        options: ['India', 'Japan', 'China', 'Korea'],
        correctAnswer: 2,
        explanation: 'The Great Wall is in China'
      },
      {
        id: 14,
        question: 'Which ocean is near India?',
        options: ['Atlantic Ocean', 'Indian Ocean', 'Pacific Ocean', 'Arctic Ocean'],
        correctAnswer: 1,
        explanation: 'The Indian Ocean is near India'
      },
      {
        id: 15,
        question: 'What is the capital of Japan?',
        options: ['Beijing', 'Seoul', 'Tokyo', 'Bangkok'],
        correctAnswer: 2,
        explanation: 'Tokyo is the capital of Japan'
      },
      {
        id: 16,
        question: 'Which country is shaped like a boot?',
        options: ['France', 'Spain', 'Italy', 'Greece'],
        correctAnswer: 2,
        explanation: 'Italy is shaped like a boot'
      },
      {
        id: 17,
        question: 'What is the largest country by area?',
        options: ['China', 'Canada', 'Russia', 'USA'],
        correctAnswer: 2,
        explanation: 'Russia is the largest country by area'
      },
      {
        id: 18,
        question: 'Which is the hottest continent?',
        options: ['Asia', 'Africa', 'Australia', 'South America'],
        correctAnswer: 1,
        explanation: 'Africa is the hottest continent'
      },
      {
        id: 19,
        question: 'What direction does the sun set?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 3,
        explanation: 'The sun sets in the West'
      },
      {
        id: 20,
        question: 'Which country has pyramids?',
        options: ['Greece', 'Egypt', 'India', 'Mexico'],
        correctAnswer: 1,
        explanation: 'Egypt has famous pyramids'
      }
    ]
  },
  {
    subjectId: 'english',
    title: 'English Challenge',
    questions: [
      {
        id: 1,
        question: 'Which is a noun?',
        options: ['Run', 'Happy', 'Dog', 'Quickly'],
        correctAnswer: 2,
        explanation: 'Dog is a noun (a thing/animal)'
      },
      {
        id: 2,
        question: 'How many vowels are in the alphabet?',
        options: ['3', '4', '5', '6'],
        correctAnswer: 2,
        explanation: 'There are 5 vowels: A, E, I, O, U'
      },
      {
        id: 3,
        question: 'What is the opposite of "hot"?',
        options: ['Warm', 'Cold', 'Cool', 'Freezing'],
        correctAnswer: 1,
        explanation: 'Cold is the opposite of hot'
      },
      {
        id: 4,
        question: 'Which word is spelled correctly?',
        options: ['Frend', 'Freind', 'Friend', 'Friand'],
        correctAnswer: 2,
        explanation: 'Friend is spelled correctly'
      },
      {
        id: 5,
        question: 'What is a group of words that makes sense called?',
        options: ['Letter', 'Word', 'Sentence', 'Paragraph'],
        correctAnswer: 2,
        explanation: 'A sentence is a group of words that makes sense'
      },
      {
        id: 6,
        question: 'Which is a verb?',
        options: ['Book', 'Happy', 'Jump', 'Table'],
        correctAnswer: 2,
        explanation: 'Jump is a verb (an action word)'
      },
      {
        id: 7,
        question: 'What comes at the end of a sentence?',
        options: ['Comma', 'Period', 'Question mark', 'Both B and C'],
        correctAnswer: 3,
        explanation: 'A period or question mark can end a sentence'
      },
      {
        id: 8,
        question: 'Which word rhymes with "cat"?',
        options: ['Dog', 'Hat', 'Mouse', 'Bird'],
        correctAnswer: 1,
        explanation: 'Hat rhymes with cat'
      },
      {
        id: 9,
        question: 'What is the plural of "child"?',
        options: ['Childs', 'Children', 'Childes', 'Child'],
        correctAnswer: 1,
        explanation: 'Children is the plural of child'
      },
      {
        id: 10,
        question: 'Which letter is a vowel?',
        options: ['B', 'C', 'D', 'E'],
        correctAnswer: 3,
        explanation: 'E is a vowel'
      },
      {
        id: 11,
        question: 'What is the opposite of "big"?',
        options: ['Large', 'Huge', 'Small', 'Tiny'],
        correctAnswer: 2,
        explanation: 'Small is the opposite of big'
      },
      {
        id: 12,
        question: 'Which is an adjective?',
        options: ['Run', 'Beautiful', 'Quickly', 'Jump'],
        correctAnswer: 1,
        explanation: 'Beautiful is an adjective (describes something)'
      },
      {
        id: 13,
        question: 'What is the plural of "box"?',
        options: ['Boxs', 'Boxes', 'Boxies', 'Box'],
        correctAnswer: 1,
        explanation: 'Boxes is the plural of box'
      },
      {
        id: 14,
        question: 'Which word rhymes with "book"?',
        options: ['Look', 'Took', 'Cook', 'All of the above'],
        correctAnswer: 3,
        explanation: 'Look, took, and cook all rhyme with book'
      },
      {
        id: 15,
        question: 'What is a word that sounds the same but has different meaning?',
        options: ['Synonym', 'Antonym', 'Homonym', 'Pronoun'],
        correctAnswer: 2,
        explanation: 'A homonym sounds the same but has different meanings'
      },
      {
        id: 16,
        question: 'Which is correct: "I ___ happy"?',
        options: ['is', 'am', 'are', 'be'],
        correctAnswer: 1,
        explanation: '"I am happy" is correct'
      },
      {
        id: 17,
        question: 'What do we call words like "the", "a", "an"?',
        options: ['Verbs', 'Nouns', 'Articles', 'Adjectives'],
        correctAnswer: 2,
        explanation: '"The", "a", and "an" are articles'
      },
      {
        id: 18,
        question: 'Which sentence is correct?',
        options: ['She go to school', 'She goes to school', 'She going to school', 'She goed to school'],
        correctAnswer: 1,
        explanation: '"She goes to school" is correct'
      },
      {
        id: 19,
        question: 'What is the past tense of "run"?',
        options: ['Runned', 'Run', 'Ran', 'Running'],
        correctAnswer: 2,
        explanation: 'Ran is the past tense of run'
      },
      {
        id: 20,
        question: 'Which word is a pronoun?',
        options: ['Book', 'Run', 'She', 'Happy'],
        correctAnswer: 2,
        explanation: 'She is a pronoun'
      }
    ]
  }
];
