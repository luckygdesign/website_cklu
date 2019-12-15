import * as React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'
import Contentful , { withContentful } from '../components/contentDelivery'
import { IPageContent } from '../interfaces/contentDelivery'

import { ParseJSON } from '../components/Misc'


interface IProps {
    contentful: Contentful
  }
  
interface IState {
    pageContent: IPageContent
}


class  AboutPage extends React.Component<IProps, IState> {
    constructor(props) {
        super(props)
        this.state = {
            pageContent: {
                title: '',
                slug: '',
                content: null
            }
        }
        this.getInitialProps();
    }

    getInitialProps = async function() {

        console.log(this)
        this.props.contentful.fetchPageContent('73MfkJzLwvzK4RNJq8NTkE')
            .then(response => {this.setState({pageContent: response})})
    }

    render() {

        const pageContent = this.state.pageContent;

        return (
            <Layout title={pageContent.title}>
                <div id="Content" className="Container">

                    <section id="Legal">

                        <h1>{pageContent.title}</h1>
                        
                        {pageContent.content ? (
                            <ParseJSON textjson={pageContent.content} />
                        ) : null}
                    

                    </section>
                </div> 
            </Layout>
        )
    }
    
 
}



export default withContentful(AboutPage)