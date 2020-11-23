import React from 'react'
import Helmet from "react-helmet"
 
export default (props) => (
    <Helmet
        htmlAttributes={{
            lang: 'ja',
        }}
        title={ props.title }
        meta={[
            {
                name: 'description',
                content: props.description || 'PORTFOLIO SITE'
            }
        ]}   
    />
)