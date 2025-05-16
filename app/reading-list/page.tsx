import Header from "../Header";
import { DockDemo } from "../Footer2";

export default function Reading() {
    return (
        <>
        <Header/>
        <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-6xl font-bold text-black dark:text-white italic mb-12">
        reading list 
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">a collection of books / papers / textbooks I recommend you to read.</p>
      
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Atomic Habits</h2>
          <p className="text-gray-500 dark:text-gray-300">by James Clear - simple, useful ideas for actually doing the things you want to do.</p>
        </li>
        
        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Attention is All You Need</h2>
          <p className="text-gray-500 dark:text-gray-300">by Vaswani et al. - the first deep learning paper I read.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Deep Learning</h2>
          <p className="text-gray-500 dark:text-gray-300">by Ian Goodfellow, Yoshua Bengio, and Aaron Courville - big textbook on how deep learning works.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Physics and Philosophy</h2>
          <p className="text-gray-500 dark:text-gray-300">by Werner Heisenberg - cool book about quantum theory and how it messes with how we think about reality.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Brief Answers to the Big Questions</h2>
          <p className="text-gray-500 dark:text-gray-300">by Stephen Hawking - a legend talking about some huge questions.</p>
        </li>
       
       
      </ul>
    </div>
    <DockDemo/>
      </>
    );
  }