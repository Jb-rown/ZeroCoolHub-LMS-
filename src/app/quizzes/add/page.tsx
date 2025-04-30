import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import AddQuizForm from '@/components/AddQuizForm';

export default function AddQuiz() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6 max-w-xl">
          <h1 className="text-3xl font-bold mb-4">Add New Quiz</h1>
          <AddQuizForm />
        </main>
      </div>
    </div>
  );
}
