import React, { useEffect, useState } from 'react';
import { getAllItems, getItemCategorySummaries } from '../api/insuredItemsApi.js'
import { ContentItemTable } from '../components/ContentItemTable.js';

const InsuredItems = () => {
  const [insuredContentItems, setInsuredContentItems] = useState();
  const [categorySummaries, setContentSummaries] = useState();

  useEffect(() => {
    getAllItems()
      .then(response => {
        setInsuredContentItems(response.data)
      })
    getItemCategorySummaries()
      .then(response => {
        setContentSummaries(response.data)
        console.log(response.data)
      })
  }, [])

  return (
    <div>
      {insuredContentItems && `${insuredContentItems.map(item => item.name)}`}
      {categorySummaries &&
          categorySummaries.map(
            summary => (
              <ContentItemTable
                key={summary.category}
                category={summary.category}
                totalValueCents={summary.valueCents}
                data={insuredContentItems.filter(
                  item => item.category === summary.category)}
              />
            )
          )
      }
    </div>
  )
}

export { InsuredItems };
