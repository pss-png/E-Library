import React,{useState} from 'react'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.jsx'
import Book from './Book.jsx'
import BookDetail from './BookDetail.jsx'


export default function App() {

  const [allbook, setBook] = useState([
    {
      id: 101,
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      description: "A novel set in the 1920s that explores themes of wealth, love, and the American Dream.",
      coverImage: "https://example.com/great-gatsby.jpg",
      genre: "Fiction",
      rating: 4.2,
      year: 1925
    },
    {
      id: 102,
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      description: "A novel that explores themes of racial injustice and moral growth.",
      coverImage: "https://example.com/to-kill-a-mockingbird.jpg",
      genre: "Fiction",
      rating: 4.3,
      year: 1960
    },
    {
      id: 103,
      title: "1984",
      author: "George Orwell",
      description: "A dystopian novel that explores themes of totalitarianism and surveillance.",
      coverImage: "https://example.com/1984.jpg",
      genre: "Dystopian",
      rating: 4.5,
      year: 1949
    },
    {
      id: 104,
      title: "Pride and Prejudice",
      author: "Jane Austen",
      description: "A romantic novel that explores themes of love, marriage, and social class.",
      coverImage: "https://example.com/pride-and-prejudice.jpg",
      genre: "Romance",
      rating: 4.1,
      year: 1813
    },
    {
      id: 105,
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      description: "A novel that explores themes of teenage angst and alienation.",
      coverImage: "https://example.com/catcher-in-the-rye.jpg",
      genre: "Fiction",
      rating: 3.8,
      year: 1951
    },
    {
      id: 106,
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      description: "A fantasy novel that follows the adventures of Bilbo Baggins.",
      coverImage: "https://example.com/the-hobbit.jpg",
      genre: "Fantasy",
      rating: 4.6,
      year: 1937
    },
    {
      id: 107,
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      description: "A fantasy epic that follows the quest to destroy the One Ring.",
      coverImage: "https://example.com/lord-of-the-rings.jpg",
      genre: "Fantasy",
      rating: 4.7,
      year: 1954
    },
    {
      id: 108,
      title: "The Odyssey",
      author: "Homer",
      description: "An epic poem that tells the story of Odysseus' journey home after the Trojan War.",
      coverImage: "https://example.com/the-odyssey.jpg",
      genre: "Epic",
      rating: 4.0,
      year: -800
    },
    {
      id: 109,
      title: "The Iliad",
      author: "Homer",
      description: "An epic poem that tells the story of the Trojan War.",
      coverImage: "https://example.com/the-iliad.jpg",
      genre: "Epic",
      rating: 3.9,
      year: -750
    },
    {
      id: 110,
      title: "The Divine Comedy",
      author: "Dante Alighieri",
      description: "An epic poem that follows Dante's journey through Hell, Purgatory, and Heaven.",
      coverImage: "https://example.com/the-divine-comedy.jpg",
      genre: "Epic",
      rating: 4.2,
      year: 1320
    },
    {
      id: 111,
      title: "Moby Dick",
      author: "Herman Melville",
      description: "A novel that follows the obsessive quest of Captain Ahab to hunt down the white whale.",
      coverImage: "https://example.com/moby-dick.jpg",
      genre: "Adventure",
      rating: 3.7,
      year: 1851
    },
    {
      id: 112,
      title: "War and Peace",
      author: "Leo Tolstoy",
      description: "A novel that explores the lives of Russian aristocrats during the Napoleonic Wars.",
      coverImage: "https://example.com/war-and-peace.jpg",
      genre: "Historical",
      rating: 4.4,
      year: 1869
    },
    {
      id: 113,
      title: "Crime and Punishment",
      author: "Fyodor Dostoevsky",
      description: "A novel that explores themes of guilt, redemption, and the human psyche.",
      coverImage: "https://example.com/crime-and-punishment.jpg",
      genre: "Psychological",
      rating: 4.3,
      year: 1866
    },
    {
      id: 114,
      title: "The Brothers Karamazov",
      author: "Fyodor Dostoevsky",
      description: "A novel that explores themes of faith, doubt, and morality.",
      coverImage: "https://example.com/the-brothers-karamazov.jpg",
      genre: "Philosophical",
      rating: 4.5,
      year: 1880
    },
    {
      id: 115,
      title: "Anna Karenina",
      author: "Leo Tolstoy",
      description: "A novel that explores themes of love, marriage, and social change.",
      coverImage: "https://example.com/anna-karenina.jpg",
      genre: "Romance",
      rating: 4.2,
      year: 1877
    },
    {
      id: 116,
      title: "The Picture of Dorian Gray",
      author: "Oscar Wilde",
      description: "A novel that explores themes of beauty, corruption, and the Faustian bargain.",
      coverImage: "https://example.com/the-picture-of-dorian-gray.jpg",
      genre: "Gothic",
      rating: 4.1,
      year: 1890
    },
    {
      id: 117,
      title: "The Adventures of Huckleberry Finn",
      author: "Mark Twain",
      description: "A novel that explores themes of freedom, friendship, and social critique.",
      coverImage: "https://example.com/adventures-of-huckleberry-finn.jpg",
      genre: "Adventure",
      rating: 3.9,
      year: 1884
    },
    {
      id: 118,
      title: "The Adventures of Tom Sawyer",
      author: "Mark Twain",
      description: "A novel that explores themes of childhood, adventure, and moral growth.",
      coverImage: "https://example.com/adventures-of-tom-sawyer.jpg",
      genre: "Adventure",
      rating: 4.0,
      year: 1876
    },
    {
      id: 119,
      title: "The Count of Monte Cristo",
      author: "Alexandre Dumas",
      description: "A novel that explores themes of revenge, justice, and redemption.",
      coverImage: "https://example.com/the-count-of-monte-cristo.jpg",
      genre: "Adventure",
      rating: 4.6,
      year: 1844
    },
    {
      id: 120,
      title: "Les Misérables",
      author: "Victor Hugo",
      description: "A novel that explores themes of love, sacrifice, and social justice.",
      coverImage: "https://example.com/les-miserables.jpg",
      genre: "Historical",
      rating: 4.4,
      year: 1862
    },
    {
      id: 121,
      title: "The Hunchback of Notre-Dame",
      author: "Victor Hugo",
      description: "A novel that explores themes of love, beauty, and the human condition.",
      coverImage: "https://example.com/the-hunchback-of-notre-dame.jpg",
      genre: "Gothic",
      rating: 4.0,
      year: 1831
    },
    {
      id: 122,
      title: "The Metamorphosis",
      author: "Franz Kafka",
      description: "A novella that explores themes of alienation, transformation, and existentialism.",
      coverImage: "https://example.com/the-metamorphosis.jpg",
      genre: "Philosophical",
      rating: 3.8,
      year: 1915
    },
    {
      id: 123,
      title: "The Trial",
      author: "Franz Kafka",
      description: "A novel that explores themes of justice, bureaucracy, and the absurd.",
      coverImage: "https://example.com/the-trial.jpg",
      genre: "Philosophical",
      rating: 3.9,
      year: 1925
    },
    {
      id: 124,
      title: "The Stranger",
      author: "Albert Camus",
      description: "A novel that explores themes of existentialism, absurdity, and moral ambiguity.",
      coverImage: "https://example.com/the-stranger.jpg",
      genre: "Philosophical",
      rating: 4.1,
      year: 1942
    },
    {
      id: 125,
      title: "The Plague",
      author: "Albert Camus",
      description: "A novel that explores themes of suffering, resistance, and human solidarity.",
      coverImage: "https://example.com/the-plague.jpg",
      genre: "Philosophical",
      rating: 4.2,
      year: 1947
    }
  ]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book allbook={allbook} />} />
        <Route path="/BookDetail/:id" element={<BookDetail allbook={allbook} />} />
      </Routes>
    </BrowserRouter>
  )
}

