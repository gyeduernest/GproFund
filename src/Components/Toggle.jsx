'use client';

import { ToggleSwitch } from 'flowbite-react';
import { useState } from 'react';

export default function Swap(props) {
  const [switch1, setSwitch1] = useState(false);
 

  return (
    <div className="flex max-w-md flex-col gap-4">
      <ToggleSwitch checked={switch1} label={props.text} onChange={setSwitch1} />
      
    </div>
  );
}
