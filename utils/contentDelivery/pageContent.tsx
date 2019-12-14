
// import Interfaces
import { Entry } from 'contentful';
import { IPageContent } from '../../interfaces/contentDelivery';


async function apiFetchPageContent(entryId: string, contentfulClient) : Promise<IPageContent> {
      
  return new Promise<IPageContent>((resolve, reject) => {
      // get page content
    contentfulClient
    .getEntry(entryId)
    .then((response:Entry<IPageContent>) => {
      console.log(response)
      resolve(response.fields);
    }) 
    .catch(err => {
      console.log(err)
      reject({title: '', slug: '', content: null})
    })
  });
}

export default apiFetchPageContent; 