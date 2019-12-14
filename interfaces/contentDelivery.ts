
export type INewsEntry = {
  title: string,
  slug: string,
  heroimage: Object,
  summary: string,
  content: Object,
  publishDate: string
}

export type IEventsEntry = {
  title: string,
  slug: string,
  location: string,
  startDate: object,
  description: object,
  address: string,
  contactName: string,
  contactPhone: string,
  contactEmail: string
}

export type IGebetsEntry = {
  title: string,
  slug: string,
  location: string,
  startDate: string,
  endDate: string,
  description: string
}

export type IPageContent = {
  title: string,
  slug: string,
  content: Object
}