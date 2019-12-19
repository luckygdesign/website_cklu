import * as React from 'react'
import { NextPage, NextPageContext } from 'next'

// import context and interface
import CF from '../components/contentDelivery'
import { IPageContent } from '../interfaces/contentDelivery'

// import components
import Layout from '../components/Layout'
import { ParseJSON } from '../components/Misc'

interface IProps {
    article: IPageContent,
}

const DatenschutzPage: NextPage<IProps> = props => {

    const page: IPageContent = props.article
    // state hook for pageContent

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

DatenschutzPage.getInitialProps = async (ctx: NextPageContext) => {

    // get article
    const article: IPageContent = await CF.fetchPageContent('2JgkBgWgBRf4qlpOwFLxcL')
    return {article}

}

export default DatenschutzPage;