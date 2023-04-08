import React, { useEffect, useState } from 'react';
import { getAllItems, getItemCategorySummaries } from '../api/insuredItemsApi.js'
import { ContentItemTable } from '../components/ContentItemTable.js';
import { InsuredItemInput } from '../components/InsuredItemInput.js';

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
      })
  }, [])

  const addItemSuccess = newItem => {
    const withAddedItem = [
      ...insuredContentItems,
      newItem
    ]

    setInsuredContentItems(withAddedItem)
  }

  const onDeleteSuccess = id => {
    const itemsCopy = [...insuredContentItems]
    const index = itemsCopy.findIndex(item => item.id === id)
    itemsCopy.splice(index, 1)

    setInsuredContentItems([...itemsCopy])
  }

  return (
    <div>
      {categorySummaries &&
          categorySummaries.map(
            summary => (
              <ContentItemTable
                key={summary.category}
                category={summary.category}
                totalValueCents={summary.valueCents}
                onDeleteSuccess={onDeleteSuccess}
                data={insuredContentItems.filter(
                  item => item.category === summary.category)}
              />
            )
          )
      }
      <InsuredItemInput addItemSuccess={addItemSuccess} />
    </div>
  )
}

export { InsuredItems };
