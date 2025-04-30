'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface ChallengeCardProps {
  title: string;
  description: string;
  difficulty: string;
}

export default function ChallengeCard({ title, description, difficulty }: ChallengeCardProps) {
  return (
    <Card className="hover:shadow-lg transition">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded">{difficulty}</span>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  );
}
