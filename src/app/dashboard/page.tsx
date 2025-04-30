// import { Card, CardContent } from "@/components/ui/card";

// export default function Dashboard() {
//   return (
//     <section className="py-10 px-6">
//       <h1 className="text-4xl font-bold mb-6">Welcome to ZeroCoolHub</h1>
      
//       <div className="grid md:grid-cols-3 gap-6">
//         <Card>
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-semibold mb-2">Active Classes</h2>
//             <p className="text-lg">4</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-semibold mb-2">Completed Quizzes</h2>
//             <p className="text-lg">12</p>
//           </CardContent>
//         </Card>

//         <Card>
//           <CardContent className="p-6">
//             <h2 className="text-2xl font-semibold mb-2">Leaderboard Rank</h2>
//             <p className="text-lg">#3</p>
//           </CardContent>
//         </Card>
//       </div>
//     </section>
//   );
// }

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white shadow rounded-xl">Active Students</div>
            <div className="p-6 bg-white shadow rounded-xl">Challenges</div>
            <div className="p-6 bg-white shadow rounded-xl">Sessions Today</div>
          </div>
        </main>
      </div>
    </div>
  );
}
