/* eslint-disable @next/next/no-sync-scripts */
import Document, {Html, Head, Main, NextScript, DocumentContext, DocumentInitialProps} from "next/document";

const KAKAOMAP_KEY = process.env.NEXT_PUBLIC_KAKAOMAP_API_KEY

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        return{ ... initialProps}
    }
    render(){
        return(
            <Html>
                <Head/>
                <meta charSet="utf-8"></meta>
                <script src="https://accounts.google.com/gsi/client" async defer></script>
                <meta
                    name="viewport"
                    content="width=device-width, user-scalable=no,
                    initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0"></meta>
                <meta httpEquiv="X-UA-Compatible" content="ie=edge"/>
                <body>
                    <Main/>
                    <NextScript/>
                    <script
                        type="text/javascript"
                        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${KAKAOMAP_KEY}&libraries=services,clusterer,drawing`}></script>
                </body>
            </Html>
        )
    }
}
export default MyDocument