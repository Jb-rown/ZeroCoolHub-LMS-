'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function AddQuizForm() {
  const [quizName, setQuizName] = useState('');
  const [quizDescription, setQuizDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ quizName, quizDescription });
    // Could trigger an API call here
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Quiz Title</Label>
        <Input 
          value={quizName}
          onChange={(e) => setQuizName(e.target.value)}
          placeholder="Enter quiz title"
        />
      </div>

      <div>
        <Label>Description</Label>
        <Textarea
          value={quizDescription}
          onChange={(e) => setQuizDescription(e.target.value)}
          placeholder="Short quiz description"
        />
      </div>

      <Button type="submit">Create Quiz</Button>
    </form>
  );
}
