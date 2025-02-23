import { MultiSelectDatabasePropertyConfigResponse } from '../../types/notion'

export const mockedAllTags = [
  {
    id: 'xSdO',
    name: 'TailwindCSS',
    color: 'blue',
    description: null,
  },
  { id: 'ohx|', name: 'Git', color: 'red', description: null },
  { id: 'Gex>', name: 'CSS', color: 'green', description: null },
  { id: 'PGiW', name: 'React', color: 'pink', description: null },
  { id: 'PRy^', name: 'Next.js', color: 'brown', description: null },
  {
    id: 'at~>',
    name: 'TypeScript',
    color: 'orange',
    description: null,
  },
  {
    id: 'UHX<',
    name: 'JavaScript',
    color: 'purple',
    description: null,
  },
  { id: 'x@\\`', name: 'Frontend', color: 'gray', description: null },
] satisfies MultiSelectDatabasePropertyConfigResponse['multi_select']['options']
