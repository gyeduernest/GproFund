'use client';

import { ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';

export default function Swap() {
  const [switch1, setSwitch1] = useState(false);
 

  return (
    <div className="flex max-w-md flex-col gap-4">
      <ToggleSwitch checked={switch1} label="Dark mode" onChange={setSwitch1} />
      
    </div>
  );
}
