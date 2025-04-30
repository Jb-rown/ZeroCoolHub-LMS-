import { Card, CardContent } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <section className="py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">Welcome to ZeroCoolHub</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Active Classes</h2>
            <p className="text-lg">4</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Completed Quizzes</h2>
            <p className="text-lg">12</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-2">Leaderboard Rank</h2>
            <p className="text-lg">#3</p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
