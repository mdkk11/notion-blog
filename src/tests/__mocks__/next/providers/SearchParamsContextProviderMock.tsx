import { SearchParamsContext } from 'next/dist/shared/lib/hooks-client-context.shared-runtime'

type SearchParamsContextProviderMockProps = {
  children: React.ReactNode
  searchParams: URLSearchParams
}

export const SearchParamsContextProviderMock = ({
  searchParams,
  children,
}: SearchParamsContextProviderMockProps) => {
  return (
    <SearchParamsContext.Provider value={searchParams}>
      {children}
    </SearchParamsContext.Provider>
  )
}
