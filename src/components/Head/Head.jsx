import React from 'react'

function Head(props) {
    return (
        <>
            <head>
                {/* <link rel="stylesheet" href="css/reset.css" /> */}
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Mulish:wght@200&display=swap"
                    rel="stylesheet"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
                {/* <link rel="stylesheet" href="./src/common_scss/theme.scss" /> */}

                <title>{props.title}</title>
            </head>
        </>
    )
}

export default Head