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
      <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">a collection of books / papers / textbooks I've enjoyed and recommend you to read.</p>
      
      <ul className="space-y-6">
        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Atomic Habits</h2>
          <p className="text-gray-500 dark:text-gray-300">by James Clear - Practical strategies for building good habits and breaking bad ones.</p>
        </li>
        
        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Attention is All You Need</h2>
          <p className="text-gray-500 dark:text-gray-300">by Vaswani et al. - Foundational, the first deep learning paper I read.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Deep Work</h2>
          <p className="text-gray-500 dark:text-gray-300">by Cal Newport - Insights on focusing deeply in a world full of distractions.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Superintelligence</h2>
          <p className="text-gray-500 dark:text-gray-300">by Nick Bostrom - Examines the implications of developing advanced artificial intelligence.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Deep Learning</h2>
          <p className="text-gray-500 dark:text-gray-300">by Ian Goodfellow, Yoshua Bengio, and Aaron Courville - A comprehensive introduction to deep learning.</p>
        </li>

        <li>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">Practical Statistics for Data Scientists</h2>
          <p className="text-gray-500 dark:text-gray-300">by Peter Bruce and Andrew Bruce - A great practical guide for data scientists.</p>
        </li>
      </ul>
    </div>
    <DockDemo/>
      </>
    );
  }