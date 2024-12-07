'use client';

import { useState } from 'react';

export default function TaskForm() {
  const [task, setTask] = useState('');

  return (
    <div className="text-center bg-white border rounded px-5">
      <h3>Task manager</h3>
    </div>
  )
}
