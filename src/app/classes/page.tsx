import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Classes() {
  const classes = [
    { id: 1, title: "Python Basics", tutor: "John Brown" },
    { id: 2, title: "C++ Fundamentals", tutor: "Alex K" },
    { id: 3, title: "Web Dev with Next.js", tutor: "Cate" },
  ];

  return (
    <section className="py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">Available Classes</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {classes.map((cls) => (
          <Card key={cls.id}>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold">{cls.title}</h2>
              <p className="text-gray-600 mb-4">Tutor: {cls.tutor}</p>
              <Button>Join Class</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
