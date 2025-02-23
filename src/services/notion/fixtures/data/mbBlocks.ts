import { MdBlock } from 'notion-to-md/build/types'

export const mockedMarkdownBlocks = [
  {
    type: 'heading_2',
    blockId: '192c8dd7-9fdb-8076-955e-d4b227bfc791',
    parent: '## はじめに',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8042-b9f8-d73d19701daa',
    parent:
      'TypeScriptの`satisfies`演算子が型アノテーションとどう違うか、また実際の使い所が分かってなかったので勉強がてらまとめます。',
    children: [],
  },
  {
    type: 'heading_2',
    blockId: '192c8dd7-9fdb-80fd-8d78-c677e1343f25',
    parent: '## satisfies演算子とは',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8099-bcf7-c063fb1e141c',
    parent:
      'Version4.9で導入された機能で、式が型にマッチするかどうかをチェックしすることができます',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-802e-9923-c777677e10ac',
    parent:
      '[https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#the-satisfies-operator](https://devblogs.microsoft.com/typescript/announcing-typescript-4-9-beta/#the-satisfies-operator)',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-803c-9843-fcd398c0b9c3',
    parent: '下記の型とオブジェクトを元に確認していきます。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-8043-a0eb-fd12b7b79568',
    parent:
      '```typescript\n' +
      "type Colors = 'red' | 'green' | 'blue'\n" +
      'type Palette = {\n' +
      '  [key in Colors]: string | number[]\n' +
      '}\n' +
      '\n' +
      'const palette01= {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  blue: [0, 0, 255]\n' +
      '}\n' +
      '\n' +
      '```',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8059-9bfb-ec381caa0eed',
    parent:
      '以下のように、式 `satisfies` 型 といった形式で使うことが出来ます。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8012-952c-c16f819608a4',
    parent: 'また、型チェックもしてくれます。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-80f3-8a08-e376e35a7ac0',
    parent:
      '```typescript\n' +
      '// satisfies演算子\n' +
      'const palette = {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  blue: [0, 0, 255]\n' +
      '} satisfies Palette\n' +
      '\n' +
      '// Error\n' +
      'const errorPalette = {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  white: [0, 0, 255]\n' +
      '} satisfies Palette\n' +
      '\n' +
      '```',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8045-96f1-d1b9cca70899',
    parent: 'では型アノテーションとはどう違うのでしょうか',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-809f-8be7-e862b6f4eda2',
    parent:
      '実際に先ほどの型とオブジェクトを元に確認してみると、`satisfies`同様に型チェックもされます。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-8029-a947-ed42903e2dc5',
    parent:
      '```typescript\n' +
      '// 型アノテーション\n' +
      'const palette: Palette = {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  blue: [0, 0, 255]\n' +
      '}\n' +
      '\n' +
      '// Error\n' +
      'const palette: Palette = {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  white: [0, 0, 255]\n' +
      '}\n' +
      '\n' +
      '```',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-802f-8d33-d440b60d268b',
    parent:
      '型チェックをするといった範囲にとどまれば、違いはなさそうですが、`satisfies`は型推論を保持するといった特徴があります。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-80d5-bc4a-decfcc32de2c',
    parent:
      'では「型推論を保持する」とはどういうことなのか、先ほどの型情報とオブジェクトを元に確認します。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-80fa-90c6-f6e5e70505ae',
    parent:
      '型アノテーションと`satisfies`で型チェックをした`palette`オブジェクトと、そこから`red`の値を取り出します。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8080-9476-dc91198bc504',
    parent:
      'すると型アノテーションを使用した`red01`は`string or number`の配列として推論されますが、`red02`は`number`の配列として推論が保持されていることが確認できます。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-8015-9666-ddf7d3cc33bb',
    parent:
      '```typescript\n' +
      'const palette01: Palette = {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  blue: [0, 0, 255]\n' +
      '}\n' +
      '\n' +
      'const palette02 = {\n' +
      '  red: [255, 0, 0],\n' +
      "  green: '#00ff00',\n" +
      '  blue: [0, 0, 255]\n' +
      '} satisfies Palette\n' +
      '\n' +
      "const red01 = palette01['red']\n" +
      "const red02 = palette02['red']\n" +
      '\n' +
      '```',
    children: [],
  },
  {
    type: 'heading_2',
    blockId: '192c8dd7-9fdb-80d9-91b7-e4ce86c25282',
    parent: '## 型アノテーションは必要なのか',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-808d-a2bb-c2b8e72aa6e5',
    parent:
      '先ほどのケースで確認した限り、`satisfies`は型チェックができる上にさらにその推論結果を保持してくれるようです。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8017-b4bc-ef4ccacd8cbd',
    parent:
      '正直先程のような型の整合性をチェックするといった場面では、型アノテーションの優位性はないと考えます。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-80ee-a856-e7a42d54ca93',
    parent:
      'しかし、型が推論できない場面、つまりリテラルや定数以外の値で型を指定したい場合には、型アノテーションを使用する必要があります。`satisfies`はあくまでも既存のオブジェクトや値に対して型をチェックするために使用されるため、新しい変数宣言には適していません。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-802e-9282-e0a233cebe61',
    parent:
      '```typescript\n' +
      'type Item = {\n' +
      'id: number;\n' +
      'name: string;\n' +
      '};\n' +
      '\n' +
      '// NG\n' +
      'let myItem satisfies Item\n' +
      '\n' +
      '// OK\n' +
      'let myItem:Item\n' +
      '```',
    children: [],
  },
  {
    type: 'heading_2',
    blockId: '192c8dd7-9fdb-80f0-886b-fcde9e5c5802',
    parent: '## satisfiesを活用する',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8010-90e4-d62e44545da9',
    parent:
      '先ほどの例から、単純な型チェックの際にも`satisfies`が使える場面では、型アノテーションではなく、`satisfies`を使った方がいいということがわかりました。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-808c-b57f-efe20d29b894',
    parent:
      '次は`satisfies`がどのような場面で役立つか具体的なユースケースを考えていきます。',
    children: [],
  },
  {
    type: 'heading_3',
    blockId: '192c8dd7-9fdb-80c9-a423-c40411170d59',
    parent: '### 曖昧な型のチェックを厳密にできる',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8044-8482-e8ddff26ae85',
    parent:
      '`Record<string, unknown>`のような曖昧な型定義を使う場合でも厳密に型のチェックができます。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-808e-99f6-e65db5ba1683',
    parent:
      '```typescript\n' +
      'type ColorPalette = Record<string, unknown>\n' +
      '\n' +
      'const palette01 = {\n' +
      "  white: '#fffff',\n" +
      '  red: [0, 0, 255]\n' +
      '} satisfies ColorPalette\n' +
      '\n' +
      'const palette02: ColorPalette = {\n' +
      "  white: '#fffff',\n" +
      '  red: [0, 0, 255]\n' +
      '}\n' +
      '```',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-803c-a971-d7bcfae9f7c4',
    parent:
      'このコードでは、paletteオブジェクトが`Record<string, unknown>`型に適合しているかをチェックしています。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8060-a7b9-fd3087361f29',
    parent:
      'palettetの値を取り出した際に、型アノテーションだと警告なく`palette02.blue`のように存在しないプロパティにアクセスできてしまいますが、satisfiesを使うことにより型推論の結果を保持できるので、存在しないプロパティへのアクセスはエラーが表示される上に、`palette01.red`の配列の値にアクセスした場合もmap等の配列操作メソッドも型安全に使用が出来ます。',
    children: [],
  },
  {
    type: 'heading_3',
    blockId: '192c8dd7-9fdb-8020-8d4d-c751412c695d',
    parent: '### 定数の宣言と相性が良い',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-80a0-81f2-d2af4ebaee85',
    parent:
      '`as const`と併せてつかうことにより、型の安全性を保証しつつ、型推論の結果を保持することができます。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8029-9b02-d2c23a066666',
    parent:
      '例えば以下のような定数を宣言し、`export`したい場合は`as const`を使用し、型のwideringを防ぎ、readonlyとするのが一般的かと思います。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-80e4-94e8-dcbab9801fbd',
    parent:
      '```typescript\n' +
      'export const ColorList = {\n' +
      "  red: '#000000',\n" +
      "  blue: '#000000',\n" +
      "  green: '#000000'\n" +
      '} as const\n' +
      '```',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-809a-ab9d-f1542b83d6b6',
    parent:
      'ここで`satisfies`を併せて使うことにより、加えて型の整合性も担保することができ、より安全な定数とすることができます。',
    children: [],
  },
  {
    type: 'code',
    blockId: '192c8dd7-9fdb-80c3-8697-c53358f30988',
    parent:
      '```typescript\n' +
      'export const ColorList = {\n' +
      "  red: '#000000',\n" +
      "  blue: '#000000',\n" +
      "  green: '#000000'\n" +
      '} as const satisfies { [key: string]: string }\n' +
      '```',
    children: [],
  },
  {
    type: 'heading_2',
    blockId: '192c8dd7-9fdb-801f-bbd7-d85ae2f379af',
    parent: '## さいごに',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-8005-b122-f06ebbde3e43',
    parent:
      '自分が確認した限りでは、`satisfies`を使うことによるトレードオフやデメリットのようなものは特に見当たりませんでした。型アノテーションと比較した際も、特段コード規約等に縛りがない限りは積極的に提案してよいものだと認識することができました。',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-80fd-bd8b-fec2600a74cf',
    parent: '今後は積極的に使っていこうと思います。',
    children: [],
  },
  {
    type: 'heading_2',
    blockId: '192c8dd7-9fdb-8039-bb57-fd26c0e72b3f',
    parent: '## 参考',
    children: [],
  },
  {
    type: 'paragraph',
    blockId: '192c8dd7-9fdb-804a-b679-cdddf5f394fb',
    parent:
      '[https://zenn.dev/tonkotsuboy_com/articles/typescript-as-const-satisfies](https://zenn.dev/tonkotsuboy_com/articles/typescript-as-const-satisfies)',
    children: [],
  },
] satisfies MdBlock[]
