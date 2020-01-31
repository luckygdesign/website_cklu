// const contentful = require('contentful')
import { createClient , ContentfulClientApi } from 'contentful'

// import interfaces
import { Entry , EntryCollection } from 'contentful'
import * as I from '../../interfaces/contentDelivery'

const config = {
    space: 'aoglh7t49eu5',
    accessToken: 'W57H2oIuWAlbOrjyiBwAlxFb5zHpLk0tlRRSuUuHsuk'
};

export async function fetchNews(): Promise<I.INewsEntry[]> {
      
  return new Promise<I.INewsEntry[]>((resolve, reject) => {
      // get page content
    createClient({
      space: config.space,
      accessToken: config.accessToken
    }).getEntries({'content_type': 'news'})
      .then((response:EntryCollection<I.INewsEntry>) => {
        const feed: I.INewsEntry[] = []
        response.items.forEach(article => feed.push(article.fields))
        resolve(feed);
      }) 
      .catch(err => {
        console.log(err)
        reject()
      })
  });
}

export async function fetchEvents(): Promise<I.IEventsEntry[]> {
      
  return new Promise<I.IEventsEntry[]>((resolve, reject) => {
      // get page content
    createClient({
      space: config.space,
      accessToken: config.accessToken
    }).getEntries({'content_type': 'events'})
      .then((response:EntryCollection<I.IEventsEntry>) => {
        const feed: I.IEventsEntry[] = []
        response.items.forEach(article => feed.push(article.fields))
        resolve(feed);
      }) 
      .catch(err => {
        console.log(err)
        reject()
      })
  });
}

export async function fetchProjects(): Promise<I.IProjectEntry[]> {
      
  return new Promise<I.IProjectEntry[]>((resolve, reject) => {
      // get page content
    createClient({
      space: config.space,
      accessToken: config.accessToken
    }).getEntries({'content_type': 'project'})
      .then((response:EntryCollection<I.IProjectEntry>) => {
        const feed: I.IProjectEntry[] = []
        response.items.forEach(article => feed.push(article.fields))
        resolve(feed);
      }) 
      .catch(err => {
        console.log(err)
        reject()
      })
  });
}

export async function fetchNewsArticle(entrySlug: string) : Promise<I.INewsEntry> {
      
  return new Promise<I.INewsEntry>((resolve, reject) => {
      // get page content
      createClient({
        space: config.space,
        accessToken: config.accessToken
      }).getEntries({
        'content_type': 'news',
        'fields.slug[in]': entrySlug
      })
      .then((response:EntryCollection<I.INewsEntry>) => {
        resolve(response.items[0].fields);
      }) 
      .catch(err => {
        console.log(err)
        reject()
      })
  });
}

export async function fetchPageContent(entryId: string) : Promise<I.IPageContent> {
      
  return new Promise<I.IPageContent>((resolve, reject) => {
      // get page content
      createClient({
        space: config.space,
        accessToken: config.accessToken
      }).getEntry(entryId)
      .then((response:Entry<I.IPageContent>) => {
        resolve(response.fields);
      }) 
      .catch(err => {
        console.log(err)
        reject()
      })
  });
}