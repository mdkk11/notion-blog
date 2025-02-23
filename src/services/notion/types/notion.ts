//github.com/makenotion/notion-sdk-js/blob/main/src/api-endpoints.ts
// export されてないので
export type MultiSelectDatabasePropertyConfigResponse = {
  type: 'multi_select'
  multi_select: {
    options: SelectPropertyResponse[]
  }
  id: string
  name: string
  description: PropertyDescriptionRequest | null
}

type SelectPropertyResponse = {
  id: StringRequest
  name: StringRequest
  color: SelectColor
  description: StringRequest | null
}

type StringRequest = string
type PropertyDescriptionRequest = string

type SelectColor =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
