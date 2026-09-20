import GenericCrudPage from '@/features/common/crud/GenericCrudPage'
import service from '../services/card_spendService'

const columns = [
  { key: 'id', label: 'Id' },
  { key: 'code', label: 'Code' },
  { key: 'cardSpendImageName', label: 'Card Spend Image Name' },
  { key: 'nameEn', label: 'Name En' },
  { key: 'nameAr', label: 'Name Ar' },
  { key: 'cardSpendImage', label: 'Card Spend Image', image: true },
]

const fields = [
  { key: 'id', label: 'Id', required: true },
  { key: 'code', label: 'Code' },
  { key: 'cardSpendImageName', label: 'Card Spend Image Name' },
  { key: 'nameEn', label: 'Name En' },
  { key: 'nameAr', label: 'Name Ar' },
  { key: 'cardSpendImage', label: 'Card Spend Image', image: true },
]

export default function CardSpendPage() {
  return (
    <GenericCrudPage
      title="Card Spend"
      service={service}
      columns={columns}
      fields={fields} enableStatusFilter={false}
    />
  )
}


