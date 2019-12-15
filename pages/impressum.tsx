import * as React from 'react'
import Layout from '../components/Layout'
import { ContentfulContext } from '../components/contentDelivery'

import { IPageContent } from '../interfaces/contentDelivery'

import { ParseJSON } from '../components/Misc'


const AboutPage: React.FunctionComponent = () => {

    // state hook for pageContent
    const [page, setPage] = React.useState<IPageContent>
        ({
            title:'Impressum',
            slug:null,
            content:null
        })

    // use context to get content from contentful
    const contentful = React.useContext(ContentfulContext)
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

export default AboutPage