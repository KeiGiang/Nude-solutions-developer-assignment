import React from 'react';
import { formatCentValues } from '../utils/money-formatter';

const ContentItemTable = ({ category, totalValueCents, data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>{category}</th>
          <th>${formatCentValues(totalValueCents)}</th>
          <th><div>icon section</div></th>
        </tr>
      </thead>
      <tbody>
        {data && data.map(
          item => (
            <tr key={`${item.category}-${item.name}`}>
              <td>{item.name}</td>
              <td>${formatCentValues(item.valueCents)}</td>
              <td>delete icon</td>
            </tr>
          )
        )}
      </tbody>
    </table>
  );
}

export { ContentItemTable }
