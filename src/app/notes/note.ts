interface Step {
  step: string;
}

interface Keyword {
  keyword: string
}

export interface Note {
  id: number,
  title: string;
  content: {
    intro: string;
    steps?: string[]
  },
  keywords?: string[]
}