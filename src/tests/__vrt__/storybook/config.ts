import { readFileSync } from 'fs'
import { resolve } from 'path'

type StoryEntry = {
  type: 'story' | 'docs'
  id: string
  title: string
  name: string
  importPath?: string
}

type StoryJson = {
  entries: Record<string, StoryEntry>
  v: number
}

const storiesJsonPath = resolve(process.cwd(), 'storybook-static', 'index.json')
const stories: StoryJson = JSON.parse(readFileSync(storiesJsonPath, 'utf-8'))

export const storyInfos = Object.values(stories.entries)
  .filter((entry) => entry.type === 'story')
  .map((entry) => ({
    id: entry.id,
    url: `http://localhost:8080/iframe.html?id=${entry.id}`,
    title: entry.title,
    name: entry.name,
  }))
