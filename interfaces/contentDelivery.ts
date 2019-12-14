
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
  startDate: Object,
  description: Object,
  address: string,
  contactName: string,
  contactPhone: string,
  contactEmail: string
}

export type IPageContent = {
  title: string,
  slug: string,
  content: Object
}