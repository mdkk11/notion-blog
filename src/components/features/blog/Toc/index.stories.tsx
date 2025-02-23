import type { Meta, StoryObj } from '@storybook/react'

import { Toc } from '.'

const meta: Meta<typeof Toc> = {
  title: 'features/blog/Toc',
  component: Toc,
  decorators: [
    (Story) => (
      <div>
        <div className="content hidden">
          <h1>はじめに</h1>
          <p>
            当ブログをNext.jsのApp Routerを利用し作り直しました。
            サンプルでは基本的にはすべてSSRしており、当ブログでは動的に扱うべきコンテンツは特にないため、以前はPages
            Router ×
            SSGにて実装していたので、パフォーマンスが気になりSSGで書き直しました。
          </p>
          <h2>SSGの設定をする</h2>
          <p>
            Pages Routerの場合は next build & next export
            を実行する必要がありますが、App Routerだと下記の設定を
            next.config.js に追加し、next build の実行だけで静的ファイルが out
            ディレクトリに作成されます。
          </p>
          <h2>データの取得</h2>
          <p>
            PagesRouterでは getStaticProps、getServersideProps
            を使用していましたが、App RouterではServer
            Component内でデータの取得を行います。
          </p>
          <h2>動的なルートの生成</h2>
          <p>
            Pages Routerでは getStaticPaths
            にて動的ルートを生成していましたが、App Routerでは
            generateStaticParams を使用します。
          </p>
          <h2>さいごに</h2>
          <p>
            SSGに関しては多少シンプルに書けるようになりました。 App
            Routerそのものに関してはPages Routerとは完全に別物に感じます。
            特にキャッシュ、Server
            Actionあたりは複雑そうで、まだノータッチなのでいずれキャッチアップしたいですね。
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof Toc>

export const Default: Story = {}
