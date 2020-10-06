interface Step {
  step: string;
}

interface Keyword {
  keyword: string
}

export interface Note {
  title: string;
  content: {
    intro: string;
    steps?: string[]
  },
  keywords?: string[]
}