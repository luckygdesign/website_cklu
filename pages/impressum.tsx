import * as React from 'react'

// import context and interface
import Contentful , { ContentfulContext } from '../components/contentDelivery'
import { IPageContent } from '../interfaces/contentDelivery'

// import components
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc'


const ImpressumPage: React.FunctionComponent = () => {

    // state hook for pageContent
    const [page, setPage] = React.useState<IPageContent>
        ({
            title:'Impressum',
            slug:null,
            content:null
        })

    // use context to get content from contentful
    const contentful: Contentful = React.useContext(ContentfulContext)
    contentful.fetchPageContent('73MfkJzLwvzK4RNJq8NTkE')
        .then(response => {setPage(response)})

    return (
        <Layout title={page.title}>
            <div id="Content" className="Container">
                <section id="Legal">

                    <h1>{page.title}</h1>
                    {page.content ? (
                        <ParseJSON textjson={page.content} />
                    ) : null}
                
                </section>
            </div> 
        </Layout>
    )
}

export default ImpressumPage;