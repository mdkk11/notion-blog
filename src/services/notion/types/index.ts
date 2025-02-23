import {
  DatePropertyItemObjectResponse,
  MultiSelectPropertyItemObjectResponse,
  RichTextItemResponse,
  RichTextPropertyItemObjectResponse,
  SelectPropertyItemObjectResponse,
  TitlePropertyItemObjectResponse,
  UrlPropertyItemObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'

type TitleProperty = { title: RichTextItemResponse[] } & Pick<
  TitlePropertyItemObjectResponse,
  'type'
>
type RichTextProperty = {
  rich_text: RichTextItemResponse[]
} & Pick<RichTextPropertyItemObjectResponse, 'type'>
type MultiSelectProperty = MultiSelectPropertyItemObjectResponse
type DateProperty = DatePropertyItemObjectResponse
type SelectProperty = SelectPropertyItemObjectResponse
type UrlProperty = UrlPropertyItemObjectResponse

export type NotionProperty =
  | TitleProperty
  | RichTextProperty
  | MultiSelectProperty
  | DateProperty
  | SelectProperty
  | UrlProperty
