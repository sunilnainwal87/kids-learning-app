import { Quiz } from '@/types';

export const quizzes: Quiz[] = [
  {
    subjectId: 'math',
    title: 'Math Quiz',
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
      }
    ]
  },
  {
    subjectId: 'science',
    title: 'Science Quiz',
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
      }
    ]
  },
  {
    subjectId: 'geography',
    title: 'Geography Quiz',
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
        question: 'What color is the grass?',
        options: ['Blue', 'Red', 'Green', 'Yellow'],
        correctAnswer: 2,
        explanation: 'Grass is green'
      },
      {
        id: 5,
        question: 'What is the capital of France?',
        options: ['London', 'Paris', 'Rome', 'Berlin'],
        correctAnswer: 1,
        explanation: 'Paris is the capital of France'
      },
      {
        id: 6,
        question: 'Which planet do we live on?',
        options: ['Mars', 'Venus', 'Earth', 'Jupiter'],
        correctAnswer: 2,
        explanation: 'We live on Earth'
      },
      {
        id: 7,
        question: 'What is the biggest desert in the world?',
        options: ['Sahara Desert', 'Gobi Desert', 'Arabian Desert', 'Antarctic Desert'],
        correctAnswer: 3,
        explanation: 'The Antarctic Desert is the biggest desert'
      },
      {
        id: 8,
        question: 'What do we call a piece of land surrounded by water?',
        options: ['Mountain', 'Island', 'Desert', 'Forest'],
        correctAnswer: 1,
        explanation: 'An island is land surrounded by water'
      },
      {
        id: 9,
        question: 'Which direction does the sun rise?',
        options: ['North', 'South', 'East', 'West'],
        correctAnswer: 2,
        explanation: 'The sun rises in the East'
      },
      {
        id: 10,
        question: 'What is the longest river in the world?',
        options: ['Amazon River', 'Nile River', 'Mississippi River', 'Yangtze River'],
        correctAnswer: 1,
        explanation: 'The Nile River is the longest river'
      }
    ]
  },
  {
    subjectId: 'gymnastics',
    title: 'Gymnastics & Health Quiz',
    questions: [
      {
        id: 1,
        question: 'How many minutes of exercise should kids do every day?',
        options: ['10 minutes', '30 minutes', '60 minutes', '2 hours'],
        correctAnswer: 2,
        explanation: 'Kids should exercise for at least 60 minutes every day'
      },
      {
        id: 2,
        question: 'What should you do before exercising?',
        options: ['Eat a lot', 'Warm up', 'Go to sleep', 'Watch TV'],
        correctAnswer: 1,
        explanation: 'Always warm up before exercising'
      },
      {
        id: 3,
        question: 'Which activity helps make your heart stronger?',
        options: ['Sitting', 'Running', 'Sleeping', 'Reading'],
        correctAnswer: 1,
        explanation: 'Running helps make your heart stronger'
      },
      {
        id: 4,
        question: 'What should you drink after exercise?',
        options: ['Soda', 'Water', 'Coffee', 'Juice only'],
        correctAnswer: 1,
        explanation: 'Drink water after exercise to stay hydrated'
      },
      {
        id: 5,
        question: 'How many bones are in the human body?',
        options: ['100', '150', '206', '300'],
        correctAnswer: 2,
        explanation: 'There are 206 bones in the human body'
      },
      {
        id: 6,
        question: 'What is stretching good for?',
        options: ['Making you taller', 'Flexibility', 'Sleeping', 'Eating'],
        correctAnswer: 1,
        explanation: 'Stretching is good for flexibility'
      },
      {
        id: 7,
        question: 'Which food gives you energy for exercise?',
        options: ['Candy only', 'Fruits and grains', 'Ice cream', 'Chips'],
        correctAnswer: 1,
        explanation: 'Fruits and grains give you energy'
      },
      {
        id: 8,
        question: 'What does your heart do during exercise?',
        options: ['Stops', 'Beats faster', 'Beats slower', 'Nothing'],
        correctAnswer: 1,
        explanation: 'Your heart beats faster during exercise'
      },
      {
        id: 9,
        question: 'Which exercise helps build strong muscles?',
        options: ['Push-ups', 'Sleeping', 'Watching TV', 'Sitting'],
        correctAnswer: 0,
        explanation: 'Push-ups help build strong muscles'
      },
      {
        id: 10,
        question: 'How much sleep should kids get each night?',
        options: ['5 hours', '7 hours', '9-11 hours', '15 hours'],
        correctAnswer: 2,
        explanation: 'Kids need 9-11 hours of sleep each night'
      }
    ]
  },
  {
    subjectId: 'french',
    title: 'French Quiz',
    questions: [
      {
        id: 1,
        question: 'How do you say "Hello" in French?',
        options: ['Adieu', 'Bonjour', 'Merci', 'Au revoir'],
        correctAnswer: 1,
        explanation: 'Bonjour means Hello in French'
      },
      {
        id: 2,
        question: 'What does "Merci" mean?',
        options: ['Hello', 'Goodbye', 'Thank you', 'Please'],
        correctAnswer: 2,
        explanation: 'Merci means Thank you'
      },
      {
        id: 3,
        question: 'How do you say "one" in French?',
        options: ['Un', 'Deux', 'Trois', 'Quatre'],
        correctAnswer: 0,
        explanation: 'Un means one in French'
      },
      {
        id: 4,
        question: 'What color is "rouge" in English?',
        options: ['Blue', 'Green', 'Red', 'Yellow'],
        correctAnswer: 2,
        explanation: 'Rouge means red'
      },
      {
        id: 5,
        question: 'How do you say "cat" in French?',
        options: ['Chien', 'Chat', 'Oiseau', 'Poisson'],
        correctAnswer: 1,
        explanation: 'Chat means cat in French'
      },
      {
        id: 6,
        question: 'What does "au revoir" mean?',
        options: ['Hello', 'Thank you', 'Goodbye', 'Please'],
        correctAnswer: 2,
        explanation: 'Au revoir means Goodbye'
      },
      {
        id: 7,
        question: 'How do you say "two" in French?',
        options: ['Un', 'Deux', 'Trois', 'Quatre'],
        correctAnswer: 1,
        explanation: 'Deux means two'
      },
      {
        id: 8,
        question: 'What does "chien" mean in English?',
        options: ['Cat', 'Dog', 'Bird', 'Fish'],
        correctAnswer: 1,
        explanation: 'Chien means dog'
      },
      {
        id: 9,
        question: 'How do you say "yes" in French?',
        options: ['Non', 'Oui', 'Peut-être', 'Merci'],
        correctAnswer: 1,
        explanation: 'Oui means yes in French'
      },
      {
        id: 10,
        question: 'What color is "bleu"?',
        options: ['Red', 'Green', 'Blue', 'Yellow'],
        correctAnswer: 2,
        explanation: 'Bleu means blue'
      }
    ]
  },
  {
    subjectId: 'english',
    title: 'English Quiz',
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
      }
    ]
  }
];
