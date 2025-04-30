// export default function Leaderboard() {
//   const leaders = [
//     { name: "John Brown", score: 185 },
//     { name: "Cate", score: 175 },
//     { name: "Alex K", score: 165 },
//   ];

//   return (
//     <section className="py-10 px-6">
//       <h1 className="text-4xl font-bold mb-6">Leaderboard</h1>

//       <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
//         <thead className="bg-gray-900 text-white">
//           <tr>
//             <th className="p-4 text-left">Rank</th>
//             <th className="p-4 text-left">Name</th>
//             <th className="p-4 text-left">Score</th>
//           </tr>
//         </thead>
//         <tbody>
//           {leaders.map((leader, index) => (
//             <tr key={index} className="border-b">
//               <td className="p-4">{index + 1}</td>
//               <td className="p-4">{leader.name}</td>
//               <td className="p-4">{leader.score}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </section>
//   );
// }

import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';

export default function Leaderboard() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <main className="p-6">
          <h1 className="text-3xl font-bold mb-4">Leaderboard</h1>
          <p>Top students will be ranked here.</p>
        </main>
      </div>
    </div>
  );
}
