import * as React from 'react'

// import context
import { ContentfulContext } from '../components/contentDelivery'

// import interface
import { IPageContent } from '../interfaces/contentDelivery'

// import components
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc'


const DatenschutzPage: React.FunctionComponent = () => {

    // state hook for pageContent
    const [page, setPage] = React.useState<IPageContent>
        ({
            title:'Datenschutz',
            slug:null,
            content:null
        })

    // use context to get content from contentful
    const contentful = React.useContext(ContentfulContext)
    contentful.fetchPageContent('2JgkBgWgBRf4qlpOwFLxcL')
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

export default DatenschutzPage;