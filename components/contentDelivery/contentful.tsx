// const contentful = require('contentful')
import { createClient , ContentfulClientApi } from 'contentful'

// import interfaces
import { Entry , EntryCollection } from 'contentful'
import * as I from '../../interfaces/contentDelivery'

const config = {
    space: 'aoglh7t49eu5',
    accessToken: 'W57H2oIuWAlbOrjyiBwAlxFb5zHpLk0tlRRSuUuHsuk'
};

class Contentful {

  client: ContentfulClientApi;
  news: I.INewsEntry[];
  events: I.IEventsEntry[];
  gebets: I.IGebetsEntry[];

  constructor() {
    this.client = createClient({
      space: config.space,
      accessToken: config.accessToken
    });

    this.news = [];
    this.events = [];
    this.gebets = [];

  }

  getNewsFeed = async function() : Promise<I.INewsEntry[]> {
    
    return new Promise<I.INewsEntry[]>((resolve, reject) => {

      if (this.news.length > 0 ) {
        resolve(this.news)
      } else {
        // get page content
        this.client
        .getEntries({'content_type': 'news'})
        .then((response:EntryCollection<I.INewsEntry>) => {
          const feed: I.INewsEntry[] = []
          response.items.forEach(article => feed.push(article.fields))
          this.news = feed;
          resolve(feed);
        }) 
        .catch(err => {
          console.log(err)
          reject()
        })
      }  
    });  
  }

  fetchPageContent = async function(entryId: string) : Promise<I.IPageContent> {
      
    return new Promise<I.IPageContent>((resolve, reject) => {
        // get page content
      this.client
        .getEntry(entryId)
        .then((response:Entry<I.IPageContent>) => {
          resolve(response.fields);
        }) 
        .catch(err => {
          console.log(err)
          reject()
        })
    });
  }

  // TODO: combine fetch Functions to one: pass type

  fetchEvents = async function() : Promise<I.IEventsEntry[]> {
      
    return new Promise<I.IEventsEntry[]>((resolve, reject) => {
        // get page content
      this.client
        .getEntries({'content_type': 'events'})
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

  fetchNews = async function() : Promise<I.INewsEntry[]> {
      
    return new Promise<I.INewsEntry[]>((resolve, reject) => {
        // get page content
      this.client
        .getEntries({'content_type': 'news'})
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

  fetchGebets = async function() : Promise<I.IGebetsEntry[]> {
      
    return new Promise<I.IGebetsEntry[]>((resolve, reject) => {
        // get page content
      this.client
        .getEntries({'content_type': 'gebetsanliegen'})
        .then((response:EntryCollection<I.IGebetsEntry>) => {
          const feed: I.IGebetsEntry[] = []
          response.items.forEach(article => feed.push(article.fields))
          resolve(feed);
        }) 
        .catch(err => {
          console.log(err)
          reject()
        })
    });
  }
  

}

export default Contentful;