import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import ChallengeCard from '@/components/ChallengeCard';

export default function Challenges() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-4">Coding Challenges</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChallengeCard 
              title="FizzBuzz"
              description="Print numbers from 1 to 100. If divisible by 3, print Fizz..."
              difficulty="Easy"
            />
            <ChallengeCard 
              title="Palindrome Checker"
              description="Check whether a string is a palindrome."
              difficulty="Medium"
            />
            <ChallengeCard 
              title="Merge Sort"
              description="Implement the Merge Sort algorithm."
              difficulty="Hard"
            />
          </div>
        </main>
      </div>
    </div>
  );
}
