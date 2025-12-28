import Header from "../Header";
import { DockDemo } from "../Footer2";

export default function Reading() {
    return (
        <>
        <Header/>
        <div className="max-w-3xl mx-auto p-8">
      <h1 className="text-6xl font-bold text-black dark:text-white italic mb-12">
        bookshelf
      </h1>
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">a collection of stuff I have read recently.</p>
      
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Atomic Habits</h2>
          <p className="text-gray-500 dark:text-gray-300">by James Clear - simple, useful ideas for actually doing the things you want to do.</p>
        </li>
  
        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Physics and Philosophy</h2>
          <p className="text-gray-500 dark:text-gray-300">by Werner Heisenberg - cool book about quantum theory and how it messes with how we think about reality.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Brief Answers to the Big Questions</h2>
          <p className="text-gray-500 dark:text-gray-300">by Stephen Hawking - a legend talking about some huge questions.</p>
        </li>
       
       <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Dopamine Nation</h2>
          <p className="text-gray-500 dark:text-gray-300">by Anna Lembke - talks about dopamine and addiction.</p>
       </li>
      
      <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">The Vegetarian</h2>
          <p className="text-gray-500 dark:text-gray-300">by Han Kang - nobel prize winning book.</p>
       </li>

      <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">The Things You Can See Only When You Slow Down</h2>
          <p className="text-gray-500 dark:text-gray-300">by Haemin Sunim - gentle advice on finding peace by changing how your mind reacts to a busy world.</p>
       </li>
       
       <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">The Pragmatic Programmer</h2>
          <p className="text-gray-500 dark:text-gray-300">by Andy Hunt and Dave Thomas - timeless wisdom on software engineering.</p>
       </li>

       <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Release It!</h2>
          <p className="text-gray-500 dark:text-gray-300">by Michael T. Nygard - practical advice on designing systems that actually survive the chaos of production.</p>
       </li>
      </ul>
    </div>
    <DockDemo/>
      </>
    );
  }