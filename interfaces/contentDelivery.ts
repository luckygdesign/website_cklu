
export type Image = {
  fields: {
    file: {
      contentType: string,
      details: object,
      fileName: string,
      url: string
    },
    title: string
  }
}

export type INewsEntry = {
  title: string,
  slug: string,
  heroImage?: Image,
  summary?: string,
  content?: Object,
  publishDate?: string,
  type?: string
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

export type IProjectEntry = {
  title: string,
  slug: string,
  heroImage: object,
  description: object,
  order: number
}

export type IPageContent = {
  title: string,
  slug: string,
  content: Object
}