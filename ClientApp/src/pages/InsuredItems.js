import React, { useState } from 'react';
import { getAllItems } from '../api/insured-items.js'

const InsuredItems = () => {
  const [result, setApiResult] = useState();

  const onClick = async () => {
    const items = await getAllItems();
    setApiResult(items);
  }

  return (
    <div>
      <button onClick={onClick}>Test API</button>
      <br/>
      {result && `test ${result}`}
    </div>
  )
}

export { InsuredItems };
